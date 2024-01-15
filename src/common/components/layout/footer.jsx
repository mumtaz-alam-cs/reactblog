import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="widget">
              <h3 className="mb-4">About</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="widget">
              <h3 className="mb-4">Social</h3>
              <button>facebook</button>
            </div>
          </div>
          <div className="col-md-4 ps-lg-5">
            <div className="widget">
              <h3 className="mb-4">Company</h3>
              <ul className="list-unstyled float-start links">
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
              <ul className="list-unstyled float-start links"></ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="widget">
              <h3 className="mb-4">Recent Post Entry</h3>
              <div className="post-entry-footer">
                <ul>
                  <li>
                    <Link to="/" className="d-flex align-items-center">
                      <img
                        src="https://placehold.co/90x90"
                        className="me-4 rounded"
                        alt="error"
                      />
                      <div className="text">
                        <h4>
                          Theres a Cool New Way for Men to Wear Socks and
                          Sandals
                        </h4>
                        <div className="post-meta">
                          <span className="mr-2">March 15, 2018</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="d-flex align-items-center">
                      <img
                        src="https://placehold.co/90x90"
                        className="me-4 rounded"
                        alt="error"
                      />
                      <div className="text">
                        <h4>
                          Theres a Cool New Way for Men to Wear Socks and
                          Sandals
                        </h4>
                        <div className="post-meta">
                          <span className="mr-2">March 15, 2018</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p>
              Copyright ©2024. All Rights Reserved. — Designed with love by
              Mumtaz Alam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
