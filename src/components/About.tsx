import Image from "next/image";
import SectionHeader from "./SectionHeader";

const values = [
  { icon: "⭐", title: "Chất lượng", desc: "Cam kết mang đến sản phẩm đạt tiêu chuẩn cao về chất lượng và an toàn thực phẩm." },
  { icon: "🔍", title: "Minh bạch", desc: "Áp dụng hệ thống truy xuất nguồn gốc giúp khách hàng dễ dàng kiểm tra thông tin sản phẩm." },
  { icon: "⚙", title: "Đổi mới", desc: "Không ngừng cải tiến công nghệ và quy trình sản xuất." },
  { icon: "🌱", title: "Phát triển bền vững", desc: "Hợp tác lâu dài với nông dân và các đối tác trong chuỗi cung ứng cà phê." },
];

export default function About() {
  return (
    <section id="gioi-thieu" className="py-14 lg:py-16 bg-white">
      <div className="container-narrow">
        <SectionHeader
          label="Giới thiệu"
          title="Giới thiệu về công ty"
          description="Công ty TNHH Cà Phê Sấy Lạnh Việt Nam"
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <div className="order-2 lg:order-1 flex flex-col min-h-0 h-full">
            <div className="aspect-[4/3] lg:flex-1 lg:min-h-0 rounded-2xl overflow-hidden shadow-lg ring-1 ring-amber-900/5 relative">
              <Image
                src="/doc-images/image2.1.jpeg"
                alt="Công ty Cà Phê Sấy Lạnh Việt Nam - Giới thiệu"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="mt-6 flex-shrink-0">
              <h3 className="font-serif text-lg font-semibold text-[#2c2419] mb-2">1.3 Sứ mệnh</h3>
              <p className="text-sm text-[#5d4e37]/90 leading-relaxed">
                Mang đến cho người dùng những sản phẩm cà phê chất lượng cao, an toàn và tiện lợi, đồng thời đảm bảo minh bạch về nguồn gốc và quy trình sản xuất; đáp ứng nhu cầu ngày càng đa dạng của người tiêu dùng.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col min-h-0 h-full space-y-6">
            <div className="flex-1 min-h-0">
              <h3 className="font-serif text-lg font-semibold text-[#2c2419] mb-3">1.1 Lịch sử hình thành và phát triển</h3>
              <p className="text-sm text-[#5d4e37]/90 leading-relaxed mb-3">
                Công ty TNHH Cà Phê Sấy Lạnh Việt Nam được thành lập với mục tiêu phát triển các sản phẩm cà phê chất lượng cao từ nguồn nguyên liệu cà phê Việt Nam. Ngay từ khi thành lập, công ty đã đầu tư vào công nghệ chế biến hiện đại, đặc biệt là công nghệ sấy lạnh (freeze drying) nhằm giữ trọn hương vị tự nhiên và các hợp chất đặc trưng của cà phê.
              </p>
              <p className="text-sm text-[#5d4e37]/90 leading-relaxed mb-3">
                Trong quá trình phát triển, công ty không ngừng mở rộng quy mô sản xuất và xây dựng hệ thống quản lý chất lượng nhằm đảm bảo an toàn thực phẩm và nâng cao chất lượng sản phẩm. Đồng thời, doanh nghiệp thiết lập mối liên kết bền vững với các vùng nguyên liệu cà phê tại các tỉnh ở Tây Nguyên nhằm đảm bảo nguồn nguyên liệu ổn định trong suốt quá trình sản xuất và có khả năng truy xuất nguồn gốc rõ ràng.
              </p>
              <p className="text-sm text-[#5d4e37]/90 leading-relaxed">
                Hiện nay, công ty đang từng bước khẳng định vị thế trên thị trường cà phê chế biến nhưng vẫn bảo toàn hương vị ban đầu và hướng đến mục tiêu phát triển bền vững.
              </p>
            </div>

            <div className="flex-shrink-0">
              <h3 className="font-serif text-lg font-semibold text-[#2c2419] mb-2">1.2 Tầm nhìn</h3>
              <p className="text-sm text-[#5d4e37]/90 leading-relaxed">
                Trở thành doanh nghiệp uy tín trong lĩnh vực chế biến và cung cấp các sản phẩm từ cà phê chất lượng cao, góp phần nâng cao giá trị và vị thế của ngành cà phê Việt Nam không chỉ thị trường trong nước mà còn cả quốc tế.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-serif text-lg font-semibold text-[#2c2419] mb-6">1.4 Giá trị cốt lõi</h3>
          <div className="rounded-xl overflow-hidden shadow-md ring-1 ring-amber-900/5 bg-[#faf8f5] p-6 flex justify-center mb-6">
            <Image
              src="/doc-images/image3.png"
              alt="Giá trị cốt lõi - Chất lượng, Minh bạch, Đổi mới, Phát triển bền vững"
              width={800}
              height={400}
              className="w-full max-w-2xl h-auto object-contain"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-[#faf8f5] border border-amber-900/5">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h4 className="font-semibold text-[#2c2419] mb-1">{item.title}</h4>
                <p className="text-sm text-[#5d4e37]/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-[#faf8f5] border border-amber-900/5">
            <h3 className="font-serif text-lg font-semibold text-[#2c2419] mb-3">1.5 Văn hóa doanh nghiệp</h3>
            <p className="text-sm text-[#5d4e37]/90 leading-relaxed">
              Công ty xây dựng môi trường làm việc chuyên nghiệp, đề cao tinh thần trách nhiệm, hợp tác và sáng tạo. Mỗi nhân viên đều được khuyến khích phát huy năng lực cá nhân nhằm góp phần vào sự phát triển chung của doanh nghiệp.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-[#faf8f5] border border-amber-900/5">
            <h3 className="font-serif text-lg font-semibold text-[#2c2419] mb-3">1.6 Đội ngũ lãnh đạo và chuyên gia</h3>
            <p className="text-sm text-[#5d4e37]/90 leading-relaxed">
              Đội ngũ quản lý và chuyên gia của công ty có nhiều kinh nghiệm trong lĩnh vực chế biến cà phê và quản lý chất lượng thực phẩm. Công ty cũng thường xuyên hợp tác với các chuyên gia trong ngành nhằm cải tiến công nghệ sản xuất và nâng cao chất lượng sản phẩm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
