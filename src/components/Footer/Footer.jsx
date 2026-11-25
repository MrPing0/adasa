import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function Footer({ categories, siteInfo }) {
  return (
    <footer className="border-t border-[#262626] bg-[#0a0a0a]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-6">
            <Logo showTagline={false} />
          </div>
          <p className="mb-6 text-sm leading-relaxed text-neutral-500">
            {siteInfo.description}
          </p>
          <div className="flex gap-2">
            <a
              href={siteInfo.social.twitter}
              target="_blank"
              className="social-icon"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href={siteInfo.social.github}
              target="_blank"
              className="social-icon"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href={siteInfo.social.linkedin}
              target="_blank"
              className="social-icon"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href={siteInfo.social.youtube}
              target="_blank"
              className="social-icon"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 className="footer-title">
            <span className="footer-line"></span>
            استكشف
          </h3>
          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/" className="footer-link group">
                <i className="fa-solid fa-chevron-left footer-arrow"></i>
                الرئيسية
              </Link>
            </li>
            <li>
              <Link to="/blog" className="footer-link group">
                <i className="fa-solid fa-chevron-left footer-arrow"></i>
                المدونة
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer-link group">
                <i className="fa-solid fa-chevron-left footer-arrow"></i>
                من نحن
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">
            <span className="footer-line"></span>
            التصنيفات
          </h3>
          <ul className="space-y-4 text-sm">
            {categories.map((cat) => (
              <li key={cat.name}>
                <Link
                  to={"/blog?category=" + cat.name}
                  className="footer-link group"
                >
                  <i className="fa-solid fa-chevron-left footer-arrow"></i>
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-title">
            <span className="footer-line"></span>
            ابقى على اطلاع
          </h3>
          <p className="mb-4 text-sm text-neutral-500">
            اشترك للحصول على أحدث المقالات والتحديثات.
          </p>
          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            className="input-dark mb-3 text-sm"
          />
          <button className="btn-primary w-full text-sm">اشترك</button>
        </div>
      </div>
      <div className="border-t border-[#262626]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-neutral-600 sm:px-6 md:flex-row lg:px-8">
          <p>
            © 2026 عدسة. صنع بكل{" "}
            <i className="fa-solid fa-heart text-orange-500"></i> جميع الحقوق
            محفوظة.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="transition-colors hover:text-orange-500"
            >
              سياسة الخصوصية
            </Link>
            <Link
              to="/terms"
              className="transition-colors hover:text-orange-500"
            >
              شروط الخدمة
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
