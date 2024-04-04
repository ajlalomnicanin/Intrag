import React, { useState } from 'react';

const CardCarousel = ({ cardList }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? cardList.length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === cardList.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button onClick={handleLeftArrowClick}>{'<'}</button>
      <div style={{ margin: '0 10px' }}>{cardList[currentCardIndex]}</div>
      <button onClick={handleRightArrowClick}>{'>'}</button>
    </div>
  );
};

const App = () => {
  const cardList = [
    <div key="card1">Prva kartica</div>,
    <div key="card2">Druga kartica</div>,
    <div key="card3">Treća kartica</div>,
  ];

  return (
    <div>
      <h1>Kartice Carousel</h1>
      <CardCarousel cardList={cardList} />
    </div>
  );
};

export default App;

