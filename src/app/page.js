import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#eeeeec] text-[#111111]">
            <Navbar />
            <Hero />
            <Projects />
            <Skills />
            <About />
            <CurrentlyBuilding />
            <Contact />
            <Footer />
        </main>
    );
}
