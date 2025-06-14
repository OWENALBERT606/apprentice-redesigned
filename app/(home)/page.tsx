
import { getAllBanners } from "@/actions/banners";
import HeroCarousel from "@/components/front-end/hero-couresel"
import Section from "@/components/front-end/Section"


export default  async function Page() {
  const banners = (await getAllBanners()) || [];
  return (
    <main>
      <HeroCarousel banners={banners} />
      <Section/>
    </main>
  )
}
