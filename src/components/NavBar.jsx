import React from "react";
import { NavLinks } from "../constants";

const NavBar = () => {
  return (
    <div>
      <header>
        <nav>
          <img src="/logo.svg" alt="Apple Logo" />
          <ul>
            {NavLinks.map(({ label }) => (
              <li key={{ label }}>
                <a href={label}>{label}</a>
              </li>
            ))}
          </ul>
          <div className="flex-center gap-3">
            <button>
              <img src="search.svg" alt="Search Icon" />
            </button>
            <button>
              <img src="cart.svg" alt="Cart" />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
