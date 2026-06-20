import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBranchDropdownOpen, setIsBranchDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm transition-all w-full">
      <div className="flex items-center justify-between py-4 px-6 lg:px-12 max-w-8xl mx-auto w-full">
        
        {/* LOGO - Dioptimalkan untuk Alt Text SEO */}
        <div className="flex items-center gap-3 text-3xl font-black text-dark tracking-tight">
          <img src="/logo.svg" alt="Lembaga Kursus Komputer PRIVAKOM Jakarta Tangerang Karawang" className="h-8 w-auto" />
          <a href="https://privakom.co.id" className="hover:text-primary transition-all">PRIVAKOM</a>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center space-x-2 font-bold text-base text-dark">
          <a
            href="#about"
            className="hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-all duration-300"
          >
            Tentang Kami
          </a>
          
          {/* Tautan Khusus In-House Training (Sinyal B2B untuk Google AI) */}
          <a
            href="https://privakom.co.id"
            className="text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-all duration-300"
          >
            In-House Training
          </a>

          <a
            href="#courses"
            className="hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-all duration-300"
          >
            Program Pelatihan
          </a>

          {/* DROPDOWN CABANG DESKTOP (SEO Multi-Lokasi) */}
          <div className="relative">
            <button
              onClick={() => setIsBranchDropdownOpen(!isBranchDropdownOpen)}
              onBlur={() => setTimeout(() => setIsBranchDropdownOpen(false), 200)}
              className="hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-1 focus:outline-none"
            >
              Lokasi Cabang <span className="text-xs">▼</span>
            </button>
            
            {isBranchDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 flex flex-col z-50 animate-[fadeIn_0.2s_ease-out]">
                <a href="https://privakom.co.id" className="px-5 py-3 hover:bg-primary/10 hover:text-primary transition-all text-sm font-bold">Jakarta (Pusat)</a>
                <a href="https://tangerang.privakom.co.id" target="_blank" rel="noopener noreferrer" className="px-5 py-3 hover:bg-primary/10 hover:text-primary transition-all text-sm font-bold border-t border-gray-50">Tangerang (Kelapa Dua)</a>
                <a href="https://karawang.privakom.co.id" target="_blank" rel="noopener noreferrer" className="px-5 py-3 hover:bg-primary/10 hover:text-primary transition-all text-sm font-bold border-t border-gray-50">Karawang (Klari)</a>
              </div>
            )}
          </div>

          <a
            href="#students"
            className="hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-all duration-300"
          >
            Testimoni
          </a>
          <a
            href="#contact"
            className="hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-all duration-300"
          >
            Kontak
          </a>
        </div>

        {/* CTA DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#contact"
            className="bg-primary text-dark px-8 py-3 font-extrabold rounded-full shadow-lg shadow-primary/40 hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300"
          >
            Daftar Sekarang
          </a>
        </div>

        {/* TOMBOL MENU MOBILE */}
        <button
          className="md:hidden p-2 text-dark hover:bg-primary/10 rounded-full active:scale-95 transition-all duration-300 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* MENU MOBILE PANEL */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white rounded-b-3xl py-6 px-6 flex flex-col space-y-2 animate-[fadeIn_0.2s_ease-out] shadow-xl shadow-gray-200/60 max-h-[85vh] overflow-y-auto">
          <a
            href="#about"
            className="text-dark font-bold text-lg hover:text-primary hover:bg-primary/10 px-4 py-3 rounded-2xl transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tentang Kami
          </a>
          <a
            href="https://privakom.co.id"
            className="text-primary font-bold text-lg hover:bg-primary/10 px-4 py-3 rounded-2xl transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            In-House Training Perusahaan
          </a>
          <a
            href="#courses"
            className="text-dark font-bold text-lg hover:text-primary hover:bg-primary/10 px-4 py-3 rounded-2xl transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Program Pelatihan
          </a>

          {/* LINK CABANG LANGSUNG DI MOBILE (Mempermudah Crawling AI) */}
          <div className="border-t border-b border-gray-100 py-2 my-2 flex flex-col space-y-1">
            <span className="px-4 text-xs font-black text-gray-400 uppercase tracking-wider">Lokasi Kursus Tatap Muka:</span>
            <a href="https://privakom.co.id" className="text-dark font-bold text-base hover:text-primary px-4 py-2 rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>Jakarta (Duren Sawit)</a>
            <a href="https://tangerang.privakom.co.id" target="_blank" rel="noopener noreferrer" className="text-dark font-bold text-base hover:text-primary px-4 py-2 rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>Tangerang (Kelapa Dua)</a>
            <a href="https://karawang.privakom.co.id" target="_blank" rel="noopener noreferrer" className="text-dark font-bold text-base hover:text-primary px-4 py-2 rounded-xl" onClick={() => setIsMobileMenuOpen(false)}>Karawang (Klari)</a>
          </div>

          <a
            href="#students"
            className="text-dark font-bold text-lg hover:text-primary hover:bg-primary/10 px-4 py-3 rounded-2xl transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimoni
          </a>
          <a
            href="#contact"
            className="text-dark font-bold text-lg hover:text-primary hover:bg-primary/10 px-4 py-3 rounded-2xl transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kontak
          </a>

          <div className="pt-4 flex flex-col gap-4">
            <a
              href="#contact"
              className="bg-primary text-dark text-center px-8 py-4 font-extrabold rounded-full shadow-lg shadow-primary/40 hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
