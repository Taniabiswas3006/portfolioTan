"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Starfield() {
  const [stars, setStars] = useState<{ id: number; x: string; y: string; size: number; duration: number }[]>([]);

  useEffect(() => {
    const starCount = 100;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="star-field">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="star"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1.0, 0.3] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
          }}
        />
      ))}
      
      {/* Nebulas */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="nebula w-[600px] h-[600px] bg-primary top-[-10%] left-[-10%]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="nebula w-[500px] h-[500px] bg-secondary bottom-[-10%] right-[-10%]"
      />
    </div>
  );
}
