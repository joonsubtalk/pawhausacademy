import background from '../assets/boarding_train_hero.jpg';
import immersive from '../assets/bt-immersive.jpg';
import perk from '../assets/bt-perk.jpg';
const AboutPage = () => {
  return (
    <div className="page-container bg-pawhaus-white"> 
        {/* --- 1. Hero Section --- */}
        <header className="relative h-[60vh] min-h-[400px] md:h-[70vh] w-full flex items-center justify-center text-center text-pawhaus-white p-6">
            {/* Background Image */}
                <img 
                    src={background} 
                    alt="A group of dogs in a day training program."
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-pawhaus-blue opacity-60"></div>
            
            {/* Hero Content */}
            <div className="relative z-10">
                <h1 className="font-urbanist font-black text-4xl sm:text-5xl md:text-7xl drop-shadow-lg">
                    Board &amp; Train
                </h1>
            </div>
        </header>

      <main>
          {/* --- 2. Introduction Section --- */}
          <section className="max-w-3xl mx-auto text-center py-16 px-6 md:py-24">
              <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-pawhaus-dark mb-6">
                  Real-World Training. Lifelong Results.
              </h2>
              <p className="text-lg md:text-xl text-pawhaus-dark leading-relaxed">
                  Board &amp; Train program is ideal for busy families, as consistency and structure are key to lasting results of foundational training. It’s a great fit for puppies or rescues learning obedience for the first time, as well as dogs overcoming unwanted behaviors.
              </p>
          </section>

          {/* --- 3. Program Details (Split Content) --- */}
          <section className="bg-white py-16 md:py-24 overflow-hidden">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                      {/* Text Content */}
                      <div>
                          <h3 className="font-urbanist font-bold text-2xl md:text-3xl text-pawhaus-dark mb-4">
                              An Immersive On-Campus Experience
                          </h3>
                          <p className="text-pawhaus-dark leading-relaxed mb-4">
                              Your dog lives on campus with our professional trainers, receiving daily instruction, structured socialization, and exposure to real-world environments. 
                          </p>
                          <p className="text-pawhaus-dark leading-relaxed">
                              Upon graduation, families participate in a Parent–Teacher Conference and an in-home private session (1.5–2 weeks after going home) to ensure success continues in the home environment.
                          </p>
                      </div>
                      
                      {/* Image Content */}
                      <div className="w-full h-64 md:h-96">
                          <img 
                              src={immersive} 
                              alt="Dogs socializing safely in a training environment."
                              className="w-full h-full object-cover rounded-2xl shadow-xl" 
                          />
                      </div>
                  </div>
              </div>
          </section>
          
          {/* --- 4. Graduate Benefits (Split Content, swapped) --- */}
          <section className="py-16 md:py-24 overflow-hidden">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                      {/* Image Content (First on mobile, second on desktop) */}
                      <div className="w-full h-64 md:h-96 md:order-last">
                          <img 
                              src={perk}
                              alt="A happy family with their well-trained dog."
                              className="w-full h-full object-cover rounded-2xl shadow-xl" 
                          />
                      </div>
                      
                      {/* Text Content */}
                      <div className="md:order-first">
                          <h3 className="font-urbanist font-bold text-2xl md:text-3xl text-pawhaus-dark mb-6">
                              Perks for Our Graduates
                          </h3>
                          <p className="text-pawhaus-dark leading-relaxed mb-6">
                              Graduates also enjoy discounts on Day Training and Boarding for up to one year and the opportunity to continue their educational journey through future PawHaus programs.
                          </p>
                          <ul className="space-y-4">
                              <div>✔ Parent-Teacher Conference</div>
                              <div>✔ In-Home Private Session</div>
                              <div>✔ Discounts on Day Training & Boarding (1 year)</div>
                              <div>✔ Access to future PawHaus programs</div>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>

          {/* --- 5. Pricing Section --- */}
          <section className="bg-pawhaus-blue py-20 md:py-28">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="max-w-md mx-auto bg-pawhaus-white rounded-4xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                      <div className="px-8 py-10 md:px-12 md:py-12 text-center">
                          <h4 className="font-urbanist font-bold text-xl text-pawhaus-lightblue mb-2">
                              Program Cost
                          </h4>
                          <h3 className="font-urbanist font-extrabold text-3xl text-pawhaus-dark mb-4">
                              4-week Board & Train
                          </h3>
                          
                          <div className="my-6">
                              <span className="font-urbanist font-black text-6xl md:text-7xl text-pawhaus-blue">
                                  $4,500
                              </span>
                          </div>
                          
                          <p className="text-pawhaus-dark mb-8">
                              Includes all training, boarding, socialization, and graduation sessions.
                          </p>
                          
                          <a 
                              href="https://pawhausacademy.portal.gingrapp.com/#/public/contact_us"
                              className="inline-block bg-pawhaus-blue text-pawhaus-white font-bold font-sans py-3 px-10 rounded-lg shadow-lg hover:bg-cta-action transition-colors duration-300"
                              aria-label="Enroll in the 4-week Board & Train program"
                          >
                              Enroll Now
                          </a>
                      </div>
                  </div>
              </div>
          </section>
      </main>
  </div>
  );
};

export default AboutPage;