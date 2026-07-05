import HeroSlider from "@/components/home/HeroSlider";
import CompanyIntro from "@/components/home/CompanyIntro";
import CategoryGrid from "@/components/home/CategoryGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandHighlights from "@/components/home/BrandHighlights";
import StatsCounter from "@/components/home/StatsCounter";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <CompanyIntro />
      <StatsCounter />
      <CategoryGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <BrandHighlights />
      <Testimonials />
      <CTABanner />
    </>
  );
}
