"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu as Hamburger, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <NavigationMenu viewport={false}>
      <div className="relative w-screen">
        <div className="flex items-center justify-between px-4 py-2">
          <Link className="ml-4" href="/">
            <Image
              src="/BestULogo_v5.png"
              alt="Best U Logo"
              width={120}
              height={120}
            />
          </Link>
          <h1 className="text-xl font-bold">
            <div className="text-green-400">Happier Happens</div>
            <div className="text-blue-400">While Life Happens</div>
          </h1>

          <div hidden={navLinks.length == 0} className="hidden md:flex ml-auto">
            <NavigationMenuList className="flex gap-2">
              {navLinks.map(({ href, label }) => (
                <NavigationMenuItem key={label}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={href} className="text-[.9rem] xl:text-[1.2rem]">
                      {label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </div>

          <div hidden={navLinks.length == 0} className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Hamburger size={28} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute right-4 top-[100px] z-50 bg-white rounded shadow-md py-2 px-4">
            <NavigationMenuList className="flex flex-col items-start gap-2 w-full">
              {navLinks.map(({ href, label }) => (
                <NavigationMenuItem key={label} className="w-full">
                  <NavigationMenuLink
                    asChild
                    style={{ width: 150 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link className="w-full" href={href}>
                      {label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </div>
        )}
      </div>
    </NavigationMenu>
  );
}

const navLinks: { href: string; label: string }[] = [
  // { href: "/", label: "Home" },
  // { href: "/about", label: "About" },
  // { href: "/approach", label: "My Approach" },
  // { href: "/packages", label: "Packages" },
  // { href: "/contact", label: "Contact" },
];
