import info1 from "../components/photo/info1.png";
import info2 from "../components/photo/info2.png";
import info3 from "../components/photo/info3.png";
import info4 from "../components/photo/info4.png";
import "../style/CompanyInfo.css";

const CompanyInfo = () => {
  return (
    <div className="company-info">
      <div className="company-left">
        <h1>Priča o Intrag štampariji</h1>
        <section>
          <h3>Naša misija</h3>
          <p>
            Posvećeni smo pružanju visokokvalitetnih usluga štampe koristeći
            savremene metode i alate pri izradi proizvoda za naše klijente. Naša
            misija je da svojim kreativnim i profesionalnim pristupom ostavimo
            trajan i pozitivan utisak za sve naše klijente.
          </p>
        </section>
        <section>
          <h3>Naša vizija</h3>
          <p>
            Gledamo u budućnost sa vizijom postati lideri u industriji
            profesionalne štampe te biti istaknuti na tržištu kvalitetom i
            inovacijama. Konstantno usavršavanje usluga i pristupa, omogućiti će
            nam da ispunimo sve naše ciljeve u budućnosti.
          </p>
        </section>
        <button>Vidi više</button>
      </div>
      <div className="company-right">
        <img src={info2} alt="" />
        <img src={info4} alt="" />
        <img src={info3} alt="" />
        <img src={info1} alt="" />
      </div>
    </div>
  );
};

export default CompanyInfo;
