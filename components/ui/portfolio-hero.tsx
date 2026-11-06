"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { BlurText } from "@/components/ui/blur-text";
import { HashLink } from "@/components/ui/hash-link";
import { profile } from "@/data/portfolio";
import { HOME_HREF, navItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/** Item menu untuk section yang sedang dilihat; kosong di luar halaman utama. */
function findActiveHref() {
  let active: string | null = null;
  for (const item of navItems) {
    const section = document.getElementById(item.href.slice(2));
    if (section?.checkVisibility() && section.getBoundingClientRect().top <= 120) {
      active = item.href;
    }
  }
  return active;
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const menuRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        !menuRef.current?.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        setIsMenuOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 px-4 py-4 backdrop-blur-md sm:px-6">
      <div className="mx-auto grid max-w-screen-2xl grid-cols-[1fr_auto_1fr] items-center">
        <div className="relative justify-self-start">
          <button
            ref={buttonRef}
            type="button"
            className="pointer-events-auto cursor-pointer p-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
            onClick={() => {
              if (!isMenuOpen) setActiveHref(findActiveHref());
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? (
              <X className="size-8" strokeWidth={2} />
            ) : (
              <Menu className="size-8" strokeWidth={2} />
            )}
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                ref={menuRef}
                id="site-menu"
                aria-label="Navigasi utama"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="pointer-events-auto absolute top-full left-0 z-10 mt-2 w-60 rounded-lg border border-border bg-popover p-4 shadow-2xl sm:ml-4"
              >
                {navItems.map((item) => (
                  <HashLink
                    key={item.label}
                    href={item.href}
                    aria-current={item.href === activeHref ? "location" : undefined}
                    className={cn(
                      "block rounded-sm px-2 py-2 font-display text-lg font-bold tracking-tight transition-colors duration-300 hover:text-primary md:text-xl",
                      item.href === activeHref ? "text-primary" : "text-popover-foreground",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </HashLink>
                ))}
              </motion.nav>
            )}
          </AnimatePresence>
        </div>

        <HashLink
          href={HOME_HREF}
          aria-label="Wemvi Afrialdo, kembali ke atas"
          className="pointer-events-auto inline-flex min-h-11 items-center rounded-sm px-2 font-signature text-4xl text-foreground"
        >
          W
        </HashLink>
      </div>
    </header>
  );
}

const nameClass =
  "flex-nowrap justify-center whitespace-nowrap font-display font-bold tracking-tighter text-primary uppercase";

export function PortfolioHero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-background px-4 pt-20 pb-6 sm:justify-start md:pb-10"
    >
      <div className="flex w-full items-center justify-center sm:flex-1">
        <div className="relative flex flex-col items-center text-center text-hero sm:block">
          <h1>
            <BlurText text="WEMVI" delay={100} animateBy="letters" className={nameClass} />
            <BlurText text="AFRIALDO" delay={100} animateBy="letters" className={nameClass} />
          </h1>

          {/* HP: foto besar di atas nama. Mulai sm: menumpuk di tengah nama, ukurannya dalam em supaya mengikuti nama. */}
          <div className="order-first mb-6 sm:absolute sm:top-1/2 sm:left-1/2 sm:z-10 sm:mb-0 sm:-translate-x-1/2 sm:-translate-y-1/2">
            <div className="relative aspect-[0.58] w-[min(40vw,11rem)] overflow-hidden rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 sm:aspect-auto sm:h-[0.86em] sm:w-[0.5em]">
              <Image
                src={profile.photo}
                alt={`Foto ${profile.name}`}
                fill
                sizes="(min-width: 640px) 240px, 176px"
                loading="eager"
                fetchPriority="high"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <BlurText
        text="Mobile & Web Developer — Pendidikan Teknologi Informasi, Universitas Lampung"
        delay={60}
        animateBy="words"
        className="mt-8 max-w-[27em] justify-center text-center text-base sm:mt-0 text-muted-foreground transition-colors duration-300 hover:text-foreground sm:text-lg md:text-xl"
      />

      <HashLink
        href="/#about"
        aria-label="Gulir ke section Tentang Saya"
        className="mt-4 rounded-sm p-2 text-muted-foreground transition-colors duration-300 hover:text-foreground md:mt-6"
      >
        <ChevronDown className="size-7 md:size-8" />
      </HashLink>
    </section>
  );
}
