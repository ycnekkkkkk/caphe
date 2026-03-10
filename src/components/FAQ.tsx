"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const faqs = [
  { q: "Cà phê của công ty được sản xuất từ loại hạt nào?", a: "Sản phẩm được chế biến từ hạt cà phê Robusta và Arabica chọn lọc, thu mua từ các vùng trồng cà phê đạt tiêu chuẩn tại Tây Nguyên - Việt Nam." },
  { q: "Cà phê hòa tan có chứa phụ gia không?", a: "Sản phẩm được sản xuất theo tiêu chuẩn an toàn thực phẩm, không sử dụng chất bảo quản độc hại và được kiểm soát nghiêm ngặt trong toàn bộ quá trình sản xuất." },
  { q: "Hàm lượng caffeine trong cà phê là bao nhiêu?", a: "Tùy từng sản phẩm, hàm lượng caffeine trung bình khoảng 60–90 mg trong mỗi khẩu phần." },
  { q: "Cà phê có thể bảo quản trong bao lâu?", a: "Thời hạn sử dụng thường 12–24 tháng, tùy theo từng sản phẩm và điều kiện bảo quản." },
  { q: "Cách bảo quản cà phê tốt nhất là gì?", a: "Nên bảo quản ở nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và đóng kín bao bì sau khi mở." },
  { q: "Sản phẩm có thể truy xuất nguồn gốc không?", a: "Có. Mỗi sản phẩm đều có QR code để truy xuất nguồn gốc lô sản xuất." },
  { q: "Sản phẩm có đạt chứng nhận an toàn thực phẩm không?", a: "Sản phẩm được sản xuất theo các hệ thống quản lý như ISO 22000:2018, HACCP, FSSC 22000 và các quy định của cơ quan quản lý thực phẩm." },
  { q: "Cà phê hòa tan có tốt cho sức khỏe không?", a: "Khi sử dụng với lượng hợp lý, cà phê có thể giúp tăng sự tỉnh táo, cải thiện tập trung và cung cấp chất chống oxy hóa." },
  { q: "Công ty có xuất khẩu sản phẩm không?", a: "Sản phẩm được sản xuất theo tiêu chuẩn quốc tế và phân phối trong nước cũng như xuất khẩu sang nhiều thị trường." },
  { q: "Tôi có thể mua sản phẩm ở đâu?", a: "Khách hàng có thể mua tại hệ thống đại lý, siêu thị hoặc website chính thức của công ty." },
];

export default function FAQ() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeader
          label="FAQ"
          title="Câu hỏi thường gặp"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl bg-[#faf8f5] border border-amber-900/5 overflow-hidden"
            >
              <button
                onClick={() => setModalIndex(i)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-amber-50/30 transition-colors"
              >
                <span className="font-medium text-[#2c2419] text-sm pr-4">{faq.q}</span>
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#8b5a2b]/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#8b5a2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal overlay */}
      {modalIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setModalIndex(null)}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />
          <div
            className="relative bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalIndex(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#8b5a2b]/10 flex items-center justify-center hover:bg-[#8b5a2b]/20 transition-colors text-[#8b5a2b]"
              aria-label="Đóng"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="font-semibold text-[#2c2419] text-base mb-4 pr-10">
              {faqs[modalIndex].q}
            </h3>
            <p className="text-[#5d4e37]/90 text-sm leading-relaxed">
              {faqs[modalIndex].a}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
