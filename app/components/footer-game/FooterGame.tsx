"use client";

import { useEffect, useRef, useState } from "react";

// --- Game Configuration & Theme ---
const THEME = {
  player: "#06b6d4", // Zynkk Cyan
  obstacle: "#ef4444", // Zynkk Red/Error
  ground: "#334155", // Slate 700
  text: "#94a3b8", // Slate 400
  textHighlight: "#f8fafc", // Slate 50
};

const GRAVITY = 0.6;
const JUMP_FORCE = -10;
const INITIAL_SPEED = 5;
const SPAWN_RATE_MIN = 60; // frames
const SPAWN_RATE_MAX = 120; // frames

export default function FooterGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // React State for UI
  const [gameState, setGameState] = useState<"idle" | "playing" | "gameOver">("idle");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // Mutable Game State (avoids React re-renders)
  const engineRef = useRef({
    playerY: 0,
    playerVelocity: 0,
    groundY: 100,
    speed: INITIAL_SPEED,
    frameCount: 0,
    nextSpawn: 0,
    obstacles: [] as { x: number; y: number; width: number; height: number }[],
    score: 0,
    animationId: 0,
  });

  // Load best score on mount
  useEffect(() => {
    const saved = localStorage.getItem("zynkk-footer-game-best");
    if (saved) setBestScore(parseInt(saved, 10));
  }, []);

  // Main Draw Loop
  const render = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const state = engineRef.current;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Ground
    ctx.beginPath();
    ctx.moveTo(0, state.groundY);
    ctx.lineTo(canvas.width, state.groundY);
    ctx.strokeStyle = THEME.ground;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw Player
    ctx.fillStyle = THEME.player;
    ctx.shadowColor = THEME.player;
    ctx.shadowBlur = 10;
    ctx.fillRect(50, state.playerY - 20, 20, 20); // 20x20 square player
    ctx.shadowBlur = 0; // reset

    // Draw Obstacles
    ctx.fillStyle = THEME.obstacle;
    for (const obs of state.obstacles) {
      ctx.fillRect(obs.x, obs.y - obs.height, obs.width, obs.height);
    }
  };

  const updatePhysics = (canvasWidth: number) => {
    const state = engineRef.current;

    if (gameState !== "playing") return;

    // Player Physics
    state.playerVelocity += GRAVITY;
    state.playerY += state.playerVelocity;

    if (state.playerY >= state.groundY) {
      state.playerY = state.groundY;
      state.playerVelocity = 0;
    }

    // Move Obstacles
    for (let i = state.obstacles.length - 1; i >= 0; i--) {
      const obs = state.obstacles[i];
      obs.x -= state.speed;

      // Collision Detection (AABB)
      const px = 50;
      const py = state.playerY - 20;
      const pw = 20;
      const ph = 20;

      if (
        px < obs.x + obs.width &&
        px + pw > obs.x &&
        py < obs.y &&
        py + ph > obs.y - obs.height
      ) {
        gameOver();
        return; // Stop updating
      }

      // Remove off-screen obstacles
      if (obs.x + obs.width < 0) {
        state.obstacles.splice(i, 1);
      }
    }

    // Spawn Obstacles
    state.frameCount++;
    if (state.frameCount >= state.nextSpawn) {
      // Random obstacle (short/wide or tall/thin)
      const isTall = Math.random() > 0.5;
      state.obstacles.push({
        x: canvasWidth,
        y: state.groundY,
        width: isTall ? 15 : 25,
        height: isTall ? 35 : 15,
      });

      state.frameCount = 0;
      // Faster spawn rate as game progresses
      const difficultyFactor = Math.max(0, state.score / 1000);
      state.nextSpawn = Math.floor(
        Math.random() * (SPAWN_RATE_MAX - SPAWN_RATE_MIN) + SPAWN_RATE_MIN - (difficultyFactor * 20)
      );
      state.nextSpawn = Math.max(30, state.nextSpawn); // hard limit minimum
    }

    // Score & Speed scaling
    state.score += 1;
    if (state.score % 60 === 0) {
      setScore(Math.floor(state.score / 10)); // Update react state 1x per second
      state.speed += 0.1; // Slowly increase speed
    }
  };

  const loop = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    updatePhysics(canvas.width);
    render(ctx, canvas);

    engineRef.current.animationId = requestAnimationFrame(loop);
  };

  const jump = () => {
    if (gameState === "idle" || gameState === "gameOver") {
      startGame();
      return;
    }

    const state = engineRef.current;
    // Only jump if on or very close to ground
    if (state.playerY >= state.groundY - 1) {
      state.playerVelocity = JUMP_FORCE;
    }
  };

  const startGame = () => {
    const state = engineRef.current;
    state.playerY = state.groundY;
    state.playerVelocity = 0;
    state.obstacles = [];
    state.score = 0;
    state.speed = INITIAL_SPEED;
    state.frameCount = 0;
    state.nextSpawn = 60;
    
    setScore(0);
    setGameState("playing");
  };

  const gameOver = () => {
    const finalScore = Math.floor(engineRef.current.score / 10);
    setScore(finalScore);
    setGameState("gameOver");
    
    setBestScore((prev) => {
      const newBest = Math.max(prev, finalScore);
      localStorage.setItem("zynkk-footer-game-best", newBest.toString());
      return newBest;
    });
  };

  // Initialization & Window Resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use a fixed internal resolution stretched by CSS
    engineRef.current.groundY = canvas.height - 20;
    engineRef.current.playerY = engineRef.current.groundY;

    engineRef.current.animationId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(engineRef.current.animationId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState]);

  // Keyboard Controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        if (gameState === "playing") {
          e.preventDefault(); // Prevent page scroll
        }
        jump();
      }
    };
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState]);

  return (
    <div 
      className="relative w-full h-[120px] cursor-pointer group"
      onClick={jump}
      aria-label="Interactive Zynkk footer game. Click or press space to jump."
    >
      <canvas 
        ref={canvasRef}
        width={1000}
        height={120}
        className="w-full h-full block opacity-70 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      {/* UI Overlay */}
      <div className="absolute top-2 right-4 flex gap-6 font-mono text-[11px] pointer-events-none select-none">
        {bestScore > 0 && (
          <div className="flex gap-2">
            <span className="text-slate-500">HI</span>
            <span className="text-slate-300">{bestScore.toString().padStart(5, '0')}</span>
          </div>
        )}
        <div className="flex gap-2">
          <span className="text-slate-500">SCORE</span>
          <span className={gameState === "playing" ? "text-cyan-400" : "text-slate-300"}>
            {score.toString().padStart(5, '0')}
          </span>
        </div>
      </div>

      {gameState === "idle" && (
        <div className="absolute bottom-6 left-24 font-mono text-[10px] text-cyan-500/50 uppercase tracking-widest pointer-events-none animate-pulse">
          Press Space to Jump
        </div>
      )}

      {gameState === "gameOver" && (
        <div className="absolute inset-0 flex items-center justify-center font-mono pointer-events-none">
          <div className="bg-slate-900/80 px-4 py-2 rounded border border-slate-800 text-center">
            <div className="text-red-400 text-sm mb-1">SYSTEM HALTED</div>
            <div className="text-slate-400 text-[10px]">Press Space to Retry</div>
          </div>
        </div>
      )}
    </div>
  );
}
