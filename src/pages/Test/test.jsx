import React, { useState } from "react";

const Test = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    // Basic validation for name
    if (name === "name") {
      if (!value.trim()) {
        error = "Name is required";
      }
    }

    // Basic validation for email
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Invalid email address";
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  return (
    <div>
      <h2>Form with Error Check While Typing</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
      </form>
    </div>
  );
};

export default Test;
