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

const LayoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
    <line x1="3" x2="21" y1="9" y2="9"/>
    <line x1="9" x2="9" y1="21" y2="9"/>
  </svg>
);

const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
    <circle cx="9" cy="9" r="2"/>
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
  </svg>
);

const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="17 8 12 3 7 8"/>
    <line x1="12" x2="12" y1="3" y2="15"/>
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M3 6h18"/>
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
  </svg>
);

const LogOutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" x2="9" y1="12" y2="12"/>
  </svg>
);

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-1.22-1.8A2 2 0 0 0 7.53 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M5 12h14"/>
    <path d="M12 5v14"/>
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
    <path d="m15 5 4 4"/>
  </svg>
);

const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <line x1="4" x2="20" y1="8" y2="8"/>
    <line x1="4" x2="20" y1="16" y2="16"/>
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isWorkActive = location.pathname.startsWith('/work') || location.pathname === '/';

  return (
    <>
      <header className="sticky top-0 z-50 bg-white pt-6 pb-6">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-16 lg:gap-32 w-full md:w-auto justify-between md:justify-start">
            <Link to="/" className="text-[20px] md:text-[30px] font-normal tracking-[0.25em] uppercase shrink-0 py-2">
              CHELLAH TUKUTA
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 -mr-2 text-gray-800"
              onClick={() => setMobileMenuOpen(true)}
            >
              <HamburgerIcon />
            </button>

            {/* Desktop Nav */}
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

          <div className="hidden md:flex justify-end shrink-0">
            <a href="#" className="hover:text-gray-600 transition-colors">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white animate-in fade-in duration-300 md:hidden flex flex-col">
          <div className="flex items-center justify-between p-6">
            <Link to="/" className="text-[20px] font-normal tracking-[0.25em] uppercase shrink-0 py-2" onClick={() => setMobileMenuOpen(false)}>
              CHELLAH TUKUTA
            </Link>
            <button 
              className="p-2 -mr-2 text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto px-8 py-8 flex flex-col gap-8 text-xl font-light">
            <div className="flex flex-col gap-6">
              <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">Work</div>
              {categories.map((cat) => (
                <Link 
                  key={cat.path} 
                  to={cat.path} 
                  className="hover:text-gray-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
            
            <div className="h-[1px] w-full bg-gray-100"></div>
            
            <div className="flex flex-col gap-6">
              <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">Info</div>
              <a href="#" className="hover:text-gray-500 transition-colors">About</a>
              <a href="#" className="hover:text-gray-500 transition-colors">Contact</a>
            </div>

            <div className="h-[1px] w-full bg-gray-100"></div>

            <a href="#" className="hover:text-gray-500 transition-colors">Learn</a>
          </div>

          <div className="p-8 pb-12 flex justify-center border-t border-gray-100">
            <a href="#" className="text-gray-800 hover:text-black transition-colors">
              <InstagramIcon />
            </a>
          </div>
        </div>
      )}
    </>
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
      <main className="px-1 md:px-8">
        <div className={`grid grid-cols-2 md:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''} gap-1 md:gap-[30px] max-w-[1600px] mx-auto pb-8`}>
          {/* Column 1 */}
          <div className="flex flex-col gap-1 md:gap-[30px]">
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
          <div className="flex flex-col gap-1 md:gap-[30px]">
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
            <div className="flex flex-col gap-1 md:gap-[30px]">
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
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors z-[101] cursor-pointer"
            onClick={() => setSelectedIndex(null)}
          >
            <CloseIcon />
          </button>

          {/* Previous button */}
          <button 
            className="absolute left-4 md:left-8 p-4 text-white/50 hover:text-white transition-colors z-[101] cursor-pointer"
            onClick={handlePrevious}
          >
            <ChevronLeftIcon />
          </button>

          {/* Main Image */}
          <div className="relative w-full max-w-5xl h-full max-h-[85vh] px-16 md:px-24 flex items-center justify-center cursor-default" onClick={(e) => e.stopPropagation()}>
            <img 
              src={items[selectedIndex].url} 
              alt={items[selectedIndex].title}
              className="max-w-full max-h-full object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* Next button */}
          <button 
            className="absolute right-4 md:right-8 p-4 text-white/50 hover:text-white transition-colors z-[101] cursor-pointer"
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

function WorkCategory() {
  // For now, we'll shuffle the images array to simulate different content per category
  // until we connect Supabase
  const categoryImages = [...images, ...images].sort(() => Math.random() - 0.5);
  
  return (
    <div className="animate-in fade-in duration-500">
      <PhotoGrid items={categoryImages} columns={3} />
    </div>
  );
}

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('portfolio');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-10">
        <div className="p-8 border-b border-gray-100">
          <div className="text-xl font-medium tracking-[0.2em] uppercase">
            CHELLAH
            <br />
            <span className="text-sm text-gray-400 tracking-[0.3em]">ADMIN</span>
          </div>
        </div>

        <nav className="flex-1 py-8 px-4 flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab('portfolio')}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${activeTab === 'portfolio' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <ImageIcon />
            Portfolio
          </button>
          <button 
            onClick={() => setActiveTab('layout')}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${activeTab === 'layout' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <LayoutIcon />
            Page Layout
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium ${activeTab === 'settings' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <SettingsIcon />
            Settings
          </button>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium text-red-600 hover:bg-red-50 w-full">
            <LogOutIcon />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-3xl font-light tracking-wide text-gray-900 mb-2">Portfolio Management</h1>
              <p className="text-gray-500 text-sm">Upload and organize your photography collections.</p>
            </div>
            <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
              <UploadIcon />
              Upload Photos
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white p-2 rounded-xl border border-gray-200 mb-8 inline-flex">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === 'all' ? 'bg-gray-100 text-black' : 'text-gray-500 hover:text-black'}`}
            >
              All Work
            </button>
            {categories.filter(c => c.name !== 'Overview').map(cat => (
              <button 
                key={cat.path}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === cat.name ? 'bg-gray-100 text-black' : 'text-gray-500 hover:text-black'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img) => (
              <div key={img.id} className="group relative aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  <div className="flex justify-end">
                    <button className="p-2 bg-white/10 hover:bg-red-500 text-white rounded-lg backdrop-blur-sm transition-colors">
                      <TrashIcon />
                    </button>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-md mb-2">
                      Fashion
                    </span>
                    <p className="text-white text-sm font-medium truncate">{img.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Routes>
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/*" element={
          <>
            <Header />
            <Routes>
              {categories.map((cat) => (
                <Route 
                  key={cat.path} 
                  path={cat.path} 
                  element={cat.path === '/' ? <Home /> : <WorkCategory />} 
                />
              ))}
            </Routes>
            {/* Footer */}
            <footer className="py-12 px-4 md:px-8 max-w-[1600px] mx-auto flex items-center justify-start text-sm text-gray-800">
              <div>&copy; Chellah Tukuta Photography</div>
            </footer>
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
