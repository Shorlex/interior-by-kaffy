"use client";
import React, { useRef, useEffect } from "react";
import {motion} from 'framer-motion'

const Home = () => {
  const sliderRef = useRef(null);

  const activate = (e) => {
    const items = Array.from(sliderRef.current.children);

    if (e && (e.target.matches(".next") || e.target.matches(".prev"))) {
      // If triggered by button click, move the slider based on the button
      e.target.matches(".next") && sliderRef.current.appendChild(items[0]);
      e.target.matches(".prev") &&
        sliderRef.current.prepend(items[items.length - 1]);
    } else {
      // If triggered automatically, move the slider to the next item
      sliderRef.current.appendChild(items[0]);
    }
  };

  // Auto move the slider every 3 seconds (adjust as needed)
  useEffect(() => {
    const intervalId = setInterval(() => {
      activate();
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <motion.main
      id="home"
      initial={{ opacity: 0, y: -500 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "linear" }}
      viewport={{ once: true }}
    >
      <ul className="slider" ref={sliderRef}>
        <li
          className="item"
          style={{
            backgroundImage: "url('/images/img-1.jpg')",
          }}
        >
          {/* Rest of the content for first item */}
          <div className="content">
            <h2 className="title">InteriorsByKaffy</h2>
            <p className="description">
              Unleashing refined aesthetics, one space at a time.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage: "url('/images/img-2.avif')",
          }}
        >
          {/* Rest of the content for first item */}
          <div className="content">
            <h2 className="title">InteriorsByKaffy</h2>
            <p className="description">
              Transforming dull spaces into Instagram-worthy masterpieces.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage: "url('/images/img-3.jpg')",
          }}
        >
          {/* Rest of the content for first item */}
          <div className="content">
            <h2 className="title">InteriorsByKaffy</h2>
            <p className="description">
              Turning chaos into organized design perfection.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage: "url('/images/img-4.avif')",
          }}
        >
          {/* Rest of the content for first item */}
          <div className="content">
            <h2 className="title">InteriorsByKaffy</h2>
            <p className="description">
              Making your home so beautiful, you'll never want to leave.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage: "url('/images/img-5.avif')",
          }}
        >
          {/* Rest of the content for first item */}
          <div className="content">
            <h2 className="title">InteriorsByKaffy</h2>
            <p className="description">
              Where design meets engineering in stunning perfection.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage: "url('/images/img-6.avif')",
          }}
        >
          {/* Rest of the content for first item */}
          <div className="content">
            <h2 className="title">InteriorsByKaffy</h2>
            <p className="description">
              Bringing harmony to spaces, with a touch of professionalism.
            </p>
            <button>Read More</button>
          </div>
        </li>
      </ul>
      {/* <nav className="nav">
        <button
          className="btn prev"
          name="arrow-back-outline"
          onClick={(e) => activate(e)}
        >
          PREV
        </button>
        <button
          className="btn next"
          name="arrow-forward-outline"
          onClick={(e) => activate(e)}
        >
          NEXT
        </button>
      </nav> */}
    </motion.main>
  );
};

export default Home;
