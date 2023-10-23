"use client";

import Page from "@/components/page";
import { motion } from "framer-motion";
import { pageDelay, translate, imageWidth, getChars } from "src/animations";
// import styles from "@/styles/Home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <Page>
      <div className="hero">
        <h1 className="sr-only">Creative Frontend Developer</h1>
        <h1 className="hero__title" aria-hidden="true">
          <div className="hero__row">
            <div className="hero__word">{getChars("CREATIVE")}</div>
            <div className="hero__imageWrapper">
              <motion.div
                className="hero__image"
                variants={imageWidth}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Image
                  src={"/creative.gif"}
                  alt={"Steve Jobs"}
                  fill={true}
                  placeholder="blur"
                  blurDataURL={"/creative.gif"}
                />
              </motion.div>
            </div>
          </div>

          <div className="hero__row">
            <div className="hero__word">{getChars("FRONTEND")}</div>
          </div>

          <div className="hero__row">
            <div className="hero__imageWrapper">
              <motion.div
                className="hero__image"
                variants={imageWidth}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Image
                  src={"/developer.gif"}
                  alt={"Smash that keyboard"}
                  fill={true}
                  placeholder="blur"
                  blurDataURL={"/developer.gif"}
                />
              </motion.div>
            </div>
            <div className="hero__word">{getChars("DEVELOPER")}</div>
          </div>
        </h1>
      </div>
    </Page>
  );
}
