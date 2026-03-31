import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

const images = [
  {
    id: 1,
    url: '/639764454_1468959494598842_5756655344725812105_n.jpg',
    title: 'Image 1',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 2,
    url: '/644254854_1474289730732485_6648136011702040516_n.jpg',
    title: 'Image 2',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 3,
    url: '/644525273_1475482270613231_5297810421579979536_n.jpg',
    title: 'Image 3',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 4,
    url: '/645691118_1475600277268097_2344722416496992951_n.jpg',
    title: 'Image 4',
    aspect: 'aspect-square'
  },
  {
    id: 5,
    url: '/645810717_1475934170568041_8624323519301984477_n.jpg',
    title: 'Image 5',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 6,
    url: '/645841121_1475934160568042_9053715471212343844_n.jpg',
    title: 'Image 6',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 7,
    url: '/646150907_1477889887039136_143371578432543019_n.jpg',
    title: 'Image 7',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 8,
    url: '/650927339_1484726436355481_2679182256309977260_n.jpg',
    title: 'Image 8',
    aspect: 'aspect-square'
  },
  {
    id: 9,
    url: '/657555847_1494949078666550_3899572158914238865_n.jpg',
    title: 'Image 9',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 10,
    url: '/657606889_1496307121864079_6440402771908715170_n.jpg',
    title: 'Image 10',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 11,
    url: '/658440593_1498254928335965_2195623851479128307_n.jpg',
    title: 'Image 11',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 12,
    url: '/658903202_1498302384997886_7232378179609964103_n.jpg',
    title: 'Image 12',
    aspect: 'aspect-square'
  },
  {
    id: 13,
    url: '/659065311_1496307088530749_175090912816771592_n.jpg',
    title: 'Image 13',
    aspect: 'aspect-[4/3]'
  },
  {
    id: 14,
    url: '/659108623_1496307158530742_2792254208834579976_n.jpg',
    title: 'Image 14',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 15,
    url: '/659690080_1499493018212156_2105603294658791064_n.jpg',
    title: 'Image 15',
    aspect: 'aspect-[4/5]'
  },
  {
    id: 16,
    url: '/660368370_1499516464876478_1934418821743401070_n.jpg',
    title: 'Image 16',
    aspect: 'aspect-square'
  }
];

const categories = [
  { path: '/', name: 'Overview' },
  { path: '/work/presidential', name: 'Presidential/First Lady' },
  { path: '/work/corporate', name: 'Corporate Portraits' },
  { path: '/work/fashion', name: 'Fashion' },
  { path: '/work/events', name: 'Corporate events' },
  { path: '/work/weddings', name: 'Weddings' },
  { path: '/work/tradition', name: 'Tradition/Culture' },
];

function Header() {
  const location = useLocation();
  const isWorkActive = location.pathname.startsWith('/work') || location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 bg-white pt-6 pb-6">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-16 lg:gap-32">
          <Link to="/" className="text-[30px] font-normal tracking-[0.25em] uppercase shrink-0 py-2">
            CHELLAH TUKUTA
          </Link>
          
          <nav className="hidden md:flex items-center gap-10 text-[15px] h-full">
            <div className="relative group h-full flex items-center py-4 cursor-pointer">
                <div className="relative inline-block">
                  <button className="flex items-center gap-1 hover:text-gray-600 transition-colors pb-0.5 cursor-pointer">
                    Work <ChevronDownIcon />
                  </button>
                  {/* Active indicator line */}
                  {isWorkActive && (
                    <div className="absolute -bottom-1 left-0 w-[calc(100%-20px)] h-[1px] bg-black"></div>
                  )}
                </div>
                <div className="absolute left-0 top-[calc(100%-8px)] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[240px] z-50">
                  <div className="bg-white border border-gray-100 shadow-xl py-4 flex flex-col gap-3">
                    {categories.map((cat) => (
                      <Link key={cat.path} to={cat.path} className="px-6 py-1 hover:text-gray-500 transition-colors text-left text-sm cursor-pointer">
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            <div className="relative group h-full flex items-center py-4 cursor-pointer">
                <button className="flex items-center gap-1 hover:text-gray-600 transition-colors pb-0.5 cursor-pointer">
                  Info <ChevronDownIcon />
                </button>
                <div className="absolute left-0 top-[calc(100%-8px)] pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[200px] z-50">
                  <div className="bg-white border border-gray-100 shadow-xl py-4 flex flex-col gap-3">
                    <a href="#" className="px-6 py-1 hover:text-gray-500 transition-colors text-left text-sm cursor-pointer">About</a>
                    <a href="#" className="px-6 py-1 hover:text-gray-500 transition-colors text-left text-sm cursor-pointer">Contact</a>
                  </div>
                </div>
              </div>
              <div className="h-full flex items-center py-4">
                <button className="hover:text-gray-600 transition-colors pb-0.5 cursor-pointer">
                  Learn
                </button>
              </div>
          </nav>
        </div>

        <div className="flex justify-end shrink-0">
          <a href="#" className="hover:text-gray-600 transition-colors">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </header>
  );
}

function PhotoGrid({ items, columns = 2 }: { items: typeof images, columns?: 2 | 3 }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const col1 = items.filter((_, i) => i % columns === 0);
  const col2 = items.filter((_, i) => i % columns === 1);
  const col3 = columns === 3 ? items.filter((_, i) => i % columns === 2) : [];

  // Handle keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev === null || prev === 0 ? items.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev === null || prev === items.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, items.length]);

  // Lock body scroll when carousel is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedIndex]);

  const handleImageClick = (imgId: number) => {
    const index = items.findIndex(img => img.id === imgId);
    if (index !== -1) setSelectedIndex(index);
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === null || prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === null || prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <main className="px-4 md:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''} gap-4 md:gap-[30px] max-w-[1600px] mx-auto pb-8`}>
          {/* Column 1 */}
          <div className="flex flex-col gap-4 md:gap-[30px]">
            {col1.map((img) => (
              <div 
                key={img.id} 
                className={`relative group overflow-hidden bg-gray-100 ${img.aspect} cursor-zoom-in`}
                onClick={() => handleImageClick(img.id)}
              >
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-4 md:gap-[30px]">
            {col2.map((img) => (
              <div 
                key={img.id} 
                className={`relative group overflow-hidden bg-gray-100 ${img.aspect} cursor-zoom-in`}
                onClick={() => handleImageClick(img.id)}
              >
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
          {/* Column 3 */}
          {columns === 3 && (
            <div className="flex flex-col gap-4 md:gap-[30px]">
              {col3.map((img) => (
                <div 
                  key={img.id} 
                  className={`relative group overflow-hidden bg-gray-100 ${img.aspect} cursor-zoom-in`}
                  onClick={() => handleImageClick(img.id)}
                >
                  <img 
                    src={img.url} 
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Fullscreen Carousel */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-white/90 flex items-center justify-center animate-in fade-in duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 p-2 text-gray-500 hover:text-black transition-colors z-[101] cursor-pointer"
            onClick={() => setSelectedIndex(null)}
          >
            <CloseIcon />
          </button>

          {/* Previous button */}
          <button 
            className="absolute left-4 md:left-8 p-4 text-gray-400 hover:text-black transition-colors z-[101] cursor-pointer"
            onClick={handlePrevious}
          >
            <ChevronLeftIcon />
          </button>

          {/* Main Image */}
          <div className="relative w-full max-w-5xl h-full max-h-[85vh] px-16 md:px-24 flex items-center justify-center cursor-default" onClick={(e) => e.stopPropagation()}>
            <img 
              src={items[selectedIndex].url} 
              alt={items[selectedIndex].title}
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
          </div>

          {/* Next button */}
          <button 
            className="absolute right-4 md:right-8 p-4 text-gray-400 hover:text-black transition-colors z-[101] cursor-pointer"
            onClick={handleNext}
          >
            <ChevronRightIcon />
          </button>
        </div>
      )}
    </>
  );
}

function Home() {
  return (
    <>
      <PhotoGrid items={images} />
      {/* Quote Section */}
      <section className="bg-[#f8f8f8] py-32 md:py-48 px-4 md:px-8 mt-16">
        <div className="max-w-[1600px] mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-[42px] font-normal leading-[1.6] tracking-[0.05em] text-[#111]">
            Real people, real places and real moments.<br />
            Photons reflected from things that actually happened.
          </h2>
        </div>
      </section>
    </>
  );
}

function WorkCategory({ categoryName }: { categoryName: string }) {
  // For now, we'll shuffle the images array to simulate different content per category
  // until we connect Supabase
  const categoryImages = [...images, ...images].sort(() => Math.random() - 0.5);
  
  return (
    <div className="animate-in fade-in duration-500">
      <PhotoGrid items={categoryImages} columns={3} />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Header />
      
      <Routes>
        {categories.map((cat) => (
          <Route 
            key={cat.path} 
            path={cat.path} 
            element={cat.path === '/' ? <Home /> : <WorkCategory categoryName={cat.name} />} 
          />
        ))}
      </Routes>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 max-w-[1600px] mx-auto flex items-center justify-start text-sm text-gray-800">
        <div>&copy; Chellah Tukuta Photography</div>
      </footer>
    </div>
  );
}

export default App;
