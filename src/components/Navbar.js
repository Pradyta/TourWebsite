import { Component } from "react";
import "./cssFiles/NavbarStyle.css";
import { Outlet, Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
          <h1 id="logo">Trip Advisor</h1>

          <div>
            <ul id="navbar">
              <li>
                <i className="fa fa-home" aria-hidden="true"></i>
                <Link to="/">Home</Link>
              </li>

              <li>
                <i className="fa-solid fa-info"></i>
                <Link to="/about">About</Link>
              </li>

              <li>
                {" "}
                <i className="fa-solid fa-address-book"></i>
                <Link to="/contact">Contact Us</Link>
              </li>

              <button>
                <Link to="/login">Login</Link>
              </button>

              <button>
                <Link to="/signUp">Sign Up</Link>
              </button>
              
            </ul>
          </div>
        </nav>

        <Outlet />
      </>
    );
  }
}

export default Navbar;
