import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import styles from "@/styles/Story.module.scss";
import Link from "next/link";
import Image from "next/image";
import { scaleIn, scaleIn2 } from "src/animations";

const fadeIn = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function Story({ story }) {
  return (
    <div className={styles.story}>
      <div className="flex column container">
        {story.map((chapter, index) => {
          const { title, text, image, imagePos } = chapter;
          const secondClass = imagePos === "right" ? styles.right : styles.left;
          return (
            <div className="col-6" key={`c_${index}`}>
              {image && imagePos && (
                <div className={`${styles.imageWrapper} ${secondClass}`}>
                  <motion.div
                    className={styles.image}
                    variants={scaleIn2}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: true,
                    }}
                  >
                    <Image src={`/${image}`} alt={"About"} fill={true} />
                  </motion.div>
                </div>
              )}
              <motion.div
                className={styles.badge}
                variants={scaleIn}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
              >
                <div className={styles.dot}></div>
                {title}
              </motion.div>

              <motion.div
                dangerouslySetInnerHTML={{ __html: text }}
                variants={scaleIn2}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
              ></motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
