import React from "react";
import { Link } from "react-router-dom";
import "./style/header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-danger h-100 ">
      <div>
        <h2 className="navbar-brand">Stick with me Sweets</h2>
      </div>
      <ul class="navbar-nav">
        <Link to="/shop">
          <li class="nav-item active nav-link">
            Shop <span class="sr-only">(current)</span>
          </li>
        </Link>
        <Link to="/about">
          <li class="nav-item">
            <a class="nav-link" href="#">
              About
            </a>
          </li>
        </Link>
        <Link>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Press
            </a>
          </li>
        </Link>
        <Link>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Custom Orders
            </a>
          </li>
        </Link>
        <Link>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Shipping Info
            </a>
          </li>
        </Link>
      </ul>
      <ul className="navbar-nav navbar-collapse justify-content-end">
        <Link>
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Account <span class="sr-only">(current)</span>
            </a>
          </li>
        </Link>
        <Link>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Help
            </a>
          </li>
        </Link>
        <Link>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Cart(0)
            </a>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
