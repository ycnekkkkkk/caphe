const links = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#san-pham", label: "Sản phẩm" },
  { href: "#cong-bo", label: "Công bố" },
  { href: "#quy-trinh", label: "Quy trình" },
  { href: "#chung-nhan", label: "Chứng nhận" },
  { href: "#faq", label: "FAQ" },
  { href: "#lien-he", label: "Liên hệ" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2c2419] text-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-3">
              Công ty TNHH Cà Phê Sấy Lạnh Việt Nam
            </h3>
            <p className="text-amber-100/80 text-sm leading-relaxed">
              100% cà phê nguyên chất từ Tây Nguyên. Công nghệ sấy lạnh giữ trọn hương vị.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Liên kết</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-amber-100/80 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <p className="text-amber-100/80 text-sm">
              Lô B2-15, KCN Tân Bình<br />
              Quận Tân Phú, TP. Hồ Chí Minh
            </p>
            <p className="text-amber-100/80 text-sm mt-2">
              (028) 7300 1234
            </p>
            <a
              href="mailto:info@cafesaylanh.vn"
              className="text-amber-100/80 hover:text-white text-sm"
            >
              info@cafesaylanh.vn
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-amber-900/30 text-center">
          <p className="text-amber-100/60 text-sm">
            © {new Date().getFullYear()} Công ty TNHH Cà Phê Sấy Lạnh Việt Nam. Mã số doanh nghiệp: 3601589741
          </p>
        </div>
      </div>
    </footer>
  );
}
