import React, { useState } from "react";
import axios from "axios";
import { Input, Button } from "../../ui";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'http://localhost:3001' with your server URL
      const response = await axios.post(
        "http://localhost:3000/contact",
        formData
      );

      console.log(response.data);
      // Handle success, e.g., show a success message to the user
    } catch (error) {
      console.error(error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="name"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="E-mail"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        type="number"
        autoComplete="phoneNumber"
        placeholder="Phone Number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <Button htmlType="submit" type="primary" size="large">
        Send Contact Request
      </Button>
    </form>
  );
};

export default ContactForm;
