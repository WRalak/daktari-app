import AboveFooter from "./components/AboveFooter";
import BelowHero from "./components/BelowHero";
import Hero from "./components/Hero";
import TopDoctors from "./components/TopDoctors";



export default function Home() {
  return (
    <main className="">
      <Hero/>
      <BelowHero/>
      <TopDoctors/>
      <AboveFooter/>
    </main>
  );
}

