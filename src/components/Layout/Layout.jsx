import { Outlet } from "react-router-dom";
import data from "../../data/posts.json";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const categoryIcons = {
  إضاءة: "fa-sun",
  بورتريه: "fa-user",
  "مناظر طبيعية": "fa-mountain-sun",
  تقنيات: "fa-sliders",
  معدات: "fa-camera",
};
export default function Layout() {
  const posts = [...data.posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
  const categories = data.categories.map((cat) => ({
    name: cat.name,
    icon: categoryIcons[cat.name],
    count: posts.filter((post) => post.category === cat.name).length,
  }));
  const siteInfo = data.siteInfo;
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="grow pt-20">
        <Outlet context={{ posts, categories, siteInfo }} />
      </main>

      <Footer categories={categories} siteInfo={siteInfo} />
    </div>
  );
}
