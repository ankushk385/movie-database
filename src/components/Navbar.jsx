import React, { useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [shownav, setShowNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <div className={`main-nav ${shownav && "main-nav-black"}`}>
      <div className="nav-logo">Movie DB</div>
      <div className="nav-login">
        <a href="/">Log in</a>
      </div>
    </div>
  );
};

export default Navbar;
