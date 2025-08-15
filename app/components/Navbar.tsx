"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { href: "#Home", label: "Home" },
  { href: "#Story", label: "Story" },
  { href: "#Projects", label: "Projects" },
  { href: "#Contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full py-4 px-6 flex justify-center shadow-2xl sticky top-0 z-50 bg-white">
      <nav className="flex gap-8 items-center text-sm font-thin text-gray-400">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link href={link.href} key={link.href}>
              <span
                className={clsx(
                  "relative cursor-pointer transition-all duration-300",
                  isActive ? "text-black" : "hover:text-black"
                )}
              >
                {link.label}

                <span
                  className={clsx(
                    "absolute left-0 -bottom-1 w-full h-[6px] bg-[url('/underline.svg')] bg-no-repeat bg-contain bg-left transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}
                />
              </span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
