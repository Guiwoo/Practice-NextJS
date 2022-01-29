import Link from "next/link";
import styles from "./NavBar.module.css";
import { useRouter } from "next/router";

const NavBar = () => {
  const rotuer = useRouter();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a
              className={`${styles.link} ${
                rotuer.pathname === "/" ? styles.active : ""
              }`}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              className={[
                styles.link,
                rotuer.pathname !== "/" ? styles.active : "",
              ].join(" ")}
            >
              About
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
