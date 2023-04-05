"use client";

import { motion } from "framer-motion";


import { navVariants1, navVariants2 } from "../utils/motion";

const Navbar = () => (
  <nav className="flex justify-between items-center m-5">
    <motion.div variants={navVariants1} initial="hidden" whileInView="show" 
    viewport={{ once: true }}
    > 
      <div className="text-4xl m-3 text-color1">Jonathan</div>
      
      <div className="text-4xl m-3 text-color1">Développeur web</div>
      
    </motion.div>

    <motion.div variants={navVariants2} initial="hidden" whileInView="show">
      <ul className="flex flex-row mr-10">
        {/* <li className="m-5 min-w-max link-hover"><a href="#projets">Projets</a></li> */}
        <li className="min-w-max contact-link"><a href="#contact">Contact</a></li>
      </ul>
    </motion.div>
  </nav>
);

export default Navbar;
