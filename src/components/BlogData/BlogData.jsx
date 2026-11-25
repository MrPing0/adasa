import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

export default function BlogData() {
  const { posts } = useOutletContext();
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    setCopied(false);
  }, [slug]);
  const post = posts.find((item) => item.slug === slug);
  if (!post) {
    return <NotFound />;
  }
  const blocks = post.content.split("\n\n");
  const headings = blocks.filter((block) => block.startsWith("## "));
  const relatedPosts = posts
    .filter((item) => item.category === post.category && item.id !== post.id)
    .slice(0, 3);
  const date = new Date(post.date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const pageUrl = window.location.href;
  function copyLink() {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
  }
  return (
    <article>
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent"></div>

        <div className="absolute top-8 right-8 left-8">
          <nav className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm backdrop-blur-md">
            <Link to="/" className="text-white/70 hover:text-white">
              <i className="fa-solid fa-house"></i>
            </Link>
            <i className="fa-solid fa-chevron-left text-xs text-white/30"></i>
            <Link to="/blog" className="text-white/70 hover:text-white">
              المدونة
            </Link>
            <i className="fa-solid fa-chevron-left text-xs text-white/30"></i>
            <span className="font-medium text-orange-400">{post.category}</span>
          </nav>
        </div>

        <div className="absolute right-0 bottom-0 left-0 p-8 md:p-12">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <Link
                to={"/blog?category=" + post.category}
                className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white hover:bg-orange-600"
              >
                {post.category}
              </Link>
              <span className="text-sm text-white/70">
                <i className="fa-regular fa-calendar ml-2"></i>
                {date}
              </span>
              <span className="text-sm text-white/70">
                <i className="fa-regular fa-clock ml-2"></i>
                {post.readTime}
              </span>
            </div>

            <h1 className="mb-6 max-w-4xl text-3xl leading-tight font-bold md:text-5xl">
              {post.title}
            </h1>

            <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="font-bold">{post.author.name}</p>
                <p className="text-sm text-white/60">{post.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="order-2 lg:order-1">
            <div className="mb-10 rounded-2xl border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-yellow-500/5 p-6">
              <p className="text-lg leading-relaxed text-neutral-200 italic">
                "{post.excerpt}"
              </p>
            </div>

            {blocks.map((block, index) =>
              block.startsWith("## ") ? (
                <h2
                  key={index}
                  id={"section-" + headings.indexOf(block)}
                  className="mt-14 mb-6 flex scroll-mt-24 items-center gap-4 text-2xl font-bold md:text-3xl"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10">
                    <i className="fa-solid fa-camera text-base text-orange-500"></i>
                  </span>
                  {block.replace("## ", "")}
                </h2>
              ) : (
                <p
                  key={index}
                  className="mb-6 text-lg leading-relaxed text-neutral-300"
                >
                  {block}
                </p>
              ),
            )}

            <div className="mt-14 rounded-2xl border border-[#262626] bg-[#111111] p-6">
              <h3 className="mb-4 font-bold">
                <i className="fa-solid fa-tags ml-2 text-orange-500"></i>
                الوسوم
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#262626] bg-[#1a1a1a] px-4 py-2 text-sm text-neutral-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#262626] bg-[#111111] p-6">
              <h3 className="font-bold">
                <i className="fa-solid fa-share-nodes ml-2 text-orange-500"></i>
                شارك المقال
              </h3>
              <div className="flex gap-2">
                <a
                  href={"https://twitter.com/intent/tweet?url=" + pageUrl}
                  target="_blank"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#1a1a1a] text-neutral-400 hover:bg-[#1da1f2] hover:text-white"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a
                  href={
                    "https://www.linkedin.com/sharing/share-offsite/?url=" +
                    pageUrl
                  }
                  target="_blank"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#1a1a1a] text-neutral-400 hover:bg-[#0077b5] hover:text-white"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href={"https://wa.me/?text=" + pageUrl}
                  target="_blank"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#262626] bg-[#1a1a1a] text-neutral-400 hover:bg-[#25d366] hover:text-white"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <button
                  onClick={copyLink}
                  className="flex h-11 items-center justify-center gap-2 rounded-xl border border-[#262626] bg-[#1a1a1a] px-4 text-neutral-400 hover:bg-orange-500 hover:text-white"
                >
                  {copied ? (
                    <i className="fa-solid fa-check"></i>
                  ) : (
                    <i className="fa-solid fa-link"></i>
                  )}
                  {copied ? "تم النسخ" : ""}
                </button>
              </div>
            </div>

            <div className="mt-6 flex flex-col items-center gap-6 rounded-2xl border border-[#262626] bg-gradient-to-br from-[#161616] to-[#111111] p-8 sm:flex-row sm:items-start">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-24 w-24 rounded-2xl object-cover"
              />
              <div className="text-center sm:text-right">
                <span className="text-xs font-semibold text-orange-500">
                  كاتب المقال
                </span>
                <h3 className="mt-1 text-xl font-bold">{post.author.name}</h3>
                <p className="mb-3 text-sm text-neutral-500">
                  {post.author.role}
                </p>
                <p className="text-sm leading-relaxed text-neutral-400">
                  {post.author.role} شغوف بمشاركة المعرفة والخبرات في عالم
                  التصوير الفوتوغرافي.
                </p>
              </div>
            </div>
          </div>

          <aside className="order-1 lg:order-2">
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-2xl border border-[#262626] bg-[#111111] p-6">
                <h3 className="mb-5 font-bold">
                  <i className="fa-solid fa-list ml-2 text-orange-500"></i>
                  محتويات المقال
                </h3>
                <nav className="space-y-2">
                  {headings.map((heading, index) => (
                    <a
                      key={index}
                      href={"#section-" + index}
                      className="flex items-center gap-3 rounded-xl p-3 text-sm text-neutral-400 transition-colors hover:bg-orange-500/5 hover:text-orange-500"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#1a1a1a] text-xs font-bold">
                        {index + 1}
                      </span>
                      {heading.replace("## ", "")}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="grid grid-cols-2 gap-4 rounded-2xl border border-[#262626] bg-[#111111] p-6">
                <div className="rounded-xl bg-[#0a0a0a] p-4 text-center">
                  <i className="fa-regular fa-clock mb-2 text-xl text-orange-500"></i>
                  <p className="text-sm font-bold">{post.readTime}</p>
                  <p className="text-xs text-neutral-500">وقت القراءة</p>
                </div>
                <div className="rounded-xl bg-[#0a0a0a] p-4 text-center">
                  <i className="fa-regular fa-calendar mb-2 text-xl text-orange-500"></i>
                  <p className="text-sm font-bold">{date}</p>
                  <p className="text-xs text-neutral-500">تاريخ النشر</p>
                </div>
              </div>

              <div className="rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-yellow-500/5 p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/20">
                  <i className="fa-solid fa-envelope text-xl text-orange-500"></i>
                </div>
                <h3 className="mb-2 font-bold">لا تفوّت جديدنا</h3>
                <p className="mb-4 text-sm text-neutral-400">
                  اكتشف مقالات أكتر في المدونة
                </p>
                <Link
                  to="/blog"
                  className="block rounded-xl bg-orange-500 py-3 font-semibold hover:bg-orange-600"
                >
                  تصفح المزيد
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-20 border-t border-[#262626] pt-12">
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                <i className="fa-solid fa-images ml-3 text-orange-500"></i>
                مقالات قد تعجبك
              </h2>
              <Link
                to="/blog"
                className="text-orange-500 hover:text-orange-400"
              >
                عرض الكل
                <i className="fa-solid fa-arrow-left mr-2"></i>
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((item) => (
                <Link
                  key={item.id}
                  to={"/blog/" + item.slug}
                  className="group overflow-hidden rounded-2xl border border-[#262626] bg-[#111111] transition-all duration-500 hover:border-orange-500/30"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-4 right-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-3 line-clamp-2 font-bold transition-colors group-hover:text-orange-500">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-neutral-500">
                      <span className="flex items-center gap-2">
                        <img
                          src={item.author.avatar}
                          alt={item.author.name}
                          className="h-6 w-6 rounded-full"
                        />
                        {item.author.name}
                      </span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
