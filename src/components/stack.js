import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
// import styles from "@/styles/Stack.module.scss";
import Link from "next/link";
import Image from "next/image";
import { scaleIn, scaleIn2, scaleInDelay } from "src/animations";

// stack
// core
// html js es6+ css php
// libraries & frameworks
// react nextjs gsap framer motion scss laravel
// tools
// Git, npm, yarn, Vercel, Figma, Sketch, Adobe XD
// Wordpress, Shopify, headless CMSs (Sanity, Prismic)

const core = [
  {
    title: "HTML",
  },
  {
    title: "CSS",
  },
  {
    title: "JavaScript ES6+",
  },
  {
    title: "PHP",
  },
];

const frameworks = [
  {
    title: "React",
  },
  {
    title: "Next.js",
  },
  {
    title: "GSAP",
  },
  {
    title: "Framer Motion",
  },
  {
    title: "Lenis Scroll",
  },
  {
    title: "SASS",
  },
  {
    title: "Laravel",
  },
];

const tools = [
  {
    title: "Git",
  },
  {
    title: "npm",
  },
  {
    title: "yarn",
  },
  {
    title: "Vercel",
  },
  {
    title: "Figma",
  },
  {
    title: "Sketch",
  },
  {
    title: "Adobe XD",
  },
  {
    title: "Jira",
  },
  {
    title: "Slack",
  },
  {
    title: "Teamwork",
  },
  {
    title: "WordPress",
  },
  {
    title: "Shopify",
  },
  {
    title: "Sanity",
  },
];

export default function Stack() {
  return (
    <div className="stack">
      <motion.h1
        className="stackTitle"
        variants={scaleIn2}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        🧑‍💻 Tech stack
      </motion.h1>

      <div className="stackList">
        <div className="stackItem">
          <motion.div
            className="stackType"
            variants={scaleIn2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            Core
          </motion.div>
          <div className="stackItemList">
            {core.map((item, index) => {
              return (
                <motion.div
                  className="stackItemTitle"
                  variants={scaleInDelay}
                  initial="initial"
                  whileInView="animate"
                  key={`c_${index}`}
                  custom={index}
                  viewport={{
                    once: true,
                  }}
                >
                  {item.title}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="stackItem">
          <motion.div
            className="stackType"
            variants={scaleIn2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            Frameworks & Libraries
          </motion.div>
          <div className="stackItemList">
            {frameworks.map((item, index) => {
              return (
                <motion.div
                  className="stackItemTitle"
                  variants={scaleInDelay}
                  initial="initial"
                  whileInView="animate"
                  key={`c_${index}`}
                  custom={index}
                  viewport={{
                    once: true,
                  }}
                >
                  {item.title}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="stackItem">
          <motion.div
            className="stackType"
            variants={scaleIn2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
          >
            Tools & CMS
          </motion.div>
          <div className="stackItemList">
            {tools.map((item, index) => {
              return (
                <motion.div
                  className="stackItemTitle"
                  variants={scaleInDelay}
                  initial="initial"
                  whileInView="animate"
                  key={`c_${index}`}
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  {item.title}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
