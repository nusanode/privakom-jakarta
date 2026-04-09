const Features = () => {
  return (
    
    <section className="px-6 lg:px-12 max-w-8xl mx-auto relative z-20 pt-16 lg:pt-24  w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        
        <div
          tabIndex="0"
          className="bg-primary text-dark p-8 lg:p-10 rounded-3xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-64 lg:h-72 focus:outline-none group cursor-default"
        >
          <h3 className="text-4xl font-black font-serif text-dark z-10 leading-tight">
            Bright
            <br />
            Starts For
            <br />
            Minds.
          </h3>
        
          <svg
            className="absolute bottom-[-20px] right-[-20px] w-48 h-48 text-dark opacity-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" />
          </svg>
        </div>

      
        <div
          tabIndex="0"
          className="bg-white flex flex-row rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-64 lg:h-72 items-center group focus:outline-none cursor-default overflow-hidden"
        >
 
          <div className="w-1/2 p-6 lg:p-8 flex flex-col justify-center h-full z-10 bg-white">
            <h3 className="text-5xl font-black text-dark mb-2">20+</h3>
         
            <p className="text-gray-500 font-bold text-sm mb-6 leading-relaxed">
              Learning
              <br />
              Activities
            </p>
         
            <a
              href="#courses"
              className="text-dark font-extrabold text-sm bg-gray-50 hover:bg-primary rounded-full inline-flex items-center gap-2 w-max px-4 py-2 transition-all outline-none active:scale-95"
            >
              Join Now
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </a>
          </div>
          <div className="w-1/2 h-full relative overflow-hidden bg-primary/10">
    
            <img
              loading="lazy"
              src="foto-1.jpeg"
              alt="Student learning"
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            />
          </div>
        </div>

    
        <div
          tabIndex="0"
          className="bg-dark text-white p-8 lg:p-10 rounded-3xl shadow-xl shadow-dark/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-64 lg:h-72 focus:outline-none group cursor-default relative overflow-hidden"
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-6xl font-black tracking-tight text-white">
                50+
              </h3>
     
              <div className="p-3 rounded-2xl bg-white/10 group-hover:bg-primary group-hover:text-dark text-white transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-6">
                <svg
                  className="w-6 h-6 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3L22 4"
                  />
                </svg>
              </div>
            </div>
            
            <p className="text-sm font-bold text-gray-300 mt-6">
              Expert Instructors
            </p>
          </div>
          
          <p className="text-sm text-gray-400 font-medium mt-2 leading-relaxed border-t border-gray-700/50 pt-4">
            Industry professionals guiding your educational journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;