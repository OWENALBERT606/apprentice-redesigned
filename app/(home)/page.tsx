
import { getAllBanners } from "@/actions/banners";
import HeroCarousel from "@/components/front-end/hero-couresel"
import NGOHomepage from "@/components/front-end/home-page-sections";
import Section from "@/components/front-end/Section"


export default  async function Page() {
  const banners = (await getAllBanners()) || [];
  return (
    <main>
      <HeroCarousel banners={banners} />
      <Section/>
      <NGOHomepage/>
    </main>
  )
}
