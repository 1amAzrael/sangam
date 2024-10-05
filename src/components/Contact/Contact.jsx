import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from 'emailjs-com'; 



emailjs.init("nZazjGOVoC0AXmi-M"); 

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const { name, email, message } = formData;
    const serviceID = "service_wfbzhzh"; 
    const templateID = "template_ywjiexg"; 

    try {
      await emailjs.send(serviceID, templateID, {
        from_name: name,
        from_email: email,
        message,
      });

     
      setFormData({ name: "", email: "", message: "" });
      setSuccessMessage("Your message has been sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setSuccessMessage("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div className="w-full py-16 px-4 bg-[#161616] text-white " id="contact">
      <div className="max-w-[1400px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-8">Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-16">
          I would love to hear from you! Feel free to reach out using the form below.
        </p>

      
        <form className="max-w-[600px] mx-auto space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-teal-400"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-teal-400"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-teal-400"
              rows="4"
              required
            />
          </div>
          <button className="w-full py-3 bg-teal-500 text-gray-800 rounded hover:bg-teal-400 transition duration-300">
            Send Message
          </button>
        </form>

      
        {successMessage && (
          <div className="mt-4 text-lg text-green-400">{successMessage}</div>
        )}

       
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Or Contact Me Directly</h3>
          <p className="text-lg text-gray-400">Email: sangambkh21@gmail.com</p>
          
        </div>

       
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://www.facebook.com/sangam.bakhunchhe/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="h-8 w-8 text-teal-400 hover:text-teal-500 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/sangam-bakhunchhe-02484930a/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-8 w-8 text-teal-400 hover:text-teal-500 transition duration-300" />
          </a>
          <a href="https://github.com/1amAzrael" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-8 w-8 text-teal-400 hover:text-teal-500 transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
