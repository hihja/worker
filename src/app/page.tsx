import Header from "@/components/Header";
import HeroStart from "@/components/home/heroStart";
import WatchVideo from "@/components/home/WatchVideo";
import Benefits from "@/components/home/Benefits";
import Tarrifs from "@/components/home/Tarrifs";
import Faq from "@/components/home/Faq";

export default function Home() {

  return (
      <>
          <HeroStart/>
          <WatchVideo title={true}/>
          <Benefits/>
          <Tarrifs/>
          <Faq/>
      </>

  )
}
