import React from "react";
import { Link } from "react-router-dom";

const PostCard = (props) => {
  const {
    imageLink,
    title,
    authorName,
    authorImageLink,
    authorLink,
    postDate,
    postLink,
    breifDescription,
  } = props.posts;
  return (
    <div className="post-card">
      <Link to={postLink}>
        <img
          src={imageLink ? imageLink : ""}
          className="rounded me-4"
          alt="error"
        />
      </Link>
      <div className="excerpt">
        <h3>{title ? title : "No Title"}</h3>
        <div className="post-meta d-flex align-items-center text-left">
          <figure className="author-figure mb-0 me-3 float-start">
            <img src={authorImageLink} alt="error" />
          </figure>
          <span className="d-inline-block mt-1">
            By <Link to={authorLink}>{authorName}</Link>
          </span>
          <span> - {postDate}</span>
        </div>
        <p>{breifDescription}</p>
        <p>
          <Link to={postLink} className="read-more">
            Continue Reading
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PostCard;
