import { useState, useEffect } from 'react';
import { coursesData, contactData } from '../data/database';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Courses');
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  const [viewMode, setViewMode] = useState('grid');
  const [visibleCount, setVisibleCount] = useState(3); 

  const categories = ['All Courses', ...new Set(coursesData.map(course => course.category))];

  const allFilteredCourses = coursesData.filter(course => {
    const matchesCategory = activeCategory === 'All Courses' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedCourses = allFilteredCourses.slice(0, visibleCount);

  const isShowingAll = visibleCount >= allFilteredCourses.length;

  const handleToggleView = () => {
    if (isShowingAll) {      setVisibleCount(3);
  
      document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
    } else {
  
      setVisibleCount(prevCount => prevCount + 3);
    }
  };

  const handleCategoryClick = (category) => {
    if (activeCategory === category && category !== 'All Courses') {
      setActiveCategory('All Courses');
    } else {
      setActiveCategory(category);
    }
    setVisibleCount(3); 
  };

  const closeModal = () => setSelectedCourse(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    if (selectedCourse) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedCourse]);

  const handleDaftarClick = () => {
    const phoneNumber = contactData.locations[0].whatsapp.replace(/\D/g, ''); 
    const message = `Halo tim Privakom, saya tertarik untuk mendaftar program kursus *${selectedCourse.title}*. Boleh minta informasi lebih lanjut mengenai harga dan jadwalnya?`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  useEffect(() => {
    if (searchTerm) {
      setVisibleCount(allFilteredCourses.length);
    } else {
      setVisibleCount(3);
    }
  }, [searchTerm, allFilteredCourses.length]);

  return (
    <section id="courses" className="px-6 lg:px-12 max-w-8xl mx-auto py-5 w-full relative bg-gray-50/50">
      

      <div className="flex flex-col md:flex-row items-end justify-between mb-16">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
            <span className="text-primary font-extrabold text-sm uppercase tracking-wider">Discover Your Path</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-dark leading-[1.1]">
            Explore<br />Courses.
          </h2>
        </div>
        

        <div className="w-full md:w-auto flex flex-col md:flex-row items-stretch md:items-center gap-4">

          <div className="flex shrink-0 self-end md:self-auto order-2 md:order-1 bg-white p-1 rounded-full shadow-sm border border-gray-100">
            <button 
              onClick={() => setViewMode('grid')} 
              aria-label="Grid view"
              className={`p-3 rounded-full transition-all duration-300 ${viewMode === 'grid' ? 'bg-primary text-dark shadow-md' : 'text-gray-400 hover:text-dark hover:bg-gray-50'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </button>
            <button 
              onClick={() => setViewMode('list')} 
              aria-label="Table view"
              className={`p-3 rounded-full transition-all duration-300 ${viewMode === 'list' ? 'bg-primary text-dark shadow-md' : 'text-gray-400 hover:text-dark hover:bg-gray-50'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            </button>
          </div>

          <div className="relative w-full md:min-w-[300px] order-1 md:order-2 group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <svg className="h-6 w-6 text-gray-400 group-focus-within:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-14 pr-12 py-4 rounded-full border-2 border-transparent bg-white text-dark font-bold placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all shadow-sm" 
              placeholder="Cari kursus impianmu..." 
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-red-500 focus:outline-none transition-colors"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            )}
          </div>
        </div>
      </div>


      <div className="flex flex-wrap gap-3 mb-14">
        {categories.map((category) => (
          <button 
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-6 py-3 font-bold rounded-full text-sm transition-all duration-300 active:scale-95 ${
              activeCategory === category 
                ? 'bg-dark text-white shadow-lg shadow-dark/20' 
                : 'bg-white text-gray-600 hover:text-dark hover:bg-gray-100 border border-gray-100 shadow-sm'
            }`}
          >
            {category}
          </button>
        ))}
      </div>


      {displayedCourses.length > 0 ? (
        viewMode === 'grid' ? (
          

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {displayedCourses.map((course, index) => (
              <div 
                key={course.id} 
                onClick={() => setSelectedCourse(course)}

                className="bg-white rounded-3xl shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 group cursor-pointer flex flex-col border border-gray-100 overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden bg-primary/10 flex items-center justify-center shrink-0 w-full">
                  {index === 0 && activeCategory === 'All Courses' && !searchTerm && (
                    <div className="absolute top-4 right-4 z-20 bg-red-500 text-white rounded-full px-4 py-1 text-xs font-black uppercase tracking-wider animate-bounce shadow-md">
                      Hot 
                    </div>
                  )}

                  <img 
                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" 
                    alt={course.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-dark rounded-full px-4 py-1.5 text-xs font-extrabold uppercase shadow-sm z-10">
                    {course.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <h3 className="text-2xl font-black text-dark mb-3 line-clamp-2 leading-tight">{course.title}</h3>
                  <p className="text-gray-500 font-medium text-base mb-8 line-clamp-2 flex-grow">{course.description}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                    <span className="text-base font-bold text-gray-400 flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      {course.duration}
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCourse(course);
                      }} 
                      className="text-sm font-extrabold text-dark bg-gray-50 rounded-full px-6 py-2.5 hover:bg-primary transition-colors active:scale-95"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        ) : (


          <div className="w-full bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap min-w-[800px]">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 border-b border-gray-100">
                    <th className="py-5 px-6 font-bold uppercase tracking-wider text-xs w-16 text-center">No</th>
                    <th className="py-5 px-6 font-bold uppercase tracking-wider text-xs">Program Kursus</th>
                    <th className="py-5 px-6 font-bold uppercase tracking-wider text-xs">Kategori</th>
                    <th className="py-5 px-6 font-bold uppercase tracking-wider text-xs">Durasi</th>
                    <th className="py-5 px-6 font-bold uppercase tracking-wider text-xs text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {displayedCourses.map((course, index) => (
                    <tr 
                      key={course.id} 
                      onClick={() => setSelectedCourse(course)}
                      className="hover:bg-primary/5 transition-colors cursor-pointer group bg-white"
                    >
                      <td className="py-4 px-6 text-gray-400 font-bold text-center">
                        {index + 1}
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-black text-dark text-lg">
                          {course.title}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="bg-gray-100 text-gray-600 rounded-full px-3 py-1 text-xs font-bold uppercase">
                          {course.category}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2 text-gray-500 font-medium">
                          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          {course.duration}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCourse(course);
                          }}
                          className="text-xs font-extrabold text-dark bg-gray-50 hover:bg-primary rounded-full px-5 py-2.5 transition-all active:scale-95"
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

        <div className="col-span-full py-24 flex flex-col items-center justify-center text-center rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50">
          <div className="bg-primary/20 text-primary p-6 rounded-full mb-6">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-3xl font-black text-dark mb-3">Oops! Tidak Ditemukan</h3>
          <p className="text-gray-500 font-medium text-lg max-w-md">Kami tidak dapat menemukan kursus yang cocok dengan pencarian "{searchTerm}".</p>
          <button onClick={() => setSearchTerm('')} className="mt-8 bg-dark text-white font-bold rounded-full px-8 py-4 shadow-lg shadow-dark/20 hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all">
            Bersihkan Pencarian
          </button>
        </div>
      )}
      

      {!searchTerm && allFilteredCourses.length > 3 && (
        <div className="text-center mt-16">
          <button 
            onClick={handleToggleView}
            className="inline-flex items-center gap-3 bg-white text-dark font-extrabold px-10 py-4 rounded-full shadow-lg shadow-gray-200 hover:shadow-xl hover:-translate-y-1 active:scale-95 transition-all text-base border border-gray-50 group"
          >
            {isShowingAll ? 'Tutup Katalog' : 'Muat Lebih Banyak'}
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${isShowingAll ? '-rotate-90' : 'group-hover:translate-y-1'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isShowingAll ? (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              )}
            </svg>
          </button>
        </div>
      )}


      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/60 backdrop-blur-sm p-4 md:p-8 overflow-y-auto" role="dialog" aria-modal="true">
          <div className="absolute inset-0 cursor-pointer" onClick={closeModal}></div>
          
          <div className="bg-white w-full max-w-3xl relative z-10 rounded-[2.5rem] shadow-2xl animate-[fadeIn_0.2s_ease-out] my-auto overflow-hidden">
            
            <div className="h-64 relative bg-primary/20 flex items-end">
               <img 
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" 
                  alt={selectedCourse.title} 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>
                <h3 className="relative z-10 text-3xl lg:text-5xl font-black text-white p-8 lg:px-10 mb-0 leading-tight drop-shadow-md">
                  {selectedCourse.title}
                </h3>
                
                <button 
                  onClick={closeModal}
                  className="absolute top-6 right-6 bg-white/20 hover:bg-white text-white hover:text-dark backdrop-blur-md rounded-full p-2 transition-all focus:outline-none z-20 shadow-lg active:scale-95"
                  aria-label="Close modal"
                  autoFocus 
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>

            <div className="p-8 lg:p-10">
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-primary text-dark rounded-full px-4 py-1.5 font-extrabold text-sm shadow-sm">
                  {selectedCourse.category}
                </span>
                <span className="bg-gray-100 text-gray-600 rounded-full px-4 py-1.5 font-bold text-sm flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {selectedCourse.duration}
                </span>
              </div>
              
              <h4 className="font-extrabold text-xl text-dark mb-3">Deskripsi Program:</h4>
              <p className="text-gray-600 font-medium text-lg leading-relaxed mb-10">
                {selectedCourse.description}
              </p>
              
              <div className="bg-primary/10 rounded-2xl p-6 mb-8 border border-primary/20">
                <p className="text-dark font-medium text-base flex gap-4 items-start">
                  <span className="text-2xl leading-none">💡</span>
                  Untuk informasi harga kelas reguler, weekend, maupun private, silakan hubungi tim admin kami melalui WhatsApp.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={closeModal} 
                  className="w-full sm:w-1/3 px-6 py-4 font-bold rounded-full text-gray-500 bg-gray-50 hover:bg-gray-100 hover:text-dark transition-colors active:scale-95"
                >
                  Tutup
                </button>
                <button 
                  onClick={handleDaftarClick}
                  className="w-full sm:w-2/3 px-6 py-4 font-extrabold rounded-full bg-primary text-dark shadow-lg shadow-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <span>Daftar via WhatsApp</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/></svg>
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