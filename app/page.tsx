import Banner from "../components/layout/Banner";
import HeroSection from "../components/layout/Hero";
import PopularCategories from "../components/layout/PopularCategories";
import ProductGrid from "../components/layout/ProductGrid";

export default function Home() {
  return (
    <main>
      
      <HeroSection />
      <PopularCategories/>
      <ProductGrid/>
      <Banner/>
    </main>
  );
}
