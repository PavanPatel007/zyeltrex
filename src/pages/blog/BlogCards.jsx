import Link from "next/link";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { slugify } from "@/utils/slugify";
import { Icon } from "@iconify/react";

const BlogsCard = ({ blogs }) => {
  return (
    <div className="container  py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs?.map((blog) => (
          <div
            key={blog.id}
            className="blog-card border bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <Link href={`/blog/${blog.slug}`}>
              <div className="overflow-hidden h-48">
                <img
                  src={blog.image}
                  alt={blog.imgAlt}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </Link>
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-lg font-bold mb-2 line-clamp-2">
                <Link href={`/blog/${blog.slug}`} className="hover:underline">
                  {blog.title}
                </Link>
              </h3>
              <Markdown
                rehypePlugins={[rehypeRaw]}
                className="text-sm text-dark-gray mb-4 line-clamp-3"
              >
                {blog.description}
              </Markdown>
              <Link
                href={`/blog/${slugify(blog.title)}`}
                className="text-right text-primary font-medium flex items-center justify-end space-x-2"
              >
                <span>Learn More</span>

                <Icon icon="ep:right" className="w-5 h-5 transform " />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsCard;
