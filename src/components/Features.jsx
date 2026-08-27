const Features = () => {
  return (
    <section
      className="px-6 lg:px-12 max-w-8xl mx-auto relative z-20 pt-10 lg:pt-16 w-full"
      aria-label="Keunggulan Privakom"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

        {/* CARD 1 */}
        <div className="bg-primary text-dark p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden min-h-[240px] flex flex-col justify-between">

          <div className="relative z-10">
            <span className="text-sm font-black uppercase tracking-wider opacity-70">
              Privakom
            </span>

            <h2 className="text-3xl lg:text-4xl font-black mt-3 leading-tight">
              Belajar.
              <br />
              Berkembang.
              <br />
              Berprestasi.
            </h2>
          </div>

          <p className="relative z-10 text-sm font-bold mt-6 max-w-xs">
            Pelatihan komputer yang dirancang untuk kebutuhan dunia kerja.
          </p>

          {/* Dekorasi CSS ringan */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full border-[30px] border-dark/5"></div>
        </div>


        {/* CARD 2 */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[240px] overflow-hidden">

          <div className="p-8 lg:p-10 h-full flex flex-col justify-between">

            <div>
              <span className="text-[#00AEEF] text-sm font-black uppercase tracking-wider">
                Program
              </span>

              <div className="text-5xl lg:text-6xl font-black text-dark mt-3">
                20+
              </div>

              <h2 className="text-xl font-black text-dark mt-2">
                Program Pelatihan
              </h2>

              <p className="text-gray-500 font-medium text-sm mt-3 leading-relaxed">
                Microsoft Office, Excel, Power BI, AutoCAD,
                Accounting, Desain Grafis, Programming,
                Networking, Cyber Security dan lainnya.
              </p>
            </div>

            <a
              href="#courses"
              className="inline-flex items-center gap-2 text-dark font-extrabold text-sm mt-6 w-max bg-gray-50 hover:bg-primary px-5 py-2.5 rounded-full transition-all"
            >
              Lihat Program

              <svg
                className="w-4 h-4"
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

          </div>
        </div>


        {/* CARD 3 */}
        <div className="bg-dark text-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 min-h-[240px] flex flex-col justify-between relative overflow-hidden">

          <div className="relative z-10">

            <span className="text-primary text-sm font-black uppercase tracking-wider">
              Corporate Training
            </span>

            <div className="text-4xl lg:text-5xl font-black mt-3">
              Nasional
            </div>

            <h2 className="text-xl font-black mt-2">
              In House Training
            </h2>

            <p className="text-gray-400 font-medium text-sm mt-4 leading-relaxed">
              Privakom dapat mengirim trainer ke lokasi perusahaan
              di berbagai wilayah Indonesia sesuai kebutuhan pelatihan.
            </p>

          </div>

          <a
            href="#contact"
            className="relative z-10 inline-flex items-center gap-2 text-dark bg-primary hover:bg-yellow-300 font-extrabold text-sm mt-6 w-max px-5 py-2.5 rounded-full transition-all"
          >
            Konsultasi Training

            <svg
              className="w-4 h-4"
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

          {/* Dekorasi ringan */}
          <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full border-[30px] border-white/5"></div>

        </div>

      </div>
    </section>
  );
};

export default Features;
