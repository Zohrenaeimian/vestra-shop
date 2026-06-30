import { Link } from "react-router-dom";
import categories from "./categoriesData";

function CategoriesSection() {
  return (
    <section className="mt-14">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          دسته بندی محصولات
        </h2>

        <Link
          to="/products"
          className="text-sm text-slate-500 hover:text-yellow-500"
        >
          مشاهده همه
        </Link>
      </div>

      <div
        className="
          grid
          gap-6
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
        "
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            to={category.link}
            className="
              group
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-sm
              transition
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            <div className="overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="
                  h-40
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-110
                "
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="font-bold">
                {category.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;