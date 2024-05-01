"use client";
import React, { useState } from "react";
import styles from "./FAQ.module.css";
import { motion } from "framer-motion";

// FAQItem component
const FAQItem = ({ id, question, answer, isOpen, toggleAnswer }) => {
  return (
    <div className={styles.faqItem}>
      <div className={styles.question} onClick={() => toggleAnswer(id)}>
        <h3>{question}</h3>
        <button
          className={`${styles.toggleBtn} ${isOpen ? `${styles.open}` : ""}`}
        >
          +
        </button>
      </div>
      {isOpen && (
        <div className={`${styles.answer} ${isOpen ? `${styles.open}` : ""}`}>
          {answer}
        </div>
      )}
    </div>
  );
};

// FAQ component containing multiple FAQItem components
const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "How do I choose the right colors for my space?",
      answer:
        "Choosing the right colors for your space depends on several factors including your style preferences, room size, natural lighting, and existing furniture. We recommend starting with neutral base colors and adding accent colors for a harmonious look.",
    },
    {
      id: 2,
      question: "What are the latest interior decor trends?",
      answer:
        "Current interior decor trends include minimalism, natural elements, sustainable materials, and vintage accents. Mixing modern and classic styles can create a unique and timeless look for your home.",
    },
    {
      id: 3,
      question: "How can I make a small room appear larger?",
      answer:
        "To make a small room appear larger, you can use light colors for walls and furniture, strategically place mirrors to reflect light and create an illusion of space, declutter the room to maximize floor space, and choose furniture with legs to create a sense of openness.",
    },
    {
      id: 4,
      question: "What are some eco-friendly interior decor options?",
      answer:
        "There are several eco-friendly interior decor options available, including using sustainable materials such as bamboo, reclaimed wood, and recycled materials, opting for low-VOC paints and finishes, choosing energy-efficient lighting and appliances, and incorporating indoor plants for natural air purification.",
    },
    {
      id: 5,
      question: "How can I create a cohesive look throughout my home?",
      answer:
        "To create a cohesive look throughout your home, you can establish a consistent color palette, repeat patterns and textures across different rooms, maintain a balance of furniture styles and proportions, incorporate cohesive design elements such as artwork and accessories, and ensure proper flow and continuity between spaces.",
    },
    // Add more FAQ items as needed
  ];

  const [openQuestionId, setOpenQuestionId] = useState(null);

  const toggleAnswer = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <motion.img
        src={"/images/experienceImage-1.avif"}
        width={500}
        height={500}
        alt="FAQ-bg"
        className={styles.faqImage}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "linear" }}
        viewport={{ once: true }}
      />
      <motion.div
        className={styles.faqContainer}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "linear" }}
        viewport={{ once: true }}
      >
        <h2>Design FAQs</h2>
        <p style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>
          Welcome to our Design FAQs hub, your ultimate destination for all
          things interior design and furniture-related.
        </p>
        {faqData.map((item) => (
          <FAQItem
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openQuestionId === item.id}
            toggleAnswer={toggleAnswer}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default FAQ;
