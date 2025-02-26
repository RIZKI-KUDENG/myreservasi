"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";



export function MultiLayerParallax() {
const ref = useRef(null);
const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
})
const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <motion.div
    ref={ref}
    className="w-full h-screen overflow-hidden relative grid place-items-center ">
      <motion.img
      src="/logo.png"
      style={{ y: textY }}
      className="font-bold text-7xl text-white md:text-9xl relative z-10 mix-blend-multiply">
        
      </motion.img>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/atas.jpg')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY
        }}
      ></motion.div>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/bawah.png')",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></div>
    </motion.div>
  );
}
