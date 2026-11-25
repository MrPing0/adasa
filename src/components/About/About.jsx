import { Link, useOutletContext } from "react-router-dom";

export default function About() {
  const { posts, categories, siteInfo } = useOutletContext();
  const authors = posts.map((post) => post.author);
  const stats = [
    { icon: "fa-users", value: "+10ألف", label: "قارئ شهرياً" },
    { icon: "fa-newspaper", value: posts.length, label: "مقالة منشورة" },
    { icon: "fa-pen-nib", value: authors.length, label: "كاتب خبير" },
    { icon: "fa-book-open", value: categories.length, label: "تصنيفات" },
  ];
  const values = [
    {
      icon: "fa-bullseye",
      title: "الجودة أولاً",
      text: "محتوى مدروس ومكتوب بخبرة",
    },
    {
      icon: "fa-bolt",
      title: "تركيز عملي",
      text: "أمثلة واقعية يمكنك تطبيقها اليوم",
    },
    { icon: "fa-handshake", title: "المجتمع", text: "تعلم مع آلاف المصورين" },
    {
      icon: "fa-arrows-rotate",
      title: "دائماً محدث",
      text: "أحدث الاتجاهات وأفضل الممارسات",
    },
  ];
  return (
    <>
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-6xl px-4 text-center">
          <span className="section-label">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500"></span>
            من نحن
          </span>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">
            مهمتنا هي <span className="gradient-text">الإعلام والإلهام</span>
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-neutral-400">
            {siteInfo.description} نحن شغوفون بمشاركة المعرفة ومساعدة المصورين
            على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-6">
                <i
                  className={
                    "fa-solid " + stat.icon + " mb-2 text-2xl text-orange-500"
                  }
                ></i>
                <p className="gradient-text mb-1 text-3xl font-bold">
                  {stat.value}
                </p>
                <p className="text-sm text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#262626] bg-[#111111] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">قيمنا</h2>
            <p className="text-lg text-neutral-400">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] p-6 text-center transition-all duration-300 hover:border-orange-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>

                <div className="relative">
                  <i
                    className={
                      "fa-solid " +
                      value.icon +
                      " mb-4 text-4xl text-orange-500"
                    }
                  ></i>
                  <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-orange-500">
                    {value.title}
                  </h3>
                  <p className="text-sm text-neutral-400">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <span className="section-label">فريقنا</span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              تعرف على كتابنا
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {authors.map((author) => (
              <div
                key={author.name}
                className="group rounded-2xl border border-[#262626] bg-[#161616] p-6 text-center transition-all duration-300 hover:border-orange-500/30"
              >
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="mx-auto mb-4 h-24 w-24 rounded-full object-cover ring-4 ring-[#262626] transition-all group-hover:ring-orange-500/30"
                />
                <h3 className="text-lg font-bold">{author.name}</h3>
                <p className="text-sm font-medium text-orange-500">
                  {author.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
            أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={"mailto:" + siteInfo.email}
              className="rounded-xl bg-[#0a0a0a] px-8 py-4 font-semibold transition-all hover:-translate-y-0.5 hover:bg-neutral-900"
            >
              <i className="fa-regular fa-envelope ml-2"></i>
              تواصل معنا
            </a>
            <Link
              to="/blog"
              className="rounded-xl border-2 border-white/40 px-8 py-4 font-semibold transition-all hover:bg-white hover:text-[#0a0a0a]"
            >
              تصفح المقالات
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
