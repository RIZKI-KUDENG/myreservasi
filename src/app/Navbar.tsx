"use client";
import React from "react";
import { FloatingNav } from "@/app/components/floating-navbar";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",

    },
    {
      name: "Services",
      link: "/services",

    },
{
    name: "Testimonials",
    link: "/testimonials"
},
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

