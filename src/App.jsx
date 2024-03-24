import "./App.css";
import  { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Photos from "./components/Photos/Photos";
import TopCategories from "./components/TopCategories/TopCategories";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <div className="lg:mx-[10%] mx-[5%] relative">
        <Header />
        <Banner className="z-0" onSearchQueryChange={handleSearchQueryChange} />
        <div className="mt-[-100px] mx-8 relative z-10">
          <div className="bg-white rounded-lg shadow-md p-4">
            <TopCategories />
            <Photos searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
