import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Product from "@/components/Product";
import WhyFreezeDried from "@/components/WhyFreezeDried";
import ProductDeclaration from "@/components/ProductDeclaration";
import DistributionPolicy from "@/components/DistributionPolicy";
import Process from "@/components/Process";
import Origin from "@/components/Origin";
import Certifications from "@/components/Certifications";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />
      <main>
        <Hero />
        <About />
        <Product />
        <WhyFreezeDried />
        <ProductDeclaration />
        <DistributionPolicy />
        <Process />
        <Origin />
        <Certifications />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
