import ContainerFluid from "@/components/homepage/ContainerFluid";
import EditorsPick from "@/components/homepage/EditorsPick";
import BestSeller from "@/components/homepage/BestSeller";
import HeroSection from "@/components/homepage/HeroSection";
import HeroSection2 from "@/components/homepage/HeroSection2";
import FeaturedPosts from "@/components/homepage/FeaturedPosts";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <EditorsPick />
      <BestSeller />
      <HeroSection2 />
      <ContainerFluid />
      <FeaturedPosts />
    </div>
  );
}
