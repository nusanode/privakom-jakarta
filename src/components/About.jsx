import React from 'react';

const About = () => {
  // Array untuk mengelola daftar keunggulan secara dinamis
  const advantages = [
    "Instruktur berpengalaman",
    "Materi dapat disesuaikan dengan kebutuhan",
    "Training untuk individu, perusahaan & instansi",
    "In House Training & Online Training seluruh Indonesia"
  ];

  return (
    <section
      id="about"
      className="py-16 lg:py-28 bg-white relative w-full overflow-hidden"
    >
      <div className="px-6 lg:px-12 max-w-8xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

        {/* =========================
            SISI KIRI: MEDIA & KARTU INFORMASI
        ========================== */}
        <div className="lg:w-1/2 w-full">

          {/* GAMBAR */}
          <div className="relative rounded-[2rem] overflow-hidden bg-primary bg-opacity-10 border border-gray-100 shadow-xl">
            <img
              src="/foto-1.jpeg"
              alt="Pelatihan komputer Privakom"
              width="900"
              height="650"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* INFORMASI LKP */}
          <div className="mt-5 bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
            <div className="flex items-center gap-4">

              <div className="bg-primary bg-opacity-20 text-dark p-3 rounded-xl shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              <div>
                <p className="text-base font-black text-dark">
                  LKP PRIVAKOM
                </p>
                <p className="text-xs sm:text-sm text-gray-500 font-bold">
                  Lembaga Kursus & Pelatihan Komputer
                </p>
                <span className="inline-block mt-1 bg-primary bg-opacity-20 text-dark px-2.5 py-1 rounded-md text-[11px] font-black">
                  NPSN: K9999519
                </span>
              </div>

            </div>
          </div>

        </div>


        {/* =========================
            SISI KANAN: DESKRIPSI & KEUNGGULAN
        ========================== */}
        <div className="lg:w-1/2 w-full">

          <div className="flex items-center gap-3 mb-5">
            <div className="h-1.5 w-8 bg-primary rounded-full"></div>
            <span className="text-primary font-extrabold tracking-wider text-sm uppercase">
              Tentang Privakom
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-black text-dark mb-7 leading-[1.1] tracking-tight">
            Kursus Komputer{' '}
            <span className="block text-[#00AEEF]">
              Profesional
            </span>
          </h2>

          <p className="text-lg text-gray-600 font-medium mb-5 leading-relaxed">
            Privakom merupakan lembaga XML namespace kursus dan pelatihan komputer
            yang menyediakan program pengembangan keterampilan teknologi
            untuk pelajar, mahasiswa, karyawan, profesional, perusahaan,
            dan instansi.
          </p>

          <p className="text-lg text-gray-600 font-medium mb-8 leading-relaxed">
            Untuk kebutuhan perusahaan, Privakom menyediakan{" "}
            <strong className="text-dark">
              In House Training
            </strong>{" "}
            dengan materi yang dapat disesuaikan dengan kebutuhan tim dan
            bidang pekerjaan. Training dapat dilaksanakan di lokasi
            perusahaan maupun secara online, dengan layanan yang dapat
            menjangkau berbagai wilayah di Indonesia.
          </p>


          {/* DAFTAR KEUNGGULAN (RENDERING LOOP) */}
          <div className="space-y-3 mb-9">
            {advantages.map((text, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div className="bg-white text-primary p-2.5 rounded-xl shadow-sm shrink-0">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-dark font-bold">
                  {text}
                </span>
              </div>
            ))}
          </div>


          {/* TOMBOL CALL TO ACTION */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#courses"
              className="inline-flex justify-center items-center gap-3 bg-primary text-dark font-extrabold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Lihat Program Kursus
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex justify-center items-center gap-3 bg-dark text-white font-extrabold px-8 py-4 rounded-full hover:-translate-y-1 transition-all"
            >
              Hubungi Privakom
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
