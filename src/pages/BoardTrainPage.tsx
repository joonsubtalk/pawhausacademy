import { useState, useEffect } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
// @ts-ignore
import { client } from "../../tina/__generated__/client";
import background from '../assets/boarding_train_hero.jpg';

const BoardTrainPage = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await client.queries.board_train({ relativePath: "board_train.md" });
                setData(res.data.board_train);
            } catch (error) {
                console.error("Error fetching board & train page data:", error);
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
                    {data?.hero?.headline || "Board & Train"}
                </h1>
            </div>
        </header>

      <main>
          {/* --- 2. Introduction Section --- */}
          <section className="max-w-3xl mx-auto text-center py-16 px-6 md:py-24">
              <h2 className="font-urbanist font-bold text-3xl md:text-4xl text-pawhaus-dark mb-6">
                  {data?.intro?.title || "Real-World Training. Lifelong Results."}
              </h2>
              <p className="text-lg md:text-xl text-pawhaus-dark leading-relaxed">
                  {data?.intro?.description || "Board & Train program is ideal for busy families..."}
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
                            <h3 className="font-urbanist font-bold text-2xl md:text-3xl text-pawhaus-dark mb-4">
                                {row.title}
                            </h3>
                            <div className="text-pawhaus-dark leading-relaxed mb-4">
                                <TinaMarkdown content={row.content} />
                            </div>
                            {row.listItems && (
                                <ul className="space-y-4 mt-4">
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
              <div className="max-w-7xl mx-auto px-6">
                  <div className="max-w-md mx-auto bg-pawhaus-white rounded-4xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                      <div className="px-8 py-10 md:px-12 md:py-12 text-center">
                          <h4 className="font-urbanist font-bold text-xl text-pawhaus-lightblue mb-2">
                              {data?.pricing?.title || "Program Cost"}
                          </h4>
                          <h3 className="font-urbanist font-extrabold text-3xl text-pawhaus-dark mb-4">
                              {data?.pricing?.subtitle || "4-week Board & Train"}
                          </h3>
                          
                          <div className="my-6">
                              <span className="font-urbanist font-black text-6xl md:text-7xl text-pawhaus-blue">
                                  {data?.pricing?.price || "$4,500"}
                              </span>
                          </div>
                          
                          <p className="text-pawhaus-dark mb-8">
                              {data?.pricing?.description || "Includes all training..."}
                          </p>
                          
                          <a 
                              href={data?.pricing?.ctaLink || "https://pawhausacademy.portal.gingrapp.com/#/public/contact_us"}
                              className="inline-block bg-pawhaus-blue text-pawhaus-white font-bold font-sans py-3 px-10 rounded-lg shadow-lg hover:bg-cta-action transition-colors duration-300"
                              aria-label="Enroll in the 4-week Board & Train program"
                          >
                              {data?.pricing?.ctaText || "Enroll Now"}
                          </a>
                      </div>
                  </div>
              </div>
          </section>
      </main>
  </div>
  );
};

export default BoardTrainPage;