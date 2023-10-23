import { motion } from "framer-motion";

export const scaleIn = {
  initial: {
    scale: 0,
    rotate: "9deg",
  },
  animate: {
    scale: 1,
    rotate: "0deg",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.15 },
  },
};

export const scaleIn2 = {
  initial: {
    scale: 0,
    opacity: 0,
    rotate: "-5deg",
  },
  animate: {
    scale: 1,
    opacity: 1,
    rotate: "0deg",
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1], delay: 0 },
  },
};

export const scaleInDelay = {
  initial: {
    scale: 0,
    opacity: 0,
    y: 10,
    rotate: "-5deg",
  },
  animate: (index) => ({
    scale: 1,
    opacity: 1,
    y: 0,
    rotate: "0deg",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: 0.3 + 0.05 * index },
  }),
};

export const translate = {
  initial: {
    y: "120%",
  },
  enter: (i) => ({
    y: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: i[0] * 0.3 },
  }),
  exit: (i) => ({
    y: "-120%",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: i[1] * 0.3 },
  }),
};

export const translateLoader = {
  initial: {
    y: "120%",
  },
  enter: (i) => ({
    y: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: i[0] * 0.5 },
  }),
  exit: (i) => ({
    y: "-120%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: i[1] * 0.5 },
  }),
};

export const slideUp = {
  initial: {
    y: "0",
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const imageWidth = {
  initial: {
    width: "0",
  },
  enter: {
    width: "100%",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.35 },
  },
  exit: {
    width: "0",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const imageHeight = {
  initial: {
    height: "0",
  },
  enter: {
    height: "100%",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.4 },
  },
  exit: {
    height: "0",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export const imageToLeft = {
  initial: {
    x: "0",
    rotate: "0",
    height: "0",
  },
  enter: {
    x: "-110%",
    rotate: "4deg",
    height: "100%",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
  },
  exit: {
    x: "0",
    rotate: "0",
    height: "0",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
  },
};

export const imageToRight = {
  initial: {
    x: "0",
    rotate: "0",
    height: "0",
  },
  enter: {
    x: "110%",
    rotate: "-4deg",
    height: "100%",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
  },
  exit: {
    x: "0",
    rotate: "0",
    height: "0",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
  },
};

export const pageDelay = 0.15;

export const getChars = (word) => {
  let chars = [];
  word.split("").forEach((char, i) => {
    chars.push(
      <motion.span
        custom={[pageDelay + i * 0.05, (word.length - i) * 0.05]}
        variants={translate}
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

export const getWordsChars = (rows, className) => {
  let words = [];
  rows.split(" ").forEach((word, i) => {
    words.push(
      <div className={className} key={word + i}>
        {getChars(word)}
      </div>
    );
  });
  return words;
};
