"use client";

import type { ComponentProps } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";

type HashLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

/**
 * Link ke section, misalnya "/#about".
 * Di halaman yang sama, scroll diserahkan ke Lenis supaya halus dan tidak bentrok
 * dengan lompatan bawaan browser atau Next.js. Ke halaman lain, Next.js yang menangani.
 */
export function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const lenis = useLenis();

  return (
    <Link
      href={href}
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;

        const url = new URL(href, window.location.href);
        if (!url.hash || url.pathname !== window.location.pathname) return;

        const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
        if (!target) return;

        event.preventDefault();
        if (lenis) lenis.scrollTo(target);
        else target.scrollIntoView();
        window.history.pushState(null, "", url.pathname + url.hash);
      }}
    />
  );
}
