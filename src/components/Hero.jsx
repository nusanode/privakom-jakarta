const Hero = () => {
  return (
    <main className="relative w-full min-h-[75vh] flex items-center bg-white overflow-hidden">

      {/* Background dekorasi ringan */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-[#FCE300]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="px-6 lg:px-12 max-w-8xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-16 lg:py-20">

        {/* KIRI */}
        <div className="w-full lg:w-1/2">

          <div className="flex items-center gap-3 mb-6">
            <div className="h-1.5 w-10 bg-[#00AEEF] rounded-full"></div>

            <span className="text-[#00AEEF] font-extrabold text-sm uppercase tracking-wider">
              Privakom Learning Center
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-dark leading-[1.08] tracking-tight mb-6">
            Kursus Komputer &amp;
            <span className="block text-[#00AEEF]">
              In House Training
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl mb-8">
            Pelatihan komputer profesional untuk individu, perusahaan,
            dan instansi. Privakom menyediakan program Microsoft Office,
            Excel, Power BI, AutoCAD, Accounting, Desain Grafis,
            Web Programming, Teknisi Komputer hingga Cyber Security.
          </p>

          <p className="text-base lg:text-lg text-gray-500 font-medium leading-relaxed max-w-2xl mb-10">
            Untuk kebutuhan perusahaan, <strong className="text-dark">
            In House Training</strong> dapat diselenggarakan secara
            custom sesuai kebutuhan dan dapat dilaksanakan di lokasi
            perusahaan di berbagai wilayah Indonesia.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href="#courses"
              className="inline-flex justify-center items-center gap-3 bg-[#FCE300] text-dark font-extrabold px-8 py-4 rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Lihat Program Pelatihan

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
              className="inline-flex justify-center items-center gap-3 bg-dark text-white font-extrabold px-8 py-4 rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Hubungi Privakom
            </a>

          </div>

          {/* TRUST */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-10 pt-8 border-t border-gray-100">

            <div>
              <div className="text-3xl font-black text-dark">
                20+
              </div>
              <div className="text-sm font-bold text-gray-500">
                Program Pelatihan
              </div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-gray-200"></div>

            <div>
              <div className="text-3xl font-black text-dark">
                50+
              </div>
              <div className="text-sm font-bold text-gray-500">
                Instruktur Profesional
              </div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-gray-200"></div>

            <div>
              <div className="text-3xl font-black text-dark">
                Nasional
              </div>
              <div className="text-sm font-bold text-gray-500">
                Jangkauan In House Training
              </div>
            </div>

          </div>

        </div>

        {/* KANAN */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

          <div className="relative w-full max-w-xl">

            <div className="absolute -top-5 -right-5 w-24 h-24 bg-[#FCE300] rounded-3xl -z-10"></div>
            <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-[#00AEEF]/20 rounded-full -z-10"></div>

            <div className="relative bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">

              <img
                src="/images/privakom-corporate-training.jpg"
                alt="In House Training Komputer Privakom untuk perusahaan"
                width="800"
                height="600"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-cover"
              />

              <div className="p-6 lg:p-8">

                <div className="inline-flex items-center gap-2 bg-[#FCE300]/20 text-dark px-4 py-2 rounded-full text-sm font-extrabold mb-4">
                  <span className="w-2.5 h-2.5 bg-[#00AEEF] rounded-full"></span>
                  In House Training
                </div>

                <h2 className="text-2xl lg:text-3xl font-black text-dark mb-3">
                  Pelatihan Komputer untuk Perusahaan
                </h2>

                <p className="text-gray-500 font-medium leading-relaxed">
                  Program pelatihan dapat disesuaikan dengan kebutuhan
                  perusahaan dan dilaksanakan di lokasi perusahaan.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </main>
  );
};

export default Hero;
