import "./globals.css";

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
