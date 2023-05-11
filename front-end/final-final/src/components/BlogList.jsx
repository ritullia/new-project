import { BlogItem } from "./BlogItem";

export const BlogList = () => {
  return (
    <>
      <ul style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </ul>
    </>
  );
};
