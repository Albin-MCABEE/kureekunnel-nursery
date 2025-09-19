import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kureekunnel Nursery",
  description: "git init",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
         <div className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6 z-50">
          <a href="https://wa.me/9020211841" target="_blank" rel="noopener noreferrer">
            <img src="./whatsapp-icon.png" alt="whatsapp-icon" className="size-16 md:size-24" />
          </a>
        </div>
        {children}
      </body>
    </html>
  );
}
