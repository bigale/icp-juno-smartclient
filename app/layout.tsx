import type { Metadata } from "next";
import "./globals.css";
import SmartClientLoader from "./components/SmartClientLoader";

export const metadata: Metadata = {
  title: "SmartClient React CRUD",
  description: "A CRUD application using SmartClient React and Juno",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmartClientLoader>{children}</SmartClientLoader>
      </body>
    </html>
  );
}
