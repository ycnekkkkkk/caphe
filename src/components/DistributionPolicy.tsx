import SectionHeader from "./SectionHeader";

const channels = [
  { icon: "🏪", label: "Hệ thống siêu thị" },
  { icon: "🏬", label: "Cửa hàng tiện lợi" },
  { icon: "📦", label: "Đại lý phân phối" },
  { icon: "🛒", label: "Kênh bán hàng trực tuyến (online)" },
  { icon: "✈️", label: "Xuất khẩu" },
];

const policies = [
  { title: "Chính sách đổi trả", desc: "Chính sách đổi trả sản phẩm được áp dụng theo quy định của pháp luật và quy định nội bộ." },
  { title: "Hướng dẫn sử dụng", desc: "Cho 1 gói cà phê (2g) vào ly, thêm 70–100ml nước nóng, khuấy đều đến khi tan hoàn toàn. Có thể thêm đá hoặc sữa tùy thích." },
  { title: "Hướng dẫn mua hàng", desc: "Khách hàng có thể mua tại hệ thống đại lý, siêu thị, cửa hàng tiện lợi hoặc website chính thức của công ty." },
];

export default function DistributionPolicy() {
  return (
    <section id="phan-phoi" className="section-padding bg-[#faf8f5]">
      <div className="container-narrow">
        <SectionHeader
          label="Phân phối & Chính sách"
          title="Hệ thống phân phối & Chính sách khách hàng"
          description="Kênh phân phối đa dạng và chính sách hỗ trợ khách hàng"
        />

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col min-h-0">
            <h3 className="font-serif text-lg font-semibold text-[#2c2419] mb-4">Kênh phân phối</h3>
            <div className="flex flex-col gap-3 flex-1 min-h-0">
              {channels.map((ch, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-amber-900/5 flex-1 min-h-0">
                  <span className="text-2xl">{ch.icon}</span>
                  <span className="font-medium text-[#2c2419]">{ch.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col min-h-0">
            <h3 className="font-serif text-lg font-semibold text-[#2c2419] mb-4">Chính sách khách hàng</h3>
            <div className="flex flex-col gap-4 flex-1 min-h-0">
              {policies.map((p, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-amber-900/5 flex flex-col justify-center flex-1 min-h-0">
                  <h4 className="font-semibold text-[#2c2419] text-sm mb-2">{p.title}</h4>
                  <p className="text-sm text-[#5d4e37]/90 leading-relaxed">{p.desc}</p>
                </div>
              ))}
              <div className="p-4 rounded-xl bg-white border border-amber-900/5 flex flex-col justify-center flex-1 min-h-0">
                <h4 className="font-semibold text-[#2c2419] text-sm mb-2">Câu hỏi thường gặp (FAQ)</h4>
                <p className="text-sm text-[#5d4e37]/90 leading-relaxed mb-2">
                  Website cung cấp mục FAQ với các câu hỏi thường gặp về sản phẩm, cách sử dụng và bảo quản.
                </p>
                <a href="#faq" className="text-[#8b5a2b] font-medium text-sm hover:underline">
                  Xem FAQ →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
