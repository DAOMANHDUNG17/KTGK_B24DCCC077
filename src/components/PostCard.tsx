import React from "react";
import { Post } from "../types/Post";

interface PostCardProps {
  post: Post;
  onDelete: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
      <img
        src={post.thumbnail}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {post.content}
        </p>
        <p className="text-xs text-gray-400 mb-3">{post.date}</p>
        <div className="flex justify-between">
          <button className="text-blue-600 hover:underline">Đọc thêm</button>
          <button
            onClick={() => onDelete(post.id)}
            className="text-red-500 hover:underline"
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
