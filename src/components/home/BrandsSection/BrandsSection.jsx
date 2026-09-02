import { Link } from "react-router-dom";
import brands from "./brandsData";

function BrandsSection() {
  return (
    <section className="rounded-3xl border border-border bg-surface px-6 py-8 dark:border-olive dark:bg-olive/30">
      <div className="mb-8 text-center">
        <p className="text-sm font-bold text-clementine">همکاری با برندها</p>
        <h2 className="mt-2 text-2xl font-bold">برندهای محبوب پوشاک</h2>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
        {brands.map((brand) => (
          <Link
            key={brand.slug}
            to="/products"
            className="group flex flex-col items-center gap-3 text-center transition"
          >
            <div className="flex h-20 w-full items-center justify-center rounded-2xl border border-border bg-cream p-4 transition group-hover:border-clementine group-hover:shadow-md dark:border-olive dark:bg-olive/20 md:h-24">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-10 w-full object-contain opacity-80 transition group-hover:opacity-100 md:max-h-12"
              />
            </div>
            <span className="text-xs font-semibold tracking-wide text-muted transition group-hover:text-clementine md:text-sm">
              {brand.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BrandsSection;
