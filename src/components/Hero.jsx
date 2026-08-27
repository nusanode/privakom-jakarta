const Hero = () => {
  return (
    <main className="relative w-full min-h-[75vh] flex items-center bg-white overflow-hidden">

      {/* Decorative Background - ringan, tanpa gambar tambahan */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-[#00AEEF]/15 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-[#FCE300]/15 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="px-6 lg:px-12 max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 pt-10 pb-16">

        {/* =========================
            KOLOM KIRI
        ========================== */}
        <div className="lg:w-[55%] z-10 py-4">

          {/* Label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-1.5 w-10 bg-[#00AEEF] rounded-full"></div>

            <span className="text-[#00AEEF] font-extrabold tracking-wider text-sm uppercase">
              Privakom Pusat • Indonesia
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-dark leading-[1.08] mb-6 tracking-tight">
            Kursus Komputer &amp; In House Training
            <span className="block text-[#00AEEF]">
              untuk Perusahaan di Indonesia
            </span>
          </h1>

          {/* Deskripsi */}
          <p className="text-lg lg:text-xl text-gray-600 font-medium mb-8 max-w-2xl leading-relaxed">
  Privakom menyediakan kursus komputer profesional secara
  <strong className="text-dark"> offline dan online </strong>
  serta
  <strong className="text-dark"> In House Training perusahaan </strong>
  dengan materi yang dapat disesuaikan dengan kebutuhan peserta
  dan tim. Layanan pelatihan tersedia untuk peserta individu maupun
  perusahaan di seluruh Indonesia.
</p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">

            <a
              href="#courses"
              className="inline-flex justify-center items-center gap-3 bg-[#FCE300] text-dark rounded-full px-8 py-4 font-extrabold text-base shadow-lg shadow-yellow-400/20 hover:bg-yellow-300 hover:-translate-y-1 active:scale-95 transition-all duration-300"
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
              className="inline-flex justify-center items-center gap-3 bg-white text-dark border-2 border-gray-200 rounded-full px-8 py-4 font-extrabold text-base hover:border-[#00AEEF] hover:text-[#00AEEF] active:scale-95 transition-all duration-300"
            >
              Hubungi Privakom
            </a>

          </div>

          {/* Trust / Social Proof */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">

            <div>
              <div className="text-3xl font-black text-dark">
                20+
              </div>

              <div className="text-sm font-bold text-gray-500">
                Program Pelatihan
              </div>
            </div>

            <div className="h-10 w-px bg-gray-200 hidden sm:block"></div>

            <div>
              <div className="text-3xl font-black text-dark">
                50+
              </div>

              <div className="text-sm font-bold text-gray-500">
                Instruktur Profesional
              </div>
            </div>

            <div className="h-10 w-px bg-gray-200 hidden sm:block"></div>

            <div>
              <div className="text-3xl font-black text-dark">
                🇮🇩
              </div>

              <div className="text-sm font-bold text-gray-500">
                Layanan Seluruh Indonesia
              </div>
            </div>

          </div>
        </div>


        {/* =========================
            KOLOM KANAN
        ========================== */}
        <div className="lg:w-[45%] w-full relative flex justify-center lg:justify-end z-10">

          <div className="relative w-full max-w-xl">

            {/* Glow */}
            <div className="absolute inset-0 bg-[#00AEEF]/10 rounded-[2.5rem] blur-2xl"></div>

            {/* Logo / Visual */}
            <div className="relative rounded-[2rem] overflow-hidden bg-white border-4 border-white shadow-xl">

              <img
                src="/logo.svg"
                alt="Privakom - Kursus Komputer dan In House Training Perusahaan"
                width="600"
                height="500"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-contain p-6"
              />

            </div>

            {/* Badge */}
            <div className="absolute -bottom-5 -left-3 sm:left-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4">

              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Layanan Pelatihan
              </div>

              <div className="text-lg font-black text-dark">
                Offline • In House • Custom
              </div>

            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default Hero;
