import Link from "next/link";
import styles from "@/styles/Footer.module.scss";
import { getChars } from "src/animations";

const links = [
  {
    title: "Github",
    href: "https://github.com/andreisd",
    target: "_blank",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/andrei-savud/",
    target: "_blank",
  },
  {
    title: "E-mail",
    href: "mailto:savuandreid@gmail.com",
    target: "_self",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.word}>{getChars("© 2023")}</div>
      </div>
      <div className={styles.nav}>
        {links.map((link, index) => {
          const { title, href, target } = link;
          return (
            <Link key={`l_${index}`} href={href} target={target} className={`${styles.row} ${styles.link}`}>
              <div className={styles.word}>{getChars(title)}</div>
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
