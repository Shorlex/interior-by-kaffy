"use client"
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import Form from "./Form";
import styles from './Contact.module.css'
import { motion } from "framer-motion";


const Page = () => {
  return (
    <section className={styles.contactUsSection} style={{ padding: 0 }}>
      <motion.div
        className={styles.mainBg}
        initial={{ opacity: 0, y: -500 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "linear" }}
        viewport={{ once: true }}
      >
        <div className={styles.bg}></div>
        <div className={styles.contactUs}>
          <h1>Contact</h1>
          <p>InteriorsByKaffy</p>
        </div>
      </motion.div>
      <div className={styles.contact}>
        <h2>Get In Touch</h2>
        <div className={styles.form}>
          <motion.img
            src={"/images/contact-us-form.avif"}
            width={1500}
            height={1500}
            className={styles.image}
            alt="contact-us-form"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear" }}
            viewport={{ once: true }}
          />
          <Form />
          <motion.div
            className={styles.contactDetails}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "linear", delay: .6 }}
            viewport={{ once: true }}
          >
            <p style={{ marginTop: "20px" }}>
              <FaLocationDot className={styles.icon} />
              <br></br>
              Lagos Island, <br></br>
              Lagos, Nigeria
            </p>
            <p style={{ marginTop: "20px" }}>
              <FaPhone className={styles.icon} />
              <br></br>
              <Link
                href={"tel:+2347068508279"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                +234 7068508279
              </Link>
            </p>
            <p style={{ marginTop: "20px" }}>
              <FaEnvelope className={styles.icon} />
              <br></br>
              <Link
                href={"mailto:abdulkaadiras@gmail.com"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                abdulkaadiras@gmail.com
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Page;
