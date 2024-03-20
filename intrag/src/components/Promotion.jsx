import promo1 from "./photo/Samsung.jpg";
import promo2 from "./photo/Konzum.jpg";
import promo3 from "./photo/Nescafe.jpg";
import "../style/Promotion.css";
import styled from "styled-components";

const Promotion = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img src={promo1} alt="" />
        </div>
        <div className="slide">
          <img src={promo2} alt="" />
        </div>
        <div className="slide">
          <img src={promo3} alt="" />
        </div>
        <div className="slide">
          <img src={promo1} alt="" />
        </div>
        <div className="slide">
          <img src={promo2} alt="" />
        </div>
        <div className="slide">
          <img src={promo3} alt="" />
        </div>
        <div className="slide">
          <img src={promo1} alt="" />
        </div>
        <div className="slide">
          <img src={promo2} alt="" />
        </div>
        <div className="slide">
          <img src={promo3} alt="" />
        </div>
        <div className="slide">
          <img src={promo1} alt="" />
        </div>
        <div className="slide">
          <img src={promo2} alt="" />
        </div>
        <div className="slide">
          <img src={promo3} alt="" />
        </div>
        <div className="slide">
          <img src={promo1} alt="" />
        </div>
        <div className="slide">
          <img src={promo2} alt="" />
        </div>
        <div className="slide">
          <img src={promo3} alt="" />
        </div>
        <div className="slide">
          <img src={promo1} alt="" />
        </div>
        <div className="slide">
          <img src={promo2} alt="" />
        </div>
        <div className="slide">
          <img src={promo3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Promotion;
