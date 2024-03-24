import PropTypes from "prop-types";
const VideoItem = ({ video }) => {
  return (
    <>
      {video.video_pictures.map((picture) => (
        <div key={picture.id} className="grid gap-4">
          <img
            src={picture.picture}
            alt={`Video thumbnail ${video.id}`}
            className="h-auto max-w-full rounded-lg"
          />
        </div>
      ))}
    </>
  );
};
VideoItem.propTypes = {
  video: PropTypes.array,
};
export default VideoItem;
