import { useRef } from "react";
const TopCategories = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200, 
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative ">
      <p className="text-[#333333] font-semibold text-3xl">Top categories</p>
      <div className="4">
        <div
          className="carousel carousel-center p-4 space-x-4 rounded-box overflow-x-scroll"
          ref={carouselRef}
        >
          <div className="carousel-item relative flex items-center justify-center h-80">
            <div className="relative">
              <img
                src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="rounded-box h-80"
                alt="category"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-box flex items-center justify-center">
                <p className="text-white text-center py-2 px-4">Workspace</p>
              </div>
            </div>
          </div>
          <div className="carousel-item relative flex items-center justify-center h-80">
            <div className="relative">
              <img
                src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="rounded-box h-80"
                alt="category"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-box flex items-center justify-center">
                <p className="text-white text-center py-2 px-4">Summer</p>
              </div>
            </div>
          </div>

          <div className="carousel-item relative flex items-center justify-center h-80">
            <div className="relative">
              <img
                src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="rounded-box h-80"
                alt="category"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-box flex items-center justify-center">
                <p className="text-white text-center py-2 px-4">Gravity</p>
              </div>
            </div>
          </div>

          <div className="carousel-item relative flex items-center justify-center h-80">
            <div className="relative">
              <img
                src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="rounded-box h-80"
                alt="category"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-box flex items-center justify-center">
                <p className="text-white text-center py-2 px-4">Food</p>
              </div>
            </div>
          </div>
          <div className="carousel-item relative flex items-center justify-center h-80">
            <div className="relative">
              <img
                src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="rounded-box h-80"
                alt="category"
              />
              <div className="absolute inset-0 bg-black opacity-50 rounded-box flex items-center justify-center">
                <p className="text-white text-center py-2 px-4">Workspace</p>
              </div>
            </div>
          </div>
        </div>
        {/* Left Scroll Button */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
          onClick={scrollLeft}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {/* Right Scroll Button */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
          onClick={scrollRight}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopCategories;
