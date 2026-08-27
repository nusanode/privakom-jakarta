import React from 'react';

const Hero = () => {
  return (
    <main className="relative w-full min-h-[80vh] flex items-center bg-white overflow-hidden">
      
      {/* Background Decorative Blur - Stabil Lintas Browser */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#00AEEF] bg-opacity-20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#FCE300] bg-opacity-20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="px-6 lg:px-12 max-w-8xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center justify-between pt-10 pb-20">
        
        {/* ==========================================
            KOLOM KIRI: HEADLINE & TRUST INDICATOR
        =========================================== */}
        <div className="lg:w-1/2 z-10 py-2">
          
          {/* Label Sub-Headline */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-1.5 w-10 bg-[#00AEEF] rounded-full"></div>
            <span className="text-[#00AEEF] font-extrabold tracking-wider text-sm uppercase">
              Privakom Pusat • Indonesia
            </span>
          </div>

          {/* Headline Utama dengan Tipografi Modern */}
          <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-sans font-black text-dark leading-[1.15] mb-6 tracking-tight drop-shadow-sm">
            Kursus Komputer &amp;{' '}
            <span className="block text-[#00AEEF]">In House Training</span>
          </h1>

          {/* Deskripsi dengan Konteks Lokasi Komersial Terarah */}
          <p className="text-lg lg:text-xl text-gray-700 font-medium mb-10 max-w-lg leading-relaxed bg-white bg-opacity-80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none p-4 lg:p-0 rounded-3xl lg:rounded-none shadow-lg shadow-gray-200/50 lg:shadow-none">
            Privakom menyediakan program pelatihan komputer profesional untuk staf instansi dan perusahaan di Jakarta, Tangerang, dan Karawang. Tingkatkan keahlian Microsoft Office, Excel, Power BI, hingga AutoCAD tim Anda dengan kurikulum yang dikustomisasi.
          </p>

          {/* Tombol Interaksi Utama (CTA) */}
          <div className="mb-12">
            <a
              href="#courses"
              className="inline-flex items-center gap-4 bg-[#FCE300] text-dark rounded-full px-10 py-5 font-extrabold text-base shadow-xl shadow-yellow-400/30 hover:bg-yellow-300 hover:shadow-2xl hover:-translate-y-2 active:scale-95 transition-all duration-300 group" 
            >
              Lihat Program Pelatihan 
              <svg
                className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </div>

          {/* Social Proof Section (Avatar Stack & Statistik Peserta) */}
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl bg-white shadow-xl shadow-gray-200/50 max-w-max border border-gray-50">
            <div className="flex -space-x-4">
              <img
                className="w-14 h-14 rounded-full border-4 border-white object-cover relative z-30 hover:-translate-y-1 transition-transform cursor-pointer shadow-md"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="Peserta Kelas Komputer Privakom"
                width="56"
                height="56"
                loading="lazy"
              />
              <img
                className="w-14 h-14 rounded-full border-4 border-white object-cover relative z-20 hover:-translate-y-1 transition-transform cursor-pointer shadow-md"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
                alt="Alumni Kursus Excel Korporat"
                width="56"
                height="56"
                loading="lazy"
              />
              <img
                className="w-14 h-14 rounded-full border-4 border-white object-cover relative z-10 hover:-translate-y-1 transition-transform cursor-pointer shadow-md"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                alt="Sertifikasi IT Karyawan"
                width="56"
                height="56"
                loading="lazy"
              />
            </div>
            <div>
              <div className="text-3xl font-black text-dark tracking-tight leading-none">
                10.000+
              </div>
              <div className="text-sm font-bold text-gray-500 mt-1">
                Karyawan &amp; Profesional Terlatih
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            KOLOM KANAN: MEDIA UTAMA / LOGO
        =========================================== */}
        <div className="lg:w-1/2 relative mt-12 lg:mt-0 flex justify-end z-10 lg:pl-10">
          <div className="relative rounded-[2.5rem] shadow-2xl shadow-gray-200 bg-white w-full max-w-xl xl:max-w-2xl overflow-hidden group border-4 border-white p-8 min-h-[320px] flex items-center justify-center">
            
            {/* Dekorasi Tambahan Efek Glow di Belakang Aset */}
            <div className="absolute inset-0 bg-[#00AEEF] bg-opacity-5 rounded-[2.5rem] blur-xl pointer-events-none"></div>

            <img
              src="/logo.svg"
              alt="Pelatihan Komputer Perusahaan oleh Privakom"
              width="500"
              height="380"
              fetchPriority="high" // Membantu browser memprioritaskan aset utama di atas lipatan layar (above the fold)
              decoding="async"
              className="w-full h-auto max-h-[260px] object-contain transition-all duration-700 scale-100 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </main>
  );
};

export default Hero;
