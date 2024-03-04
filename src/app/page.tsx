import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import ScrollToTop from "@/components/scroll-to-top";
import AboutSection from "@/containers/about";
import ContactSection from "@/containers/contact";
import HomeSection from "@/containers/home";
import ProjectsSection from "@/containers/projects";
import SkillsSection from "@/containers/skills";

export default function Home() {
  return (
    <main className="pt-12">
      <Navbar />
      <div className="container space-y-16 py-28">
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <ScrollToTop />
      <Footer />
    </main>
  );
}
