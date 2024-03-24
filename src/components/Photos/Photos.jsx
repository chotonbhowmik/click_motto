import { useState, useEffect } from "react";
import PhotoItem from "./PhotoItem/PhotoItem";
import VideoItem from "./VideoItem/VideoItem";
import FilterComponent from "./FilterComponent/FilterComponent";
import PropTypes from "prop-types";
import config from "../../../config";

const Photos = ({ searchQuery }) => {
  const [media, setMedia] = useState([]);
  const [mediaType, setMediaType] = useState("photos");
  const defaultSearchQuery = "dhaka";

  const fetchMedia = async (url) => {
    try {
    //   console.log("Fetching data from:", url);
      const response = await fetch(url, {
        headers: {
          Authorization: config.API_KEY,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response data:", data);
        return data;
      } else {
        console.error("Failed to fetch data:", response.statusText);
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
      return null;
    }
  };

  const fetchPhotos = async (query = defaultSearchQuery) => {
    const url = `${config.BASE_URL}/search?query=${query}&per_page=10`;
    const data = await fetchMedia(url);
    if (data) {
      setMedia(data.photos);
      setMediaType("photos");
    }
  };

  const fetchAllMedia = async () => {
    const url = `${config.BASE_URL}/search?query=${defaultSearchQuery}&per_page=10`;
    const data = await fetchMedia(url);
    if (data) {
      setMedia(data.photos);
      setMediaType("photos");
    }
  };

  const fetchVideos = async () => {
    const url = `${config.BASE_URL}/videos/popular?per_page=1`;
    const data = await fetchMedia(url);
    if (data) {
      setMedia(data.videos);
      setMediaType("videos");
    }
  };

  useEffect(() => {
    fetchPhotos(searchQuery || defaultSearchQuery);
  }, [searchQuery]);

  return (
    <div>
      <div className="flex justify-between">
        <FilterComponent
          fetchAllMedia={fetchAllMedia}
          fetchPhotos={fetchPhotos}
          fetchVideos={fetchVideos}
        />
        <div>
          <select className="  max-w-xs">
            <option disabled selected>
              Recommended
            </option>
            <option>Most Recent</option>
            <option>Most Viewed</option>
            <option>Most Download</option>
          </select>
        </div>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${
          mediaType === "videos" ? "sm:gap-8" : ""
        } mt-8`}
      >
        {mediaType === "photos" &&
          media.map((item) => <PhotoItem key={item.id} photo={item} />)}
        {mediaType === "videos" &&
          media.map((item) => <VideoItem key={item.id} video={item} />)}
      </div>
    </div>
  );
};

Photos.propTypes = {
  searchQuery: PropTypes.string,
  
};

export default Photos;
