import Link from "next/link";

const LinkBtn = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      type="button"
      className="mt-10 bg-transparent border border-neutral-300 text-white h-12 p-2
  hover:bg-white hover:text-black transition-all z-[101] flex items-center justify-center duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
    >
      <span className={` uppercase font-light text-[1.8vh] tracking-widest`}>
        {label}
      </span>
    </Link>
  );
};

export default LinkBtn;
