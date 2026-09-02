const brands = [
  "ZARA",
  "NIKE",
  "ADIDAS",
  "H&M",
  "MANGO",
  "PUMA",
  "LEVI'S",
  "BERSHKA",
];

function BrandsSection() {
  return (
    <section className="rounded-3xl border border-border bg-surface px-6 py-8 dark:border-olive dark:bg-olive/30">
      <div className="mb-6 text-center">
        <p className="text-sm font-bold text-clementine">همکاری با برندها</p>
        <h2 className="mt-2 text-2xl font-bold">برندهای محبوب پوشاک</h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {brands.map((brand) => (
          <span
            key={brand}
            className="text-lg font-bold tracking-widest text-muted/70 transition hover:text-clementine md:text-xl"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}

export default BrandsSection;
