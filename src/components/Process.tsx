import Image from "next/image";
import SectionHeader from "./SectionHeader";

const steps = [
  { title: "Tiếp nhận", desc: "Tiếp nhận nguyên liệu, kiểm tra chất lượng đầu vào" },
  { title: "Làm sạch", desc: "Làm sạch và phân loại nguyên liệu" },
  { title: "Rang", desc: "Rang cà phê theo công thức chuẩn" },
  { title: "Nghiền", desc: "Nghiền đạt kích thước phù hợp" },
  { title: "Chiết xuất", desc: "Chiết xuất dịch cà phê" },
  { title: "Cô đặc", desc: "Cô đặc dịch chiết theo tiêu chuẩn" },
  { title: "Sấy lạnh", desc: "Freeze drying bảo toàn hương vị" },
  { title: "Sàng phân loại", desc: "Sàng phân loại hạt đồng đều" },
  { title: "Phun dầu", desc: "Phun dầu cà phê tự nhiên" },
  { title: "Đóng gói", desc: "Đóng gói vô trùng" },
  { title: "Thành phẩm", desc: "Kiểm định và lưu kho thành phẩm" },
];

export default function Process() {
  return (
    <section id="quy-trinh" className="section-padding bg-white">
      <div className="container-narrow">
        <SectionHeader
          label="Quy trình"
          title="Quy trình sản xuất cà phê hòa tan sấy lạnh"
          description="11 bước sản xuất khép kín theo tiêu chuẩn"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-5 rounded-xl bg-[#faf8f5] border border-amber-900/5 text-center"
            >
              <span className="flex-shrink-0 w-10 h-10 mx-auto mb-3 rounded-full bg-[#8b5a2b] text-white flex items-center justify-center text-sm font-semibold block">
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-amber-900/20 -translate-y-1/2" />
              )}
              <h3 className="font-semibold text-[#2c2419] text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-[#5d4e37]/80">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="font-serif text-lg font-semibold text-[#2c2419] mb-6">Cơ sở sản xuất</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["/doc-images/image8.jpeg", "/doc-images/image9.jpeg", "/doc-images/image10.jpeg"].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md ring-1 ring-amber-900/5 bg-white">
                <Image
                  src={src}
                  alt={`Cơ sở sản xuất ${i + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
