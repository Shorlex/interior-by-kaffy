"use client";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion"
import React, { useState } from "react";
import { FaMagnifyingGlass, FaBars, FaXmark } from "react-icons/fa6";

const Nav = () => {
  const [expanded, setExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0");

  const toggleHeight = () => {
    if (expanded) {
      setMaxHeight("0"); // Set the max-height to its initial value when collapsing
    } else {
      setMaxHeight("600px"); // Set the max-height to the desired expanded value
    }
    setExpanded(!expanded);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "linear", delay: 1 }}
      viewport={{ once: true }}
    >
      <div className="nav">
        <div className="nav-bar">
          <Link href={"/"}>
            <Image
              src={"/images/logo-icon.png"}
              width={1500}
              height={1500}
              alt="logo"
              className="logo"
            />
          </Link>
          <div className="form">
            <form>
              <input
                type="text"
                placeholder="Search..."
                name="search"
                id="search"
                className="search"
              />
              <button className="btn">
                <FaMagnifyingGlass />
              </button>
            </form>
          </div>
          <button className="btn" onClick={toggleHeight}>
            <FaBars className="icon" />
          </button>
        </div>
        <div className="menu-bar">
          <div
            style={{
              overflow: "hidden",
              maxHeight,
              transition: "max-height 0.5s ease-out",
            }}
          >
            <div className="menu">
              <div className="close">
                <FaXmark className="icon" onClick={toggleHeight} />
              </div>
              <ul>
                <li>
                  <Link href={"/"}>
                    <Image
                      src={"/images/logo.jpg"}
                      width={5000}
                      height={5000}
                      alt="logo"
                      className="logo"
                    />
                  </Link>
                </li>
                <li>
                  <Link className="link" href={"#home"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="link" href={"/about-us"}>
                    About InteriorsByKaffy
                  </Link>
                </li>
                <li>
                  <Link className="link" href={"#portfolio"}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link className="link" href={"/contact-us"}>
                    Work With Us
                  </Link>
                </li>
                <li>
                  <Link className="link" href={"#gallery"}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link className="link" href={"#faq"}>
                    Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
