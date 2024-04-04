import { useState } from "react";

const CardCarousel = ({ cardList }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentCardIndex((prevIndex) => {
      prevIndex === 0 ? cardList.length - 1 : prevIndex - 1;
    });
  };

  const handleRightArrowClick = () => {
    setCurrentCardIndex((prevIndex) => {
      prevIndex === cardList.length - 1 ? 0 : prevIndex + 1;
    });
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button onClick={handleLeftArrowClick}>{"<"}</button>
      <div style={{ margin: "0 10px" }}>{cardList[currentCardIndex]}</div>
      <button onClick={handleRightArrowClick}>{">"}</button>
    </div>
  );
};
