import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageBanner from "../../../common/components/Generic/pagebanner";

const postsData = [
  {
    id: 1,
    imageLink: "https://placehold.co/356x224",
    title: "Startup vs Corporate: What job suits you best",
    authorName: "Mumtaz Alam",
    authorImageLink: "https://placehold.co/90x90",
    authorLink: "/author/bio/1",
    postDate: "July 19, 2023",
    postLink: "/post/detail/1",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste iusto maxime. Iusto neque consequatur quasi, numquam saepe distinctio adipisci quibusdam mollitia voluptas? Voluptatibus suscipit nisi labore laudantium quis dolorum velit quae deserunt repellendus magnam at, ab enim quos inventore ullam tempora ut debitis eaque. Provident iure minima sapiente? Quis, asperiores. Odio porro tempore voluptatum qui mollitia rerum, veniam ipsam id reiciendis, quibusdam velit beatae consectetur. Doloribus ullam doloremque maxime possimus sit porro laborum explicabo, provident repellendus perferendis. Magnam, dicta id totam architecto quia minima porro vel tempore enim sit vitae corporis quasi et ad nulla incidunt officiis pariatur quaerat fuga laudantium aut quod exercitationem. Accusamus, provident hic debitis nemo non nesciunt cupiditate illum repellendus est similique velit voluptatibus at modi error dicta natus ullam perspiciatis dolorum? Expedita nemo perferendis cupiditate aspernatur commodi voluptates, amet consectetur ab ullam autem officiis eaque aut illo sequi. Itaque aperiam voluptas omnis? Voluptas nulla non fugiat libero debitis assumenda optio consectetur harum animi, ipsam doloremque quam quisquam natus aliquam, ea est quo maiores? Ab, architecto veritatis, dolore debitis omnis excepturi voluptas itaque nihil aliquam ratione nostrum fugiat porro accusamus? Delectus error minus illum pariatur molestiae in doloremque veniam fugiat optio, veritatis a culpa porro!",
    categories: ["Food", "Travel"],
    Tag: ["#manila", "#asia"],
  },
  {
    id: 2,
    imageLink: "https://placehold.co/356x224",
    title: "Effect of Social Networking on Kids Education",
    authorName: "Mumtaz Alam",
    authorImageLink: "https://placehold.co/90x90",
    authorLink: "/author/bio/1",
    postDate: "September 12, 2021",
    postLink: "/post/detail/2",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste iusto maxime. Iusto neque consequatur quasi, numquam saepe distinctio adipisci quibusdam mollitia voluptas? Voluptatibus suscipit nisi labore laudantium quis dolorum velit quae deserunt repellendus magnam at, ab enim quos inventore ullam tempora ut debitis eaque. Provident iure minima sapiente? Quis, asperiores. Odio porro tempore voluptatum qui mollitia rerum, veniam ipsam id reiciendis, quibusdam velit beatae consectetur. Doloribus ullam doloremque maxime possimus sit porro laborum explicabo, provident repellendus perferendis. Magnam, dicta id totam architecto quia minima porro vel tempore enim sit vitae corporis quasi et ad nulla incidunt officiis pariatur quaerat fuga laudantium aut quod exercitationem. Accusamus, provident hic debitis nemo non nesciunt cupiditate illum repellendus est similique velit voluptatibus at modi error dicta natus ullam perspiciatis dolorum? Expedita nemo perferendis cupiditate aspernatur commodi voluptates, amet consectetur ab ullam autem officiis eaque aut illo sequi. Itaque aperiam voluptas omnis? Voluptas nulla non fugiat libero debitis assumenda optio consectetur harum animi, ipsam doloremque quam quisquam natus aliquam, ea est quo maiores? Ab, architecto veritatis, dolore debitis omnis excepturi voluptas itaque nihil aliquam ratione nostrum fugiat porro accusamus? Delectus error minus illum pariatur molestiae in doloremque veniam fugiat optio, veritatis a culpa porro!",
    categories: ["Food", "Travel"],
    Tag: ["#manila", "#asia"],
  },
  {
    id: 3,
    imageLink: "https://placehold.co/356x224",
    title: "Effect of Social Networking on Kids Education",
    authorName: "Mumtaz Alam",
    authorImageLink: "https://placehold.co/90x90",
    authorLink: "/author/bio/1",
    postDate: "September 12, 2021",
    postLink: "/post/detail/3",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste iusto maxime. Iusto neque consequatur quasi, numquam saepe distinctio adipisci quibusdam mollitia voluptas? Voluptatibus suscipit nisi labore laudantium quis dolorum velit quae deserunt repellendus magnam at, ab enim quos inventore ullam tempora ut debitis eaque. Provident iure minima sapiente? Quis, asperiores. Odio porro tempore voluptatum qui mollitia rerum, veniam ipsam id reiciendis, quibusdam velit beatae consectetur. Doloribus ullam doloremque maxime possimus sit porro laborum explicabo, provident repellendus perferendis. Magnam, dicta id totam architecto quia minima porro vel tempore enim sit vitae corporis quasi et ad nulla incidunt officiis pariatur quaerat fuga laudantium aut quod exercitationem. Accusamus, provident hic debitis nemo non nesciunt cupiditate illum repellendus est similique velit voluptatibus at modi error dicta natus ullam perspiciatis dolorum? Expedita nemo perferendis cupiditate aspernatur commodi voluptates, amet consectetur ab ullam autem officiis eaque aut illo sequi. Itaque aperiam voluptas omnis? Voluptas nulla non fugiat libero debitis assumenda optio consectetur harum animi, ipsam doloremque quam quisquam natus aliquam, ea est quo maiores? Ab, architecto veritatis, dolore debitis omnis excepturi voluptas itaque nihil aliquam ratione nostrum fugiat porro accusamus? Delectus error minus illum pariatur molestiae in doloremque veniam fugiat optio, veritatis a culpa porro!",
    categories: ["Food", "Travel"],
    Tag: ["#california", "#america"],
  },
  {
    id: 4,
    imageLink: "https://placehold.co/356x224",
    title: "Effect of Social Networking on Kids Education",
    authorName: "Mumtaz Alam",
    authorImageLink: "https://placehold.co/90x90",
    authorLink: "/author/bio/1",
    postDate: "September 12, 2021",
    postLink: "/post/detail/4",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste iusto maxime. Iusto neque consequatur quasi, numquam saepe distinctio adipisci quibusdam mollitia voluptas? Voluptatibus suscipit nisi labore laudantium quis dolorum velit quae deserunt repellendus magnam at, ab enim quos inventore ullam tempora ut debitis eaque. Provident iure minima sapiente? Quis, asperiores. Odio porro tempore voluptatum qui mollitia rerum, veniam ipsam id reiciendis, quibusdam velit beatae consectetur. Doloribus ullam doloremque maxime possimus sit porro laborum explicabo, provident repellendus perferendis. Magnam, dicta id totam architecto quia minima porro vel tempore enim sit vitae corporis quasi et ad nulla incidunt officiis pariatur quaerat fuga laudantium aut quod exercitationem. Accusamus, provident hic debitis nemo non nesciunt cupiditate illum repellendus est similique velit voluptatibus at modi error dicta natus ullam perspiciatis dolorum? Expedita nemo perferendis cupiditate aspernatur commodi voluptates, amet consectetur ab ullam autem officiis eaque aut illo sequi. Itaque aperiam voluptas omnis? Voluptas nulla non fugiat libero debitis assumenda optio consectetur harum animi, ipsam doloremque quam quisquam natus aliquam, ea est quo maiores? Ab, architecto veritatis, dolore debitis omnis excepturi voluptas itaque nihil aliquam ratione nostrum fugiat porro accusamus? Delectus error minus illum pariatur molestiae in doloremque veniam fugiat optio, veritatis a culpa porro!",
    categories: ["Food", "Travel", "Sea"],
    Tag: ["#pakistan", "#asia"],
  },
  {
    id: 5,
    imageLink: "https://placehold.co/356x224",
    title: "Effect of Social Networking on Kids Education",
    authorName: "Mumtaz Alam",
    authorImageLink: "https://placehold.co/90x90",
    authorLink: "/author/bio/1",
    postDate: "September 12, 2021",
    postLink: "/post/detail/5",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iste iusto maxime. Iusto neque consequatur quasi, numquam saepe distinctio adipisci quibusdam mollitia voluptas? Voluptatibus suscipit nisi labore laudantium quis dolorum velit quae deserunt repellendus magnam at, ab enim quos inventore ullam tempora ut debitis eaque. Provident iure minima sapiente? Quis, asperiores. Odio porro tempore voluptatum qui mollitia rerum, veniam ipsam id reiciendis, quibusdam velit beatae consectetur. Doloribus ullam doloremque maxime possimus sit porro laborum explicabo, provident repellendus perferendis. Magnam, dicta id totam architecto quia minima porro vel tempore enim sit vitae corporis quasi et ad nulla incidunt officiis pariatur quaerat fuga laudantium aut quod exercitationem. Accusamus, provident hic debitis nemo non nesciunt cupiditate illum repellendus est similique velit voluptatibus at modi error dicta natus ullam perspiciatis dolorum? Expedita nemo perferendis cupiditate aspernatur commodi voluptates, amet consectetur ab ullam autem officiis eaque aut illo sequi. Itaque aperiam voluptas omnis? Voluptas nulla non fugiat libero debitis assumenda optio consectetur harum animi, ipsam doloremque quam quisquam natus aliquam, ea est quo maiores? Ab, architecto veritatis, dolore debitis omnis excepturi voluptas itaque nihil aliquam ratione nostrum fugiat porro accusamus? Delectus error minus illum pariatur molestiae in doloremque veniam fugiat optio, veritatis a culpa porro!",
    categories: ["Food", "Adventure"],
    Tag: ["#china", "#asia"],
  },
];
const Detail = () => {
  const [postData, setPostData] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    const data = postsData.filter((item) => item.id === Number(id));
    data && setPostData(data[0]);
  }, [id]);

  return (
    <>
      <PageBanner bannerImageLink="https://placehold.co/1920x400" />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <p>{postData ? postData.Description : ""}</p>
            <div className="me-4">
              <p>
                Categories:{" "}
                <span>{postData ? postData.categories.join(",") : ""}</span>
              </p>
              <p>
                Tags: <span>{postData ? postData.Tag.join(",") : ""}</span>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="author-bio text-center">
              <div className="bio">
                <img
                  src={postData ? postData.authorImageLink : ""}
                  alt="error"
                />
                <div className="author-meta">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio natus voluptates culpa sapiente dolor atque fugiat
                  beatae cumque libero placeat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
