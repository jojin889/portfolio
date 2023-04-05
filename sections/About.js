"use client";

import React from "react";
import styles from "../styles";
import { TypingText, navVariants3, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${styles.flexCenter} w-4/5 my-32 mx-auto`}
      >
        <motion.quote
          variants={navVariants3}
          initial="hidden"
          viewport={{ once: true }}
          whileInView="show"
          className="box-shadow1"
        >
          <TypingText title="In life or in code, work and constancy are the keys." />
        </motion.quote>
      </motion.div>
    </>
  );
};

export default About;
