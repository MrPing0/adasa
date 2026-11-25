import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Logo({ showTagline = true }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <img
        src={logo}
        alt="عدسة"
        className="h-12 w-12 transition-transform duration-300 group-hover:scale-105"
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold text-white">عدسة</span>
        {showTagline && (
          <span className="hidden text-xs tracking-wide text-orange-400/80 sm:block">
            عالم التصوير الفوتوغرافي
          </span>
        )}
      </div>
    </Link>
  );
}
