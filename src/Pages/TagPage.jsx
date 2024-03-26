import React from "react";
import Header from '../components/Header'
import { useNavigate, useLocation } from 'react-router-dom'
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";


const TagPage = () => {

  const navigation = useNavigate();

  const location = useLocation();

  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="w-full max-w-2xl flex flex-col items-center mx-auto">

      <Header />

      <div className=" mt-[80px]">

        <div className="flex flex-row items-center my-5 gap-x-2">
          <button onClick={() => navigation(-1)}
            className="py-1 px-4 border-2 border-gray-300 rounded-lg">
            Back
          </button>

          <h2 className="text-xl font-bold">Blogs Tagged <span className=" text-blue-700 underline">#{tag.replaceAll("-", " ")}</span></h2>
        </div>


        <Blogs />

        <Pagination />

      </div>

    </div>
  );
};

export default TagPage;