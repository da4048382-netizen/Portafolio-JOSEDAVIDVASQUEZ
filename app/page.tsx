import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import AboutMe from "@/components/about-me";
import Experience from "@/components/experience";
import Services from "@/components/services"  
import Future from "@/components/Future";
import Knowledge from "@/components/Knowledge";
import WhyMe from "@/components/WhyMe";
import Portfolio from "@/components/portfolio";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="pb-40">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Services />
      <Future />
      <Knowledge />
      <WhyMe />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
