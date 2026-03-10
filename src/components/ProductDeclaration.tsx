"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const orgInfo = [
  { label: "Tên tổ chức", value: "CÔNG TY TNHH CÀ PHÊ SẤY LẠNH VIỆT NAM" },
  { label: "Người đại diện theo pháp luật", value: "Nguyễn Văn A" },
  { label: "Địa chỉ", value: "Lô B2-15, Khu Công nghiệp Tân Bình, Phường Tây Thạnh, Quận Tân Phú, TP. Hồ Chí Minh" },
  { label: "Điện thoại", value: "(028) 7300 1234" },
  { label: "Fax", value: "028 152 374" },
  { label: "Email", value: "info@cafesaylanh.vn" },
  { label: "Mã số doanh nghiệp", value: "3601589741" },
  { label: "Giấy chứng nhận ATTP", value: "145/2026/ATTP - CNHCM" },
  { label: "Ngày cấp / Nơi cấp", value: "05 – 01 - 2026 / Chi cục An toàn vệ sinh thực phẩm - Sở Y tế TP. Hồ Chí Minh" },
];

const productInfo = [
  { label: "Tên sản phẩm", value: "Cà phê hòa tan sấy lạnh" },
  { label: "Thành phần", value: "100% Cà phê hòa tan sấy lạnh" },
  { label: "Hạn sử dụng", value: "24 tháng kể từ ngày sản xuất" },
  { label: "Quy cách", value: "2g/gói × 10 gói = 20g/hộp" },
  { label: "Chất liệu bao bì", value: "Bên trong túi nhôm, bên ngoài hộp giấy" },
];

const standards = [
  "TCVN 12459:2018: Cà phê hòa tan nguyên chất",
  "QCVN 8-1:2011/BYT: Quy chuẩn kỹ thuật quốc gia đối với giới hạn ô nhiễm độc tố vi nấm trong thực phẩm: Mục 2.5",
  "QCVN 8-2:2011/BYT: Quy chuẩn kỹ thuật quốc gia đối với giới hạn ô nhiễm kim loại nặng trong thực phẩm: Mục 1.10; 2.22; 3.28; 4.7; 6.9",
  "Nghị định số 43/2017/NĐ-CP của Chính phủ: Về nhãn hàng hóa",
];

export default function ProductDeclaration() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="cong-bo" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeader
          label="Công bố"
          title="Bảng công bố sản phẩm"
          description="Thông tin công bố hợp quy theo quy định pháp luật"
        />

        <div className="rounded-xl border border-amber-900/10 overflow-hidden bg-[#faf8f5]">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-amber-50/50 transition-colors"
          >
            <span className="font-semibold text-[#2c2419]">Bản công bố sản phẩm số 66/2026</span>
            <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#8b5a2b]/10 flex items-center justify-center transition-transform ${expanded ? "rotate-180" : ""}`}>
              <svg className="w-4 h-4 text-[#8b5a2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          {expanded && (
            <div className="border-t border-amber-900/10 p-4 sm:p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-[#2c2419] mb-3">Thông tin tổ chức (công bố hợp quy)</h4>
                <div className="space-y-2">
                  {orgInfo.map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:gap-4 text-sm">
                      <span className="text-[#5d4e37]/80 shrink-0 sm:w-48">{item.label}:</span>
                      <span className="text-[#2c2419] font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#2c2419] mb-3">Thông tin sản phẩm</h4>
                <div className="space-y-2">
                  {productInfo.map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:gap-4 text-sm">
                      <span className="text-[#5d4e37]/80 shrink-0 sm:w-40">{item.label}:</span>
                      <span className="text-[#2c2419] font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#2c2419] mb-3">III. Mẫu nhãn sản phẩm (Mẫu nhãn sản phẩm đính kèm)</h4>
                <div className="max-w-xl">
                  <div className="rounded-xl overflow-hidden shadow-md ring-1 ring-amber-900/5 bg-white">
                    <Image
                      src="/doc-images/image4.png"
                      alt="Mẫu nhãn sản phẩm"
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#2c2419] mb-3">IV. Yêu cầu về chất lượng và an toàn thực phẩm</h4>
                <ol className="space-y-2 text-sm text-[#5d4e37]/90 mb-4">
                  <li>1. Công bố phù hợp tiêu chuẩn cơ sở theo quy định Điều 23 Luật Chất lượng sản phẩm hàng hoá và các văn bản hướng dẫn.</li>
                  <li>2. Công bố đạt yêu cầu về an toàn thực phẩm theo:</li>
                </ol>
                <ul className="space-y-1 text-sm text-[#5d4e37]/90 mb-4 ml-4">
                  {standards.map((s, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#8b5a2b]">−</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-[#5d4e37]/90 leading-relaxed mb-4">
                  Chúng tôi xin cam kết thực hiện đầy đủ các quy định của pháp luật về an toàn thực phẩm và hoàn toàn chịu trách nhiệm về tính pháp lý của hồ sơ công bố và chất lượng, an toàn thực phẩm đối với sản phẩm đã công bố.
                </p>
                <p className="text-sm text-[#5d4e37]/90 mb-2">Thành phố Hồ Chí Minh, ngày 05 tháng 02 năm 2026</p>
                <p className="text-sm font-medium text-[#2c2419] mb-1">ĐẠI DIỆN TỔ CHỨC, CÁ NHÂN</p>
                <p className="text-sm text-[#5d4e37]/80 mb-2">(Ký tên, đóng dấu)</p>
                <p className="text-sm font-semibold text-[#2c2419] mb-3">Nguyễn Văn A</p>
                <div className="mb-3 max-w-[120px] bg-[#faf8f5] rounded p-1">
                  <Image
                    src="/doc-images/image5.png"
                    alt="Con dấu công ty"
                    width={120}
                    height={120}
                    className="w-full h-auto object-contain mix-blend-multiply"
                  />
                </div>
                <p className="text-sm font-semibold text-[#2c2419]">CÔNG TY TNHH CÀ PHÊ SẤY LẠNH VIỆT NAM</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
