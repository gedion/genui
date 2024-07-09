
"use client";

import { useState } from 'react';

const LikeDislikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (disliked) setDisliked(false);
    setLiked(!liked);
  };

  const handleDislike = () => {
    if (liked) setLiked(false);
    setDisliked(!disliked);
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={handleLike}
        className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
          liked ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        👍 Like
      </button>
      <button
        onClick={handleDislike}
        className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
          disliked ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        👎 Dislike
      </button>
    </div>
  );
};

export default LikeDislikeButton;
export const position = {"x":995,"y":475};
          