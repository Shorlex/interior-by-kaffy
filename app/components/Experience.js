"use client";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const about = [
  {
    id: 1,
    icon: `/images/helmet.png`,
    writeUp: {
      title: "Our Service Range",
      body: "We produce modern and new generation arts in interior decoration and furniture manufacturing.",
    },
  },
  {
    id: 2,
    icon: `/images/feedback.png`,
    writeUp: {
      title: "Our Mission",
      body: "By producing original products; It is to make the so-called inaccessible places accessible.",
    },
  },
  {
    id: 3,
    icon: `/images/globe-grid.png`,
    writeUp: {
      title: "Our Vision",
      body: "To create a comfortable living space by applying technological developments and innovations.",
    },
  },
];

const Experience = () => {
  return (
    <section
      style={{
        position: "relative",
        padding: "100px 200px 10px 200px",
        overflow: "hidden",
      }}
      className={styles.section}
    >
      <div className={styles.bgImage}>
        <motion.img
          className={styles.img}
          src={"/images/slidebg.png"}
          width={100}
          height={100}
          alt="spinning-bg"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity }}
        />
      </div>
      <div className={styles.experiences}>
        <div className={styles.experienceImage}>
          <div>
            <motion.img
              src={"/images/inova-about.png"}
              width={500}
              height={500}
              alt="inova"
              className={styles.inova}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "linear" }}
              viewport={{ once: true }}
            />
            <motion.div
              className={styles.years}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "linear" }}
              viewport={{ once: true }}
            >
              <h3>24</h3>
              <h6>Years of Experience</h6>
            </motion.div>
            <motion.div
              className={styles.projects}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "linear" }}
              viewport={{ once: true }}
            >
              <h3>240</h3>
              <h6>Completed Projects</h6>
            </motion.div>
          </div>
        </div>
        <div className={styles.experienceBody}>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "linear" }}
              viewport={{ once: true }}
            >
              We Turn Small <br></br> Touches Into Art
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "linear", delay: 0.5 }}
              viewport={{ once: true }}
              style={{ marginTop: 20 }}
            >
              We are taking firm steps forward to make your dreams come true in
              your interior decoration and furniture manufacturing sector.
            </motion.p>
            <Image
              src={"/images/divider.jpg"}
              width={120}
              height={15}
              alt="divider"
              style={{ marginTop: 30 }}
            />
            <div style={{ marginBottom: 100 }}>
              {about.map((item) => (
                <div key={item.id} className={styles.abouts}>
                  <motion.img
                    src={item.icon}
                    width={50}
                    height={50}
                    alt={item.title}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "linear" }}
                    viewport={{ once: true }}
                  />
                  <div className={styles.aboutWriteUp}>
                    <motion.h5
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "linear" }}
                      viewport={{ once: true }}
                      className={styles.aboutTitle}
                    >
                      {item.writeUp.title}
                    </motion.h5>
                    <motion.p
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "linear" }}
                      viewport={{ once: true }}
                    >
                      {item.writeUp.body}
                    </motion.p>
                  </div>
                </div>
              ))}
            </div>
            <Link href={""} className={styles.link}>
              <p>Get to know us </p>
              <span style={{ marginTop: 3, marginLeft: 10 }}>
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
