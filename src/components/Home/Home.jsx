import { Link, useOutletContext } from "react-router-dom";

export default function Home() {
  const { posts, categories } = useOutletContext();
  const featuredPosts = posts.filter((post) => post.featured);
  const latestPosts = posts.filter((post) => !post.featured).slice(0, 3);
  const stats = [
    { icon: "fa-newspaper", value: posts.length, label: "مقالة" },
    { icon: "fa-users", value: "+10ألف", label: "قارئ" },
    { icon: "fa-folder-open", value: categories.length, label: "تصنيفات" },
    { icon: "fa-pen-nib", value: posts.length, label: "كاتب" },
  ];
  return (
    <>
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>
        <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl"></div>

        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
          <span className="section-label">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500"></span>
            مرحباً بك في عدسة
          </span>

          <h1 className="mb-6 text-5xl leading-tight font-bold md:text-7xl">
            اكتشف <span className="gradient-text">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-neutral-400">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/blog" className="btn-primary">
              استكشف المقالات
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
            <Link to="/about" className="btn-secondary">
              <i className="fa-solid fa-circle-info"></i>
              اعرف المزيد
            </Link>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-4 transition-transform hover:scale-105"
              >
                <i
                  className={
                    "fa-solid " + stat.icon + " mb-1 text-2xl text-orange-500"
                  }
                ></i>
                <p className="gradient-text text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="section-label">مميز</span>
              <h2 className="section-title">مقالات مختارة</h2>
              <p className="section-subtitle">محتوى منتقى لبدء رحلة تعلمك</p>
            </div>
            <Link to="/blog" className="btn-primary text-sm">
              عرض الكل
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </div>

          <div className="space-y-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                to={"/blog/" + post.slug}
                className="group grid overflow-hidden rounded-3xl border border-[#262626] bg-[#161616] transition-all duration-500 hover:border-orange-500/30 md:grid-cols-2"
              >
                <div className="relative h-72 overflow-hidden md:h-[400px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-3 py-1.5 text-xs font-semibold text-white">
                    <i className="fa-solid fa-star ml-1"></i>
                    مميز
                  </span>
                </div>

                <div className="flex flex-col justify-center p-8 md:p-10">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500">
                      {post.category}
                    </span>
                    <span className="text-sm text-neutral-500">
                      <i className="fa-regular fa-clock ml-1"></i>
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-orange-500 md:text-3xl">
                    {post.title}
                  </h3>
                  <p className="mb-6 leading-relaxed text-neutral-400">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {post.author.name}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {new Date(post.date).toLocaleDateString("ar-EG", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-orange-500">
                      اقرأ المقال
                      <i className="fa-solid fa-arrow-left mr-2"></i>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#262626] bg-[#111111] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="section-label">التصنيفات</span>
            <h2 className="section-title">استكشف حسب الموضوع</h2>
            <p className="section-subtitle">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={"/blog?category=" + cat.name}
                className="group rounded-2xl border border-[#262626] bg-[#161616] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-orange-500 hover:to-yellow-500"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 group-hover:bg-white/20">
                  <i
                    className={
                      "fa-solid " +
                      cat.icon +
                      " text-xl text-orange-500 group-hover:text-white"
                    }
                  ></i>
                </div>
                <h3 className="mb-1 text-lg font-bold text-white">
                  {cat.name}
                </h3>
                <p className="text-sm text-neutral-500 group-hover:text-white/80">
                  {cat.count} مقالات
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="section-label">الأحدث</span>
              <h2 className="section-title">أحدث المقالات</h2>
              <p className="section-subtitle">محتوى جديد طازج من المطبعة</p>
            </div>
            <Link
              to="/blog"
              className="font-semibold text-orange-500 hover:text-orange-400"
            >
              عرض جميع المقالات
              <i className="fa-solid fa-arrow-left mr-2"></i>
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
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
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-3xl border border-[#262626] bg-[#161616] p-8 text-center md:p-16">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600">
              <i className="fa-regular fa-envelope text-2xl text-white"></i>
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              اشترك في <span className="gradient-text">نشرتنا الإخبارية</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-neutral-400">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>
            <div className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="input-dark flex-1"
              />
              <button className="btn-primary">اشترك الآن</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
