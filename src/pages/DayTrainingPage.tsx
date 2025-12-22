import { useState, useEffect } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
// @ts-ignore
import { client } from "../../tina/__generated__/client";
import background from '../assets/day_training_hero.jpg';

const DayTrainingPage = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await client.queries.day_training({ relativePath: "day_training.md" });
                setData(res.data.day_training);
            } catch (error) {
                console.error("Error fetching day training page data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="page-container bg-pawhaus-white">
                    
            {/* --- 1. Hero Section --- */}
            <header className="relative h-[60vh] min-h-[400px] md:h-[70vh] w-full flex items-center justify-center text-center text-pawhaus-white p-6">
                {/* Background Image */}
                <img 
                    src={data?.hero?.image || background} 
                    alt="A group of dogs in a day training program."
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-pawhaus-blue opacity-60"></div>
                
                {/* Hero Content */}
                <div className="relative z-10">
                    <h1 className="font-urbanist font-black text-4xl sm:text-5xl md:text-7xl drop-shadow-lg">
                        {data?.hero?.headline || "Day Training"}
                    </h1>
                </div>
            </header>

            <main>
                {/* --- 2. Introduction Section --- */}
                <section className="max-w-3xl mx-auto text-center py-16 px-6 md:py-24">
                    <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-pawhaus-dark mb-6">
                        {data?.intro?.title || "Education. Enrichment. Everyday Progress."}
                    </h2>
                    <p className="text-lg md:text-xl text-pawhaus-dark leading-relaxed">
                        {data?.intro?.description || "Day Training offers a school-day experience..."}
                    </p>
                </section>

                {/* --- 3. Content Rows --- */}
                {data?.content_rows?.map((row: any, index: number) => (
                    <section key={index} className={`py-16 md:py-24 overflow-hidden ${index % 2 === 0 ? 'bg-white' : ''}`}>
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                                {/* Image Content */}
                                <div className={`w-full h-64 md:h-96 ${row.imageRight ? 'md:order-last' : ''}`}>
                                    <img 
                                        src={row.image}
                                        alt={row.title}
                                        className="w-full h-full object-cover rounded-2xl shadow-xl" 
                                    />
                                </div>
                                
                                {/* Text Content */}
                                <div>
                                    <h3 className="font-urbanist font-bold text-2xl md:text-3xl text-pawhaus-dark mb-6">
                                        {row.title}
                                    </h3>
                                    <div className="text-pawhaus-dark leading-relaxed mb-6">
                                        <TinaMarkdown content={row.content} />
                                    </div>
                                    {row.listItems && (
                                        <ul className="space-y-4">
                                            {row.listItems.split('\n').map((item: string, i: number) => (
                                                <div key={i}>{item}</div>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

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
                                            {data?.pricing?.main?.title || "Day Training"}
                                        </h3>
                                        <div className="my-4">
                                            <span className="font-urbanist font-black text-6xl text-pawhaus-blue">
                                                {data?.pricing?.main?.price || "$150"}
                                            </span>
                                            <span className="text-pawhaus-dark font-medium">{data?.pricing?.main?.per || "/ per session"}</span>
                                        </div>
                                        <p className="text-pawhaus-dark text-sm mb-6">
                                            {data?.pricing?.main?.description || "À la carte. Book any time."}
                                        </p>
                                        <a 
                                            href={data?.pricing?.main?.ctaLink || "https://pawhausacademy.portal.gingrapp.com/#/public/contact_us"}
                                            className="mt-auto inline-block bg-cta-action text-pawhaus-white font-bold font-sans py-3 px-8 rounded-lg shadow-lg hover:bg-pawhaus-blue transition-colors duration-300"
                                            aria-label="Book a Day Training Session"
                                        >
                                            {data?.pricing?.main?.ctaText || "Enroll Now"}
                                        </a>
                                    </div>
                                    
                                    {/* Right Side: Graduate & Assessment */}
                                    <div className="space-y-6">
                                        
                                        {/* --- Multi-Session Packs --- */}
                                        <div className="text-left p-6 bg-pawhaus-dark/10 rounded-2xl">
                                            <h3 className="font-urbanist font-bold text-xl text-pawhaus-dark mb-3 text-center">
                                                Multi-Session Packs
                                            </h3>
                                            <p className="text-pawhaus-dark text-sm text-center mb-4">
                                                Within a 30-day period
                                            </p>
                                            <ul className="space-y-2 text-pawhaus-dark">
                                                {data?.pricing?.packs?.map((pack: any, i: number) => (
                                                    <li key={i} className="flex justify-between">
                                                        <span className="font-medium text-pawhaus-dark">{pack.count}</span>
                                                        <span className="font-bold text-pawhaus-dark">{pack.discount}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* --- Graduate Rate --- */}
                                        <div className="text-center p-8 bg-pawhaus-lightblue/10 rounded-2xl">
                                            <h3 className="font-urbanist font-extrabold text-2xl text-pawhaus-lightblue mb-4">
                                                {data?.pricing?.graduate?.title || "B&T Graduate Rate"}
                                            </h3>
                                            <div className="my-4">
                                                <span className="font-urbanist font-black text-6xl text-pawhaus-lightblue">
                                                    {data?.pricing?.graduate?.price || "$120"}
                                                </span>
                                                <span className="text-pawhaus-dark font-medium">{data?.pricing?.graduate?.per || "/ per session"}</span>
                                            </div>
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

export default DayTrainingPage;