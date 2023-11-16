import Link from "next/link";
import React from "react";
import styles from "./Nav.module.css";
import { faFilm, faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Nav = () => {
  return (
    <nav className="py-2 px-4 bg-slate-700">
      <div className="flex">
        <div className="flex w-screen">
          <div className="mx-auto flex gap-2">
            <Link href="/">
              <FontAwesomeIcon icon={faHome} className="icon mx-2" />
              Home
            </Link>
            <Link href="/tmdb">
              <FontAwesomeIcon icon={faFilm} className="icon mx-2" />
              The Movie DB
            </Link>
            <Link href="/TicketPage">
              <FontAwesomeIcon icon={faTicket} className="icon mx-2" />
              Ticket Page
            </Link>
          </div>
          <div className="ml-auto">
            <Link href="about">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
