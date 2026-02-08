import React from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";
// import { blogsData } from "../data/blogs";

const BlogDetails = () => {
  const location = useLocation();
  const blog = location.state;
//   console.log(location);

//   const { id } = useParams();

//   const blog = blogsData.find(
//     (blog) => blog.id === Number(id)
//   );

  if (!blog) {
    return <Navigate to="*" />;
  }

  return (
    <div className="container my-4">
      <h2>{blog.title}</h2>
      <p style={{ textAlign: "justify" }}>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
