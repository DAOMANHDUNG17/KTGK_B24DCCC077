import React from "react";

import { Link } from "react-router-dom";

import { Post } from "../App";



interface PostListProps {

  posts: Post[];

  onDelete: (id: number) => void;

}



const PostList: React.FC<PostListProps> = ({ posts, onDelete }) => {

  return (

    <div className="grid gap-6">

      {posts.length === 0 ? (

        <p className="text-center text-gray-500">Chưa có bài viết nào.</p>

      ) : (

        posts.map((post) => (

          <div

            key={post.id}

            className="bg-white shadow-md rounded-xl p-4 border border-gray-200"

          >

            <img

              src={post.thumbnail}

              alt={post.title}

              className="w-full h-64 object-cover rounded-lg mb-3"

            />

            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>

            <p className="text-gray-600 mb-3">{post.description}</p>

            <p className="text-sm text-gray-400 mb-3">{post.date}</p>

            <div className="flex gap-3">

              <Link

                to={`/posts/${post.id}`}

                className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"

              >

                Đọc thêm

              </Link>

              <button

                onClick={() => onDelete(post.id)}

                className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition"

              >

                Xóa

              </button>

            </div>

          </div>

        ))

      )}

    </div>

  );

};



export default PostList;