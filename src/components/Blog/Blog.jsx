import { useState } from "react";
import { Link, useOutletContext, useSearchParams } from "react-router-dom";

export default function Blog() {
  const { posts, categories } = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);
  const selectedCategory = searchParams.get("category") || "";
  const postsPerPage = 6;
  function changeCategory(categoryName) {
    if (categoryName === "") {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryName });
    }
    setPage(1);
  }
  function changeSearch(e) {
    setSearch(e.target.value);
    setPage(1);
  }
  function changePage(newPage) {
    setPage(newPage);
    window.scrollTo(0, 0);
  }
  function resetFilters() {
    setSearch("");
    changeCategory("");
  }
  const filteredPosts = posts.filter((post) => {
    const matchCategory =
      selectedCategory === "" || post.category === selectedCategory;
    const matchSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPage = Math.min(page, totalPages) || 1;
  const start = (currentPage - 1) * postsPerPage;
  const visiblePosts = filteredPosts.slice(start, start + postsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <section className="relative overflow-hidden py-20 text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"></div>

        <div className="relative px-4">
          <span className="section-label">
            <i className="fa-solid fa-newspaper"></i>
            مدونتنا
          </span>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            استكشف <span className="gradient-text">مقالاتنا</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-neutral-400">
            اكتشف الدروس والنصائح وأسرار المحترفين في عالم التصوير الفوتوغرافي
          </p>
        </div>
      </section>

      <div className="sticky top-20 z-40 border-b border-[#262626] bg-[#0a0a0a]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:px-6 md:flex-row lg:px-8">
          <div className="relative w-full md:w-80">
            <input
              type="text"
              value={search}
              onChange={changeSearch}
              placeholder="ابحث في المقالات..."
              className="input-dark py-3 pr-12"
            />
            <i className="fa-solid fa-magnifying-glass absolute top-1/2 right-4 -translate-y-1/2 text-neutral-500"></i>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => changeCategory("")}
              className={
                selectedCategory === ""
                  ? "rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-medium text-white"
                  : "rounded-xl border border-[#262626] bg-[#161616] px-4 py-2 text-sm font-medium text-neutral-400 hover:border-orange-500/30"
              }
            >
              جميع المقالات
            </button>

            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => changeCategory(cat.name)}
                className={
                  selectedCategory === cat.name
                    ? "rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-medium text-white"
                    : "rounded-xl border border-[#262626] bg-[#161616] px-4 py-2 text-sm font-medium text-neutral-400 hover:border-orange-500/30"
                }
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-neutral-400">
            عرض{" "}
            <span className="font-bold text-white">{filteredPosts.length}</span>{" "}
            مقالات
          </p>

          <div className="flex items-center rounded-xl border border-[#262626] bg-[#161616] p-1">
            <button
              onClick={() => setView("grid")}
              className={
                view === "grid"
                  ? "rounded-lg bg-orange-500 p-2 text-white"
                  : "rounded-lg p-2 text-neutral-400 hover:text-white"
              }
            >
              <i className="fa-solid fa-table-cells-large"></i>
            </button>
            <button
              onClick={() => setView("list")}
              className={
                view === "list"
                  ? "rounded-lg bg-orange-500 p-2 text-white"
                  : "rounded-lg p-2 text-neutral-400 hover:text-white"
              }
            >
              <i className="fa-solid fa-list"></i>
            </button>
          </div>
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-20 text-center">
            <i className="fa-solid fa-magnifying-glass mb-4 text-5xl text-neutral-600"></i>
            <h3 className="mb-2 text-2xl font-bold">مفيش مقالات</h3>
            <p className="mb-6 text-neutral-400">
              جرّب تبحث بكلمة تانية أو تختار تصنيف تاني
            </p>
            <button onClick={resetFilters} className="btn-primary">
              عرض كل المقالات
            </button>
          </div>
        )}

        {view === "grid" && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <Link
                key={post.id}
                to={"/blog/" + post.slug}
                className="card group flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 right-4 rounded-full border border-[#333] bg-[#0a0a0a]/80 px-3 py-1 text-xs font-semibold text-white">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3 text-sm text-neutral-500">
                    <span>
                      <i className="fa-regular fa-clock ml-1"></i>
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span>
                      {new Date(post.date).toLocaleDateString("ar-EG", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="mb-3 line-clamp-2 text-xl font-bold text-white transition-colors group-hover:text-orange-500">
                    {post.title}
                  </h3>
                  <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-neutral-400">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center gap-3 border-t border-[#262626] pt-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {post.author.name}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {post.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {view === "list" && (
          <div className="flex flex-col gap-6">
            {visiblePosts.map((post) => (
              <Link
                key={post.id}
                to={"/blog/" + post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] transition-all duration-500 hover:border-orange-500/30 md:flex-row"
              >
                <div className="h-52 w-full shrink-0 overflow-hidden md:h-auto md:w-72 lg:w-80">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-center p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                    <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500">
                      {post.category}
                    </span>
                    <span>
                      <i className="fa-regular fa-clock ml-1"></i>
                      {post.readTime}
                    </span>
                    <span>
                      <i className="fa-regular fa-calendar ml-1"></i>
                      {new Date(post.date).toLocaleDateString("ar-EG", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-orange-500 lg:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 leading-relaxed text-neutral-400">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {post.author.name}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                    <span className="hidden text-sm font-semibold text-orange-500 sm:inline">
                      اقرأ المقال
                      <i className="fa-solid fa-arrow-left mr-2"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <>
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => changePage(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-11 w-11 rounded-xl border border-[#262626] bg-[#161616] text-white hover:border-orange-500/50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>

              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => changePage(number)}
                  className={
                    number === currentPage
                      ? "h-11 min-w-11 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-sm font-medium text-white"
                      : "h-11 min-w-11 rounded-xl border border-[#262626] bg-[#161616] text-sm font-medium text-neutral-400 hover:border-orange-500/50 hover:text-white"
                  }
                >
                  {number}
                </button>
              ))}

              <button
                onClick={() => changePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="h-11 w-11 rounded-xl border border-[#262626] bg-[#161616] text-white hover:border-orange-500/50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </div>

            <p className="mt-4 text-center text-sm text-neutral-500">
              صفحة {currentPage} من {totalPages}
            </p>
          </>
        )}
      </section>
    </>
  );
}
