import { contactData } from '../data/database';

const Contact = () => {
  const jakartaBranch = contactData.locations.find((loc) => loc.id === "jkt");

  return (
    <section
      id="contact"
      className="px-6 lg:px-12 max-w-8xl mx-auto py-24 w-full bg-gray-50/50"
    >
      <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 flex flex-col md:flex-row relative overflow-hidden border border-gray-100">
        <div className="bg-dark text-white p-10 lg:p-14 md:w-5/12 flex flex-col justify-between relative overflow-hidden">
          <div className="z-10 relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1.5 w-8 bg-primary rounded-full"></div>
              <span className="text-primary font-extrabold tracking-wider text-sm uppercase">
                Our Location
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight drop-shadow-md">
              Visit Our
              <br />
              Center.
            </h2>
            <p className="text-gray-400 font-medium text-lg mb-12 leading-relaxed">
              Find our learning center in Jakarta or contact us directly.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl border bg-primary border-primary text-dark shadow-lg shadow-primary/30 transform">
                <div className="p-3 rounded-xl shrink-0 transition-colors bg-white/40 text-dark shadow-sm">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-black text-xl tracking-wide mb-1 transition-colors text-dark">
                    Privakom {jakartaBranch.city}
                  </h4>
                  <p className="text-sm leading-relaxed mb-4 line-clamp-2 font-medium text-dark/80">
                    {jakartaBranch.address}
                  </p>

                  <div className="flex items-center gap-2 font-bold">
                    <svg
                      className="w-5 h-5 text-dark"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <a
                      href={`https://wa.me/${jakartaBranch.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm uppercase tracking-widest hover:underline text-dark"
                    >
                      {jakartaBranch.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[-100px] left-[-50px] w-80 h-80 bg-primary/10 rounded-full pointer-events-none blur-3xl"></div>
        </div>

        <div className="md:w-7/12 bg-white relative p-4 lg:p-8 min-h-[500px] lg:min-h-full flex items-center justify-center z-10">
          <div className="relative w-full h-[400px] lg:h-full rounded-[2rem] shadow-lg shadow-gray-200/50 overflow-hidden bg-gray-100 border-4 border-white">
            <div className="w-full h-full relative">
              <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-md flex items-center gap-3 pointer-events-none border border-gray-100">
                <span className="w-3 h-3 bg-primary rounded-full animate-pulse shadow-sm shadow-primary"></span>
                <span className="font-extrabold text-dark text-sm tracking-wider uppercase">
                  Privakom {jakartaBranch.city}
                </span>
              </div>

              <iframe
                title={`Peta Lokasi Privakom ${jakartaBranch.city}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(jakartaBranch.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 transition-transform duration-700 hover:scale-105"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;