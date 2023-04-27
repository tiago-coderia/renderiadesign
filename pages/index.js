import Link from "next/link";
import { Poppins } from "next/font/google";
import { Outfit } from "next/font/google";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import LastProjects from "./components/LastProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto flex flex-col gap-5 px-4">
      <Header />
      <Hero />
      <Stack />
      <LastProjects />
      <Contact />
      <Footer />
    </main>
  );
}
