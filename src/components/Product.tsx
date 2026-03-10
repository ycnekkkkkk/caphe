import Image from "next/image";
import SectionHeader from "./SectionHeader";

const highlights = [
  { icon: "☕", title: "100% cà phê nguyên chất", desc: "Không pha trộn, không chất độn." },
  { icon: "❄️", title: "Công nghệ sấy lạnh", desc: "Freeze drying giữ trọn hương vị tự nhiên." },
  { icon: "🌿", title: "Không phụ gia", desc: "Không chất bảo quản, tạo màu hay hương liệu nhân tạo." },
];

const specs = [
  { label: "Màu", value: "Nâu sậm tự nhiên" },
  { label: "Mùi", value: "Thơm đặc trưng cà phê rang" },
  { label: "Vị", value: "Đậm đà – hậu vị ngọt thanh" },
  { label: "Dạng", value: "Hạt cà phê hòa tan khô, xốp" },
  { label: "Quy cách", value: "2g/gói × 10 gói = 20g/hộp" },
  { label: "Hạn sử dụng", value: "24 tháng" },
];

const brewSteps = [
  "Cho 1 gói cà phê (2g) vào ly",
  "Thêm 70–100ml nước nóng",
  "Khuấy đều đến khi tan hoàn toàn",
  "Có thể thêm đá hoặc sữa tùy thích",
];

export default function Product() {
  return (
    <section id="san-pham" className="section-padding bg-[#faf8f5]">
      <div className="container-narrow">
        <SectionHeader
          label="Sản phẩm"
          title="Cà phê hòa tan sấy lạnh"
          description="Chế biến từ hạt cà phê chất lượng cao tuyển chọn từ các vùng trồng cà phê nổi tiếng của Việt Nam"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-white border border-amber-900/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h3 className="font-semibold text-[#2c2419] text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-[#5d4e37]/80">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Cột trái: Ảnh + Giá trị dinh dưỡng */}
          <div className="flex flex-col gap-6 w-full min-w-0">
            <div className="flex-1 min-h-0 rounded-2xl overflow-hidden shadow-lg ring-1 ring-amber-900/5 bg-white p-6 flex items-center justify-center">
              <Image
                src="/2.jpg"
                alt="Hộp và gói cà phê sấy lạnh Caffein Lab"
                width={500}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-5 rounded-xl bg-white border border-amber-900/5 shadow-sm">
              <h4 className="font-semibold text-[#2c2419] text-sm mb-3 uppercase tracking-wider">Giá trị dinh dưỡng và hợp chất sinh học</h4>
              {/* <p className="text-xs text-[#5d4e37]/90 leading-relaxed mb-3">
                Cà phê chứa nhiều hợp chất sinh học có lợi cho sức khỏe như:
              </p> */}
              <ul className="space-y-2 text-xs text-[#5d4e37]/90 mb-3">
                <li>Caffeine giúp tăng sự tỉnh táo</li>
                <li>Polyphenol và các chất chống oxy hóa</li>
                <li>Axit chlorogenic có vai trò chống oxy hóa</li>
                <li>Việc sử dụng cà phê với lượng hợp lý có thể giúp cải thiện khả năng tập trung và hỗ trợ hoạt động trí não</li>
              </ul>
              {/* <p className="text-xs text-[#5d4e37]/90 leading-relaxed">
                Việc sử dụng cà phê với lượng hợp lý có thể giúp cải thiện khả năng tập trung và hỗ trợ hoạt động trí não.
              </p> */}
            </div>
          </div>

          {/* Cột phải: Cách pha + Thông số */}
          <div className="flex flex-col gap-6 w-full min-w-0">
            <div className="p-5 rounded-xl bg-white border border-amber-900/5 shadow-sm">
              <h4 className="font-semibold text-[#2c2419] text-sm mb-4 uppercase tracking-wider">Cách pha</h4>
              <ol className="space-y-3">
                {brewSteps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#8b5a2b] text-white text-xs flex items-center justify-center font-semibold">
                      {i + 1}
                    </span>
                    <span className="text-[#5d4e37]/90 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="p-5 rounded-xl bg-white border border-amber-900/5 shadow-sm">
              <h4 className="font-semibold text-[#2c2419] text-sm mb-4 uppercase tracking-wider">Thông số</h4>
              <div className="space-y-0">
                {specs.map((s, i) => (
                  <div key={i} className="flex justify-between gap-3 py-2.5 border-b border-amber-900/5 last:border-0 text-sm">
                    <span className="text-[#5d4e37]/80 shrink-0">{s.label}</span>
                    <span className="font-medium text-[#2c2419] text-right">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
