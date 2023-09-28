import Header from "@/components/Header";
import HeroStart from "@/components/Home/HeroStart";
import WatchVideo from "@/components/home/WatchVideo";
import Benefits from "@/components/home/Benefits";
import Tarrifs from "@/components/home/Tarrifs";
import Faq from "@/components/home/Faq";
import Footer from "@/components/Footer";

export default function Home() {

  return (
      <>
        <Header/>
        <main>
            <HeroStart/>
            <WatchVideo/>
            <Benefits/>
            <Tarrifs/>
            <Faq/>
        </main>
          <Footer/>
      </>
  )
}
