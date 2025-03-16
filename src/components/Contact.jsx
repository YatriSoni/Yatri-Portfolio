// import { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { EarthCanvas, StarsCanvas } from "./canvas";
// import { textVariant, fadeIn, slideIn } from "../utils/motion";
// import { log } from "three/webgpu";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, Setform] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [loading, setloading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     Setform({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setloading(true);

//     emailjs
//       .send(
//         "service_scyk97j",
//         "template_mjvulhf",
//         {
//           from_name: form.name,
//           to_name: "Yatri Soni",
//           from_email: form.email,
//           to_email: "yatrisoni10@gmail.com",
//           message: form.message,
//         },
//         "bf3wGqYeF7mIEp039"
//       )
//       .then(
//         () => {
//           setloading(false);
//           alert("Thank You. I will get back to you soon.");

//           Setform({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setloading(false);
//           console.log(error);
//           alert("Oops! Something went wrong");
//         }
//       );
//   };

//   // Template Id: template_mjvulhf
//   // Service Id: service_scyk97j
//   // Api Key : bf3wGqYeF7mIEp039

//   return (
//     <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
//       >
//         <p className={styles.sectionSubText}>Get In Touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="mt-12 flex flex-col gap-8"
//         >
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Name:</span>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Enter Name"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Email:</span>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Enter Email"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Message:</span>
//             <textarea
//               rows="7"
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="Feel free to Share"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
//             />
//           </label>

//           <button
//             type="submit"
//             className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>
//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");

// import { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { EarthCanvas, StarsCanvas } from "./canvas";
// import { textVariant, fadeIn, slideIn } from "../utils/motion";
// import { log } from "three/webgpu";

// // Import icons
// import { FaGithub, FaLinkedin, FaKaggle, FaMedium } from "react-icons/fa";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, Setform] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [loading, setloading] = useState(false);
//   const [hoveredSocial, setHoveredSocial] = useState(null); // State for hover effect

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     Setform({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setloading(true);

//     emailjs
//       .send(
//         "service_scyk97j",
//         "template_mjvulhf",
//         {
//           from_name: form.name,
//           to_name: "Yatri Soni",
//           from_email: form.email,
//           to_email: "yatrisoni10@gmail.com",
//           message: form.message,
//         },
//         "bf3wGqYeF7mIEp039"
//       )
//       .then(
//         () => {
//           setloading(false);
//           alert("Thank You. I will get back to you soon.");

//           Setform({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setloading(false);
//           console.log(error);
//           alert("Oops! Something went wrong");
//         }
//       );
//   };

//   // Template Id: template_mjvulhf
//   // Service Id: service_scyk97j
//   // Api Key : bf3wGqYeF7mIEp039

//   return (
//     <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className="flex-bg-black-100 p-8 rounded-2xl"
//       >
//         <p className={styles.sectionSubText}>Get In Touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="mt-12 flex flex-col gap-8"
//         >
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Name:</span>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Enter Name"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Email:</span>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Enter Email"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
//             />
//           </label>
//           <label className="flex flex-col">
//             <span className="text-white font-medium mb-4">Your Message:</span>
//             <textarea
//               rows="7"
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="Feel free to Share"
//               className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
//             />
//           </label>

//           <button
//             type="submit"
//             className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>

//         {/* Social Links */}
//         <div className="flex justify-center mt-6 gap-6">
//           <a
//             href="YOUR_GITHUB_URL" // Replace with your actual GitHub URL
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative"
//             onMouseEnter={() => setHoveredSocial("GitHub")}
//             onMouseLeave={() => setHoveredSocial(null)}
//           >
//             <FaGithub className="text-white text-3xl" />
//             {hoveredSocial === "GitHub" && (
//               <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md text-xs whitespace-nowrap">
//                 GitHub
//               </div>
//             )}
//           </a>

//           <a
//             href="YOUR_LINKEDIN_URL" // Replace with your actual LinkedIn URL
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative"
//             onMouseEnter={() => setHoveredSocial("LinkedIn")}
//             onMouseLeave={() => setHoveredSocial(null)}
//           >
//             <FaLinkedin className="text-white text-3xl" />
//             {hoveredSocial === "LinkedIn" && (
//               <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md text-xs whitespace-nowrap">
//                 LinkedIn
//               </div>
//             )}
//           </a>

//           <a
//             href="YOUR_KAGGLE_URL" // Replace with your actual Kaggle URL
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative"
//             onMouseEnter={() => setHoveredSocial("Kaggle")}
//             onMouseLeave={() => setHoveredSocial(null)}
//           >
//             <FaKaggle className="text-white text-3xl" />
//             {hoveredSocial === "Kaggle" && (
//               <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md text-xs whitespace-nowrap">
//                 Kaggle
//               </div>
//             )}
//           </a>

//           <a
//             href="YOUR_MEDIUM_URL" // Replace with your actual Medium URL
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative"
//             onMouseEnter={() => setHoveredSocial("Medium")}
//             onMouseLeave={() => setHoveredSocial(null)}
//           >
//             <FaMedium className="text-white text-3xl" />
//             {hoveredSocial === "Medium" && (
//               <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md text-xs whitespace-nowrap">
//                 Medium
//               </div>
//             )}
//           </a>
//         </div>
//       </motion.div>
//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EarthCanvas, StarsCanvas } from "./canvas";
import { textVariant, fadeIn, slideIn } from "../utils/motion";
import { log } from "three/webgpu";

// Import icons
import { FaGithub, FaLinkedin, FaKaggle, FaUserTie } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [form, Setform] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setloading] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null); // State for hover effect

  const handleChange = (e) => {
    const { name, value } = e.target;
    Setform({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs
      .send(
        "service_scyk97j",
        "template_mjvulhf",
        {
          from_name: form.name,
          to_name: "Yatri Soni",
          from_email: form.email,
          to_email: "yatrisoni10@gmail.com",
          message: form.message,
        },
        "bf3wGqYeF7mIEp039"
      )
      .then(
        () => {
          setloading(false);
          alert("Thank You. I will get back to you soon.");

          Setform({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setloading(false);
          console.log(error);
          alert("Oops! Something went wrong");
        }
      );
  };

  // Template Id: template_mjvulhf
  // Service Id: service_scyk97j
  // Api Key : bf3wGqYeF7mIEp039

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name:</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email:</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message:</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Feel free to Share"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        {/* Social Links */}
        <div className="flex justify-center mt-6 gap-6">
          <a
            href="https://github.com/YatriSoni"
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
            onMouseEnter={() => setHoveredSocial("GitHub")}
            onMouseLeave={() => setHoveredSocial(null)}
          >
            <FaGithub className="text-white text-3xl" />
            {hoveredSocial === "GitHub" && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md text-xs whitespace-nowrap">
                GitHub
              </div>
            )}
          </a>

          <a
            href="https://www.linkedin.com/in/yatri-soni/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
            onMouseEnter={() => setHoveredSocial("LinkedIn")}
            onMouseLeave={() => setHoveredSocial(null)}
          >
            <FaLinkedin className="text-white text-3xl" />
            {hoveredSocial === "LinkedIn" && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md text-xs whitespace-nowrap">
                LinkedIn
              </div>
            )}
          </a>

          <a
            href="https://www.kaggle.com/yatri10"
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
            onMouseEnter={() => setHoveredSocial("Kaggle")}
            onMouseLeave={() => setHoveredSocial(null)}
          >
            <FaKaggle className="text-white text-3xl" />
            {hoveredSocial === "Kaggle" && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md text-xs whitespace-nowrap">
                Kaggle
              </div>
            )}
          </a>

          <a
            href="https://www.datascienceportfol.io/yatrisoni10"
            target="_blank"
            rel="noopener noreferrer"
            className="relative"
            onMouseEnter={() => setHoveredSocial("Medium")}
            onMouseLeave={() => setHoveredSocial(null)}
          >
            <FaUserTie className="text-white text-3xl" />
            {hoveredSocial === "Medium" && (
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md text-xs whitespace-nowrap">
                DataScience Portfolio
              </div>
            )}
          </a>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
