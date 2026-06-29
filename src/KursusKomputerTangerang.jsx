import Hero from "../components/Hero";
import Features from "../components/Features";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const KursusKomputerTangerang = () => {
  return (
    <>
      <Hero />

      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">

        <h1 className="text-4xl lg:text-6xl font-black text-dark mb-8">
          Kursus Komputer Tangerang
        </h1>

        <p className="text-lg text-gray-700 leading-8 mb-8">
          Privakom menyediakan kursus komputer di Tangerang untuk pelajar,
          mahasiswa, karyawan, dan perusahaan. Program pelatihan meliputi
          Microsoft Office, Excel, Power BI, AutoCAD, Desain Grafis,
          Teknisi Komputer, Networking, hingga Cyber Security.
        </p>

        <h2 className="text-3xl font-bold text-dark mt-12 mb-6">
          Program Pelatihan
        </h2>

        <p className="text-gray-700 leading-8">
          Peserta dapat memilih kelas private maupun reguler dengan jadwal
          yang fleksibel. Tersedia pula layanan In House Training untuk
          perusahaan di wilayah Tangerang dan sekitarnya.
        </p>

      </section>

      <Features />
      <Courses />
      <Testimonials />
      <Contact />
    </>
  );
};

export default KursusKomputerTangerang;
