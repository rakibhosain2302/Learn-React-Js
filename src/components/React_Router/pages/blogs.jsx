import React, { useState } from "react";
import { blogsData } from "../data/blogs";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState(blogsData);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Blog Page</h1>

      <div className="row">
        {blogs.map((blog) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={blog.id}>
            <div className="card-custom text-dark h-100 p-3">
              <h4>{blog.title}</h4>
              <p className="mb-0" style={{ "text-align": "justify" }}>
                {truncateText(blog.content, 100)}
              </p>
              <Link to={`/blogs/${blog.id}`}>Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
