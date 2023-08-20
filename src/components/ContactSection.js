import React from "react";
import { useState } from "react";
import "../components/ContactSection.css";

const ContactSection = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();
    alert(data);
  };

  return (
    <div className="contact-container">
      <form className="contact-form" method=" post" onSubmit={hanldeSubmit}>
        <h1>
          Contact Me <span>Here </span>{" "}
        </h1>
        <div className="input-group">
          <label htmlFor="name"> Enter Name:</label>
          <input
            type="text"
            name="name"
            id=""
            onChange={handleChange}
            value={data.name}
            placeholder=" Enter name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email"> EnterEmail:</label>
          <input
            type="email"
            name="email"
            id=""
            onChange={handleChange}
            value={data.email}
            placeholder="example@gmail.com"
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Enter Phone Number:</label>
          <input
            type="phone"
            name="phone"
            id=""
            onChange={handleChange}
            value={data.phone}
            placeholder="+1"
          />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id=""
            cols="30"
            onChange={handleChange}
            value={data.message}
            rows="10"
            placeholder="type here"
          />
        </div>
        <button type="Submit "> Send</button>
      </form>
    </div>
  );
};

export default ContactSection;
