import React, { useContext, useEffect, useState } from "react";
import Header from '../components/Header'
import { useNavigate, useLocation } from 'react-router-dom'
import { AppContext } from "../context/AppContext";
import BlogDetails from "../components/BlogDetails";
import Spinner from "../components/Spinner";


const BlogPage = () => {

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/"

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const navigation = useNavigate();
  const location = useLocation();
  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split('/').at(-1);

  async function fetchRelatedBlogs() {

    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log("url is ");
    console.log(url);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch (error) {
      console.log("Error in Blog ID Call");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  return (
    <div className="w-full max-w-2xl flex flex-col items-center mx-auto">
      <Header />

      <div className=" mt-[80px]">
        <div className=" my-5">

          <button onClick={() => navigation(-1)}
            className="py-1 px-4 border-2 border-gray-300 rounded-lg">
            Back
          </button>

        </div>

        {
          loading ?
            (<Spinner />) :
            (blog ?
              (<div>
                <BlogDetails post={blog} />
                <h2 className=" text-3xl font-bold mt-11">Related Blogs</h2>
                {
                  relatedBlogs.map((post) => (
                    <div key={post.id} className=" mt-7">
                      <BlogDetails post={post} />
                    </div>
                  ))
                }
              </div>) :
              (
                <div className="text-3xl font-bold mt-11">
                  <p>No Blog found</p>
                </div>
              )
            )
        }
      </div>

    </div>
  );
};

export default BlogPage;