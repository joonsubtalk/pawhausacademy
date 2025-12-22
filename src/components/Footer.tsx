import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 bg-pawhaus-dark">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Layout: 1 column on mobile, 3 columns on medium screens+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  pb-8">
          
          {/* COLUMN 1: Header & Paragraph */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold uppercase tracking-wider font-urbanist">
              PawHaus Academy
            </h3>
            <div className="leading-relaxed text-gray-300 max-w-xs space-y-2">
              <p>Morning Pick-Ups and Drop-Offs:<br />7:30am to 9:30am</p>
              <p>Evening Pick-Ups and Drop-offs:<br />5:00pm to 7:00pm</p>
              <p>Admissions Office Hours:<br />9:00am to 5:00pm</p>
            </div>
          </div>

          {/* COLUMN 2: Middle Section (Links) */}
          {/* Note: You didn't specify this column, so I added standard links. */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold uppercase tracking-wider font-urbanist">
              Quick Links
            </h3>
            <ul className="space-y-2 pb-4">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="https://pawhausacademy.portal.gingrapp.com/#/public/login" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
            <h3 className="text-white text-lg font-bold uppercase tracking-wider font-urbanist">
              Services
            </h3>
            <ul className="space-y-2">
              <li><Link href="/boarding" className="hover:text-white transition-colors">Boarding</Link></li>
              <li><Link href="/day-training" className="hover:text-white transition-colors">Day Training</Link></li>
              <li><Link href="/board-train" className="hover:text-white transition-colors">Board &amp; Train</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: Social Media (Facebook & Yelp) */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold uppercase tracking-wider font-urbanist">
              Follow Us
            </h3>
            <div className="flex space-x-6">
              
              <a 
                href="https://www.facebook.com/profile.php?id=61575107867319" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-100 transition-colors duration-300"
                aria-label="Visit our Facebook page"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              <a 
                href="https://www.instagram.com/pawhausacademy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-100 transition-colors duration-300"
                aria-label="Visit our Instagram page"
              >
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a 
                href="https://www.yelp.com/biz/pawhaus-academy-chatsworth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-100 transition-colors duration-300"
                aria-label="Visit our Yelp page"
              >
                {/* Yelp SVG */}
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M13.961 22.279c.246-.273.601-.444.995-.444.739 0 1.338.599 1.338 1.338 0 .016 0 .032-.001.048v-.002l-.237 6.483c-.027.719-.616 1.293-1.34 1.293-.077 0-.153-.006-.226-.019l.008.001c-1.763-.303-3.331-.962-4.69-1.902l.039.025c-.351-.245-.578-.647-.578-1.102 0-.346.131-.661.346-.898l-.001.001 4.345-4.829zm-1.108-1.845-6.301 1.572c-.097.025-.208.039-.322.039-.687 0-1.253-.517-1.332-1.183l-.001-.006c-.046-.389-.073-.839-.073-1.295 0-1.324.223-2.597.635-3.781l-.024.081c.183-.534.681-.911 1.267-.911.214 0 .417.05.596.14l-.008-.004 5.833 2.848c.45.221.754.677.754 1.203 0 .623-.427 1.147-1.004 1.294l-.009.002zm1.071-5.211L7.82 4.649c-.112-.191-.178-.421-.178-.667 0-.529.307-.987.752-1.204l.008-.003c1.918-.938 4.153-1.568 6.511-1.761l.067-.004c.031-.003.067-.004.104-.004.738 0 1.337.599 1.337 1.337v12.209c0 .739-.599 1.338-1.338 1.338-.493 0-.923-.266-1.155-.663l-.003-.006zm5.994 5.458 6.176 2.007c.541.18.925.682.925 1.274 0 .209-.048.407-.134.584l.003-.008c-.758 1.569-1.799 2.889-3.068 3.945l-.019.015c-.23.19-.527.306-.852.306-.477 0-.896-.249-1.134-.625l-.003-.006-3.449-5.51c-.128-.201-.203-.446-.203-.709 0-.738.598-1.336 1.336-1.336.147 0 .289.024.421.068l-.009-.003zm6.279-3.939-6.242 1.791c-.11.033-.237.052-.368.052-.737 0-1.335-.598-1.335-1.335 0-.282.087-.543.236-.758l-.003.004 3.63-5.383c.244-.358.65-.59 1.111-.59.339 0 .649.126.885.334l-.001-.001c1.25 1.104 2.25 2.459 2.925 3.99l.029.073c.07.158.111.342.111.535 0 .608-.405 1.121-.959 1.286l-.009.002z"/>
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="text-pawhaus-plat p-4 text-center">
          &copy; {new Date().getFullYear()} PawHaus Academy | <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link> | <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;