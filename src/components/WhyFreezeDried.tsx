import SectionHeader from "./SectionHeader";

const reasons = [
  { icon: "🌿", title: "Giữ nguyên hương vị", desc: "Công nghệ sấy lạnh bảo toàn hương vị tự nhiên của cà phê." },
  { icon: "✨", title: "Không phụ gia", desc: "100% cà phê nguyên chất, không chất bảo quản." },
  { icon: "⚡", title: "Hòa tan nhanh", desc: "Chỉ cần thêm nước nóng, khuấy đều là dùng được." },
  { icon: "📦", title: "Dễ bảo quản", desc: "Hạn sử dụng 24 tháng, bảo quản ở nơi khô ráo." },
  { icon: "🌏", title: "Phù hợp xuất khẩu", desc: "Đạt tiêu chuẩn quốc tế, phù hợp thị trường nước ngoài." },
  { icon: "📊", title: "Chất lượng ổn định", desc: "Quy trình kiểm soát chặt chẽ, chất lượng đồng đều." },
];

export default function WhyFreezeDried() {
  return (
    <section className="section-padding bg-[#faf8f5]">
      <div className="container-narrow">
        <SectionHeader
          label="Vì sao chọn"
          title="Cà phê sấy lạnh?"
          description="Công nghệ freeze-dried giúp sản phẩm vượt trội so với cà phê hòa tan thông thường"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-xl bg-white border border-amber-900/5 shadow-sm"
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-[#2c2419] text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[#5d4e37]/80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
