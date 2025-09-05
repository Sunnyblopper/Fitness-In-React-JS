import React, { useState } from "react";
import "./navbar.css";
import SearchModal from "../Search/search"; 

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <div className="container-fluid header-top">
        <div className="nav-shaps-2"></div>
        <div className="container d-flex align-items-center">
          <div className="d-flex align-items-center h-100">
            <a href="#" className="navbar-brand" style={{ height: "125px" }}>
              <h1 className="text-primary mb-0">
                <i className="fas fa-hand-rock me-2"></i> Fitness
              </h1>
            </a>
          </div>

          <div className="w-100 h-100">
            {/* Topbar */}
            <div
              className="topbar px-0 py-2 d-none d-lg-block"
              style={{ height: "45px" }}
            >
              <div className="row gx-0 align-items-center">
                <div className="col-lg-8 text-center text-lg-center mb-lg-0">
                  <div
                    className="d-flex flex-wrap "
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "1rem",
                      fontWeight: 400,
                    }}
                  >
                    <div className="pe-4 ml-4">
                      <a
                        href="mailto:example@gmail.com"
                        className="text-muted small"
                      >
                        <i className="fas fa-envelope text-primary me-2"></i>
                        example@gmail.com
                      </a>
                    </div>
                    <div className="pe-0">
                      <a href="#" className="text-muted small">
                        <i className="fa fa-clock text-primary me-2"></i>
                        Mon - Sat: 8.00 am-7.00 pm
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 text-center text-lg-end">
                  <div className="d-flex justify-content-end">
                    <div
                      className="d-flex align-items-center small"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "0.89rem",
                        fontWeight: 400,
                      }}
                    >
                      <a href="#" className="login-btn text-body me-3 pe-3">
                        <span>Login</span>
                      </a>
                      <a href="#" className="text-body me-3">
                        Register
                      </a>
                    </div>
                    <div className="d-flex pe-3">
                      <a className="btn p-0 text-primary me-3" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn p-0 text-primary me-3" href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn p-0 text-primary me-3" href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a className="btn p-0 text-primary me-0" href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navbar */}
            <div className="nav-bar px-0 py-lg-0">
              <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-lg-end">
                {/* Brand (Mobile) */}
                <a href="#" className="navbar-brand-2 d-lg-none">
                  <h1 className="text-primary mb-0">
                    <i className="fas fa-hand-rock me-2"></i> Fitness
                  </h1>
                </a>

                {/* Toggler (custom state) */}
                <button
                  className="navbar-toggler"
                  type="button"
                  aria-expanded={open}
                  aria-label="Toggle navigation"
                  onClick={() => setOpen(!open)}
                >
                  <span className="fa fa-bars"></span>
                </button>

                <div
                  className={`navbar-collapse ml-4 ${open ? "show" : ""}`}
                >
                  <div
                    className="navbar-nav mx-0 mx-lg-auto"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      fontSize: "1rem",
                      fontWeight: 400,
                    }}
                  >
                    <a href="#" className="nav-item nav-link active">
                      Home
                    </a>
                    <a href="#" className="nav-item nav-link">
                      About
                    </a>
                    <a href="#" className="nav-item nav-link">
                      Courses
                    </a>
                    <a href="#" className="nav-item nav-link">
                      Blogs
                    </a>

                    {/* Dropdown */}
                    <div
                      className={`nav-item dropdown ${
                        openDropdown ? "show" : ""
                      }`}
                      onMouseEnter={() => setOpenDropdown(true)}
                      onMouseLeave={() => setOpenDropdown(false)}
                    >
                      <a href="#" className="nav-link">
                        <span className="dropdown-toggle">Pages</span>
                      </a>
                      <div
                        className={`dropdown-menu ${
                          openDropdown ? "show" : ""
                        }`}
                      >
                        <a href="#" className="dropdown-item">
                          Our Features
                        </a>
                        <a href="#" className="dropdown-item">
                          Our team
                        </a>
                        <a href="#" className="dropdown-item">
                          Testimonial
                        </a>
                        <a href="#" className="dropdown-item">
                          404 Page
                        </a>
                      </div>
                    </div>

                    <a href="#" className="nav-item nav-link">
                      Contact
                    </a>

                    <div className="nav-btn ps-3">
                      {/* 🔍 Search button */}
                      <button
                        className="btn-search btn btn-primary btn-md-square mt-2 mt-lg-0 mb-4 mb-lg-0 flex-shrink-0"
                        onClick={() => setShowSearch(true)}
                      >
                        <i className="fas fa-search"></i>
                      </button>
                      <a
                        href="#"
                        className="btn btn-primary py-2 px-4 ms-0 ms-lg-3"
                      >
                        <span>Get Quote</span>
                      </a>
                    </div>

                    <div className="nav-shaps-1"></div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {showSearch && (
        <SearchModal onClose={() => setShowSearch(false)} />
      )}
    </>
  );
};

export default Navbar;
