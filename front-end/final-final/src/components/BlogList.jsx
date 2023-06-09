import { useEffect, useState } from "react";
import { BlogItem } from "./BlogItem";
import axios from "axios";

export const BlogList = () => {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("http://localhost:5000/posts")
      .then((res) => {
        setPosts(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("posts", posts);

  return (
    <>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          margin: "100px auto",
        }}
      >
        {posts.map((post) => (
          <BlogItem post={post} />
        ))}
      </ul>
    </>
  );
};
