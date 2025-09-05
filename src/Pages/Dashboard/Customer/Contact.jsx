import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Map from "./Map";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-base-100 p-8">
      <Helmet>
        <title>Bolaka Restaurant | Contact Us</title>
      </Helmet>

      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Our Info</h2>
          <p>📍 123 Bolaka Street, Bonarpar,Saghata,Gaibandha, Bangladesh</p>
          <p>📞 +880 130 717 7507</p>
          <p>✉️ info@bolakarestaurant.com</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-2xl">📘</a>
            <a href="#" className="text-2xl">📸</a>
            <a href="#" className="text-2xl">▶️</a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-lg flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary text-white">
            Send Message
          </button>
        </form>
      </div>
      {/* map */}
          <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9069471698916!2d90.39732631542816!3d23.75090378459133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c62b4b9f5%3A0x123456789abcdef!2sBolaka%20Restaurant!5e0!3m2!1sen!2sbd!4v1693957654321!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Bolaka Restaurant Location"
      ></iframe>
    </div>

    </div>
  );
};

export default Contact;
