import Image from "next/image";
import Banner from "@/components/Banner";
import Service from "@/components/Service";
import ProceessToWork from "@/components/ProceessToWork";
import Experiancs from "@/components/Experiancs";
import ContactUs from "@/components/ContactUs";
import OurProjects from "@/components/OurProjects";

export default function Home() {
  return (
   <div className="text-6xl">
    <Banner/>
    <Service/>
    <ProceessToWork/>
    <Experiancs/>
    <OurProjects/>
    <ContactUs/>
   </div>
  );
}
