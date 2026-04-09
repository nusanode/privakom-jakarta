import { useState } from 'react';

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm transition-all w-full">
      <div className="flex items-center justify-between py-4 px-6 lg:px-12 max-w-8xl mx-auto w-full">
      
        <div className="flex items-center gap-3 text-3xl font-black text-dark tracking-tight">
          <img src="/logo.svg" alt="Privakom Logo" className="h-8 w-auto" />
          Privakom
        </div>

        <div className="hidden md:flex items-center space-x-4 font-bold text-base text-dark">
          <a
            href="#about"
            className="hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-all duration-300"
          >
            About Us
          </a>
          <a
            href="#courses"
            className="hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-all duration-300"
          >
            Courses
          </a>
          <a
            href="#students"
            className="hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-all duration-300"
          >
            Students
          </a>
          <a
            href="#contact"
            className="hover:text-primary hover:bg-primary/10 px-4 py-2 rounded-full transition-all duration-300"
          >
            Contact
          </a>
        </div>


        <div className="hidden md:flex items-center gap-6">
       
          <a
            href="#contact"
            className="bg-primary text-dark px-8 py-3 font-extrabold rounded-full shadow-lg shadow-primary/40 hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300"
          >
            Join Now
          </a>
        </div>


        <button
          className="md:hidden p-2 text-dark hover:bg-primary/10 rounded-full active:scale-95 transition-all duration-300 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (

            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
     
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>
      </div>


      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white rounded-b-3xl py-6 px-6 flex flex-col space-y-2 animate-[fadeIn_0.2s_ease-out] shadow-xl shadow-gray-200/60">
          <a
            href="#about"
            className="text-dark font-bold text-lg hover:text-primary hover:bg-primary/10 px-4 py-3 rounded-2xl transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#courses"
            className="text-dark font-bold text-lg hover:text-primary hover:bg-primary/10 px-4 py-3 rounded-2xl transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Courses
          </a>
          <a
            href="#students"
            className="text-dark font-bold text-lg hover:text-primary hover:bg-primary/10 px-4 py-3 rounded-2xl transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Students
          </a>
          <a
            href="#contact"
            className="text-dark font-bold text-lg hover:text-primary hover:bg-primary/10 px-4 py-3 rounded-2xl transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>

          <div className="pt-4 flex flex-col gap-4">
            <a
              href="#contact"
              className="bg-primary text-dark text-center px-8 py-4 font-extrabold rounded-full shadow-lg shadow-primary/40 hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;