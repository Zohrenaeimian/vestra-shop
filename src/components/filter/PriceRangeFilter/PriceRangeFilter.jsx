import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const MIN_PRICE = 0;
const MAX_PRICE = 5000000;
const STEP = 100000;

function formatPrice(value) {
  if (value === 0) return "۰";
  const millions = value / 1000000;
  return millions % 1 === 0
    ? `${millions} میلیون`
    : `${millions.toFixed(1)} میلیون`;
}

function PriceRangeFilter({ defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [searchParams, setSearchParams] = useSearchParams();

  const minPrice = Number(searchParams.get("minPrice") || MIN_PRICE);
  const maxPrice = Number(searchParams.get("maxPrice") || MAX_PRICE);

  const updatePrices = (nextMin, nextMax) => {
    const safeMin = Math.min(nextMin, nextMax - STEP);
    const safeMax = Math.max(nextMax, nextMin + STEP);

    const params = new URLSearchParams(searchParams);

    if (safeMin > MIN_PRICE) {
      params.set("minPrice", String(safeMin));
    } else {
      params.delete("minPrice");
    }

    if (safeMax < MAX_PRICE) {
      params.set("maxPrice", String(safeMax));
    } else {
      params.delete("maxPrice");
    }

    params.delete("page");
    setSearchParams(params);
  };

  const handleMinChange = (event) => {
    updatePrices(Number(event.target.value), maxPrice);
  };

  const handleMaxChange = (event) => {
    updatePrices(minPrice, Number(event.target.value));
  };

  const clearFilter = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("minPrice");
    params.delete("maxPrice");
    params.delete("page");
    setSearchParams(params);
  };

  const minPercent = (minPrice / MAX_PRICE) * 100;
  const maxPercent = (maxPrice / MAX_PRICE) * 100;

  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-surface/60 shadow-lg backdrop-blur-md dark:border-olive dark:bg-olive/50">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between p-4 transition-colors duration-300 hover:bg-sage/30 dark:hover:bg-olive/40"
      >
        <h4 className="font-bold dark:text-cream">قیمت</h4>
        <span>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
      </button>

      {isOpen && (
        <div className="space-y-4 border-t-2 border-border/50 p-4 dark:border-olive">
          <div className="flex items-center justify-between text-xs text-muted dark:text-oat">
            <span>از {minPrice.toLocaleString()} تومان</span>
            <span>تا {maxPrice.toLocaleString()} تومان</span>
          </div>

          <div className="relative h-8">
            <div className="absolute top-1/2 right-0 left-0 h-1.5 -translate-y-1/2 rounded-full bg-oat/60 dark:bg-olive" />
            <div
              className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-clementine"
              style={{
                right: `${minPercent}%`,
                left: `${100 - maxPercent}%`,
              }}
            />
            <input
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={STEP}
              value={minPrice}
              onChange={handleMinChange}
              className="price-range-thumb absolute inset-0 w-full cursor-pointer appearance-none bg-transparent"
            />
            <input
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={STEP}
              value={maxPrice}
              onChange={handleMaxChange}
              className="price-range-thumb absolute inset-0 w-full cursor-pointer appearance-none bg-transparent"
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-muted">
            <span>{formatPrice(MIN_PRICE)}</span>
            <span>{formatPrice(MAX_PRICE)}</span>
          </div>

          {(minPrice > MIN_PRICE || maxPrice < MAX_PRICE) && (
            <button
              type="button"
              onClick={clearFilter}
              className="w-full rounded-lg bg-sage/30 py-2 text-xs font-bold text-olive transition hover:bg-sage/50 dark:text-cream"
            >
              پاک کردن فیلتر قیمت
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default PriceRangeFilter;
