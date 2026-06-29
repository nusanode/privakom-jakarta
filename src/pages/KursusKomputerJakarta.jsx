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

      <section className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

    <div>
      <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-bold mb-6">
        Kursus Komputer Jakarta
      </span>

      <h1 className="text-4xl lg:text-6xl font-black leading-tight text-dark">
        Kursus Komputer Jakarta Profesional
      </h1>

      <p className="mt-8 text-lg text-gray-600 leading-relaxed">
        Privakom menyediakan kursus komputer di Jakarta untuk pelajar,
        mahasiswa, karyawan, dan perusahaan. Pilihan kelas Microsoft Office,
        Excel, Power BI, AutoCAD, Web Design, Teknisi Komputer hingga In House
        Training dengan instruktur profesional.
      </p>

      <div className="flex gap-4 mt-10 flex-wrap">

        <a
          href="#contact"
          className="bg-primary text-dark font-bold px-8 py-4 rounded-full hover:scale-105 transition"
        >
          Daftar Sekarang
        </a>

        <a
          href="https://wa.me/6281234507262"
          className="border-2 border-primary text-primary font-bold px-8 py-4 rounded-full hover:bg-primary hover:text-dark transition"
        >
          Konsultasi WhatsApp
        </a>

      </div>
    </div>

    <div>
      <img
        src="/images/kursus-komputer-jakarta.jpg"
        alt="Kursus Komputer Jakarta Privakom"
        className="rounded-3xl shadow-2xl"
      />
    </div>

  </div>
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
