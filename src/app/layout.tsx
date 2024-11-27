import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";

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

const roboto = Roboto({
  // https://fonts.google.com/knowledge/glossary/subsetting
  subsets: ["latin"],
  variable: "--font-roboto",
  // weight: '400': A string for a single weight value - for the font Inter, the possible values are '100', '200', '300', '400', '500', '600', '700', '800', '900' or 'variable' where 'variable' is the default)
  // weight: '100 900': A string for the range between 100 and 900 for a variable font
  // weight: ['100','400','900']: An array of 3 possible values for a non variable font
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
