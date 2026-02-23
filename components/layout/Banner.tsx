import Image from "next/image";
import Link from "next/link";

export default function Banner({
  title = "عنوان بنر",
  description = "توضیح کوتاه اینجا قرار می‌گیرد",
  buttonText = "مشاهده",
  buttonLink = "#",
  imageSrc = null,
  backgroundClass = "bg-gray-900",
}) {
  return (
    <section className="w-[90%] mx-auto my-16">
      
      <div
        className={`relative overflow-hidden rounded-3xl p-8 lg:p-12 text-white ${backgroundClass}`}
      >

        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-2xl lg:text-4xl font-bold leading-tight">
            {title}
          </h2>

          <p className="text-sm lg:text-base text-white/80">
            {description}
          </p>

          <Link
            href={buttonLink}
            className="inline-block px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            {buttonText}
          </Link>
        </div>

        {/* Optional Image */}
        {imageSrc && (
          <div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:block">
            <Image
              src={imageSrc}
              alt="Banner Image"
              fill
              className="object-cover"
            />
          </div>
        )}

      </div>

    </section>
  );
}