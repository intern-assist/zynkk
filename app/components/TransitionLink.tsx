"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";

interface TransitionLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  href: string;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string | false;
}

export default function TransitionLink({
  href,
  children,
  className,
  target,
  onClick,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleTransition = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's an external link or opens in a new tab, don't intercept
    if (target === "_blank" || href.startsWith("http")) {
      if (onClick) onClick(e);
      return;
    }

    // Always intercept internal routing
    e.preventDefault();

    if (onClick) {
      onClick(e);
    }

    // If we are already on the target path, we could just scroll to top
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const columns = document.querySelectorAll(".grid-column");
    if (!columns.length) {
      router.push(href);
      return;
    }

    // Set flag so template.tsx knows a transition is happening
    sessionStorage.setItem('isTransitioning', 'true');

    // Disable pointer events on page during transition
    const overlay = document.getElementById("grid-transition-overlay");
    if (overlay) {
      overlay.style.pointerEvents = "auto";
    }

    // Play exit animation (Staggered Grid Drop)
    gsap.fromTo(
      columns,
      { y: "-100%" },
      {
        y: "0%",
        duration: 0.6,
        stagger: 0.06,
        ease: "power4.inOut",
        onComplete: () => {
          router.push(href);
        },
      }
    );
  };

  return (
    <a href={href} className={className} target={target} onClick={handleTransition} {...props}>
      {children}
    </a>
  );
}
