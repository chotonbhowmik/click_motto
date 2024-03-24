import PropTypes from "prop-types";

const PhotoItem = ({ photo }) => {
  

  return (
    <div className="grid gap-4 relative">
      <img
        src={photo.src.medium}
        alt={photo.photographer}
        className="h-auto max-w-full rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-sm text-white p-2 flex justify-between items-center">
        <p>{photo.photographer}</p>
        
      </div>
    </div>
  );
};

PhotoItem.propTypes = {
  photo: PropTypes.object,
};

export default PhotoItem;
