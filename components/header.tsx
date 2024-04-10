import {
  Earth,
  Jupiter,
  Mars,
  Planet,
  Saturn,
  Sun,
} from "@/components/icons/icons";

import Link from "next/link";

const Header = () => {
  return (
    <header className="header max-w-screen-2xl fixed top-0 left-[50%] transform -translate-x-1/2  w-full z-[101]">
      <nav className="flex items-center justify-between gap-8 p-8">
        <Link
          href="/"
          className="flex items-center text-white gap-2 hover:text-yellow-300 transition-colors"
        >
          <Sun className="w-10 h-10 " />
          <span className={`  text-md`}>Sun</span>
        </Link>
        <Link href="/mercury" className="flex items-center gap-2">
          <Planet className="w-3 h-3" />
          <span className={` text-white text-md`}>Mercury</span>
        </Link>
        <Link href="/venus" className="flex items-center gap-2">
          <Planet className="w-5 h-5 " />
          <span className={` text-white text-md`}>Venus</span>
        </Link>
        <Link href="/earth" className="flex items-center gap-2">
          <Earth className="w-6 h-6 " />
          <span className={` text-white text-md`}>Earth</span>
        </Link>
        <Link href="/mars" className="flex items-center gap-2">
          <Mars className="w-5 h-5 " />
          <span className={` text-white text-md`}>Mars</span>
        </Link>
        <Link href="/jupiter" className="flex items-center gap-2">
          <Jupiter className="w-8 h-8 " />
          <span className={` text-white text-md`}>Jupiter</span>
        </Link>
        <Link href="/saturn" className="flex items-center gap-2">
          <Saturn className="w-8 h-8 " />
          <span className={` text-white text-md`}>Saturn</span>
        </Link>
        <Link href="/uranus" className="flex items-center gap-2">
          <Planet className="w-7 h-7 " />
          <span className={` text-white text-md`}>Uranus</span>
        </Link>
        <Link href="/neptune" className="flex items-center gap-2">
          <Planet className="w-7 h-7 " />
          <span className={` text-white text-md`}>Neptune</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
