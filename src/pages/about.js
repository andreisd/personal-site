"use client";

import Page from "@/components/page";
import Link from "next/link";
import { motion } from "framer-motion";
import { imageWidth, imageHeight, getWordsChars, imageToLeft, imageToRight, translate } from "src/animations";
import { useMotionValue, useScroll, useTransform } from "framer-motion";
import styles from "@/styles/About.module.scss";
import Image from "next/image";
import Story from "@/components/story";
import Stack from "@/components/stack";

const story = [
  {
    title: "The Start",
    text: `<p>I&apos;ve been building websites since I was kid. In 2013 I came across&nbsp;<a href="https://themeforest.net/user/scrils" target="_blank">Themeforest ↗</a>, a marketplace for everything-web.</p><p>In September 2014 I got my first item approved for sale. It was an HTML Template built with HTML, CSS, Bootstrap v3, jQuery, and it was mobile responsive.</p>`,
  },
  {
    title: "The Journey",
    text: "<p>Over the years I've started working with agencies from Bucharest, and then from the world. I've helped to build more than 20 websites, from small to big, from simple to complex, as a Frontend Developer using a lot display: flex;</p>",
    image: "css.gif",
    imagePos: "right",
  },
  {
    title: "The Present",
    text: `<p>After all these years, some things are still the same. A deep passion and excitement for crafting digital experiences. Lately using Next.js and Framer Motion, always with a focus on functionality and performance, and never forgetting about creativity, animations and interactions.</p>`,
    image: "digital-world.gif",
    imagePos: "left",
  },
];

export default function About() {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const width = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);
  const transform = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const transform2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-5deg"]);

  return (
    <Page>
      <div className={styles.hero}>
        <h1 className="sr-only">Hey! I`m Andrei, A 26 years old Creative Developer based in Bucharest</h1>
        <h1 className={styles.title} aria-hidden="true">
          <div className={styles.row}>{getWordsChars("Hey! I'm Andrei,", styles.word)}</div>
          <div className={styles.row}>{getWordsChars("A 26 years old", styles.word)}</div>
          <div className={styles.row}>{getWordsChars("Creative Developer", styles.word)}</div>
          <div className={styles.row}>{getWordsChars("based in Bucharest", styles.word)}</div>
        </h1>

        <div className={styles.images}>
          <motion.div
            className={`${styles.imageWrapper} ${styles.image1}`}
            style={{ translateY: transform, scale: scale, rotate: rotate }}
          >
            <motion.div
              className={styles.image}
              variants={imageHeight}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Image src={"/ab1.webp"} alt={"About"} fill={true} />
            </motion.div>
          </motion.div>
          <motion.div
            className={`${styles.imageWrapper} ${styles.image2}`}
            style={{ translateY: transform2, scale: scale, rotate: rotate }}
          >
            <motion.div
              className={styles.image}
              variants={imageToLeft}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Image src={"/about2.webp"} alt={"About"} fill={true} />
            </motion.div>
          </motion.div>
          <motion.div
            className={`${styles.imageWrapper} ${styles.image3}`}
            style={{ translateY: transform2, scale: scale, rotate: rotate }}
          >
            <motion.div
              className={styles.image}
              variants={imageToRight}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Image src={"/about4.webp"} alt={"About"} fill={true} />
            </motion.div>
          </motion.div>
        </div>

        <div className={styles.scroll}>{getWordsChars("Scroll down", styles.scrollWord)}</div>
      </div>

      <Story story={story} />

      <Stack />
    </Page>
  );
}
