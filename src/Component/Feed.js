import React from "react";
import hi from "./PIC/hii.png";
import "../CSS/feed.css";
import Feed2 from "./Feed2";
const Feed = () => {
  return (
    <>
      <div className="hello">
        <h1>
          Hi There! <img className="wave" src={hi} alt="wave" />
        </h1>
      </div>
      <Feed2/>
    </>
  );
};

export default Feed;
