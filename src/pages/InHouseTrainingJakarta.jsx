import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import ScrollToTop from "../components/ScrollToTop";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";

const InHouseTrainingJakarta = () => {
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
      <section id="program" className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    <div className="text-center mb-16">
      <span className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full font-bold">
        Program Pelatihan
      </span>

      <h2 className="text-4xl lg:text-5xl font-black text-dark mt-6">
        Program In House Training Jakarta
      </h2>

      <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
        Privakom menyediakan berbagai program pelatihan yang dapat disesuaikan
        dengan kebutuhan perusahaan, instansi pemerintah, BUMN, sekolah,
        universitas, maupun organisasi.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="bg-white rounded-3xl shadow-lg p-8 border">
        <h3 className="text-2xl font-bold mb-4">
          Microsoft Office
        </h3>

        <p className="text-gray-600 leading-8">
          Training Microsoft Word, Excel, dan PowerPoint untuk meningkatkan
          produktivitas administrasi dan pekerjaan kantor.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 border">
        <h3 className="text-2xl font-bold mb-4">
          Microsoft Excel
        </h3>

        <p className="text-gray-600 leading-8">
          Excel Basic, Intermediate, Advanced, Dashboard, VBA Macro,
          hingga Power Query dan Power Pivot.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 border">
        <h3 className="text-2xl font-bold mb-4">
          Microsoft Power BI
        </h3>

        <p className="text-gray-600 leading-8">
          Visualisasi data, dashboard interaktif,
          business intelligence dan analisis data perusahaan.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 border">
        <h3 className="text-2xl font-bold mb-4">
          AutoCAD
        </h3>

        <p className="text-gray-600 leading-8">
          AutoCAD 2D, AutoCAD 3D,
          SketchUp, hingga desain teknik profesional.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 border">
        <h3 className="text-2xl font-bold mb-4">
          Teknisi Komputer & Networking
        </h3>

        <p className="text-gray-600 leading-8">
          Pelatihan hardware, software,
          troubleshooting komputer,
          jaringan LAN serta Mikrotik.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8 border">
        <h3 className="text-2xl font-bold mb-4">
          Cyber Security
        </h3>

        <p className="text-gray-600 leading-8">
          Pelatihan keamanan informasi,
          keamanan jaringan,
          dan cyber awareness untuk perusahaan.
        </p>
      </div>

    </div>

  </div>
</section>
      </section>
    <section className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-6 lg:px-12">

    <span className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full font-bold mb-6">
      Artikel
    </span>

    <h2 className="text-4xl lg:text-5xl font-black text-dark mb-10 leading-tight">
      Mengapa In House Training Jakarta Menjadi Investasi Terbaik untuk Perusahaan?
    </h2>

    <div className="space-y-8 text-lg text-gray-700 leading-9">

      <p>
        Di era transformasi digital, kemampuan sumber daya manusia menjadi salah
        satu faktor yang menentukan keberhasilan perusahaan. Banyak organisasi di
        Jakarta mulai berinvestasi pada program <strong>In House Training</strong>
        untuk meningkatkan kompetensi karyawan agar mampu bekerja lebih produktif,
        efisien, dan mengikuti perkembangan teknologi.
      </p>

      <p>
        Privakom hadir sebagai penyedia <strong>Corporate Training Jakarta</strong>
        yang telah membantu berbagai perusahaan, instansi pemerintah, sekolah,
        universitas, hingga BUMN dalam menyelenggarakan pelatihan komputer
        profesional. Program kami dirancang fleksibel sehingga materi dapat
        disesuaikan dengan kebutuhan masing-masing perusahaan.
      </p>

      <h3 className="text-3xl font-black text-dark">
        Mengapa Memilih In House Training?
      </h3>

      <p>
        Berbeda dengan pelatihan reguler, In House Training memungkinkan seluruh
        materi disesuaikan dengan kebutuhan pekerjaan peserta. Trainer akan fokus
        pada studi kasus yang benar-benar dihadapi perusahaan sehingga hasil
        pelatihan lebih efektif dan langsung dapat diterapkan.
      </p>

      <p>
        Selain lebih efisien dari sisi biaya, pelaksanaan training juga dapat
        dilakukan di kantor perusahaan maupun secara online melalui Microsoft Teams
        atau Zoom. Jadwal pelatihan dapat disesuaikan agar tidak mengganggu
        operasional bisnis.
      </p>

      <h3 className="text-3xl font-black text-dark">
        Program Training yang Paling Banyak Dipilih
      </h3>

      <ul className="list-disc pl-6 space-y-3">
        <li>Microsoft Office untuk Administrasi Perkantoran</li>
        <li>Microsoft Excel Basic hingga Advanced</li>
        <li>Power BI Dashboard & Business Intelligence</li>
        <li>Microsoft PowerPoint Professional</li>
        <li>AutoCAD 2D & 3D</li>
        <li>Web Programming</li>
        <li>Teknisi Komputer & Networking</li>
        <li>Cyber Security Awareness</li>
      </ul>

      <h3 className="text-3xl font-black text-dark">
        Pelatihan yang Disesuaikan dengan Kebutuhan Perusahaan
      </h3>

      <p>
        Tidak semua perusahaan memiliki kebutuhan yang sama. Oleh karena itu,
        Privakom menyediakan kurikulum yang dapat disesuaikan berdasarkan bidang
        usaha, tingkat kemampuan peserta, jumlah peserta, hingga target yang ingin
        dicapai setelah pelatihan selesai.
      </p>

      <p>
        Sebelum pelaksanaan training, tim kami akan melakukan konsultasi untuk
        memahami kebutuhan perusahaan sehingga materi yang diberikan benar-benar
        relevan dengan pekerjaan peserta.
      </p>

      <h3 className="text-3xl font-black text-dark">
        Area Layanan In House Training
      </h3>

      <p>
        Kami melayani pelaksanaan In House Training di seluruh wilayah Jakarta,
        Jakarta Selatan, Jakarta Timur, Jakarta Barat, Jakarta Utara, Jakarta
        Pusat, Bekasi, Tangerang, Depok, Bogor, Karawang, dan kota-kota lainnya
        sesuai kebutuhan perusahaan.
      </p>

      <h3 className="text-3xl font-black text-dark">
        Konsultasikan Kebutuhan Training Perusahaan Anda
      </h3>

      <p>
        Apabila perusahaan Anda membutuhkan pelatihan Microsoft Office, Excel,
        Power BI, AutoCAD, Web Programming, Teknisi Komputer, maupun Cyber
        Security, tim Privakom siap membantu mulai dari penyusunan kurikulum,
        pelaksanaan training, hingga evaluasi hasil belajar peserta.
      </p>

    </div>

  </div>
</section>
    <section className="py-24 bg-slate-50">
  <div className="max-w-5xl mx-auto px-6 lg:px-12">

    <div className="text-center mb-16">
      <span className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full font-bold">
        FAQ
      </span>

      <h2 className="text-4xl lg:text-5xl font-black text-dark mt-6">
        Pertanyaan yang Sering Diajukan
      </h2>
    </div>

    <div className="space-y-8">

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-bold mb-3">
          Apa itu In House Training?
        </h3>
        <p className="text-gray-600 leading-8">
          In House Training adalah pelatihan yang diselenggarakan khusus untuk
          karyawan suatu perusahaan dengan materi yang disesuaikan dengan
          kebutuhan pekerjaan.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-bold mb-3">
          Apakah pelatihan bisa dilakukan di kantor kami?
        </h3>
        <p className="text-gray-600 leading-8">
          Ya. Tim trainer Privakom dapat datang langsung ke lokasi perusahaan
          atau menyelenggarakan pelatihan secara online.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-bold mb-3">
          Berapa minimal jumlah peserta?
        </h3>
        <p className="text-gray-600 leading-8">
          Jumlah peserta dapat disesuaikan dengan kebutuhan perusahaan. Hubungi
          tim kami untuk mendapatkan rekomendasi terbaik.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-bold mb-3">
          Apakah materi dapat disesuaikan?
        </h3>
        <p className="text-gray-600 leading-8">
          Ya. Seluruh materi dapat dikustomisasi sesuai bidang usaha, divisi,
          maupun target kompetensi peserta.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-bold mb-3">
          Apakah peserta mendapatkan sertifikat?
        </h3>
        <p className="text-gray-600 leading-8">
          Ya. Seluruh peserta yang mengikuti pelatihan akan memperoleh
          sertifikat dari Privakom.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-bold mb-3">
          Program apa saja yang tersedia?
        </h3>
        <p className="text-gray-600 leading-8">
          Microsoft Office, Excel, Power BI, PowerPoint, AutoCAD,
          Web Programming, Teknisi Komputer, Networking,
          Cyber Security, dan berbagai pelatihan komputer lainnya.
        </p>
      </div>

    </div>

  </div>
</section>

      <Testimonials />
    <section className="bg-primary py-20">
  <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">

    <h2 className="text-4xl lg:text-6xl font-black text-dark">
      Siap Meningkatkan Kompetensi Tim Anda?
    </h2>

    <p className="mt-8 text-xl text-dark/80 max-w-3xl mx-auto leading-relaxed">
      Konsultasikan kebutuhan In House Training perusahaan Anda bersama tim
      Privakom. Kami akan membantu menyusun program pelatihan yang sesuai
      dengan kebutuhan bisnis dan target kompetensi karyawan.
    </p>

    <div className="flex justify-center flex-wrap gap-5 mt-12">

      <a
        href="https://wa.me/6281234507262"
        className="bg-dark text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition"
      >
        Konsultasi Gratis
      </a>

      <a
        href="#contact"
        className="border-2 border-dark text-dark px-8 py-4 rounded-full font-bold hover:bg-dark hover:text-white transition"
      >
        Minta Proposal
      </a>

    </div>

  </div>
</section>

      <Contact />

      <Footer />

      <FloatingWhatsApp />

      <ScrollToTop />

    </>
  );
};

export default InHouseTrainingJakarta;
