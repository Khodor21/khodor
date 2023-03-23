import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import ReactPlayer from "react-player";
import Video from "../../assets/world-2-unscreen.gif";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  //pQ87bmNgFKPSH2M__
  // template_yx85y1p
  //service_9p63nob
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_9p63nob",
        "template_yx85y1p",
        {
          from_name: form.name,
          to_name: "Khodor",
          from_email: form.email,
          to_email: "khodorhasan17@gmail.com",
          message: form.message,
        },
        "pQ87bmNgFKPSH2M__"
      )
      .then(() => {
        setLoading(false);
        alert("Thank You, I will come back to you ASAP!");
        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went Wrong.");
          }
        );
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col ">
            <span className="text-white text-meduim mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="text-white rounded-lg outline-none border-none bg-tertiary py-4 px-6 placeholder:text-secondary font-meduim"
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white text-meduim mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="text-white rounded-lg outline-none border-none bg-tertiary py-4 px-6 placeholder:text-secondary font-meduim"
            />
          </label>
          <label className="flex flex-col ">
            <span className="text-white text-meduim mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="text-white rounded-lg outline-none border-none bg-tertiary py-4 px-6 placeholder:text-secondary font-meduim"
            />
          </label>
          <button
            className="bg-tertiary rounded-xl py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary"
            type="submit"
          >
            {loading ? "Loading..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <img
          className="lg:w-[50%] xl:w-[110%] xl:h-[40%] h-[50%] xl:mt-[40%]"
          src={Video}
          autoPlay
          loop
          muted
        />{" "}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
