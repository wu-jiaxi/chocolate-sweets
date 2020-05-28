import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-danger h-100 ">
      <div>
        <h2 className="navbar-brand">Stick with me Sweets</h2>
      </div>
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Shop <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Press
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Custom Orders
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Shipping Info
          </a>
        </li>
      </ul>
      <ul className="navbar-nav navbar-collapse justify-content-end">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Account <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Help
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Cart(0)
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
