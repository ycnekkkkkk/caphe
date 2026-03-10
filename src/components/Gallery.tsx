"use client";

import Image from "next/image";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

const images = [
  { src: "/doc-images/image1.jpeg", alt: "Cà phê sấy lạnh - Hình ảnh 1" },
  { src: "/doc-images/image2.jpeg", alt: "Cà phê sấy lạnh - Hình ảnh 2" },
  { src: "/doc-images/image3.png", alt: "Cà phê sấy lạnh - Hình ảnh 3" },
  { src: "/doc-images/image4.png", alt: "Mẫu nhãn sản phẩm" },
  { src: "/doc-images/image5.png", alt: "Cà phê sấy lạnh - Hình ảnh 5" },
  { src: "/doc-images/image6.jpeg", alt: "Cà phê sấy lạnh - Hình ảnh 6" },
  { src: "/doc-images/image7.jpeg", alt: "Cà phê sấy lạnh - Hình ảnh 7" },
  { src: "/doc-images/image8.jpeg", alt: "Cà phê sấy lạnh - Hình ảnh 8" },
  { src: "/doc-images/image9.jpeg", alt: "Cà phê sấy lạnh - Hình ảnh 9" },
  { src: "/doc-images/image10.jpeg", alt: "Cà phê sấy lạnh - Hình ảnh 10" },
  { src: "/doc-images/image11.jpeg", alt: "Cà phê sấy lạnh - Hình ảnh 11" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="hinh-anh" className="section-padding bg-[#faf8f5]">
      <div className="container-narrow">
        <SectionHeader
          label="Hình ảnh"
          title="Mẫu nhãn & Hình ảnh từ tài liệu"
          description="Các hình ảnh trích xuất từ hồ sơ công bố sản phẩm và tài liệu giới thiệu"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(selected === i ? null : i)}
              className="relative aspect-square rounded-xl overflow-hidden bg-white border border-amber-900/5 shadow-sm hover:shadow-lg hover:ring-2 hover:ring-[#8b5a2b]/20 transition-all duration-300 group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </button>
          ))}
        </div>

        {selected !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl"
              onClick={() => setSelected(null)}
              aria-label="Đóng"
            >
              ✕
            </button>
            <div
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selected].src}
                alt={images[selected].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
