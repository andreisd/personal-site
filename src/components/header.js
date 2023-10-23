import Link from "next/link";
import styles from "@/styles/Header.module.scss";
import { getChars } from "src/animations";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getStyles = (path) => {
    if (pathname === path) {
      return `${styles.word} ${styles.link} ${styles.active}`;
    } else {
      if (path === "/work") {
        return `${styles.link} ${styles.word} ${styles.disabled}`;
      } else {
        return `${styles.link} ${styles.word}`;
      }
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/" className={styles.row} scroll={false}>
            <div className={styles.word}>{getChars("ANDREI")}</div>
            <div className={styles.word}>{getChars("SAVU")}</div>
          </Link>
        </div>
        <div className={styles.nav} scroll={false}>
          <Link href="/about" className={getStyles("/about")}>
            <div className={styles.word}>{getChars("About")}</div>
          </Link>
          <Link href="" className={getStyles("/work")}>
            <div className={styles.word}>{getChars("Work")}</div>
          </Link>
        </div>
      </header>
    </>
  );
}
