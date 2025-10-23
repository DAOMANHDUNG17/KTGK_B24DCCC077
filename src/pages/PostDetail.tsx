import React from "react";
import { useParams, Link } from "react-router-dom";
import { Post } from "../App";

interface PostDetailProps {
  posts: Post[];
  onDelete: (id: number) => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ posts, onDelete }) => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <p className="text-center text-gray-500">Không tìm thấy bài viết.</p>;
  }

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <img
        src={post.thumbnail}
        alt={post.title}
        className="w-full h-80 object-cover rounded-lg mb-5"
      />
      <h2 className="text-3xl font-bold mb-3">{post.title}</h2>
      <p className="text-sm text-gray-400 mb-4">{post.date} - {post.author}</p>
      <p className="text-gray-700 mb-6">{post.content}</p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
        >
          Quay lại
        </Link>
        <button
          onClick={() => onDelete(post.id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Xóa bài
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
