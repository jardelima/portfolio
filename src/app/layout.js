import ReduxProvider from "./components/Provider/ReduxProvider";
import "./globals.css";

export const metadata = {
  title: "Dev Jardel",
  description: "Meu portfólio",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body
          className={`antialiased`}
        >
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
