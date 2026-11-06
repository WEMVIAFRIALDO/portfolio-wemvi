export const HOME_HREF = "/#home";

export const navItems = [
  { label: "HOME", href: HOME_HREF },
  { label: "ABOUT", href: "/#about" },
  { label: "SKILLS", href: "/#skills" },
  { label: "PROJECTS", href: "/#projects" },
  { label: "EXPERIENCE", href: "/#experience" },
  { label: "EDUCATION", href: "/#education" },
  { label: "CONTACT", href: "/#contact" },
];

export const footerNavItems = navItems.filter((item) =>
  ["/#about", "/#skills", "/#projects", "/#contact"].includes(item.href),
);
