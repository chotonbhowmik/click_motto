
import PropTypes from "prop-types";
const FilterComponent = ({ fetchAllMedia, fetchPhotos, fetchVideos }) => {
  return (
    <div className="flex gap-4 text-[#333333] font-medium text-sm mt-5">
      <p onClick={fetchAllMedia} className="cursor-pointer">
        All
      </p>
      <p onClick={fetchPhotos} className="cursor-pointer">
        Photos
      </p>
      <p onClick={fetchVideos} className="cursor-pointer">
        Videos
      </p>
    </div>
  );
};
FilterComponent.propTypes = {
  fetchAllMedia: PropTypes.func,
  fetchPhotos: PropTypes.func,
  fetchVideos: PropTypes.func,
};
export default FilterComponent;
