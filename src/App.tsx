import React, { useCallback, useEffect, useState } from 'react';
import { Router, useRoute, Link, Switch, Route } from 'wouter';

import DogImagePage from './pages/DogImagePage';
import HomePage from './pages/HomePage';
import BoardTrainPage from './pages/BoardTrainPage';
import Footer from './components/Footer';
import TermsPage from './pages/Terms';
import PrivacyPage from './pages/Privacy';
import ScrollToTop from './components/ScrollToTop';
import BoardingPage from './pages/BoardingPage';
import DayTrainingPage from './pages/DayTrainingPage';
import logo from './assets/logo.svg';
import { useEventAccess } from './hooks/useEventAccess';
// @ts-ignore
import { client } from '../tina/__generated__/client';

// --- Helper Components ---

// SVG for the Hamburger Menu Icon (3 bars)
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

// SVG for the Close Icon (X)
const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// --- HASH ROUTING IMPLEMENTATION ---
/**
 * Custom location hook for wouter to enable Hash Routing (e.g., /#/home).
 * This prevents static servers from requiring complex rewrites.
 */
const useHashLocation = (): [string, (to: string, options?: { replace?: boolean }) => void] => {
  // Get location from window.location.hash. Default to '#/' if hash is empty.
  const [location, setLocation] = useState(window.location.hash.substring(1) || "/");

  // Function to navigate by setting window.location.hash
  const navigate = useCallback((to: string, { replace = false } = {}) => {
    if (replace) {
      window.location.replace(window.location.pathname + '#' + to);
    } else {
      window.location.hash = to;
    }
  }, []);

  // Effect to listen for hash changes (e.g., back/forward button clicks)
  useEffect(() => {
    const handler = () => {
      // We set the location state to the hash part, removing the leading '#'
      setLocation(window.location.hash.substring(1) || "/");
    };
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  // wouter expects a [location, navigate] tuple, where location is the path part (e.g., "/home")
  return [location, navigate];
};


// --- Main App Component ---

const AppContent = () => {

  // Local state for the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [announcement, setAnnouncement] = useState<any>(null);
  const event = useEventAccess();

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const res = await client.queries.home({ relativePath: "home.md" });
        if (res.data.home.announcement) {
          setAnnouncement(res.data.home.announcement);
        }
      } catch (error) {
        console.error("Error fetching announcement:", error);
      }
    };
    fetchAnnouncement();
  }, []);

  // Wouter route matchers for dynamic link styling
  const isActive = (path: string) => useRoute(path)[0];
  
  // Navigation Links
  const navLinks = [
    { name: 'Home', path: '/', external: false },
    { name: 'Gingr', path: 'https://pawhausacademy.portal.gingrapp.com/#/public/login', external: true },
  ];

  return (
    <div className="min-h-screen font-sans w-full overflow-x-hidden">
      
      {/* --- 1. Announcement Bar --- */}
      {/* Sticky top-0 */}
      <header className="bg-pawhaus-blue text-pawhaus-white font-sans py-2 text-center text-sm sticky top-0 z-50 shadow-md">
        <p className="container mx-auto px-4">
          {
            announcement && announcement.defaultText
          }
        </p>
      </header>
      
      {/* --- 2. Main Navigation Bar --- */}
      {/* Sticky below announcement bar - sticks at top-[40px] on mobile, top-0 on desktop */}
      <nav className="bg-white-500 sticky top-[40px] md:top-0 z-40">
        <div className="container mx-auto px-4 md:flex justify-between items-center">
          
          {/* Logo & Mobile Button Group */}
          <div className="flex justify-between items-center">
            {/* Logo - Text is pawhaus-blue, using Graphik font-sans */}
            <Link className="flex items-center gap-2 text-2xl font-extrabold text-pawhaus-blue hover:text-pawhaus-lightblue transition duration-150" href="/">
                  <img src={logo} alt="PawHaus Academy Logo" className='h-21 w-21 md:h-32 md:w-32 outline-none border-none' />
                  <h1 className='font-urbanist text-xl md:text-2xl lg:text-3xl'>PawHaus Academy</h1>
            </Link>

            {/* Hamburger Button (Visible on Mobile) */}
            <button
              className="md:hidden text-pawhaus-blue p-2 rounded-lg hover:bg-pawhaus-white transition cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
          
          {/* Main Menu Links (Desktop) and Mobile Menu (Toggle) */}
          {/* -- MOBILE FULL-SCREEN MENU LOGIC --
            1. Hidden by default on mobile, block on open.
            2. md:static and md:w-auto restores desktop layout.
            3. absolute inset-x-0 ensures full width.
            4. top-[96px] positions it below both sticky headers (48px + 48px approx).
            5. h-[calc(100vh-96px)] makes it stretch to the bottom edge of the viewport.
            6. bg-pawhaus-white provides a clean menu background.
          */}
          <div
            className={`
              w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out
              ${isMenuOpen 
                ? 'block absolute inset-x-0 top-[74px] h-[calc(100vh-96px)] bg-pawhaus-white overflow-y-auto shadow-xl' 
                : 'hidden'
              } 
            `}
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            {/* Nav Links */}
            <div className="md:flex items-center md:space-x-6 space-y-2 md:space-y-0 text-lg md:text-base p-4 md:p-0">
              {navLinks.map((link) => 
                link.external ? (
                  <a 
                    href={link.path} 
                    key={link.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-3 rounded-lg hover:bg-pawhaus-white text-pawhaus-dark hover:text-pawhaus-blue transition duration-150"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link href={link.path} key={link.name} className={`
                      block w-full py-3 px-3 rounded-lg 
                      hover:bg-pawhaus-white 
                      ${isActive(link.path) ? 'active-link' : 'text-pawhaus-dark hover:text-pawhaus-blue'}
                      transition duration-150
                    `}>
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* CTA Button (Desktop & Mobile) */}
            <div className="mt-4 md:mt-0 md:ml-6 p-4 md:p-0">
              <a href="https://pawhausacademy.portal.gingrapp.com/#/public/contact_us" target="_blank" rel="noopener noreferrer" className='w-full md:w-auto bg-cta-action text-white py-2 px-4 rounded-full font-medium hover:bg-blue-500 transition duration-150  cursor-pointer'>
              Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Page Content (Main) --- No padding/container due to full width children*/}
      <main className='width-full'>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/boarding" component={BoardingPage} />
          <Route path="/board-train" component={BoardTrainPage} />
          <Route path="/day-training" component={DayTrainingPage} />
          <Route path="/services" component={DogImagePage} />
          <Route path="/terms-of-service" component={TermsPage} />
          <Route path="/privacy-policy" component={PrivacyPage} />
          <Route>
            <div className="p-8 text-center text-cta-action">404 - Page Not Found</div>
          </Route>
        </Switch>
      </main>
      
      <Footer />
    </div>
  );
};

const App = () => {

  return (
    // We explicitly use Router and pass our custom hash hook to force hash routing
    <div className="min-h-screen w-full font-sans overflow-x-hidden">
      <Router hook={useHashLocation}>
        <ScrollToTop />
        <AppContent />
      </Router>
    </div>
  );
};

export default App;