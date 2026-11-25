import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  function closeMenu() {
    setMenuOpen(false);
  }
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-[#262626] bg-[#0a0a0a]/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Logo />

          <div className="hidden items-center rounded-full border border-[#262626] bg-[#161616] p-1.5 md:flex">
            <NavLink to="/" end className="nav-link">
              الرئيسية
            </NavLink>
            <NavLink to="/blog" className="nav-link">
              المدونة
            </NavLink>
            <NavLink to="/about" className="nav-link">
              من نحن
            </NavLink>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/blog"
              className="rounded-xl p-3 text-neutral-500 transition-colors hover:bg-[#161616] hover:text-orange-500"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
            <Link to="/blog" className="btn-primary text-sm">
              ابدأ القراءة
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="rounded-xl p-3 text-neutral-400 transition-colors hover:bg-[#161616] hover:text-white md:hidden"
          >
            {menuOpen ? (
              <i className="fa-solid fa-xmark text-xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-xl"></i>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="mb-4 flex flex-col gap-1 rounded-2xl border border-[#262626] bg-[#161616] p-4 md:hidden">
            <NavLink to="/" end className="nav-link-mobile" onClick={closeMenu}>
              الرئيسية
            </NavLink>
            <NavLink to="/blog" className="nav-link-mobile" onClick={closeMenu}>
              المدونة
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link-mobile"
              onClick={closeMenu}
            >
              من نحن
            </NavLink>
            <Link
              to="/blog"
              className="btn-primary mt-2 text-sm"
              onClick={closeMenu}
            >
              ابدأ القراءة
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
