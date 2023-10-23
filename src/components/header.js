import Link from "next/link";
// import styles from "@/styles/Header.module.scss";
import { getChars } from "src/animations";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const getStyles = (path) => {
    if (pathname === path) {
      return `header__link header__word header__active`;
    } else {
      if (path === "/work") {
        return `header__link header__word header__disabled`;
      } else {
        return `header__link header__word`;
      }
    }
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Link href="/" className="header__row" scroll={false}>
            <div className="header__word">{getChars("ANDREI")}</div>
            <div className="header__word">{getChars("SAVU")}</div>
          </Link>
        </div>
        <div className="header__nav" scroll={false}>
          <Link href="/about" className={getStyles("/about")}>
            <div className="header__word">{getChars("About")}</div>
          </Link>
          <Link href="" className={getStyles("/work")}>
            <div className="header__word">{getChars("Work")}</div>
          </Link>
        </div>
      </header>
    </>
  );
}
