import React from "react";
import PropTypes from "prop-types";
import{Link, NavLink} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar bg-${props.mode} bg-${props.mode} navbar-expand-lg`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
              <li className="nav-item">
                <a className={`nav-link text-${props.mode==='light'?'dark':'light'}`}aria-current="page" href="#">
                  {props.homeutils}</a>
                
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${props.mode==='light'?'dark':'light'} `} href="#">
                  about
                </a>
              </li></ul>
         
            
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className="form-check form-switch">
              <input
              onClick={props.toggleMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className={`form-check-label text-${props.mode==='light'?'dark':'light'} `} htmlFor="flexSwitchCheckDefault">
              Enable Darkmode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


