import { HomepageMenu } from "@/components/common/Menus";
import "./globals.css";
import { Inter } from "next/font/google";
import { HomepageFooter } from "@/components/common/Footers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MVP",
  description: "BYS MVP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomepageMenu />
        {children}
        <HomepageFooter />
      </body>
    </html>
  );
}
