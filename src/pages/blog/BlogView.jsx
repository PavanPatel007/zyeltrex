import React from "react";
import ReactMarkdown from "react-markdown"; // Import ReactMarkdown
import rehypeRaw from "rehype-raw"; // Import rehypeRaw to support HTML in Markdown
import Image from "next/image";
import Link from "next/link";

const BlogView = ({ blog, blogs }) => {
  // Find the index of the current blog
  const currentIndex = blogs?.findIndex((b) => b.id === blog.id);

  // Determine the previous and next blog
  const prevBlog = currentIndex > 0 ? blogs[currentIndex - 1] : null;
  const nextBlog =
    currentIndex < blogs?.length - 1 ? blogs[currentIndex + 1] : null;
  if (!blog) {
    return <p>blog not found</p>;
  }

  return (
    <div>
      {/* Page Heading */}
      <div className="relative min-h-[80vh]  bg-black text-white flex justify-center items-center overflow-hidden ">
        <Image
          //   src="/assets/images/blog/blogbg.jpeg"
          //   alt={blog.title}
          src={blog?.image || ""}
          alt={blog?.imgAlt || blog.title}
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="xl:text-6xl font-bold mb-4">{blog.title}</h1>
          <div className="text-sm text-gray-300">
            <p>
              ON <span className="font-bold">{blog.viewDate}</span>
              <br className="hidden md:block" /> | Posted by{" "}
              <span className="font-bold">{blog.pastedBy}</span>
            </p>
          </div>
          <p className="mt-4">
            <Link
              href="/blog"
              className="text-white underline hover:text-gray-300"
            >
              {"< Blogs"}
            </Link>
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-screen-lg mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <img
            src={blog.image || ""}
            alt={blog.imgAlt || blog.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="markdown-body bg-white p-6 rounded-lg  text-gray-800">
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {blog.description}
          </ReactMarkdown>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 flex-wrap gap-4">
          {prevBlog && (
            <Link
              href={`/blog/${prevBlog.slug}`}
              className="bg-white text-black border-2 border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition"
            >
              Previous
            </Link>
          )}
          {nextBlog && (
            <Link
              href={`/blog/${nextBlog.slug}`}
              className="bg-white text-black border-2 border-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition"
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogView;
