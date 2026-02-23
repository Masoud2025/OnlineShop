export default function PopularCategories() {
  return (
    <section className="w-[90%] mx-auto mt-16">
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
          دسته بندی های محبوب
        </h2>
      </div>

      {/* Cards */}
      <div className="flex gap-3">
        <div
          className="flex-1 h-30 sm:h-40 lg:h-55 
                        rounded-2xl bg-gray-100 
                        flex items-center justify-center 
                        text-sm sm:text-base font-semibold 
                        shadow-md"
        >
          دسته ۱
        </div>

        <div
          className="flex-1 h-30 sm:h-40 lg:h-55 
                        rounded-2xl bg-gray-100 
                        flex items-center justify-center 
                        text-sm sm:text-base font-semibold 
                        shadow-md"
        >
          دسته ۲
        </div>

        <div
          className="flex-1 h-30 sm:h-40 lg:h-55 
                        rounded-2xl bg-gray-100 
                        flex items-center justify-center 
                        text-sm sm:text-base font-semibold 
                        shadow-md"
        >
          دسته ۳
        </div>
      </div>
    </section>
  );
}
