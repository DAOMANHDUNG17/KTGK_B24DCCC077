import React from "react";
import { Post } from "../types/Post";

interface SidebarProps {
  posts?: Post[]; // <-- thêm dấu ? để props này KHÔNG bắt buộc
}

const Sidebar: React.FC<SidebarProps> = ({ posts }) => {
  return (
    <aside className="w-64 bg-white shadow-md p-4 hidden md:block">
      <h2 className="text-lg font-semibold mb-4">Bài viết mới</h2>
      <ul className="space-y-2">
        {posts && posts.length > 0 ? (
          posts.slice(0, 5).map((post) => (
            <li key={post.id} className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer">
              {post.title}
            </li>
          ))
        ) : (
          <li className="text-gray-500 text-sm">Chưa có bài viết nào</li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
