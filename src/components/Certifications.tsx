import Image from "next/image";
import SectionHeader from "./SectionHeader";

const certs = [
  { name: "HACCP", desc: "Phân tích mối nguy và điểm kiểm soát tới hạn" },
  { name: "ISO 22000:2018", desc: "Hệ thống quản lý an toàn thực phẩm" },
  { name: "ISO 9001:2015", desc: "Hệ thống quản lý chất lượng" },
  { name: "FSSC 22000", desc: "Chứng nhận an toàn thực phẩm quốc tế" },
];

const standards = [
  "TCVN 6602:2013 – Cà phê nhân – Hướng dẫn bảo quản và vận chuyển",
  "TCVN 4193:2014 – Cà phê nhân",
  "TCVN 12459:2018 - Cà phê hòa tan nguyên chất",
  "QCVN 8-1:2011/BYT - Giới hạn ô nhiễm độc tố vi nấm",
  "QCVN 8-2:2011/BYT - Giới hạn ô nhiễm kim loại nặng",
  "GMP - Thực hành sản xuất tốt",
  "GHP - Thực hành vệ sinh tốt",
];

export default function Certifications() {
  return (
    <section id="chung-nhan" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeader
          label="Chất lượng"
          title="Chứng nhận & Tiêu chuẩn"
          description="Chúng tôi áp dụng các hệ thống quản lý chất lượng và an toàn thực phẩm hàng đầu"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {certs.map((c, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-[#faf8f5] border border-amber-900/5 text-center overflow-hidden"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-[#8b5a2b]/10 flex items-center justify-center shrink-0">
                <span className="text-[#8b5a2b] text-lg">✓</span>
              </div>
              <h3 className="font-semibold text-[#2c2419] text-sm mb-1 break-words px-1">{c.name}</h3>
              <p className="text-xs text-[#5d4e37]/80 leading-relaxed break-words">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg ring-1 ring-amber-900/5 bg-white">
            <Image
              src="/doc-images/image11.jpeg"
              alt="Cà phê Tây Nguyên - Chứng nhận"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          {[
            { src: "/doc-images/image6.1.png", alt: "GLOBALG.A.P. - Thực hành nông nghiệp tốt toàn cầu" },
            { src: "/doc-images/image7.1.png", alt: "VietGAP - Thực hành nông nghiệp tốt Việt Nam" },
            { src: "/doc-images/image8.1.png", alt: "4C - Common Code for the Coffee Community" },
          ].map((img, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md ring-1 ring-amber-900/5 bg-white p-3">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-[#faf8f5] border border-amber-900/5 p-6 lg:p-8">
          <h3 className="font-serif text-base font-semibold text-[#2c2419] mb-4">
            Tiêu chuẩn áp dụng
          </h3>
          <ul className="space-y-2">
            {standards.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#8b5a2b]/20 flex items-center justify-center mt-0.5">
                  <span className="w-1 h-1 rounded-full bg-[#8b5a2b]" />
                </span>
                <span className="text-[#5d4e37]/90">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
