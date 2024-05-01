// "use client";
// import Image from "next/image";
// import styles from "./Portfolio.module.css";
// import { motion, useScroll, useTransform } from "framer-motion";
// import React, { useRef } from "react";

// const portfolios = [
//   {
//     id: 1,
//     img: `/images/portfolio-1.avif`,
//     heading: "The WaterFront",
//     body: "Introducing our Newly completed Residential Project. Designed in 2020, and executed on 2022. Working closely with Architects & Contractors from Scratch, we furnished this Modern Contemporary home with Timeless Pieces, infusing Clean lines with Art Deco, Sculptural Elements for the Ultimate Living Experience.",
//   },
//   {
//     id: 2,
//     img: `/images/portfolio-6.avif`,
//     heading: "The WaterFront",
//     body: "Introducing our Newly completed Residential Project. Designed in 2020, and executed on 2022. Working closely with Architects & Contractors from Scratch, we furnished this Modern Contemporary home with Timeless Pieces, infusing Clean lines with Art Deco, Sculptural Elements for the Ultimate Living Experience.",
//   },
//   {
//     id: 3,
//     img: `/images/portfolio-2.avif`,
//     heading: "Our Portfolio",
//     body: "Introducing our Newly completed Residential Project. Designed in 2020, and executed on 2022. Working closely with Architects & Contractors from Scratch, we furnished this Modern Contemporary home with Timeless Pieces, infusing Clean lines with Art Deco, Sculptural Elements for the Ultimate Living Experience.",
//   },
//   {
//     id: 4,
//     img: `/images/portfolio-3.avif`,
//     heading: "Our Portfolio",
//     body: "Introducing our Newly completed Residential Project. Designed in 2020, and executed on 2022. Working closely with Architects & Contractors from Scratch, we furnished this Modern Contemporary home with Timeless Pieces, infusing Clean lines with Art Deco, Sculptural Elements for the Ultimate Living Experience.",
//   },
//   {
//     id: 5,
//     img: `/images/portfolio-4.avif`,
//     heading: "Our Portfolio",
//     body: "Introducing our Newly completed Residential Project. Designed in 2020, and executed on 2022. Working closely with Architects & Contractors from Scratch, we furnished this Modern Contemporary home with Timeless Pieces, infusing Clean lines with Art Deco, Sculptural Elements for the Ultimate Living Experience.",
//   },
//   {
//     id: 6,
//     img: `/images/portfolio-5.avif`,
//     heading: "Our Portfolio",
//     body: "Introducing our Newly completed Residential Project. Designed in 2020, and executed on 2022. Working closely with Architects & Contractors from Scratch, we furnished this Modern Contemporary home with Timeless Pieces, infusing Clean lines with Art Deco, Sculptural Elements for the Ultimate Living Experience.",
//   },
// ];

// const Portfolio = () => {
//   const ourPortfolio = portfolios.map((portfolio) => (
//     <div key={portfolio.id} className="portfolio">
//       <Image
//         src={portfolio.img}
//         width={1000}
//         height={1000}
//         alt={portfolio.heading}
//         className="portfolio-image"
//       />
//       <div className="write-up">
//         <h3>{portfolio.heading}</h3>
//         <p>{portfolio.body}</p>
//       </div>
//     </div>
//   ));

//   const ref = useRef();
//   const { scrollYProgress } = useScroll({ target: ref });
//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

//   return (
//     <section className={styles.portfolioSection} ref={ref}>
//       <div>
//         <h2>Portfolio</h2>
//       </div>
//       <motion.div className={styles.portfolios} style={{ x }}>
//         <div className={styles.portfolio}>
//           <h1>WHY1</h1>
//         </div>
//         <div className={styles.portfolio}>
//           <h1>WHY2</h1>
//         </div>
//         <div className={styles.portfolio}>
//           <h1>WHY3</h1>
//         </div>
//         <div className={styles.portfolio}>
//           <h1>WHY4</h1>
//         </div>
//         <div className={styles.portfolio}>
//           <h1>WHY5</h1>
//         </div>
//         <div className={styles.portfolio}>
//           <h1>WHY6</h1>
//         </div>
//       </motion.div>
//     </section>
//   );
//   // <section id="portfolio">
//   //   <h2>Portfolio</h2>
//   //   <div className="portfolios">{ourPortfolio}</div>
//   // </section>
// };

// export default Portfolio;

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Portfolio.module.css";
import Image from "next/image";

const portfolios = [
  {
    id: 1,
    img: `/images/portfolio-1.avif`,
    heading: "The WaterFront",
    body: "Introducing our Newly completed Residential Project. Designed in 2020, and executed on 2022. Working closely with Architects & Contractors from Scratch, we furnished this Modern Contemporary home with Timeless Pieces, infusing Clean lines with Art Deco, Sculptural Elements for the Ultimate Living Experience.",
  },
  {
    id: 2,
    img: `/images/portfolio-6.avif`,
    heading: "The WaterFront",
    body: "Introducing our Newly completed Residential Project. Designed in 2020, and executed on 2022. Working closely with Architects & Contractors from Scratch, we furnished this Modern Contemporary home with Timeless Pieces, infusing Clean lines with Art Deco, Sculptural Elements for the Ultimate Living Experience.",
  },
  {
    id: 3,
    img: `/images/portfolio-2.avif`,
    heading: "Our Portfolio",
    body: "Introducing our Newly completed Residential Project. Designed in 2020, and executed on 2022. Working closely with Architects & Contractors from Scratch, we furnished this Modern Contemporary home with Timeless Pieces, infusing Clean lines with Art Deco, Sculptural Elements for the Ultimate Living Experience.",
  },
  {
    id: 4,
    img: `/images/portfolio-3.avif`,
    heading: "Our Portfolio",
    body: "Introducing our Newly completed Residential Project. Designed in 2020, and executed on 2022. Working closely with Architects & Contractors from Scratch, we furnished this Modern Contemporary home with Timeless Pieces, infusing Clean lines with Art Deco, Sculptural Elements for the Ultimate Living Experience.",
  },
  {
    id: 5,
    img: `/images/portfolio-4.avif`,
    heading: "Our Portfolio",
    body: "Introducing our Newly completed Residential Project. Designed in 2020, and executed on 2022. Working closely with Architects & Contractors from Scratch, we furnished this Modern Contemporary home with Timeless Pieces, infusing Clean lines with Art Deco, Sculptural Elements for the Ultimate Living Experience.",
  },
  // {
  //   id: 6,
  //   img: `/images/portfolio-5.avif`,
  //   heading: "Our Portfolio",
  //   body: "Introducing our Newly completed Residential Project. Designed in 2020, and executed on 2022. Working closely with Architects & Contractors from Scratch, we furnished this Modern Contemporary home with Timeless Pieces, infusing Clean lines with Art Deco, Sculptural Elements for the Ultimate Living Experience.",
  // },
];

const Portfolio = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };
  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVarients = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 2, filter: "blur(8px)" },
    left: { x: "-90%", scale: 0.5, zIndex: 1, filter: "blur(8px)" },
    right: { x: "90%", scale: 0.5, zIndex: 1, filter: "blur(8px)" },
    right1: { x: "50%", scale: 0.7, zIndex: 2, filter: "blur(8px)" },
  };
  return (
    <motion.section
      id="portfolio"
      style={{ position: "relative", overflow: "hidden", paddingBottom: 10 }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "linear" }}
      viewport={{ once: true }}
    >
      <h2>Portfolio</h2>
      <div className={styles.portfolios}>
        {portfolios.map((portfolio, index) => (
          <motion.div
            className={styles.image}
            key={portfolio.id}
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVarients}
            transition={{ duration: 0.5 }}
            style={{
              backgroundImage: `url(${portfolio.img})`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          >
            <div className={styles.portfolioDetails}>
              <h4>{portfolio.heading}</h4>
              <p>{portfolio.body}</p>
            </div>
          </motion.div>
        ))}
        {portfolios.map((portfolio, index) => (
          <motion.div
            className={styles.resPortfolio}
            key={portfolio.id}
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={imageVarients}
            transition={{ duration: 0.5 }}
          >
            <Image src={portfolio.img} width={300} height={250} />
            <div style={{ backgroundColor: "#fff", padding: 10 }}>
              <h4 className={styles.h4}>{portfolio.heading}</h4>
              <p className={styles.p}>{portfolio.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className={styles.button}>
        <button className={styles.nextBtn} onClick={handleNext}>
          Next Portfolio
        </button>
        <button className={styles.moreBtn}>More Portfolios</button>
      </div>
    </motion.section>
  );
};

export default Portfolio;
