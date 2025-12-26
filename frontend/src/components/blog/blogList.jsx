import React from "react";
import BlogCard from "./blogCard.jsx";

export function BlogList() {
  return (
    <section class="postbox__grid-area section-space">
      <div class="container">
        <div class="row g-4">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
}
export default BlogList;
