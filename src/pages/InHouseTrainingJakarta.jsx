import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ScrollToTop from "../components/ScrollToTop";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";

const InHouseTrainingJakarta = () => {
  // Data Struktur Google (Schema.org JSON-LD) untuk Course / Pelatihan
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "In House Training Jakarta",
    "description": "Layanan In House Training komputer profesional untuk perusahaan, BUMN, dan instansi pemerintah di Jakarta dari Privakom.",
    "provider": {
      "@type": "Organization",
      "name": "Privakom",
      "sameAs": "https://privakom.co.id"
    }
  };

  return (
    <HelmetProvider>
      {/* 1. METADATA SEO & INJEKSI SCHEMA GOOGLE */}
      <Helmet>
        <title>In House Training Jakarta untuk Perusahaan & Instansi - Privakom</title>
        <meta 
          name="description" 
          content="Jasa In House Training Jakarta profesional dari Privakom. Pelatihan Microsoft Office, Excel, Power BI, AutoCAD, hingga Cyber Security untuk Korporat, BUMN & Instansi." 
        />
        <link rel="canonical" href="https://privakom.co.id" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph (Sosial Media) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="In House Training Jakarta untuk Perusahaan - Privakom" />
        <meta property="og:description" content="Tingkatkan kompetensi SDM perusahaan Anda melalui program pelatihan komputer khusus dari Privakom." />
        <meta property="og:url" content="https://privakom.co.id" />
        <meta property="og:image" content="/images/privakom-corporate-training.jpg" />

        {/* Script JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Navbar />

      {/* 2. HERO SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full font-bold mb-6">
              Corporate Training Jakarta
            </span>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-dark">
              In House Training Jakarta
              <span className="block text-primary mt-3">untuk Perusahaan</span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              Privakom menyediakan layanan In House Training Jakarta untuk perusahaan, instansi pemerintah, BUMN, sekolah, universitas, dan organisasi yang ingin meningkatkan kompetensi SDM melalui pelatihan Microsoft Office, Excel, Power BI, AutoCAD, Web Programming, Teknisi Komputer, Networking, Cyber Security hingga Digital Skill lainnya.
            </p>
            <div className="flex flex-wrap gap-5 mt-12">
              <a href="https://wa.me" className="bg-primary text-dark font-bold px-8 py-4 rounded-full hover:scale-105 transition">
                Consultasi Gratis
              </a>
              <a href="#program" className="border-2 border-primary text-primary font-bold px-8 py-4 rounded-full hover:bg-primary hover:text-dark transition">
                Lihat Program
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <h3 className="text-4xl font-black text-primary">10.000+</h3>
                <p className="text-gray-600 font-semibold">Alumni</p>
              </div>
              <div>
                <h3 className="text-4xl font-black text-primary">500+</h3>
                <p className="text-gray-600 font-semibold">Perusahaan</p>
              </div>
              <div>
                <h3 className="text-4xl font-black text-primary">20+</h3>
                <p className="text-gray-600 font-semibold">Tahun</p>
              </div>
            </div>
          </div>
          <div>
            <img src="/images/privakom-corporate-training.jpg" alt="In House Training Jakarta Privakom" className="rounded-3xl shadow-2xl" />
          </div>
        </div>
      </section>

      {/* 3. TENTANG SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-black text-dark mb-8">
            Jasa In House Training Jakarta Profesional
          </h2>
          <p className="text-lg leading-9 text-gray-700">
            Privakom merupakan penyedia Corporate Training Jakarta yang berfokus pada peningkatan kompetensi karyawan. Program pelatihan dapat diselenggarakan langsung di kantor perusahaan maupun secara online menggunakan Zoom atau Microsoft Teams.
          </p>
          <p className="mt-8 text-lg leading-9 text-gray-700">
            Materi pelatihan disesuaikan dengan kebutuhan perusahaan, sehingga peserta memperoleh pembelajaran yang aplikatif dan dapat langsung diterapkan pada pekerjaan sehari-hari.
          </p>
        </div>
      </section>

      {/* 4. KEUNGGULAN SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full font-bold">Keunggulan Privakom</span>
            <h2 className="text-4xl lg:text-5xl font-black mt-6 text-dark">Mengapa Memilih In House Training Privakom?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-4">Trainer Berpengalaman</h3>
              <p className="text-gray-600">Instruktur profesional dengan pengalaman mengajar perusahaan, instansi pemerintah, dan BUMN.</p>
            </div>
            <div className="p-8 rounded-3xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-4">Materi Custom</h3>
              <p className="text-gray-600">Silabus dapat disesuaikan dengan kebutuhan divisi, departemen, maupun target pekerjaan peserta.</p>
            </div>
            <div className="p-8 rounded-3xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-4">Training di Kantor</h3>
              <p className="text-gray-600">Pelatihan dapat dilaksanakan langsung di lokasi perusahaan ataupun secara online.</p>
            </div>
            <div className="p-8 rounded-3xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-4">Jadwal Fleksibel</h3>
              <p className="text-gray-600">Pelaksanaan dapat menyesuaikan jam kerja perusahaan termasuk hari Sabtu.</p>
            </div>
            <div className="p-8 rounded-3xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-4">Sertifikat Pelatihan</h3>
              <p className="text-gray-600">Seluruh peserta memperoleh sertifikat resmi setelah menyelesaikan pelatihan.</p>
            </div>
            <div className="p-8 rounded-3xl shadow-lg border">
              <h3 className="text-2xl font-bold mb-4">Konsultasi Gratis</h3>
              <p className="text-gray-600">Kami membantu menentukan materi yang paling sesuai sebelum pelatihan dilaksanakan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROGRAM PELATIHAN */}
      <section id="program" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full font-bold">Program Pelatihan</span>
            <h2 className="text-4xl lg:text-5xl font-black text-dark mt-6">Program In House Training Jakarta</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-lg p-8 border">
              <h3 className="text-2xl font-bold mb-4">Microsoft Office</h3>
              <p className="text-gray-600 leading-8">Training Microsoft Word, Excel, dan PowerPoint untuk meningkatkan produktivitas administrasi.</p>
            </div>
            <div className="bg-white rounded-3xl shadow-lg p-8 border">
              <h3 className="text-2xl font-bold mb-4">Microsoft Excel</h3>
              <p className="text-gray-600 leading-8">Excel Basic, Intermediate, Advanced, Dashboard, VBA Macro, hingga Power Query.</p>
            </div>
            <div className="bg-white rounded-3xl shadow-lg p-8 border">
              <h3 className="text-2xl font-bold mb-4">Microsoft Power BI</h3>
              <p className="text-gray-600 leading-8">Visualisasi data, dashboard interaktif, business intelligence dan analisis data.</p>
            </div>
            <div className="bg-white rounded-3xl shadow-lg p-8 border">
              <h3 className="text-2xl font-bold mb-4">AutoCAD</h3>
              <p className="text-gray-600 leading-8">AutoCAD 2D, AutoCAD 3D, SketchUp, hingga desain teknik profesional.</p>
            </div>
            <div className="bg-white rounded-3xl shadow-lg p-8 border">
              <h3 className="text-2xl font-bold mb-4">Teknisi Komputer & Jaringan</h3>
              <p className="text-gray-600 leading-8">Pelatihan hardware, software, troubleshooting komputer, jaringan LAN serta Mikrotik.</p>
            </div>
            <div className="bg-white rounded-3xl shadow-lg p-8 border">
              <h3 className="text-2xl font-bold mb-4">Cyber Security</h3>
                <p className="text-gray-600 leading-8">Pelatihan keamanan informasi, keamanan jaringan, dan cyber awareness perusahaan.</p>
            </div>
                  {/* 6. ARTIKEL SEO */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <span className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full font-bold mb-6">Artikel</span>
          <h2 className="text-4xl lg:text-5xl font-black text-dark mb-10 leading-tight">
            Mengapa In House Training Jakarta Menjadi Investasi Terbaik untuk Perusahaan?
          </h2>
          <div className="space-y-8 text-lg text-gray-700 leading-9">
            <p>Di era transformasi digital, kemampuan SDM menjadi penentu keberhasilan perusahaan. Banyak organisasi di Jakarta berinvestasi pada program <strong>In House Training</strong> untuk meningkatkan kompetensi karyawan agar produktif.</p>
            <p>Privakom hadir sebagai penyedia <strong>Corporate Training Jakarta</strong> yang membantu perusahaan, instansi pemerintah, dan BUMN dalam menyelenggarakan pelatihan komputer profesional dengan kurikulum fleksibel.</p>
            <h3 className="text-3xl font-black text-dark">Area Layanan</h3>
            <p>Kami melayani pelaksanaan training di seluruh wilayah Jakarta (Selatan, Timur, Barat, Utara, Pusat), Bekasi, Tangerang, Depok, Bogor, dan Karawang.</p>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full font-bold">FAQ</span>
            <h2 className="text-4xl lg:text-5xl font-black text-dark mt-6">Pertanyaan yang Sering Diajukan</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-3">Apakah pelatihan bisa dilakukan di kantor kami?</h3>
              <p className="text-gray-600 leading-8">Ya. Tim trainer Privakom dapat datang langsung ke lokasi perusahaan atau menyelenggarakan pelatihan secara online.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-3">Apakah peserta mendapatkan sertifikat?</h3>
              <p className="text-gray-600 leading-8">Ya. Seluruh peserta yang mengikuti pelatihan akan memperoleh sertifikat resmi dari Privakom.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="bg-primary py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-dark">Siap Meningkatkan Kompetensi Tim Anda?</h2>
          <div className="flex justify-center flex-wrap gap-5 mt-12">
            <a href="https://wa.me" className="bg-dark text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </section>

      <Courses />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </HelmetProvider>
  );
};

export default InHouseTrainingJakarta;
            
