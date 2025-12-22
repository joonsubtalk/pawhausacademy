import { useId } from "react";

const StarIcon = ({ fillPercentage = 0 }) => {
  // Create a unique ID for the gradient to avoid conflicts
  const gradientId = useId();
  const fill = fillPercentage + '%';

  return (
    <svg 
      className="h-6 w-6" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          {/* Start of fill color */}
          <stop offset="0%" stopColor="#0f4478" /> 
          {/* End of fill color (matches percentage) */}
          <stop offset={fill} stopColor="#0f4478" /> 
          {/* Start of empty color (matches percentage) */}
          <stop offset={fill} stopColor="#cbd5e1" /> {/* slate-300 */}
          {/* End of empty color */}
          <stop offset="100%" stopColor="#cbd5e1" /> {/* slate-300 */}
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId})`}
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"
      />
    </svg>
  );
};

/**
 * StarRating component: Displays a 5-star rating,
 * supporting half-star values.
 */
const StarRating = ({ rating = 0 }) => {
  return (
    <div className="flex items-center" aria-hidden="true">
      {/* Create an array of 5 stars */}
      {Array.from({ length: 5 }, (_, index) => {
        let fillPercentage = 0;
        const starNumber = index + 1;

        if (rating >= starNumber) {
          fillPercentage = 100; // Full star
        } else if (rating >= starNumber - 0.5) {
          fillPercentage = 50; // Half star
        } else {
          fillPercentage = 0; // Empty star
        }

        return <StarIcon key={index} fillPercentage={fillPercentage} />;
      })}
    </div>
  );
};

/**
 * Your testimonial component, now with the StarRating included.
 * I set the rating to 4.5 to demonstrate the half-star.
 */
const Testimonial = ({ rating, quote, name }: { rating: number; quote: string; name: string }) => {

  return (
    <div className="min-w-0 flex-[0_0_100%] md:flex-[0_0_75%]">
      <div className="max-w-3xl mx-auto text-center py-8 md:py-16 px-4">
        
        {/* Star Rating Component */}
        <div className="flex justify-center mb-4">
          <StarRating rating={rating} />
        </div>
        
        {/* Testimonial Quote */}
        <blockquote className="italic text-lg md:text-xl text-pawhaus-dark">
          {quote}
        </blockquote>
        
        {/* Customer Name */}
        <p className="mt-4 font-bold text-pawhaus-dark"> {name}, <a 
                href="https://www.yelp.com/not_recommended_reviews/pawhaus-academy-chatsworth" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pawhaus-lightblue hover:text-pawhaus-blue transition-colors duration-300"
                aria-label="Visit our Yelp page"
              >Yelp</a></p>
      </div>
    </div>
  );
};

export default Testimonial;