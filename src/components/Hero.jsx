import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen h-[110vh] mx-auto">
      <div
        className={`${styles.paddingX} absolute insert-0 top-[80px] max-w-7xl mx-auto flex flex-row z-20 items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="w-5 h-5 rounded-full bg-[#fff]" />
          <div className="w-1 sm:h-80 h-60 bg-gradient-to-b from-white to-transparent" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} mt-6 text-white`}>
            I'm Yatri Soni
          </h1>
          <p className={`${styles.heroSubText} mt-0 text-white-100`}>
            A Driven Data Analyst. Transforming Raw Data into Strategic
            Solutions with Precision and Passion.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-[20] w-full flex justify-center items-center">
        <a href="#about">
          <div className="sm:w-[20px] sm:h-[44px] w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
