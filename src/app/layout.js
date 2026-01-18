import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tom do Corte",
  description: "Barbearia clássica com estilo moderno em Vila Nova de Famalicão",

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Tom do Corte",
    description: "Barbearia clássica com estilo moderno em Vila Nova de Famalicão",
    type: "website",
    images: ["/images/logo1.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
