const Hero = () => {

  return (

    



   

    <h1 className="text-6xl lg:text-[7rem] font-black text-dark leading-[1.05] mb-6">
  PRIVAKOM
</h1>

<p className="text-[#00AEEF] font-bold uppercase tracking-[4px] mb-4">
  Learning • Technology • Innovation
</p>

<p className="text-xl lg:text-2xl text-gray-700 font-medium mb-12 max-w-xl leading-relaxed">
  Pusat pelatihan komputer dan pengembangan keterampilan digital
  untuk individu, profesional, dan perusahaan.
</p>



          <a

            href="#courses"

            className="inline-flex items-center gap-4 bg-dark text-white rounded-full px-10 py-5 font-extrabold text-base shadow-xl shadow-dark/20 hover:shadow-2xl hover:-translate-y-2 active:scale-95 transition-all duration-300 group"

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



          <div className="flex flex-col sm:flex-row items-center gap-6 mt-16 p-6 rounded-3xl bg-white shadow-xl shadow-primary/20 max-w-max border border-gray-50">

            <div className="flex -space-x-4">



              <img

                className="w-16 h-16 rounded-full border-4 border-white object-cover relative z-30 hover:-translate-y-1 transition-transform cursor-pointer shadow-md"

                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"

                alt="Student"

              />

              <img

                className="w-16 h-16 rounded-full border-4 border-white object-cover relative z-20 hover:-translate-y-1 transition-transform cursor-pointer shadow-md"

                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"

                alt="Student"

              />

              <img

                className="w-16 h-16 rounded-full border-4 border-white object-cover relative z-10 hover:-translate-y-1 transition-transform cursor-pointer shadow-md"

                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"

                alt="Student"

              />

            </div>

            <div>

              <div className="text-4xl font-black text-dark tracking-tight leading-none">

                500+

              </div>

              <div className="text-sm font-bold text-gray-500 mt-1">

                Happy Students

              </div>

            </div>

          </div>

        </div>





        <div className="lg:w-1/2 relative mt-16 lg:mt-0 flex justify-end z-10 lg:pl-10">



          <div className="relative mb-8 rounded-[2.5rem] shadow-2xl shadow-primary/40 bg-white w-full max-w-2xl xl:max-w-3xl overflow-hidden group border-4 border-white">

            <img

              src="logo.svg"

              alt="Graduate"

          

              className="w-full h-auto object-cover transition-all duration-700 scale-100 group-hover:scale-105"

            />





          </div>

        </div>

      </div>

    </main>

  );

};



export default Hero;
