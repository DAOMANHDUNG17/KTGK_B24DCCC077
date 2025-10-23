import React, { useState } from "react";
import { Post } from "../App";
import { useNavigate } from "react-router-dom";

interface CreatePostProps {
  onAddPost: (newPost: Post) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost: Post = {
      id: Date.now(),
      title,
      description,
      content,
      author,
      category,
      thumbnail,
      date: new Date().toISOString().split("T")[0],
    };

    onAddPost(newPost);
    navigate("/");
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
      <h2 className="text-2xl font-bold mb-4">📝 Đăng bài mới</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input
          type="text"
          placeholder="Tiêu đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Mô tả ngắn"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Nội dung bài viết..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 rounded h-40"
          required
        />
        <input
          type="text"
          placeholder="Tác giả"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Thể loại"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="URL hình minh họa"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Đăng bài
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
