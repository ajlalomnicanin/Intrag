import { useEffect, useState } from "react";
import promo1 from "./photo/Samsung.jpg";
import promo2 from "./photo/Konzum.jpg";
import promo3 from "./photo/Nescafe.jpg";

const images = [promo1, promo2, promo3];

function Promotion() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "300px",
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Promotion ${index + 1}`}
          style={{
            position: "absolute",
            left: `${(currentPhoto + index) * 100}%`, // Pomeraj slike u odnosu na trenutnu sliku
            top: "50%",
            transform: "translate(-50%, -50%)", // Centriranje slike vertikalno i horizontalno
            width: "80%",
            transition: "left 1s ease-in-out", // Animacija prelaska sa leve na desnu stranu
          }}
        />
      ))}
    </div>
  );
}

export default Promotion;
