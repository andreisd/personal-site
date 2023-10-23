"use client";

import Page from "@/components/page";
import { motion } from "framer-motion";
import { pageDelay, translate, imageWidth, getChars } from "src/animations";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <Page>
      <div className={styles.hero}>
        <h1 className="sr-only">Creative Frontend Developer</h1>
        <h1 className={styles.title} aria-hidden="true">
          <div className={styles.row}>
            <div className={styles.word}>{getChars("CREATIVE")}</div>
            <div className={styles.imageWrapper}>
              <motion.div
                className={styles.image}
                variants={imageWidth}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Image src={"/creative.gif"} alt={"Steve Jobs"} fill={true} />
              </motion.div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.word}>{getChars("FRONTEND")}</div>
          </div>

          <div className={styles.row}>
            <div className={styles.imageWrapper}>
              <motion.div
                className={styles.image}
                variants={imageWidth}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Image src={"/developer.gif"} alt={"Smash that keyboard"} fill={true} />
              </motion.div>
            </div>
            <div className={styles.word}>{getChars("DEVELOPER")}</div>
          </div>
        </h1>
      </div>
    </Page>
  );
}
