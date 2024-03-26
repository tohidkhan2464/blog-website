import "./App.css";

import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Routes, Route, useSearchParams, useLocation  } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage";
import TagPage from "./Pages/TagPage";



export default function App() {

  const { fetchBlogPosts } = useContext(AppContext);

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    // fetchBlogPosts();
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search]);

  return (

    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/blog/:blogId" element = {<BlogPage />} />
      <Route path="/tags/:tag" element = {<TagPage />} />
      <Route path="/categories/:category" element = {<CategoryPage />} />
    </Routes>
  );
}
