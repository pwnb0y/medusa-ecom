import Link from "next/link";
import React from "react";
import styles from "../../styles/nav-bar.module.css";

const NavLinks = () => {
  return (
    <div>
      <Link href="https://www.medusa-commerce.com/">
        <a className={styles.navBtn} target="_blank" rel="noreferrer">
          Medusa
        </a>
      </Link>
      <Link href="https://nextjs.org/docs/getting-started/">
        <a className={styles.navBtn} target="_blank" rel="noreferrer">
          Next.js
        </a>
      </Link>
      <Link href="https://github.com/VanshajPoonia/shopeee">
        <a className={styles.navBtn} target="_blank" rel="noreferrer">
          Github
        </a>
      </Link>
    </div>
  );
};

export default NavLinks;
