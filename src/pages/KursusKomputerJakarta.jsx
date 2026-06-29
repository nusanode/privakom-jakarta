import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ScrollToTop from "../components/ScrollToTop";

const KursusKomputerJakarta = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-black text-dark mb-8">
          Kursus Komputer Jakarta
        </h1>

        <p className="text-lg text-gray-700 leading-8">
          Privakom menyediakan kursus komputer di Jakarta untuk pelajar,
          mahasiswa, karyawan, dan perusahaan. Program tersedia mulai dari
          Microsoft Office, Excel, Power BI, AutoCAD, Desain Grafis,
          Teknisi Komputer, hingga Cyber Security.
        </p>
      </section>

      <Features />
      <Courses />
      <Testimonials />
      <Contact />
      <Footer />

      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  );
};

export default KursusKomputerJakarta;
