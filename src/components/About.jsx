const About = () => {
  return (
    <section
      id="about"
      className="py-5 lg:py-32 bg-white relative w-full overflow-hidden"
    >
      <div className="px-6 lg:px-12 max-w-8xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

        <div className="lg:w-1/2 relative w-full group mt-10 lg:mt-0 z-10">

          <div className="relative rounded-[2.5rem] shadow-2xl shadow-primary/20 bg-primary/10 z-10 overflow-hidden border-4 border-white">
            <img
              src="foto-1.jpeg"
              alt="Siswa belajar di Privakom"
              loading="lazy"
    
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

   
          <div className="absolute -bottom-8 -right-4 lg:-bottom-12 lg:-right-12 bg-white p-6 lg:p-8 rounded-3xl shadow-xl shadow-gray-200/60 z-20 transition-transform duration-300 hover:-translate-y-2 border border-gray-50">
            <div className="flex items-center gap-5">
         
              <div className="bg-primary/20 text-primary p-4 rounded-2xl group-hover:scale-110 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
                <p className="text-2xl font-black text-dark tracking-tight">
                  Certified
                </p>
                <p className="text-sm font-bold text-gray-500 capitalize">
                  Institution
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="lg:w-1/2 w-full py-8 mt-12 lg:mt-0 z-10">
      
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1.5 w-8 bg-primary rounded-full"></div>
            <span className="text-primary font-extrabold tracking-wider text-sm uppercase">
              About Privakom
            </span>
          </div>

          {/* Judul Font Ramah */}
          <h2 className="text-5xl lg:text-7xl font-black text-dark mb-8 leading-[1.1] drop-shadow-sm">
            Empowering The Next Generation.
          </h2>

       
          <p className="text-xl lg:text-2xl text-gray-600 font-medium mb-6 leading-relaxed">
            Di Privakom, kami percaya bahwa proses belajar harus terasa menarik
            dan menginspirasi. Kurikulum inovatif kami dirancang untuk
            membangkitkan rasa ingin tahu.
          </p>
          <p className="text-xl lg:text-2xl text-gray-600 font-medium mb-12 leading-relaxed">
            Membangun keterampilan praktis menggunakan metode interaktif modern.
          </p>

        
          <ul className="space-y-4 mb-14">
            <li className="flex items-center gap-4 rounded-2xl p-4 bg-gray-50 border border-gray-100 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 cursor-default group/list">
              <div className="text-primary bg-white p-2 rounded-xl shadow-sm group-hover/list:scale-110 transition-transform">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="text-dark font-bold text-lg">
                Interactive Learning
              </span>
            </li>
            <li className="flex items-center gap-4 rounded-2xl p-4 bg-gray-50 border border-gray-100 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 cursor-default group/list">
              <div className="text-primary bg-white p-2 rounded-xl shadow-sm group-hover/list:scale-110 transition-transform">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="text-dark font-bold text-lg">
                Progress Tracking
              </span>
            </li>
            <li className="flex items-center gap-4 rounded-2xl p-4 bg-gray-50 border border-gray-100 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300 cursor-default group/list">
              <div className="text-primary bg-white p-2 rounded-xl shadow-sm group-hover/list:scale-110 transition-transform">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <span className="text-dark font-bold text-lg">
                Expert Curriculum
              </span>
            </li>
          </ul>


          <a
            href="#courses"
            className="inline-flex items-center gap-3 bg-primary text-dark font-extrabold px-10 py-4 rounded-full shadow-lg shadow-primary/40 hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all text-base group"
          >
            Learn More
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
      </div>
    </section>
  );
};

export default About;