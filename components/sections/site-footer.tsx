import { contactLinks } from "@/components/sections/contact-links";
import { HashLink } from "@/components/ui/hash-link";
import { profile } from "@/data/portfolio";
import { footerNavItems } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          © 2026 {profile.name}
        </p>

        <nav aria-label="Navigasi footer">
          <ul className="flex flex-wrap gap-x-5">
            {footerNavItems.map((item) => (
              <li key={item.href}>
                <HashLink
                  href={item.href}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm font-display text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  {item.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="-ml-2.5 flex gap-1 md:ml-0">
          {contactLinks.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="inline-flex size-11 items-center justify-center rounded-sm text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                <Icon aria-hidden className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
