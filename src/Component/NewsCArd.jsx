import React, { useState } from "react";
import { FaRegBookmark, FaRegEye, FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
  
  } = news;
   const [showFull, setShowFull] = useState(false);

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 rounded-xl overflow-hidden">
      {/* Author Section */}
      <div className="flex justify-between items-center p-4 bg-base-300">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div >
            <h2 className="font-semibold text-gray-800">{author?.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toLocaleDateString("en-GB")}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FiShare2 className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 pb-2 text-lg font-bold text-gray-800">
        {title}
      </h2>

      {/* Image */}
      <figure>
        <img src={image_url} alt={title} className="w-full h-60 object-cover" />
      </figure>

      {/* Details */}
      <div className="p-4 text-gray-600 text-sm">
      {showFull ? (
        <>
          {details}
          <span
            className="text-orange-500 font-semibold cursor-pointer ml-2"
            onClick={() => setShowFull(false)}
          >
            Show Less
          </span>
        </>
      ) : (
        <>
          {details.slice(0, 200)}...
          <span
            className="text-orange-500 font-semibold cursor-pointer ml-2"
            onClick={() => setShowFull(true)}
          >
            Read More
          </span>
        </>
      )}
    </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-orange-400" : "text-gray-300"}
            />
          ))}
          <span className="ml-1 text-gray-700 font-semibold">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaRegEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
