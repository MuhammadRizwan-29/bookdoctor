import Bannner from "../components/Banner";
import Hero from "../components/Hero";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";

export default function Home() {
  return (
    <>
      <Hero />
      <SpecialityMenu />
      <TopDoctors />
      <Bannner />
    </>
  );
}
