import PropTypes from "prop-types";

const Banner = ({ onSearchQueryChange }) => {
  const handleInputChange = (event) => {
    onSearchQueryChange(event.target.value);
  };

  return (
    <div
      className="relative bg-center min-h-screen flex items-center justify-center banner-section rounded-2xl mb-5 bg-no-repeat bg-cover px-10 py-10"
      style={{ backgroundImage: "url('../../../banner.png')" }}
    >
      <div className="absolute inset-0 opacity-50"></div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-regular mb-4 w-2/3">
          Your local source of high quality images and videos directly from
          their creators
        </h1>
        {/* Search Field with Icon */}
        <div className="flex items-center justify-center w-2/3 bg-white rounded-full px-4 py-2 shadow-md">
          <input
            type="text"
            placeholder="Search photos and videos"
            className="w-full focus:outline-none text-black"
            onChange={handleInputChange}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="search"
            >
              <g data-name="Layer 2">
                <path
                  d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"
                  data-name="search"
                ></path>
              </g>
            </svg>
          </svg>
        </div>
        <div className="flex gap-2 text-start w-2/3 justify-start">
          <p className="mt-4">Recommended:</p>
          <p className="mt-4">summer, food, covid-19, real estate, love</p>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  onSearchQueryChange: PropTypes.func, 
};

export default Banner;
