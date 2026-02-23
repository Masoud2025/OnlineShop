import Logo from "@/public/Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
<nav
  className="w-[90%] mx-auto mt-12 border border-gray-200 rounded-3xl bg-white"
  style={{
    boxShadow: `
      0 -8px 20px rgba(59,130,246,0.4),
      8px 0 20px rgba(236,72,153,0.4),
      0 8px 20px rgba(250,204,21,0.4),
      -8px 0 20px rgba(96,165,250,0.4)
    `
  }}
>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="Shop Logo" width={40} height={40} priority />
        </Link>
      </div>
    </nav>
  );
}
