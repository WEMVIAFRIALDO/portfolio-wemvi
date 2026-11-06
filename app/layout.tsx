import type { Metadata } from "next";
import { Antic, Fira_Code, Yellowtail } from "next/font/google";
import { MotionProvider } from "@/components/motion-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

const antic = Antic({
  variable: "--font-antic",
  weight: "400",
  subsets: ["latin"],
});

const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wemvi Afrialdo — Mobile & Web Developer",
  description:
    "Mobile & Web Developer — Pendidikan Teknologi Informasi, Universitas Lampung.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${firaCode.variable} ${antic.variable} ${yellowtail.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <MotionProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </MotionProvider>
      </body>
    </html>
  );
}
