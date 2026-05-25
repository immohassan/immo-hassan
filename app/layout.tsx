import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "immohassan — Process Automation Engineer & Full Stack Developer",
  description:
    "I build AI-powered automation systems and scalable digital infrastructure. Turning manual operations into scalable systems so your business runs while you sleep.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-ink text-bone antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
