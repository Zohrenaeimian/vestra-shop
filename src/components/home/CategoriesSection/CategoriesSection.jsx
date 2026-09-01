import { Link } from "react-router-dom";
import categories from "./categoriesData";

function CategoriesSection() {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold md:text-2xl">دسته بندی محصولات</h2>

        <Link
          to="/products"
          className="text-sm text-muted transition hover:text-clementine"
        >
          مشاهده همه
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            className="group flex flex-col items-center gap-2"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-md dark:border-olive dark:bg-olive">
              <img
                src={category.image}
                alt={category.title}
                className="h-24 w-24 object-cover transition duration-500 group-hover:scale-110 sm:h-28 sm:w-28 md:h-32 md:w-32"
              />
            </div>

            <h3 className="text-center text-sm font-bold">{category.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;
