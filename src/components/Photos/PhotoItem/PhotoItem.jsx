
import PropTypes from "prop-types";
const PhotoItem = ({ photo }) => {
  return (
    <div className="grid gap-4">
     
        <img
          src={photo.src.medium}
          alt={photo.photographer}
          className="h-auto max-w-full rounded-lg"
        />
      
    </div>
  );
};
PhotoItem.propTypes = {
  photo: PropTypes.object,
};
export default PhotoItem;
