import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import FallingCoffeeBeans from "@/components/FallingCoffeeBeans";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cà Phê Hòa Tan Sấy Lạnh | 100% Cà Phê Nguyên Chất Tây Nguyên",
  description:
    "Cà phê hòa tan sấy lạnh cao cấp từ Tây Nguyên. Công nghệ freeze drying giữ trọn hương vị tự nhiên. Truy xuất nguồn gốc qua QR code.",
  keywords: [
    "cà phê hòa tan sấy lạnh",
    "freeze dried coffee vietnam",
    "instant coffee freeze dried",
    "cà phê hòa tan nguyên chất",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased relative`}
      >
        <FallingCoffeeBeans />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
