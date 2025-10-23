import React, { useState } from "react";

interface PostFormProps {
  onSubmit: (title: string, content: string) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Tiêu đề bài viết"
        value={title}
        onChange={(e) => setTitle(e.target.value ?? "")}
        className="w-full border p-2 rounded"
      />
      <textarea
        placeholder="Nội dung bài viết"
        value={content}
        onChange={(e) => setContent(e.target.value ?? "")}
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Thêm bài viết
      </button>
    </form>
  );
};

export default PostForm;
