const ImageCard = ({ imageUrl, title, description, flipContent }: { imageUrl?: string; title?: string; description?: string, flipContent?: boolean }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-7xl pt-16 pb-32">
      <div className={`md:flex ${flipContent ? "md:flex-row-reverse" : ""}`}>
        {/* Left Side: Image */}
        <div className="md:flex-[1.5]">
          <img
            className="h-48 w-full object-cover md:h-full"
            src={imageUrl || "https://via.placeholder.com/150"}
            alt="Card example"
          />
        </div>

        {/* Right Side: Content */}
        <div className="p-8 md:flex-1">
          <h2 className="text-3xl block font-bold leading-tight font-urbanist mb-8">{title || "Finding customers for your new business"}</h2>
          <p className="mt-2 text-slate-500">
            {description || "Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;