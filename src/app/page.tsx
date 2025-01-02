import AboutFood from "@/components/aboutfood";
import BlogSection from "@/components/blogsection";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/HeroSection";
import BakeryFeatures from "@/components/provide";
import { SiteHeader } from "@/components/SiteHeader";
import BlogSections from "@/app/blogsections/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <SiteHeader />
      <HeroSection />

      <BlogSection/>
      <BlogSections/>
      {/* <BakeryShowcase/> */}
      <AboutFood/>
      <BakeryFeatures/>
      <Footer/>
    </main>
  )
}

