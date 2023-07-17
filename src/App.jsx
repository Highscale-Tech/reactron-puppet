import "./App.css";
import { useState } from "react";
function App() {
  const [keyword, setKeyword] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [image, setImage] = useState("");
  function clickHandler() {
    setIsImageLoading(true);
    window.electron.scrape(keyword);
    window.electron.showScrapedData((e, data) => {
      setImage(data);
    });
  }
  return (
    <div className="container">
      <h1>A scraper mini project with react, electron and puppeteer</h1>
      <div className="form">
        <input
          name="keyword"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <button onClick={clickHandler}>Scrape!</button>
      </div>
      {image ? (
        <>
          <p>The first image result is: </p>{" "}
          <img src={image} alt="google result" />
        </>
      ) : null}
    </div>
  );
}

export default App;
