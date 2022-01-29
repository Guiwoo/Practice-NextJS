import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const rotuer = useRouter();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a style={{ color: rotuer.pathname === "/" ? "red" : "black" }}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a style={{ color: rotuer.pathname !== "/" ? "red" : "black" }}>
              About
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
