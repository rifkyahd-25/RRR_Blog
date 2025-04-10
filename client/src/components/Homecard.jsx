import React from "react";
import { Link } from "react-router-dom";

export default function Homecard({ post }) {
  return (
    <Link to={`/post/${post.slug}`}>
    <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="relative">
      
        <img
          src={`${post.image}?f_auto&q_auto`}
          alt='post cover'
          className="w-full h-56 object-cover  group-hover:h-[200px] transition-all duration-300 z-20"
          loading="lazy"
        />
       
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
          {post.title}
        </h4>

        {/* Author & Date */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <img
              src={post.author?.profilePicture}
              alt={post.author?.username}
              loading="eager"
              className="w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-700"
            />
            <span>{post.author?.username}</span>
          </div>
          <span>
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
     </Link>
  );
}
