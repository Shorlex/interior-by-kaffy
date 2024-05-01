"use client"
import { delay, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const works = [
  // {
  //   id: 1,
  //   content: "Why Choose InteriorsByKaffy",
  //   icon: <FaQuestion className="icon" />,
  // },
  {
    id: 2,
    content: "Tailored Solutions",
    icon: `/images/solution-icon.png`,
    delay: 0,
  },
  {
    id: 3,
    content: "Passionate Team",
    icon: `/images/team-icon.avif`,
    delay: .5,
  },
  {
    id: 4,
    content: "Attention to Detail",
    icon: `/images/details-icon.webp`,
    delay: 1,
  },
  {
    id: 5,
    content: "Collaborative Approach",
    icon: `/images/collaboration-icon.png`,
    delay: 1.5
  },
  {
    id: 6,
    content: "Timeless Elegance",
    icon: `/images/elegence-icon.png`,
    delay: 2
  },
];

const page = () => {
  const workWithUs = works.map((work) => (
    <motion.div
      key={work.id}
      className="work"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "linear", delay: `${work.delay}` }}
      viewport={{ once: true }}
    >
      <Image
        src={work.icon}
        width={100}
        height={100}
        className="img"
        alt={work.content}
      />
      <h5>{work.content}</h5>
    </motion.div>
  ));

  return (
    <section style={{ padding: "0" }} id="about-us">
      <motion.div
        className="main-bg"
        initial={{ opacity: 0, y: -500 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "linear" }}
        viewport={{ once: true }}
      >
        <div className="bg"></div>
        <div className="about-us">
          <h1>About Us</h1>
          <p>InteriorsByKaffy</p>
        </div>
      </motion.div>
      <div className="details">
        <div className="title">
          <motion.img
            src={"/images/about-us-2.avif"}
            width={1500}
            height={1500}
            alt="about-us-image"
            className="about-us-image"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear" }}
            viewport={{ once: true }}
          />
          <motion.div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4
              style={{ color: "#fff", fontSize: "2.5rem", textAlign: "center" }}
            >
              We are a full-service interior design firm based in Lagos, Nigeria
            </h4>
          </motion.div>
        </div>
      </div>
      <div className="body">
        <motion.div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear", delay: .3 }}
          viewport={{ once: true }}
        >
          <p>
            Welcome to InteriorsByKaffy – where creativity meets comfort, and
            your dream spaces come to life! We are not just interior designers;
            we are storytellers who weave narratives through textures, colors,
            and meticulously curated spaces. Our passion is to transform your
            surroundings into an exquisite reflection of your personality and
            style.<br></br>
            <br></br>
            At InteriorsByKaffy, we understand that your home is more than just
            a physical space; it's a canvas that tells the story of your
            journey, aspirations, and individuality. With an unwavering
            commitment to excellence, we embark on every project with the aim of
            creating a harmonious blend of aesthetics and functionality.
            <br></br>
            <br></br>
            Embark on a transformative journey with InteriorsByKaffy, where
            every project is a unique expression of artistry and functionality.
            Let us turn your space into a masterpiece that resonates with your
            soul. Welcome to a world of endless possibilities, where luxury and
            comfort converge seamlessly. Your dream space awaits – let's create
            it together!
          </p>
        </motion.div>
        <motion.img
          src={"/images/about-us-3.avif"}
          width={1500}
          height={1500}
          alt="about-us-image"
          className="about-us-image"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
          viewport={{ once: true }}
        />
      </div>
      <div className="work-with-us">
        <h2>Why Choose InteriorsByKaffy?</h2>
        <div className="works">{workWithUs}</div>
      </div>
    </section>
  );
};

export default page;
