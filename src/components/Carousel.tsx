import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

useEffect(() => {
if (emblaApi) {
// Embla API is ready
}
}, [emblaApi]);

return (
<div className="" ref={emblaRef}>
    <div className="flex">
        {children}
    </div>
</div>
);
};

export default Carousel;