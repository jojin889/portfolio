"use client";

import React from "react";
import styles from "../styles";
import { projets } from "../constants";
import "../utils/card_animation";
import { motion } from "framer-motion";
import { projetsVariants } from "../utils/motion";

const Projets = () => {
  return (
    <motion.div
      className={`${styles.flexCenter}  my-32 flex mx-auto flex-wrap`}
      variants={projetsVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="projets"
    >
      {projets.map((p) => (
        <div className="flex flex-col text-center my-8 items-center max-w-min">
          <div className="mx-4 mt-2 max-w-md">
            {/* <img src={p.img} key={p.id} alt={p.alt} /> */}

            <div className="card user user-2">
              <span className="inner-card-backface">
                <span className="flip-inner-card">
                  <h3>A propos</h3>
                  <p>{p.backside}</p>
                  <span className="unflip">Unflip</span>
                </span>
              </span>
              <span
                className="inner-card"
                style={{ backgroundImage: `url(${p.img})` }}
              >
                <span className="user-details">
                  <span className="flip">Flip</span>
                  <span className="bottom-section"></span>
                </span>
                <span className="glare"></span>
              </span>
            </div>
          </div>
          <a href={p.url} target="_blank">
            <span className="name font-bold">
              {p.name}{" "}
              <img src="/right-arrow.png" className="w-[3%] ml-5 inline" />
            </span>
          </a>
        </div>
      ))}

      {/* <div className="flex w-[80%] mx-a justify-around">
        <div className="projet m-5">Projet 1</div>
        <div className="projet m-5">Projet 2</div>
      </div>
      <div className="flex w-[80%] mx-a justify-around">
        <div className="projet m-5">Projet 1</div>
        <div className="projet m-5">Projet 2</div>
      </div> */}
    </motion.div>
  );
};

export default Projets;
