"use client";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import Image from "next/image";

export const Logo = () => {
  return (
    <Image src="/travelmap.svg" alt="travelmap" width={40} height={40}
      className="logo rounded-full border1 mr-2 border-red-800" />
  );
};

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/map", label: "Карта" },
  { href: "/about", label: "О нас" },
]

export default function Header() {
  return (
    <Navbar className="header">
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">KU Travel Guide</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => {
          return (<NavbarItem key={item.href}>
            <Link color="foreground" href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>)
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
