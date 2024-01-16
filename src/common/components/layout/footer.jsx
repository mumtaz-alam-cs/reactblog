import React from "react";
import { Link } from "react-router-dom";
import RecentPosts from "../Generic/recentposts";

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
            <RecentPosts />
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
