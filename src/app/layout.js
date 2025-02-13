import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
