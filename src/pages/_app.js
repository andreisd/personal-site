import "@/styles/globals.scss";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Preloader from "@/components/preloader";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const neuebit = localFont({
  src: [
    {
      path: "../../public/fonts/PPNeueBit-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const montreal = localFont({
  src: [
    {
      path: "../../public/fonts/PPNeueMontreal-Book.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/PPNeueMontreal-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-sans: ${sans.style.fontFamily};
            --font-neuebit: ${neuebit.style.fontFamily};
            --font-montreal: ${montreal.style.fontFamily};
            --bg: #0a0a0a;
            --accent: #f3c677;
            --orange: #f05d23;
          }
        `}
      </style>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
        {!isLoading && (
          <motion.div key={router.pathname}>
            <Component {...pageProps} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
