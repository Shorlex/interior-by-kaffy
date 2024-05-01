"use client";
import { FaMedal, FaRegHandshake, FaRegThumbsUp } from "react-icons/fa6";
import styles from "./FlipCard.module.css"; // Import your CSS styles
// import { FaRegThumbsUp } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { delay, motion } from "framer-motion";

const cards = [
  {
    id: 1,
    front: {
      icon: <MdOutlineWorkspacePremium />,
      title: "Relaibility",
    },
    back: {
      body: "We provide accurate, reliable and ethical services with our expert staff. We apply the fastest and most reliable methods for your brand.",
    },
    delay: 0,
    X: 50,
  },
  {
    id: 2,
    front: {
      icon: <FaMedal />,
      title: "Loyalty",
    },
    back: {
      body: "Our long-term work continues until the job is finished. We establish solid and long-term relationships with all the companies we work with.",
    },
    delay: 0.5,
    x: 50,
  },
  {
    id: 3,
    front: {
      icon: <FaRegThumbsUp />,
      title: "Experience",
    },
    back: {
      body: "Thanks to the experience we have gained over the years, the specialist provides service with the latest technology devices.",
    },
    delay: 1,
    x: -50,
  },
  {
    id: 4,
    front: {
      icon: <FaRegHandshake />,
      title: "Support",
    },
    back: {
      body: "We accelerate your business processes by providing professional support. We solve your problems and provide instant solutions.",
    },
    delay: 1.5,
    X: -50,
  },
];

const Cards = () => {
  return (
    <section
      style={{
        paddingTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {cards.map((card) => (
        <motion.div
          className={styles.hoverFlipCard}
          key={card.id}
          initial={{ opacity: 0, x: `${card.x}` }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "linear", delay: `${card.delay}` }}
          viewport={{ once: true }}
        >
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <div>
                  <div className={styles.frontIcon}>{card.front.icon}</div>
                  <h3 style={{ marginTop: "20px", textAlign: "center" }}>
                    {card.front.title}
                  </h3>
                </div>
              </div>
              <div className={styles.flipCardBack}>
                <div className={styles.backBody}>
                  <h3>{card.front.title}</h3>
                  <p>{card.back.body}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Cards;
