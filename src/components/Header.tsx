"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#san-pham", label: "Sản phẩm" },
  { href: "#cong-bo", label: "Công bố" },
  { href: "#quy-trinh", label: "Quy trình" },
  { href: "#chung-nhan", label: "Chứng nhận" },
  { href: "#faq", label: "FAQ" },
  { href: "#lien-he", label: "Liên hệ" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-900/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-14 lg:h-16">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Cà Phê Sấy Lạnh Việt Nam"
            width={36}
            height={36}
            className="h-8 w-8 lg:h-9 lg:w-9 object-contain"
          />
          <span className="font-serif text-lg font-semibold text-[#5d4e37] lg:text-xl">
            Cà Phê Sấy Lạnh
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#5d4e37]/80 hover:text-[#8b5a2b] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[#5d4e37]"
          aria-label="Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-amber-900/5 py-4 px-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-[#5d4e37] font-medium hover:text-[#8b5a2b]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
