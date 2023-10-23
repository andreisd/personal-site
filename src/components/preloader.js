import styles from "@/styles/Preloader.module.scss";
import { motion } from "framer-motion";
import { translateLoader, slideUp } from "src/animations";

export default function Preloader() {
  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.04, (word.length - i) * 0.04]}
          variants={translateLoader}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <motion.div className={styles.preloader} variants={slideUp} initial="initial" exit="exit">
      <h1 className="sr-only">Loading..☺</h1>
      <h1 className={styles.title} aria-hidden="true">
        <div className={styles.row}>
          <div className={styles.word}>{getChars("Loading..☺")}</div>
        </div>
      </h1>
    </motion.div>
  );
}
