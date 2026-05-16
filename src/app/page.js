import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyHireMe from "@/components/WhyHireMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#eeeeec] text-[#111111]">
            <Navbar />
            <Hero />
            <About />
            <WhyHireMe />
            <Skills />
            <Projects />
            <Experience />
            <CurrentlyBuilding />
            <Contact />
            <Footer />
        </main>
    );
}
