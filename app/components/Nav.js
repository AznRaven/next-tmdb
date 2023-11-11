import Link from "next/link";
import React from "react";
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <nav>
      <ul className="flex justify-center border">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.margin}>
          <Link href="/tmdb">The Movie DB</Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
