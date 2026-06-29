import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ScrollToTop from "../components/ScrollToTop";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";

const InhouseTrainingJakarta = () => {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full font-bold mb-6">
              Corporate Training Jakarta
            </span>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-dark">
              In House Training Jakarta
              <span className="block text-primary mt-3">
                untuk Perusahaan
              </span>
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              Privakom menyediakan layanan In House Training Jakarta
              untuk perusahaan, instansi pemerintah, BUMN,
              sekolah, universitas, dan organisasi yang ingin
              meningkatkan kompetensi SDM melalui pelatihan
              Microsoft Office, Excel, Power BI, AutoCAD,
              Web Programming, Teknisi Komputer,
              Networking, Cyber Security hingga Digital Skill
              lainnya.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href="https://wa.me/6281234507262"
                className="bg-primary text-dark font-bold px-8 py-4 rounded-full hover:scale-105 transition"
              >
                Konsultasi Gratis
              </a>

              <a
                href="#program"
                className="border-2 border-primary text-primary font-bold px-8 py-4 rounded-full hover:bg-primary hover:text-dark transition"
              >
                Lihat Program
              </a>

            </div>

            <div className="grid grid-cols-3 gap-6 mt-14">

              <div>
                <h3 className="text-4xl font-black text-primary">
                  10.000+
                </h3>
                <p className="text-gray-600 font-semibold">
                  Alumni
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-primary">
                  500+
                </h3>
                <p className="text-gray-600 font-semibold">
                  Perusahaan
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black text-primary">
                  20+
                </h3>
                <p className="text-gray-600 font-semibold">
                  Tahun Pengalaman
                </p>
              </div>

            </div>

          </div>

          <div>

            <img
              src="/images/privakom-corporate-training.jpg"
              alt="In House Training Jakarta Privakom"
              className="rounded-3xl shadow-2xl"
            />

          </div>

        </div>
      </section>

      {/* TENTANG */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <h2 className="text-4xl lg:text-5xl font-black text-dark mb-8">
            Jasa In House Training Jakarta Profesional
          </h2>

          <p className="text-lg leading-9 text-gray-700">
            Privakom merupakan penyedia Corporate Training Jakarta
            yang berfokus pada peningkatan kompetensi karyawan.
            Program pelatihan dapat diselenggarakan langsung di kantor
            perusahaan maupun secara online menggunakan Zoom atau Microsoft Teams.
          </p>

          <p className="mt-8 text-lg leading-9 text-gray-700">
            Materi pelatihan disesuaikan dengan kebutuhan perusahaan,
            sehingga peserta memperoleh pembelajaran yang aplikatif
            dan dapat langsung diterapkan pada pekerjaan sehari-hari.
          </p>

        </div>

      </section>
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    <div className="text-center mb-16">
      <span className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full font-bold">
        Keunggulan Privakom
      </span>

      <h2 className="text-4xl lg:text-5xl font-black mt-6 text-dark">
        Mengapa Memilih In House Training Privakom?
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Kami membantu perusahaan meningkatkan kompetensi karyawan melalui
        pelatihan yang fleksibel, praktis, dan disesuaikan dengan kebutuhan bisnis.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="p-8 rounded-3xl shadow-lg border">
        <h3 className="text-2xl font-bold mb-4">Trainer Berpengalaman</h3>
        <p>Instruktur profesional dengan pengalaman mengajar perusahaan, instansi pemerintah, dan BUMN.</p>
      </div>

      <div className="p-8 rounded-3xl shadow-lg border">
        <h3 className="text-2xl font-bold mb-4">Materi Custom</h3>
        <p>Silabus dapat disesuaikan dengan kebutuhan divisi, departemen, maupun target pekerjaan peserta.</p>
      </div>

      <div className="p-8 rounded-3xl shadow-lg border">
        <h3 className="text-2xl font-bold mb-4">Training di Kantor</h3>
        <p>Pelatihan dapat dilaksanakan langsung di lokasi perusahaan ataupun secara online.</p>
      </div>

      <div className="p-8 rounded-3xl shadow-lg border">
        <h3 className="text-2xl font-bold mb-4">Jadwal Fleksibel</h3>
        <p>Pelaksanaan dapat menyesuaikan jam kerja perusahaan termasuk hari Sabtu.</p>
      </div>

      <div className="p-8 rounded-3xl shadow-lg border">
        <h3 className="text-2xl font-bold mb-4">Sertifikat Pelatihan</h3>
        <p>Seluruh peserta memperoleh sertifikat resmi setelah menyelesaikan pelatihan.</p>
      </div>

      <div className="p-8 rounded-3xl shadow-lg border">
        <h3 className="text-2xl font-bold mb-4">Konsultasi Gratis</h3>
        <p>Kami membantu menentukan materi yang paling sesuai sebelum pelatihan dilaksanakan.</p>
      </div>

    </div>

  </div>
</section>
      <section id="program">
        <Courses />
      </section>

      <Testimonials />

      <Contact />

      <Footer />

      <FloatingWhatsApp />

      <ScrollToTop />

    </>
  );
};

export default InhouseTrainingJakarta;
