"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "linear" }}
      viewport={{ once: true }}
    >
      <div className="footer">
        <motion.div
          className="links"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "linear", delay: .5 }}
          viewport={{ once: true }}
        >
          <ul>
            <li>
              <Link className="link" href={"/contact-us"}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="link" href={"/about-us"}>
                About Us
              </Link>
            </li>
            <li>
              <Link className="link" href={"#faq"}>
                Frequently Asked Questions
              </Link>
            </li>
            <li>
              <Link className="link" href={"/contact-us"}>
                Help
              </Link>
            </li>
            <li>
              <Link className="link" href={"/not-found"}>
                Terms of Use
              </Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="cta"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "linear", delay: 1 }}
          viewport={{ once: true }}
        >
          <h3>Starting a New Project?</h3>
          <button className="btn" href={"/contact-us"}>
            GET IN TOUCH{" "}
            <span>
              <FaArrowRight className="icon" />
            </span>
          </button>
        </motion.div>
        <motion.div
          className="logo"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "linear", delay: 1.5 }}
          viewport={{ once: true }}
        >
          <Image
            className="image"
            src={"/images/logo.jpg"}
            width={1000}
            height={1000}
            alt="logo"
          />
        </motion.div>
      </div>
      <hr style={{ margin: "50px 0 10px 0" }}></hr>
      <div className="copy-right">
        <p className="copy">
          &#169; 2024 InteriorsByKaffy - All Rights Reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
