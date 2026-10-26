import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaskTracker",
  description: "A tiny task list built with Next.js + TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <span className="logo">✓</span>
          <span>TaskTracker</span>
        </header>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
