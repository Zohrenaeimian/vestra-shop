import { Link } from "react-router-dom";
import { FiInstagram, FiTwitter, FiYoutube, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

function Footer() {
  const quickLinks = [
    { label: "خانه", to: "/" },
    { label: "محصولات", to: "/products" },
    { label: "درباره ما", to: "/about" },
    { label: "سوالات متداول", to: "/faq" },
  ];

  const supportLinks = [
    { label: "سوالات متداول", to: "/faq" },
    { label: "درباره ما", to: "/about" },
    { label: "شرایط بازگشت", to: "/faq" },
    { label: "تماس با ما", to: "/about" },
  ];

  return (
    <footer className="mt-auto border-t border-border bg-surface text-foreground">
      <div className="site-container py-10 md:py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          <div className="col-span-2 space-y-4 md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-olive">
              VESTRA
            </Link>
            <p className="text-sm leading-7 text-muted">
              پوشاک گرم و روزمره با حس آتلیه برای استایل ساده و شیک.
            </p>
            <ul className="space-y-2 text-sm text-muted">
              <li className="flex items-center gap-2">
                <FiMail className="text-clementine" />
                info@vestra.shop
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-clementine" />
                ۰۲۱-۹۱۰۰۰۰۰۰
              </li>
              <li className="flex items-start gap-2">
                <FiMapPin className="mt-1 shrink-0 text-clementine" />
                تهران، خیابان ولیعصر
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-olive">دسترسی سریع</h3>
            <ul className="space-y-3 text-sm text-muted">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="transition hover:text-clementine"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-olive">خدمات مشتریان</h3>
            <ul className="space-y-3 text-sm text-muted">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="transition hover:text-clementine"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-base font-bold text-olive">شبکه‌های اجتماعی</h3>
            <p className="mb-4 text-sm text-muted">
              ما را در شبکه‌های اجتماعی دنبال کنید.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/40 text-olive transition hover:bg-clementine hover:text-cream"
                aria-label="Instagram"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/40 text-olive transition hover:bg-clementine hover:text-cream"
                aria-label="Twitter"
              >
                <FiTwitter size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/40 text-olive transition hover:bg-clementine hover:text-cream"
                aria-label="YouTube"
              >
                <FiYoutube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-olive py-3 text-cream">
        <div className="site-container text-center text-sm">
          © 2026 VESTRA. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
