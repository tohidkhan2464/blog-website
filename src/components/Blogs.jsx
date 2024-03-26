import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

const Blogs = () => {

    // context Cosuming
    const { loading, posts } = useContext(AppContext);

    // console.log("printing");
    // console.log(posts);

    return (
        <div className="w-full max-w-2xl flex flex-col items-center gap-y-9 mx-auto">
            {
                loading ?
                    (<Spinner />) :
                    (
                        posts.length === 0 ?
                            (
                                <div className=" grid place-content-center text-2xl">
                                    <p className=" italic">
                                        No posts found
                                    </p>
                                </div>
                            ) :
                            (
                                posts.map((post) => (
                                    <BlogDetails key={post.id} post={post} />
                                )))
                    )
            }
        </div>
    );
};

export default Blogs;