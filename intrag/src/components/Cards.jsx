// import { useState } from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import slika1 from "../components/photo/Card1.png";
// import slika2 from "../components/photo/Card2.png";

// export const Cards = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const ToggleCars = (index) => {
//     setActiveIndex(() => {
//       return activeIndex === index ? null : index;
//     });
//   };

//   return (
//     <div>
//       <h2>Čime se bavimo?</h2>
//       <section>
//         <div
//           onClick={() => {
//             ToggleCars(0);
//           }}
//         >
//           <button
//             style={{ backgroundColor: activeIndex === 0 ? "#cce6ff" : "white" }}
//           >
//             Grafički dizajn i digitalna štampa
//             <IoIosArrowForward />
//           </button>

//           {activeIndex === 0 && (
//             <p>
//               Grafički dizajn i digitalna štampa U našem svijetu vizuelnog
//               stvaralaštva, nudimo vrhunsku uslugu grafičkog dizajna i digitalne
//               štampe koja nadmašuje očekivanja. Naš kreativni tim, inspirisan
//               inovacijama i stručnošću, posvećen je stvaranju vizualnih
//               identiteta koji se ističu. Od prvih skica do finalnog proizvoda,
//               pridajemo posebnu pažnju detaljima kako bismo vašu priču prenijeli
//               na način koji ostavlja neizbrisiv utisak. Štampa ceradnih
//               materijala Sito štampa Graviranje Upit za narudžbu
//             </p>
//           )}
//         </div>
//         <div
//           onClick={() => {
//             ToggleCars(1);
//           }}
//         >
//           <button
//             style={{
//               backgroundColor: activeIndex === 1 ? "#d6f8ea" : "white",
//             }}
//           >
//             Štampa ceradnih materijala
//             <IoIosArrowForward />
//           </button>
//           {activeIndex === 1 && (
//             <div>
//               <div>
//                 <img src={slika1} alt="" />
//                 <img src={slika2} alt="" />
//               </div>
//               <p>
//                 Grafički dizajn i digitalna štampa U našem svijetu vizuelnog
//                 stvaralaštva, nudimo vrhunsku uslugu grafičkog dizajna i
//                 digitalne štampe koja nadmašuje očekivanja. Naš kreativni tim,
//                 inspirisan inovacijama i stručnošću, posvećen je stvaranju
//                 vizualnih identiteta koji se ističu. Od prvih skica do finalnog
//                 proizvoda, pridajemo posebnu pažnju detaljima kako bismo vašu
//                 priču prenijeli na način koji ostavlja neizbrisiv utisak. Štampa
//                 ceradnih materijala Sito štampa Graviranje Upit za narudžbu
//               </p>
//             </div>
//           )}
//         </div>
//         {/*  */}
//         <div
//           onClick={() => {
//             ToggleCars(3);
//           }}
//         >
//           <button
//             style={{ backgroundColor: activeIndex === 3 ? "#ffffcc" : "white" }}
//           >
//             Sito štampa
//             <IoIosArrowForward />
//           </button>
//           {activeIndex === 3 && (
//             <p>
//               Grafički dizajn i digitalna štampa U našem svijetu vizuelnog
//               stvaralaštva, nudimo vrhunsku uslugu grafičkog dizajna i digitalne
//               štampe koja nadmašuje očekivanja. Naš kreativni tim, inspirisan
//               inovacijama i stručnošću, posvećen je stvaranju vizualnih
//               identiteta koji se ističu. Od prvih skica do finalnog proizvoda,
//               pridajemo posebnu pažnju detaljima kako bismo vašu priču prenijeli
//               na način koji ostavlja neizbrisiv utisak. Štampa ceradnih
//               materijala Sito štampa Graviranje Upit za narudžbu
//             </p>
//           )}
//         </div>
//         {/*  */}
//         <div
//           onClick={() => {
//             ToggleCars(4);
//           }}
//         >
//           <button
//             style={{ backgroundColor: activeIndex === 4 ? "#ffe0b3" : "white" }}
//           >
//             Graviranje Upit za narudžbu
//             <IoIosArrowForward />
//           </button>
//           {activeIndex === 4 && (
//             <p>
//               Grafički dizajn i digitalna štampa U našem svijetu vizuelnog
//               stvaralaštva, nudimo vrhunsku uslugu grafičkog dizajna i digitalne
//               štampe koja nadmašuje očekivanja. Naš kreativni tim, inspirisan
//               inovacijama i stručnošću, posvećen je stvaranju vizualnih
//               identiteta koji se ističu. Od prvih skica do finalnog proizvoda,
//               pridajemo posebnu pažnju detaljima kako bismo vašu priču prenijeli
//               na način koji ostavlja neizbrisiv utisak. Štampa ceradnih
//               materijala Sito štampa Graviranje Upit za narudžbu
//             </p>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Card1 from "../components/photo/Card1.png";
import Card2 from "../components/photo/Card2.png";
import "../style/Cards.css";

const data = [
  {
    title: "Grafički dizajn i digitalna štampa",
    backgroundColor: "#cce6ff",
    text: "U našem svijetu vizuelnog stvaralaštva, nudimo vrhunsku uslugu grafičkog dizajna i digitalne štampe koja nadmašuje očekivanja. Naš kreativni tim, inspirisan inovacijama i stručnošću, posvećen je stvaranju vizualnih identiteta koji se ističu. Od prvih skica do finalnog proizvoda, pridajemo posebnu pažnju detaljima kako bismo vašu priču prenijeli na način koji ostavlja neizbrisiv utisak.",
  },
  {
    title: "Štampa ceradnih materijala",
    backgroundColor: "#d6f8ea",
    text: "U našem svijetu vizuelnog stvaralaštva, nudimo vrhunsku uslugu grafičkog dizajna i digitalne štampe koja nadmašuje očekivanja. Naš kreativni tim, inspirisan inovacijama i stručnošću, posvećen je stvaranju vizualnih identiteta koji se ističu. Od prvih skica do finalnog proizvoda, pridajemo posebnu pažnju detaljima kako bismo vašu priču prenijeli na način koji ostavlja neizbrisiv utisak.",
    images: [Card1, Card2],
  },
  {
    title: "Sito štampa",
    backgroundColor: "#ffffcc",
    text: "U našem svijetu vizuelnog stvaralaštva, nudimo vrhunsku uslugu grafičkog dizajna i digitalne štampe koja nadmašuje očekivanja. Naš kreativni tim, inspirisan inovacijama i stručnošću, posvećen je stvaranju vizualnih identiteta koji se ističu. Od prvih skica do finalnog proizvoda, pridajemo posebnu pažnju detaljima kako bismo vašu priču prenijeli na način koji ostavlja neizbrisiv utisak.",
  },
  {
    title: "Graviranje Upit za narudžbu",
    backgroundColor: "#ffe0b3",
    text: "U našem svijetu vizuelnog stvaralaštva, nudimo vrhunsku uslugu grafičkog dizajna i digitalne štampe koja nadmašuje očekivanja. Naš kreativni tim, inspirisan inovacijama i stručnošću, posvećen je stvaranju vizualnih identiteta koji se ističu. Od prvih skica do finalnog proizvoda, pridajemo posebnu pažnju detaljima kako bismo vašu priču prenijeli na način koji ostavlja neizbrisiv utisak.",
  },
];

const Cards = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="mainn">
      <h1 className="h1" style={{ fontSize: "29px", marginBottom: "40px" }}>
        Čime se bavimo?
      </h1>
      <section>
        {data.map((item, index) => (
          <div className="card" key={index} onClick={() => toggleCard(index)}>
            <button
              className="card-button"
              style={{
                backgroundColor:
                  activeIndex === index ? item.backgroundColor : "white",
              }}
            >
              {item.title}
              <IoIosArrowForward />
            </button>
            {activeIndex === index && (
              <div>
                {item.images && (
                  <div>
                    {item.images.map((image, imgIndex) => (
                      <img key={imgIndex} src={image} alt="" />
                    ))}
                  </div>
                )}
                <p>{item.text}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Cards;
