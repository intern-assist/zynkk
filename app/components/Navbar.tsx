"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import TransitionLink from "./TransitionLink";
import StaggeredMenu from "./StaggeredMenu";

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'Internships', ariaLabel: 'View internships', link: '/internships' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'FAQ', ariaLabel: 'FAQ', link: '/faq' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  {
    label: 'Twitter',
    link: 'https://twitter.com',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    label: 'GitHub',
    link: 'https://github.com',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    )
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const lastScrollYRef = useRef(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Reset to light theme on route change, as other pages default to light background
    setIsDarkTheme(false);
  }, [pathname]);

  useEffect(() => {
    const handleThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsDarkTheme(customEvent.detail === 'dark');
    };
    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          setIsScrolled((prev) => {
            const next = currentScrollY > 50;
            return prev !== next ? next : prev;
          });

          const diff = currentScrollY - lastScrollYRef.current;

          if (diff > 10 && currentScrollY > 50) {
            setScrollDirection((prev) => prev !== "down" ? "down" : prev);
            lastScrollYRef.current = currentScrollY;
          } else if (diff < -20) {
            setScrollDirection((prev) => prev !== "up" ? "up" : prev);
            lastScrollYRef.current = currentScrollY;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setIsScrolled(window.scrollY > 50);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Derived state for text color
  const isWhiteText = isDarkTheme && !isMobileMenuOpen;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-4 transition-transform duration-300 ${isScrolled && scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}>
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        } bg-transparent`}
      />

      <div className={`relative w-full px-6 md:px-8 flex items-center justify-between transition-colors duration-500 ${isWhiteText ? 'text-white' : 'text-slate-900'}`}>
        <TransitionLink href="/" className="flex items-center gap-0.5 cursor-pointer select-none z-50">
          <svg
            className="w-9 h-9 transition-colors duration-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <polygon points="12,8 17,10 13,11" />
            <polygon points="6,14 13,11 12,8" />
            <polygon points="13,11 9,2 6,14" />
            <polygon points="12,8 15,3 13,11" opacity="0.65" />
            <polygon points="6,14 2,16 5,13" />
          </svg>
          <span className="text-xl font-bold tracking-tight transition-colors duration-500">
            Zynkk
          </span>
        </TransitionLink>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-8 text-[14px] font-bold">
          <TransitionLink href="/services" className={`transition-opacity hover:opacity-70`}>Services</TransitionLink>
          <TransitionLink href="/internships" className={`transition-opacity hover:opacity-70`}>Internships</TransitionLink>
          <TransitionLink href="/about" className={`transition-opacity hover:opacity-70`}>About Us</TransitionLink>
          <TransitionLink href="/faq" className={`transition-opacity hover:opacity-70`}>FAQ</TransitionLink>
        </nav>

        <div className="flex items-center gap-3 z-50">
          <TransitionLink
            href="/contact"
            className={`hidden md:inline-flex text-[13px] font-bold px-6 py-2.5 rounded-full transition-colors duration-500 shadow-sm ${
              isWhiteText ? 'bg-white text-black hover:bg-gray-200' : 'bg-slate-900 text-white hover:bg-[#0C2A92]'
            }`}
          >
            Contact Us
          </TransitionLink>

          {/* Mobile Staggered Menu */}
          <div className="lg:hidden">
            <StaggeredMenu
              position="right"
              items={menuItems}
              socialItems={socialItems}
              displaySocials={true}
              displayItemNumbering={false}
              menuButtonColor={isWhiteText ? "#ffffff" : "#0f172a"}
              openMenuButtonColor={isWhiteText ? "#ffffff" : "#0f172a"}
              onMenuOpen={() => setIsMobileMenuOpen(true)}
              onMenuClose={() => setIsMobileMenuOpen(false)}
              changeMenuColorOnOpen={false}
              colors={['#e2e8f0', '#f8fafc']}
              accentColor="#0C2A92"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
