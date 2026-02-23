import Logo from "@/public/Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="Shop Logo" width={80} height={40} priority />
        </Link>
      </div>
    </nav>
  );
}
