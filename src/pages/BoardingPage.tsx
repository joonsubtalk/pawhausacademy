import background from '../assets/boarding-hero.jpg';
import care from '../assets/boarding-care.jpg';
import guest from '../assets/boarding-guest.jpg';
const BoardingPage = () => {
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
                    Boarding
                </h1>
            </div>
        </header>

            <main>
                {/* --- 2. Introduction Section --- */}
                <section className="max-w-3xl mx-auto text-center py-16 px-6 md:py-24">
                    <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-pawhaus-dark mb-6">
                        Comfort. Enrichment. Peace of Mind.
                    </h2>
                    <p className="text-lg md:text-xl text-pawhaus-dark leading-relaxed">
                        Boarding at PawHaus Academy is designed to feel like home. We welcome dogs of all sizes, ages, and training levels to a safe, supervised environment that prioritizes comfort and connection. Every stay includes daily enrichment and playtime—no hidden fees or add-ons.
                    </p>
                </section>

                {/* --- 3. Program Details (Split Content) --- */}
                <section className="bg-white py-16 md:py-24 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            {/* Text Content */}
                            <div>
                                <h3 className="font-urbanist font-bold text-2xl md:text-3xl text-pawhaus-dark mb-4">
                                    Continued Care for Graduates
                                </h3>
                                <p className="text-pawhaus-dark leading-relaxed">
                                    For Board & Train graduates, we continue to reinforce learned skills throughout their stay and offer special graduate pricing for up to one year after graduation.
                                </p>
                                <ul className="space-y-4 mt-6">
                                    <div>✔ Skill Reinforcement for Grads</div>
                                    <div>✔ Daily Enrichment & Playtime</div>
                                    <div>✔ Safe, Supervised Environment</div>
                                </ul>
                            </div>
                            
                            {/* Image Content */}
                            <div className="w-full h-64 md:h-96">
                                <img 
                                    src={care}
                                    alt="Dogs playing together in an enrichment area."
                                    className="w-full h-full object-cover rounded-2xl shadow-xl" 
                                />
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* --- 4. Assessment Info (Split Content, swapped) --- */}
                <section className="py-16 md:py-24 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                            {/* Image Content (First on mobile, second on desktop) */}
                            <div className="w-full h-64 md:h-96 md:order-last">
                                <img 
                                    src={guest}
                                    alt="A trainer assessing a new dog for compatibility."
                                    className="w-full h-full object-cover rounded-2xl shadow-xl" 
                                />
                            </div>
                            
                            {/* Text Content */}
                            <div className="md:order-first">
                                <h3 className="font-urbanist font-bold text-2xl md:text-3xl text-pawhaus-dark mb-6">
                                    New Guest Assessments
                                </h3>
                                <p className="text-pawhaus-dark leading-relaxed mb-4">
                                    For dogs who have not yet completed a PawHaus training program, we require a one-day assessment before their first boarding stay to ensure comfort, compatibility, and a balanced environment for all guests.
                                </p>
                                    <p className="text-pawhaus-dark leading-relaxed">
                                    The assessment is a one-time fee of $250, with 50% credited toward your first stay. If you’re unable to schedule an assessment prior to boarding, a $75 behavioral review surcharge applies to the first visit.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 5. Pricing Section --- */}
                <section className="bg-pawhaus-blue py-20 md:py-28">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="bg-pawhaus-white rounded-4xl shadow-2xl overflow-hidden">
                            <div className="px-8 py-10 md:px-12 md:py-12">
                                <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-pawhaus-dark text-center mb-10">
                                    Program Costs
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                                    
                                    {/* Left Side: Main Pricing */}
                                    <div className="flex flex-col text-center p-8 bg-pawhaus-blue/5 rounded-2xl h-full">
                                        <h3 className="font-urbanist font-extrabold text-2xl text-pawhaus-dark mb-4">
                                            Standard Boarding
                                        </h3>
                                        <div className="my-4">
                                            <span className="font-urbanist font-black text-6xl text-pawhaus-blue">
                                                $125
                                            </span>
                                            <span className="text-pawhaus-dark font-medium">/ per night</span>
                                        </div>
                                        <p className="text-pawhaus-dark text-sm mb-6">
                                            Per dog. Includes all enrichment and playtime.
                                        </p>
                                        <a 
                                            href="https://pawhausacademy.portal.gingrapp.com/#/public/contact_us" 
                                            className="mt-auto inline-block bg-cta-action text-pawhaus-white font-bold font-sans py-3 px-8 rounded-lg shadow-lg hover:bg-pawhaus-blue transition-colors duration-300"
                                            aria-label="Book Standard Boarding"
                                        >
                                            Book Now
                                        </a>
                                    </div>
                                    
                                    {/* Right Side: Graduate & Assessment */}
                                    <div className="space-y-6">
                                        <div className="text-center p-8 bg-pawhaus-lightblue/10 rounded-2xl">
                                            <h3 className="font-urbanist font-extrabold text-2xl text-pawhaus-lightblue mb-4">
                                                B&T Graduate Rate
                                            </h3>
                                            <div className="my-4">
                                                <span className="font-urbanist font-black text-6xl text-pawhaus-lightblue">
                                                    $112.50
                                                </span>
                                                <span className="text-pawhaus-dark font-medium">/ per night</span>
                                            </div>
                                            <p className="text-pawhaus-dark text-sm">
                                                Valid for 1 year post-graduation.
                                            </p>
                                        </div>
                                        
                                        <div className="text-center p-6 bg-pawhaus-dark/10 rounded-2xl">
                                            <h3 className="font-urbanist font-bold text-xl text-pawhaus-dark mb-2">
                                                One-Day Assessment
                                            </h3>
                                            <span className="font-urbanist font-bold text-3xl text-pawhaus-dark">
                                                $250
                                            </span>
                                            <p className="text-pawhaus-dark text-sm mt-2">
                                                One-time fee for new guests. 50% credited to first stay.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default BoardingPage;