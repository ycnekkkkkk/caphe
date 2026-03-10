const usps = [
  { icon: "✓", text: "100% cà phê nguyên chất" },
  { icon: "✓", text: "Không phụ gia" },
  { icon: "✓", text: "Công nghệ sấy lạnh hiện đại" },
  { icon: "✓", text: "Truy xuất nguồn gốc QR" },
];

export default function USP() {
  return (
    <section className="py-8 bg-white border-y border-amber-900/5">
      <div className="container-narrow">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {usps.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#8b5a2b]/10 flex items-center justify-center text-[#8b5a2b] font-semibold text-sm">
                {item.icon}
              </span>
              <span className="font-medium text-[#2c2419] text-sm lg:text-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
