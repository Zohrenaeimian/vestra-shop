import { Link } from "react-router-dom";
import menImg from "../../../assets/images/hero/men.png";
import womenImg from "../../../assets/images/hero/women.png";

function GenderBanners() {
  const banners = [
    {
      title: "کالکشن مردانه",
      subtitle: "استایل مینیمال و کاربردی",
      image: menImg,
      link: "/products?gender=men",
      bg: "from-olive/80 to-olive/30",
    },
    {
      title: "کالکشن زنانه",
      subtitle: "طراحی مدرن با جزئیات ظریف",
      image: womenImg,
      link: "/products?gender=women",
      bg: "from-clementine/80 to-terracotta/40",
    },
  ];

  return (
    <section className="grid gap-4 md:grid-cols-2">
      {banners.map((banner) => (
        <Link
          key={banner.title}
          to={banner.link}
          className="group relative overflow-hidden rounded-3xl"
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 md:h-64"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${banner.bg}`}
          />
          <div className="absolute right-6 bottom-6 left-6 text-cream">
            <h3 className="text-2xl font-bold">{banner.title}</h3>
            <p className="mt-1 text-sm text-oat">{banner.subtitle}</p>
            <span className="mt-4 inline-flex rounded-full bg-cream/20 px-4 py-2 text-sm font-bold backdrop-blur-sm transition group-hover:bg-cream group-hover:text-olive">
              مشاهده کالکشن
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default GenderBanners;
