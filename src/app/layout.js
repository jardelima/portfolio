import "./globals.css";

export const metadata = {
  title: "Jardel Dev",
  description: "Meu portfólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
