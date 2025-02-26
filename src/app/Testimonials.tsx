"use client";
import { InfiniteMovingCards } from "@/app/components/movingCards";

export function Testimonials() {
  return (
    <div id="testimonials" className="h-screen rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden pb-10">
        <h1
        className="text-7xl max-sm:text-4xl font-bold text-center tracking-wide m-4  text-black"
        >Testimonials</h1>
      <InfiniteMovingCards
        images={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
 "/testi1.JPG",
 "/testi2.JPG",
 "/testi3.JPG",
 "/testi4.JPG",
 "/testi5.JPG",
 "/testi6.JPG",
 "/testi7.JPG",
 "/testi8.JPG",
 "/testi9.JPG",
];
