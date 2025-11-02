import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex justify-center items-center">
      <body>{children}</body>
    </html>
  );
}
