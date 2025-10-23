import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostList from "./pages/PostList";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";

export interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
  author: string;
  category: string;
  thumbnail: string;
  date: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "AI thay đổi thế giới công nghệ như thế nào?",
      description: "Trí tuệ nhân tạo tạo ra bước tiến vượt bậc trong mọi lĩnh vực.",
      content:
        "AI đang giúp con người đạt được nhiều thành tựu vượt bậc trong giáo dục, y tế và tài chính.",
      author: "Admin",
      category: "Công nghệ",
      thumbnail:
        "https://cdn.pixabay.com/photo/2018/01/30/07/53/artificial-intelligence-3111201_1280.jpg",
      date: "2025-10-22",
    },
  ]);

  const handleAddPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* Header: Thanh ngang màu xanh đậm, bao phủ Blog Manager và Nav */}
        <header className="bg-blue-600 text-white text-center py-4 shadow-xl">
          <h1 className="text-3xl font-bold">
            <span className="mr-2">📰</span> Blog Manager
          </h1>
          {/* Nav: Các nút Trang chủ/Đăng bài */}
          <nav className="mt-3 flex justify-center gap-8">
            <Link
              to="/"
              className="text-white text-lg font-semibold border-b-2 border-white pb-1 hover:text-gray-200 transition"
            >
              Trang chủ
            </Link>
            <Link
              to="/create"
              className="text-white text-lg font-semibold border-b-2 border-transparent pb-1 hover:border-white hover:text-gray-200 transition"
            >
              Đăng bài
            </Link>
          </nav>
        </header>

        {/* Main Content: Căn giữa với max-width */}
        <main className="py-8">
          <div className="w-full max-w-5xl mx-auto px-4">
            <Routes>
              <Route
                path="/"
                element={<PostList posts={posts} onDelete={handleDelete} />}
              />
              <Route
                path="/posts/:id"
                element={<PostDetail posts={posts} onDelete={handleDelete} />}
              />
              <Route
                path="/create"
                element={<CreatePost onAddPost={handleAddPost} />}
              />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;