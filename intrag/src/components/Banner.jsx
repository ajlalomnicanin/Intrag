import bannerphoto from "./photo/bannerRight.jpg";
import "../style/Banner.css";
function Banner() {
  return (
    <div className="main">
      <div className="left">
        <h1>
          Vizualni identitet <br /> iz snova
        </h1>
        <p>
          Sa strašću prema grafici i vrhunskom digitalnom štampom, pružamo
          personalizovane usluge dizajna i štampe koje ističu vaš brend.
        </p>
        <button className="button">Upit za narudžbu</button>
      </div>
      <div className="right">
        <img src={bannerphoto} alt="" />
      </div>
    </div>
  );
}

export default Banner;
