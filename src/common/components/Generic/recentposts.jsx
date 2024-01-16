import React from "react";
import { Link } from "react-router-dom";

const RecentPosts = () => {
  return (
    <div className="widget">
      <h3 className="mb-4">Recent Post Entry</h3>
      <div className="post-entry-footer">
        <ul>
          <li>
            <Link to="/" className="d-flex align-items-start">
              <img
                src="https://placehold.co/90x90"
                className="me-4 rounded"
                alt="error"
              />
              <div className="text">
                <h5>Theres a Cool New Way for Men to Wear Socks and Sandals</h5>
                <div className="post-meta">
                  <span className="mr-2">March 15, 2018</span>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/" className="d-flex align-items-start">
              <img
                src="https://placehold.co/90x90"
                className="me-4 rounded"
                alt="error"
              />
              <div className="text">
                <h5>Theres a Cool New Way for Men to Wear Socks and Sandals</h5>
                <div className="post-meta">
                  <span className="mr-2">March 15, 2018</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecentPosts;
