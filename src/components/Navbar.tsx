import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center px-8 py-3 shadow-md">
      {/* Logo */}
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Blog Management
      </div>

      {/* Menu */}
      <div className="flex items-center gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-semibold underline underline-offset-4"
              : "hover:underline underline-offset-4"
          }
        >
          Trang chủ
        </NavLink>

        <button
          onClick={() => navigate("/create")}
          className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-100"
        >
          ✍️ Viết bài
        </button>
      </div>
    </nav>
  );
}
