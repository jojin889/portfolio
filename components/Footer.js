"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";

import styles from "../styles";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`${styles.xPaddings} py-8 relative`}
  >
    {/* <div className="footer-gradient" /> */}
    <div className={`${styles.innerWidth} m-auto`}>
      <div className="flex items-center justify-center m-4 flex-wrap gap-5"></div>

      <div className={`flex flex-col`}>
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-evenly flex-wrap">
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 All rights reserved.
          </p>

          <div className="flex gap-4 items-center z-10">
            {socials.map((social) => (
              <a href={social.url} key={social.id} rel="noreferrer" target="_blank">
                <img
                  key={social.name}
                  src={social.urlImg}
                  alt={social.name}
                  className="object-contain cursor-pointer w-auto"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
