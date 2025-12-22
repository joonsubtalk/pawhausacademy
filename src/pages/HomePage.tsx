import { Link } from "wouter";
import { useState, useEffect } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
// @ts-ignore
import { client } from "../../tina/__generated__/client";
import ImageCard from "../components/ImageCard";
import FAQItem from "../components/FAQItem";
import { useEventAccess } from "../hooks/useEventAccess";
import vision from '../assets/home-vision.jpg';
import hero from '../assets/home-hero.jpg';
import commit from '../assets/home-commit.jpg';
import logo from '../assets/logo.svg';
import Carousel from "../components/Carousel";
import Testimonial from "../components/Testimonial";
import Gallery from "../components/Gallery";

const HomePage = () => {
  const event = useEventAccess();
  const [faqs, setFaqs] = useState<any[]>([]);
  const [heroData, setHeroData] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);
  const [intro, setIntro] = useState<any>(null);
  const [approach, setApproach] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const res = await client.queries.home({ relativePath: "home.md" });
        if (res.data.home.faqs) {
          setFaqs(res.data.home.faqs);
        }
        if (res.data.home.hero) {
          setHeroData(res.data.home.hero);
        }
        if (res.data.home.services) {
          setServices(res.data.home.services);
        }
        if (res.data.home.introduction) {
          setIntro(res.data.home.introduction);
        }
        if (res.data.home.approach) {
          setApproach(res.data.home.approach);
        }
        if (res.data.home.testimonials) {
          setTestimonials(res.data.home.testimonials);
        }
      } catch (error) {
        console.error("Error fetching page data:", error);
      }
    };
    fetchPageData();
  }, []);

  return (
    <>
      <section 
        id="hero" 
        className="relative flex flex-col items-center justify-center text-center min-h-[60vh] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroData?.image || hero})` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="container mx-auto pb-22 flex flex-col items-center px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 font-urbanist">{heroData?.headline || "Unleash Your Dog's Full Potential"}</h1>
          {
            !event
            ? <a href="https://pawhausacademy.portal.gingrapp.com/#/public/contact_us" rel="noopener noreferrer" target="_blank" className="bg-white text-pawhaus-blue py-3 px-6 rounded-full text-lg font-medium hover:bg-gray-200 transition duration-150">
                {heroData?.ctaText || "Contact Us Now"}
              </a>
            : <a href="https://pawhausacademy.gingrapp.com/front_end/lead?form_name=los_angeles_auto_show" rel="noopener noreferrer" target="_blank" className="bg-white text-pawhaus-blue py-3 px-6 rounded-full text-lg font-medium hover:bg-gray-200 transition duration-150">
                {heroData?.ctaText || "Contact Us Now"}
            </a>
          }
        </div>
      </section>
      {/* //fix mobile's padding issue */}
      <section id="services-overview" className="py-16 px-4 white text-pawhaus-dark">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-urbanist mb-8 text-center">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.length > 0 ? (
              services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-full">
                  <div 
                    className="relative bg-pawhaus-blue text-white font-semibold rounded-t-lg text-center p-6 bg-cover bg-center"
                    style={service.image ? { backgroundImage: `url(${service.image})` } : {}}
                  >
                    <div className="absolute inset-0 bg-pawhaus-blue/50"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl">{service.title}</h3>
                      <p className="font-urbanist text-center text-white/70 text-sm">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <p className="mb-4 whitespace-pre-line">
                      {service.description}
                    </p>
                    <Link href={service.url} className="cursor-pointer mx-auto bg-white border-2 border-pawhaus-blue text-pawhaus-blue py-2 px-8 rounded-lg hover:bg-pawhaus-blue hover:text-white transition duration-150 w-fit block">
                      Learn More
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-3">Loading Services...</p>
            )}
          </div>
        </div>
      </section>
      <section id="introduction" className="pt-16 pb-32 px-4 bg-white-500 text-pawhaus-dark">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center text-small">
            {intro ? (
              <TinaMarkdown content={intro.content} />
            ) : (
              <p>
                At <b>PawHaus Academy</b>, we believe that dog training is more than teaching commands—it’s about fostering understanding, confidence, and balance in every dog. Our approach combines structured, real-world training with individualized attention, ensuring each dog learns in a way that suits their personality, needs, and learning style. From foundational obedience to advanced behavioral work, our programs are designed to build not just skills, but trust, focus, and a strong bond between dog and owner.
              </p>
            )}
          </div>
        </div>
      </section>
      <section id="approach">
        {approach.length > 0 ? (
          approach.map((item, index) => (
            <ImageCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              flipContent={item.flipContent}
            />
          ))
        ) : (
          <>
            <ImageCard
              title="Our Vision"
              description="is to create a comprehensive environment where dogs can thrive—physically, mentally, and socially—through engaging, purposeful activities. We strive to be more than a training facility: PawHaus Academy is a place of enrichment, education, and lasting connection, where dogs and their families grow together."
              imageUrl={vision}
              flipContent={false}
            />
            <ImageCard
              title="Our Commitment"
              description="Our Commitment is to every dog and family we serve. We provide a safe, nurturing, and consistent environment, guided by expert trainers who prioritize real-world results and long-term success. From our Board & Train programs to Day Training, Private Instruction, and our upcoming initiatives like the PawHaus Athletic Club, we are dedicated to helping dogs reach their full potential while supporting owners with the knowledge and tools to continue the journey at home."
              imageUrl={commit}
              flipContent={true}
            />
          </>
        )}
      </section>
      <section id="faq" className="py-16 px-4 bg-white-500 text-pawhaus-dark">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold font-urbanist mb-8 text-center">Frequently Asked Questions</h2>
            {faqs.length > 0 ? (
              faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))
            ) : (
              <p className="text-center">Loading FAQs...</p>
            )}
        </div>
      </section>
      <section id="testimonial">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold font-urbanist mb-8 text-center">What Our Clients Say</h2>
          {/* swipable testimonials carousel */}
          <Carousel>
            {testimonials.length > 0 ? (
              testimonials.map((t, index) => (
                <Testimonial key={index} rating={t.rating} quote={t.quote} name={t.name} />
              ))
            ) : (
              <>
                <Testimonial rating={5} quote="The staff is so incredibly patient and knowledgeable… One less thing for me to worry about when I'm away. They are worth every penny! " name="Julie P" />
                <Testimonial rating={5} quote="Happier dog, Happier Home. And, Daisy feels safe and trusts us since we now understand her signals and listen to her needs" name="Shauna G" />
                <Testimonial rating={5} quote="The staff is always friendly and welcoming, and my dogs love the social time and fun activities. I always feel confident leaving them" name="Deisy D" />
                <Testimonial rating={5} quote="Every time we travel we leave our dog there to reinforce the training … Even the dog gets so happy every time  he sees the trainers." name="Eman K" />
                <Testimonial rating={5} quote="PawHaus has become like family to us. The entire team is incredible -- so caring, loving, and truly skilled." name="Karen M" />
                <Testimonial rating={5} quote=" I can leave and not worry about her I get follow up texts and pictures everyday of how she's doing…they are wonderful caring people I would give them 10 stars if I could" name="Cesar B" />
              </>
            )}
          </Carousel>

        </div>
      </section>

      <section id="gallery">
        <div className="max-w-[100%] sm:max-w-[80%] xl:max-w-[75%] mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold font-urbanist mb-8 text-center">Gallery</h2>
            <Gallery />
        </div>
      </section>

      <section id="callToAction">
        <div className="bg-pawhaus-blue py-16 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            {/* insert logo centered with size dependent on screen width */}
            <img src={logo} alt="PawHaus Academy Logo" className="mx-auto mb-8 w-48 h-48 md:w-64 md:h-64" />
            <h2 className="text-3xl font-bold mb-4 font-urbanist text-pawhaus-dark">Ready to Get Started?</h2>
            <p className="mb-8 max-w-2xl mx-auto text-pawhaus-dark">
              Join PawHaus Academy today and give your dog the gift of expert training and care. Contact us to learn more about our programs and schedule a visit.
            </p>

            
            {
              !event
              ? <a href="https://pawhausacademy.portal.gingrapp.com/#/public/contact_us" rel="noopener noreferrer" target="_blank" className="inline-block bg-pawhaus-blue text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-pawhaus-lightblue transition duration-150">
                  Contact Us
                </a>
              : <a href="https://pawhausacademy.gingrapp.com/front_end/lead?form_name=los_angeles_auto_show" rel="noopener noreferrer" target="_blank" className="inline-block bg-pawhaus-blue text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-pawhaus-lightblue transition duration-150">
                  Contact Us
              </a>
            }
            <span className="block mt-4 md:inline md:ml-4 md:mt-0 text-pawhaus-dark">
            or call us at <a href="tel:+17472972404" className="underline font-semibold text-pawhaus-blue">+1 (747) 297-2404</a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;