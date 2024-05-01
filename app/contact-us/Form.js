"use client";
import React, { useState } from "react";
import "./style.css";
import { FaSpinner } from "react-icons/fa6";

const Form = () => {
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const data = { fullname, email, mobile, subject, message };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Cpntent-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message sent successfully");
      console.log("Message sent successfully");
      setEmail("");
      setFullname("");
      setMessage("");
      setMobile("");
      setSubject("");
      setLoading(false);
    }

    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }

    // console.log(data);
  };

  return (
    <div className="container">
      <div className="welcome">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
          />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <input
              type="email"
              placeholder="Email Address"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            required
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
          <textarea
            rows="4"
            cols="50"
            placeholder="Message"
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <button disabled={loading} className="button">
            {
              loading ? <FaSpinner icon='spinner' className="spinner" /> : 'Send Message'
            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
