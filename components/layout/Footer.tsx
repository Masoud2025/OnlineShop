export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">

      {/* Wave Background */}
      <div className="absolute top-0 left-0 w-full rotate-180 leading-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-24 text-gray-900"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          <path d="M0,160L80,154.7C160,149,320,139,480,144C640,149,800,171,960,181.3C1120,192,1280,192,1360,192L1440,192L1440,320L0,320Z"></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="bg-gray-900 text-white pt-28 pb-16 px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">فروشگاه ما</h3>
            <p className="text-sm text-gray-400 leading-6">
              ارائه بهترین محصولات با کیفیت بالا و قیمت مناسب.
              تجربه خریدی امن، سریع و مدرن.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">لینک‌های مهم</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white transition">خانه</li>
              <li className="hover:text-white transition">محصولات</li>
              <li className="hover:text-white transition">درباره ما</li>
              <li className="hover:text-white transition">تماس با ما</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ارتباط با ما</h3>
            <p className="text-sm text-gray-400">
              ایمیل: info@example.com
            </p>
            <p className="text-sm text-gray-400">
              تلفن: ۰۹۱۲۳۴۵۶۷۸۹
            </p>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-16 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} تمامی حقوق محفوظ است
        </div>

      </div>
    </footer>
  );
}