import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({ post }) => {
    return (
        <div className="py-1">
            <NavLink to={`/blog/${post.id}`}>
                <span className=" font-bold text-lg hover:underline">{post.title}</span>
            </NavLink>
            <p className=" text-sm mt-1">
                By
                <span className=" italic">
                    {post.author}
                </span>
                {" "} On {" "}

                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span className=" font-semibold underline">
                        {post.category}
                    </span>
                </NavLink>
            </p>

            <p className=" text-sm mt-1">Posted On {post.date}</p>

            <p className="mt-4">
                {post.content}
            </p>

            <div className="mt-2">
                {post.tags.map((tag, index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                        <span className=" text-blue-700 text-xs mr-2 font-bold underline">{`#${tag}`}</span>
                    </NavLink>
                ))}
            </div>
        </div>

    );
};

export default BlogDetails;