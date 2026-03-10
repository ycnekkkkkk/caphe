import Image from "next/image";
import SectionHeader from "./SectionHeader";

const regions = [
  { name: "Đắk Lắk", desc: "Hương vị đậm đà", story: "Thủ phủ cà phê Tây Nguyên" },
  { name: "Gia Lai", desc: "Vị cân bằng", story: "Vùng cao nguyên đất bazan" },
  { name: "Lâm Đồng", desc: "Hương thơm dịu", story: "Khí hậu mát mẻ, cà phê Arabica" },
  { name: "Sơn La", desc: "Hậu vị ngọt", story: "Vùng núi phía Bắc" },
];

const suppliers = [
  "DakLak Coffee Supply",
  "Gia Lai Coffee Trading",
  "Lâm Đồng Coffee Export",
  "Sơn La Coffee Cooperative",
];

export default function Origin() {
  return (
    <section className="section-padding bg-[#faf8f5]">
      <div className="container-narrow">
        <SectionHeader
          label="Nguồn gốc"
          title="Từ Tây Nguyên đến ly cà phê"
          description="Hạt cà phê được tuyển chọn từ các vùng nguyên liệu nổi tiếng tại Việt Nam"
        />

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg ring-1 ring-amber-900/5">
            <Image
              src="/doc-images/image7.jpeg"
              alt="Vùng nguyên liệu cà phê Tây Nguyên"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg ring-1 ring-amber-900/5">
            <Image
              src="/doc-images/22.jpeg"
              alt="Quả cà phê chín trên cây - Nguồn gốc cà phê"
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mb-6 p-6 rounded-xl bg-white border border-amber-900/5">
          <p className="text-sm text-[#5d4e37]/90 text-center leading-relaxed">
            Hạt cà phê được tuyển chọn từ các vùng nguyên liệu nổi tiếng tại Việt Nam.
            Mỗi vùng mang đến đặc trưng hương vị riêng, tạo nên sản phẩm cân bằng và đậm đà.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {regions.map((r, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-white border border-amber-900/5 text-center"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#8b5a2b]/10 flex items-center justify-center">
                <span className="text-[#8b5a2b] text-xl">📍</span>
              </div>
              <h3 className="font-semibold text-[#2c2419] text-sm mb-1">{r.name}</h3>
              <p className="text-[#c8a26a] font-medium text-xs mb-1">{r.desc}</p>
              <p className="text-xs text-[#5d4e37]/80">{r.story}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl bg-white border border-amber-900/5 p-6">
            <h3 className="font-serif text-base font-semibold text-[#2c2419] mb-4">
              Nhà cung cấp
            </h3>
            <p className="text-sm text-[#5d4e37]/90 mb-4">
              Các nhà cung cấp nguyên liệu Arabica, Robusta, Liberica đều được đánh giá
              và kiểm tra định kỳ để đảm bảo chất lượng.
            </p>
            <ul className="space-y-2">
              {suppliers.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8b5a2b]" />
                  <span className="text-[#5d4e37]">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-white border border-amber-900/5 p-6">
            <h3 className="font-serif text-base font-semibold text-[#2c2419] mb-4">
              Thu hoạch & vận chuyển
            </h3>
            <p className="text-sm text-[#5d4e37]/90 leading-relaxed">
              Cà phê sau thu hoạch được sơ chế bằng phương pháp chế biến ướt và khô tại vùng
              nguyên liệu, vận chuyển bằng xe container theo TCVN 6602:2013. Nguyên liệu được
              kiểm tra chất lượng theo TCVN 4193:2014 trước khi nhập nhà máy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
