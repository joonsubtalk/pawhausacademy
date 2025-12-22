import { Link } from "wouter";
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
  return (
    <>
      <section 
        id="hero" 
        className="relative flex flex-col items-center justify-center text-center min-h-[60vh] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="container mx-auto pb-22 flex flex-col items-center px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 font-urbanist">Unleash Your Dog's Full Potential</h1>
          {
            !event
            ? <a href="https://pawhausacademy.portal.gingrapp.com/#/public/contact_us" rel="noopener noreferrer" target="_blank" className="bg-white text-pawhaus-blue py-3 px-6 rounded-full text-lg font-medium hover:bg-gray-200 transition duration-150">
                Contact Us Now
              </a>
            : <a href="https://pawhausacademy.gingrapp.com/front_end/lead?form_name=los_angeles_auto_show" rel="noopener noreferrer" target="_blank" className="bg-white text-pawhaus-blue py-3 px-6 rounded-full text-lg font-medium hover:bg-gray-200 transition duration-150">
                Contact Us Now
            </a>
          }
        </div>
      </section>
      {/* //fix mobile's padding issue */}
      <section id="services-overview" className="py-16 px-4 white text-pawhaus-dark">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold font-urbanist mb-8 text-center">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* // card with pawhaus blue for title bg and white for background. Card has soft shadow and has two children: title, description*/}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative bg-pawhaus-blue text-white font-semibold rounded-t-lg text-center p-6 bg-cover bg-center">
                <div className="absolute inset-0 bg-pawhaus-blue/50"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl">Boarding</h3>
                  <p className="font-urbanist text-center text-white/70 text-sm">
                    Comfort, Enrichment, Peace of Mind.
                  </p>
                </div>
              </div>
              <p className="p-6 mb-4">
                We welcome dogs of all sizes, ages, and training levels to stay in a safe, supervised environment that prioritizes comfort and fulfillment.
              </p>
              <Link href="/boarding" className="cursor-pointer mx-auto mb-6 bg-white border-2 border-pawhaus-blue text-pawhaus-blue py-2 px-8 rounded-lg hover:bg-pawhaus-blue hover:text-white transition duration-150 w-fit block">
                Learn More
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative bg-pawhaus-blue text-white font-semibold rounded-t-lg text-center p-6 bg-cover bg-center">
                <div className="absolute inset-0 bg-pawhaus-blue/50"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl">Board &amp; Train</h3>
                  <p className="font-urbanist text-center text-white/70 text-sm">
                  Real-world Training. Lifelong Results.
                  </p>
                </div>
              </div>
              <p className="p-6">
                An immersive program dedicated to teaching the foundation of obedience, leash manners, confidence, and impulse control through clear communication and consistency while taking into consideration you and your family’s lifestyles and training goals for your dog.
              </p>
              <Link href="/board-train" className="cursor-pointer mx-auto mb-6 bg-white border-2 border-pawhaus-blue text-pawhaus-blue py-2 px-8 rounded-lg hover:bg-pawhaus-blue hover:text-white transition duration-150 w-fit block">
                Learn More
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative bg-pawhaus-blue text-white font-semibold rounded-t-lg text-center p-6 bg-cover bg-center">
                <div className="absolute inset-0 bg-pawhaus-blue/50"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl">Day Training</h3>
                  <p className="font-urbanist text-center text-white/70 text-sm">
                    Where Daily Practice Builds Lifelong Skills.
                  </p>
                </div>
              </div>
              <p className="p-6">
                Day Training offers a school-day experience where dogs learn, play, and practice. Each day is built around consistency, focus, and enrichment to help every student develop real-world skills in a supportive learning environment.
              </p>
              <Link href="/day-training" className="cursor-pointer mx-auto mb-6 bg-white border-2 border-pawhaus-blue text-pawhaus-blue py-2 px-8 rounded-lg hover:bg-pawhaus-blue hover:text-white transition duration-150 w-fit block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="introduction" className="pt-16 pb-32 px-4 bg-white-500 text-pawhaus-dark">
        <div className="container mx-auto">
          <p className="max-w-3xl mx-auto text-center text-small">
            At <b>PawHaus Academy</b>, we believe that dog training is more than teaching commands—it’s about fostering understanding, confidence, and balance in every dog. Our approach combines structured, real-world training with individualized attention, ensuring each dog learns in a way that suits their personality, needs, and learning style. From foundational obedience to advanced behavioral work, our programs are designed to build not just skills, but trust, focus, and a strong bond between dog and owner.
          </p>
        </div>
      </section>
      <section id="approach">
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
      </section>
      <section id="faq" className="py-16 px-4 bg-white-500 text-pawhaus-dark">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold font-urbanist mb-8 text-center">Frequently Asked Questions</h2>
            <FAQItem
              question="What makes PawHaus Academy different?"
              answer={`At PawHaus Academy, we don’t just train dogs—we transform them into well-mannered, balanced companions. Whether your dog needs foundational obedience, behavioral rehabilitation, or off-leash reliability, we’re here to help.

Additionally: 

Ranch-Style Property – Spacious, open areas for dogs to explore, play, and train in a natural environment.
Home-Style Setting – A cozy, structured atmosphere that mimics real-life situations for better training results.
Balanced Training – A blend of reinforcement, guidance, and structure tailored to each dog’s unique needs.
Holistic Methods – We consider nutrition, behavior, and emotional well-being to create long-term success.
Board & Train Programs – Immersive training in a structured yet home-like environment.
Private Lessons & Group Classes (Coming Soon) – Designed to foster a strong owner-dog relationship and social confidence.`}
            />
            <FAQItem
              question="What does my dog need to be a student or resident at PawHaus Academy?"
              answer="We require that all our dogs have up-to-date vaccines for Rabies, Bortadella, and DHLPP.

We also require a one day “Assessment” prior to booking for day training and/or boarding. During the assessment, we’ll determine and note your dog’s temperament so as to keep them as safe and happy while they are staying with us, as well as your goals for day training."
            />
            <FAQItem
              question="How do I schedule training for my dog at PawHaus Academy?"
              answer="Please call us at 747.297.2404 or email our Admissions Office at admin@pawhausacademy.com – From there we’ll help you setup an initial meet and greet and get you setup upon Gingr so that you can book day training and boarding stays whenever you and your pup need!"
            />
            <FAQItem
              question="What does a day at PawHaus Academy look like for my dog?"
              answer="All of our dogs – from our Board & Train students and Day Training students, to our Boarding guests, receive some form of activity and fulfillment throughout the day.
A typical day can begin at anywhere between 8:00am and 9:00am. All pups will have a mixture of training (mental work), exercise and socialization (physical) and of course some fun outdoor (supervised by our Yard Duties) for recess in our yard complete with toys, agility course, and friends! We’ll also ensure they receive some decompression and rest time midday as well but then it’s  ‘lights out’ and rest for the night (with supervision by our Resident Directors) by 9:00pm."
            />
            <FAQItem
              question="Will I get to see my dog during their Board & Train program?"
              answer="While special arrangements can be made, they are uncommon; however, certain circumstances may warrant them. This can be assessed, discussed and arranged during your assessment meeting on the day you drop off your pup. This session allows the trainer to assess your dog’s temperament and discuss any specific requirements or concerns you might have."
            />
            <FAQItem
              question="What do I need to bring with my dog when I drop them off?"
              answer="Please be sure to send any medication your pup might need and of course their usual food, enough for the length of their stay. Also please update your pup’s Gingr profile to ensure we have the most accurate medication administration and any specific feeding instructions you’d like us to follow. Please also ensure we know if your pup has any allergies so we can ensure they are safe and healthy.

We encourage our pet parents to not send pups with any toys or really special items as we would hate for them to get damaged or lost; however, if there is a blanket you’d like them to have in their crate or clothing you’d prefer for your pup to wear during their stay with us, we understand and will be sure to take the best of care of these items."
            />
            <FAQItem
              question="My dog has bitten someone (or me), will you still accept my dog to PawHaus Academy?"
              answer="Behavioral cases are taken on a case-by-case basis. We typically reserve a few spots in our more intensive Board & Train program for behavioral cases as we want to ensure we can give the best time and attention to your pup.

 We would love to discuss this more with you and potentially set up a meet and greet/Assessment so that we can better advise you of your options with us. Please call our Admissions Office at, 747.287.4327 or email us at, admin@pawhausacademy.com."
            />
            <FAQItem
              question="What are considered “holiday” bookings at PawHaus Academy in 2025?"
              answer="Memorial Day Weekend: 5/22 – 5/27

Independence Day Weekend: 7/2 – 7/7

Labor Day Weekend: 8/29 – 9/2 

Thanksgiving: 11/21 – 12/1 

Christmas & New Years: 12/20 – 1/3/2026"
            />
        </div>
      </section>
      <section id="testimonial">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold font-urbanist mb-8 text-center">What Our Clients Say</h2>
          {/* swipable testimonials carousel */}
          <Carousel>
            <Testimonial rating={5} quote="The staff is so incredibly patient and knowledgeable… One less thing for me to worry about when I'm away. They are worth every penny! " name="Julie P" />
            <Testimonial rating={5} quote="Happier dog, Happier Home. And, Daisy feels safe and trusts us since we now understand her signals and listen to her needs" name="Shauna G" />
            <Testimonial rating={5} quote="The staff is always friendly and welcoming, and my dogs love the social time and fun activities. I always feel confident leaving them" name="Deisy D" />
            <Testimonial rating={5} quote="Every time we travel we leave our dog there to reinforce the training … Even the dog gets so happy every time  he sees the trainers." name="Eman K" />
            <Testimonial rating={5} quote="PawHaus has become like family to us. The entire team is incredible -- so caring, loving, and truly skilled." name="Karen M" />
            <Testimonial rating={5} quote=" I can leave and not worry about her I get follow up texts and pictures everyday of how she's doing…they are wonderful caring people I would give them 10 stars if I could" name="Cesar B" />
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