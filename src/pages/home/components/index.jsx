import React, { useState, useEffect } from "react";
import PostCard from "../../../common/components/Generic/postcard";
import Banner from "../../../common/components/layout/banner";

const postsData = [
  {
    imageLink: "https://placehold.co/356x224",
    title: "Startup vs Corporate: What job suits you best",
    authorName: "Mumtaz Alam",
    authorImageLink: "https://placehold.co/30x30",
    authorLink: "/uthor/bio/1",
    postDate: "July 19, 2023",
    postLink: "/post/detail/1",
    breifDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
  },
  {
    imageLink: "https://placehold.co/356x224",
    title: "Effect of Social Networking on Kids Education",
    authorName: "Mumtaz Alam",
    authorImageLink: "https://placehold.co/30x30",
    authorLink: "/author/bio/1",
    postDate: "September 12, 2021",
    postLink: "/post/detail/2",
    breifDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
  },
  {
    imageLink: "https://placehold.co/356x224",
    title: "Effect of Social Networking on Kids Education",
    authorName: "Mumtaz Alam",
    authorImageLink: "https://placehold.co/30x30",
    authorLink: "/author/bio/1",
    postDate: "September 12, 2021",
    postLink: "/post/detail/3",
    breifDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
  },
  {
    imageLink: "https://placehold.co/356x224",
    title: "Effect of Social Networking on Kids Education",
    authorName: "Mumtaz Alam",
    authorImageLink: "https://placehold.co/30x30",
    authorLink: "/author/bio/1",
    postDate: "September 12, 2021",
    postLink: "/post/detail/4",
    breifDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
  },
  {
    imageLink: "https://placehold.co/356x224",
    title: "Effect of Social Networking on Kids Education",
    authorName: "Mumtaz Alam",
    authorImageLink: "https://placehold.co/30x30",
    authorLink: "/author/bio/1",
    postDate: "September 12, 2021",
    postLink: "/post/detail/5",
    breifDescription:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro id est.",
  },
];

const Home = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    setPostData(postsData);
    console.log("Initial = ", postData[0]);
  }, [postData]);

  return (
    <>
      <Banner />
      <div className="container">
        <div className="row">
          {postData.map((item) => (
            <div className="col-md-4">
              <PostCard posts={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
