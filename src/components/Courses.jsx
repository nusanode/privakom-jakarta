import { useEffect, useState } from "react";
import { coursesData, contactData } from "../data/database";

const getCourseImage = (category) => {
  const images = {
    "Microsoft Office": "/images/privakom-microsoft-office.jpg",
    "Microsoft Excel": "/images/privakom-microsoft-excel.jpg",
    "PowerPoint": "/images/privakom-powerpoint.jpg",
    "Desain Grafis": "/images/privakom-desain-grafis.jpg",
    "Accounting": "/images/privakom-acounting.jpg",
    "Web Desain & Programming": "/images/privakom-web-programming.jpg",
    "Cad Design & Architecture": "/images/privakom-cad-design.jpg",
    "Technical Computer & Network": "/images/privakom-technical-computer.jpg",
    "Cyber Security": "/images/privakom-cyber-scurity.jpg",
    "Corporate Training": "/images/privakom-corporate-training.jpg",
  };

  return images[category] || "/images/default.jpg";
};

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua Program");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = [
    "Semua Program",
    ...new Set(coursesData.map((course) => course.category)),
  ];

  const filteredCourses = coursesData.filter((course) => {
    const keyword = searchTerm.toLowerCase();

    const matchesCategory =
      activeCategory === "Semua Program" ||
      course.category === activeCategory;

    const matchesSearch =
      course.title.toLowerCase().includes(keyword) ||
      course.description.toLowerCase().includes(keyword) ||
      course.category.toLowerCase().includes(keyword);

    return matchesCategory && matchesSearch;
  });

  const displayedCourses = filteredCourses.slice(0, visibleCount);

  const isShowingAll = visibleCount >= filteredCourses.length;

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setVisibleCount(6);
  };

  const handleToggleView = () => {
    if (isShowingAll) {
      setVisibleCount(6);

      document.getElementById("courses")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      setVisibleCount((prev) => prev + 6);
    }
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (selectedCourse) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCourse]);

  const handleDaftarClick = () => {
    if (!selectedCourse) return;

    const phoneNumber = contactData.locations[0].whatsapp.replace(/\D/g, "");

    const message = `Halo tim Privakom, saya tertarik dengan program *${selectedCourse.title}*. Saya ingin mendapatkan informasi mengenai harga, jadwal, dan pendaftarannya.`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="courses"
      className="px-6 lg:px-12 max-w-8xl mx-auto py-16 lg:py-24 w-full relative bg-gray-50/50"
    >
      {/* =========================
          HEADER
      ========================== */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-8 bg-primary rounded-full"></div>

            <span className="text-primary font-extrabold text-sm uppercase tracking-wider">
              Program Privakom
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-black text-dark leading-[1.1]">
            Program
            <br />
            Pelatihan.
          </h2>

          <p className="text-gray-500 font-medium mt-5 max-w-xl leading-relaxed">
            Pilihan kursus komputer untuk individu serta program
            In House Training yang dapat disesuaikan dengan kebutuhan
            perusahaan dan instansi.
          </p>
        </div>

        {/* SEARCH + VIEW */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">

          <div className="relative w-full sm:min-w-[300px]">

            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(6);
              }}
              placeholder="Cari program..."
              aria-label="Cari program pelatihan"
              className="block w-full pl-13 pr-11 py-4 rounded-full bg-white border border-gray-100 text-dark font-bold placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 shadow-sm transition-all"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setVisibleCount(6);
                }}
                aria-label="Hapus pencarian"
                className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-red-500"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}

          </div>

          <div className="flex self-end bg-white p-1 rounded-full shadow-sm border border-gray-100">

            <button
              type="button"
              onClick={() => setViewMode("grid")}
              aria-label="Tampilan grid"
              className={`p-3 rounded-full transition-all ${
                viewMode === "grid"
                  ? "bg-primary text-dark shadow-md"
                  : "text-gray-400 hover:text-dark"
              }`}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("list")}
              aria-label="Tampilan daftar"
              className={`p-3 rounded-full transition-all ${
                viewMode === "list"
                  ? "bg-primary text-dark shadow-md"
                  : "text-gray-400 hover:text-dark"
              }`}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </button>

          </div>
        </div>
      </div>


      {/* =========================
          CATEGORY
      ========================== */}
      <div className="flex flex-wrap gap-2.5 mb-10">

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryClick(category)}
            className={`px-5 py-2.5 font-bold rounded-full text-sm transition-all ${
              activeCategory === category
                ? "bg-dark text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-100"
            }`}
          >
            {category}
          </button>
        ))}

      </div>


      {/* =========================
          HASIL PENCARIAN
      ========================== */}
      <div className="mb-6 text-sm font-bold text-gray-400">
        Menampilkan{" "}
        <span className="text-dark">
          {filteredCourses.length}
        </span>{" "}
        program
      </div>


      {/* =========================
          GRID
      ========================== */}
      {displayedCourses.length > 0 ? (

        viewMode === "grid" ? (

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

            {displayedCourses.map((course, index) => (

              <article
                key={course.id}
                onClick={() => setSelectedCourse(course)}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col border border-gray-100 overflow-hidden"
              >

                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden bg-gray-100">

                  {index === 0 &&
                    activeCategory === "Semua Program" &&
                    !searchTerm && (
                      <div className="absolute top-4 right-4 z-20 bg-red-500 text-white rounded-full px-3 py-1 text-xs font-black uppercase shadow-md">
                        Populer
                      </div>
                    )}

                  <img
                    src={course.image || getCourseImage(course.category)}
                    alt={`${course.title} - Privakom`}
                    width="600"
                    height="400"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-dark rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase">
                    {course.category}
                  </div>

                </div>


                {/* CONTENT */}
                <div className="p-7 flex flex-col flex-grow">

                  <h3 className="text-xl font-black text-dark mb-3 leading-tight">
                    {course.title}
                  </h3>

                  <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-gray-100">

                    <span className="text-sm font-bold text-gray-400 flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      {course.duration}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCourse(course);
                      }}
                      className="text-xs font-extrabold text-dark bg-gray-50 hover:bg-primary rounded-full px-5 py-2.5 transition-all"
                    >
                      Detail
                    </button>

                  </div>
                </div>

              </article>

            ))}

          </div>

        ) : (

          /* =========================
             LIST
          ========================== */
          <div className="w-full bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden">

            <div className="overflow-x-auto">

              <table className="w-full text-left border-collapse whitespace-nowrap min-w-[760px]">

                <thead>
                  <tr className="bg-gray-50 text-gray-500 border-b border-gray-100">

                    <th className="py-4 px-5 text-xs font-bold uppercase text-center">
                      No
                    </th>

                    <th className="py-4 px-5 text-xs font-bold uppercase">
                      Program
                    </th>

                    <th className="py-4 px-5 text-xs font-bold uppercase">
                      Kategori
                    </th>

                    <th className="py-4 px-5 text-xs font-bold uppercase">
                      Durasi
                    </th>

                    <th className="py-4 px-5 text-xs font-bold uppercase text-center">
                      Aksi
                    </th>

                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">

                  {displayedCourses.map((course, index) => (

                    <tr
                      key={course.id}
                      onClick={() => setSelectedCourse(course)}
                      className="hover:bg-primary/5 transition-colors cursor-pointer"
                    >

                      <td className="py-4 px-5 text-gray-400 font-bold text-center">
                        {index + 1}
                      </td>

                      <td className="py-4 px-5">
                        <div className="font-black text-dark">
                          {course.title}
                        </div>
                      </td>

                      <td className="py-4 px-5">
                        <span className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-xs font-bold">
                          {course.category}
                        </span>
                      </td>

                      <td className="py-4 px-5 text-gray-500 font-medium">
                        {course.duration}
                      </td>

                      <td className="py-4 px-5 text-center">

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCourse(course);
                          }}
                          className="text-xs font-extrabold bg-gray-50 hover:bg-primary text-dark rounded-full px-5 py-2.5"
                        >
                          Detail
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        )

      ) : (

        /* =========================
           TIDAK DITEMUKAN
        ========================== */
        <div className="py-20 flex flex-col items-center justify-center text-center rounded-3xl bg-white border border-gray-100 shadow-lg">

          <div className="bg-primary/20 text-primary p-5 rounded-full mb-5">

            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

          </div>

          <h3 className="text-2xl font-black text-dark mb-2">
            Program Tidak Ditemukan
          </h3>

          <p className="text-gray-500 max-w-md">
            Tidak ada program yang sesuai dengan pencarian Anda.
          </p>

          <button
            type="button"
            onClick={() => {
              setSearchTerm("");
              setActiveCategory("Semua Program");
              setVisibleCount(6);
            }}
            className="mt-6 bg-dark text-white font-bold rounded-full px-7 py-3"
          >
            Reset Pencarian
          </button>

        </div>

      )}


      {/* =========================
          LOAD MORE
      ========================== */}
      {!searchTerm && filteredCourses.length > 6 && (

        <div className="text-center mt-12">

          <button
            type="button"
            onClick={handleToggleView}
            className="inline-flex items-center gap-3 bg-white text-dark font-extrabold px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100"
          >

            {isShowingAll ? "Tutup Katalog" : "Muat Lebih Banyak"}

            <svg
              className={`w-5 h-5 transition-transform ${
                isShowingAll ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M19 9l-7 7-7-7"
              />
            </svg>

          </button>

        </div>

      )}


      {/* =========================
          MODAL DETAIL
      ========================== */}
      {selectedCourse && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark/70 backdrop-blur-sm p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={`Detail ${selectedCourse.title}`}
        >

          <div
            className="absolute inset-0"
            onClick={closeModal}
          ></div>


          <div className="bg-white w-full max-w-2xl relative z-10 rounded-3xl shadow-2xl overflow-hidden my-auto">

            {/* MODAL IMAGE */}
            <div className="relative h-56 sm:h-64 bg-gray-100">

              <img
                src={
                  selectedCourse.image ||
                  getCourseImage(selectedCourse.category)
                }
                alt={`${selectedCourse.title} - Privakom`}
                width="800"
                height="500"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent"></div>

              <h3 className="absolute bottom-6 left-6 right-16 text-2xl sm:text-4xl font-black text-white leading-tight">
                {selectedCourse.title}
              </h3>

              <button
                type="button"
                onClick={closeModal}
                aria-label="Tutup detail program"
                className="absolute top-5 right-5 bg-white/90 text-dark rounded-full p-2.5 hover:bg-white shadow-md"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

            </div>


            {/* MODAL CONTENT */}
            <div className="p-7 lg:p-9">

              <div className="flex flex-wrap gap-2.5 mb-6">

                <span className="bg-primary text-dark rounded-full px-4 py-1.5 font-extrabold text-sm">
                  {selectedCourse.category}
                </span>

                <span className="bg-gray-100 text-gray-600 rounded-full px-4 py-1.5 font-bold text-sm">
                  {selectedCourse.duration}
                </span>

              </div>


              <h4 className="font-black text-lg text-dark mb-2">
                Deskripsi Program
              </h4>

              <p className="text-gray-600 font-medium leading-relaxed mb-7">
                {selectedCourse.description}
              </p>


              {/* CORPORATE MESSAGE */}
              {selectedCourse.category === "Corporate Training" ? (

                <div className="bg-primary/10 rounded-2xl p-5 mb-7 border border-primary/20">

                  <p className="text-dark font-medium leading-relaxed">
                    Program In House Training dapat disesuaikan dengan
                    kebutuhan perusahaan, jumlah peserta, materi,
                    durasi, dan lokasi pelaksanaan. Privakom dapat
                    mengirim trainer ke lokasi perusahaan di berbagai
                    wilayah Indonesia.
                  </p>

                </div>

              ) : (

                <div className="bg-primary/10 rounded-2xl p-5 mb-7 border border-primary/20">

                  <p className="text-dark font-medium">
                    Untuk informasi harga, jadwal, kelas private,
                    maupun kebutuhan training perusahaan, silakan
                    hubungi tim Privakom melalui WhatsApp.
                  </p>

                </div>

              )}


              <div className="flex flex-col sm:flex-row gap-3">

                <button
                  type="button"
                  onClick={handleDaftarClick}
                  className="flex-1 inline-flex justify-center items-center gap-2 bg-primary text-dark font-extrabold px-6 py-4 rounded-full hover:-translate-y-1 shadow-lg transition-all"
                >
                  Hubungi WhatsApp

                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.87 11.87 0 0012.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.15 1.59 5.95L.05 24l6.3-1.65a11.9 11.9 0 005.7 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.43-8.43zM12.06 21.75h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.84 9.84 0 01-1.51-5.23C2.17 6.45 6.6 2.02 12.05 2.02c2.64 0 5.12 1.03 6.99 2.9a9.84 9.84 0 012.9 7c-.01 5.45-4.44 9.83-9.88 9.83z" />
                  </svg>

                </button>

                <button
                  type="button"
                  onClick={closeModal}
                  className="sm:w-32 bg-gray-100 text-dark font-extrabold px-6 py-4 rounded-full hover:bg-gray-200 transition-all"
                >
                  Tutup
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default Courses;
