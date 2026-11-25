import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-yellow-500/5 blur-3xl"></div>

      <div className="relative mx-auto max-w-lg px-4 py-16 text-center">
        <h1 className="mb-6 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-[140px] leading-none font-black text-transparent md:text-[180px]">
          404
        </h1>

        <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-yellow-500/20">
          <i className="fa-regular fa-face-frown text-5xl text-orange-500"></i>
          <span className="absolute -top-2 -right-2 h-5 w-5 rotate-12 animate-bounce rounded-lg bg-orange-500"></span>
          <span className="absolute -bottom-1 -left-3 h-4 w-4 animate-pulse rounded-full bg-yellow-500"></span>
        </div>

        <h2 className="mb-4 text-2xl font-bold md:text-3xl">عفواً! الصفحة غير موجودة</h2>
        <p className="mb-8 text-lg text-neutral-400">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
        </p>

        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/" className="btn-primary">
            <i className="fa-solid fa-house"></i>
            الذهاب للرئيسية
          </Link>
          <Link to="/blog" className="btn-secondary">
            <i className="fa-solid fa-newspaper"></i>
            تصفح المقالات
          </Link>
        </div>

        <div className="border-t border-[#262626] pt-8">
          <p className="mb-4 text-sm text-neutral-500">قد تجد هذه مفيدة:</p>
          <div className="flex justify-center gap-4 text-sm">
            <Link to="/blog" className="font-medium text-orange-500 hover:underline">
              المدونة
            </Link>
            <span className="text-neutral-600">•</span>
            <Link to="/about" className="font-medium text-orange-500 hover:underline">
              من نحن
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}