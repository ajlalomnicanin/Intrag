import bannerphoto from "./photo/bannerRight.jpg";
import "../style/Banner.css";
function Banner() {
  return (
    <div className="main">
      <div className="left">
        <h1 className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-red-500 rounded-full">
          Vizualni identitet <br /> iz snova
        </h1>
        <p>
          Sa strašću prema grafici i vrhunskom digitalnom štampom, pružamo
          personalizovane usluge dizajna i štampe koje ističu vaš brend.
        </p>
        <button>Upit za narudžbu</button>
      </div>
      <div className="right">
        <img src={bannerphoto} alt="" />
      </div>
    </div>
  );
}

export default Banner;
