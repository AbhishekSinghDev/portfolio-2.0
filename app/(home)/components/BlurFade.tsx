"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  inView?: boolean;
};

export function BlurFade({ children, delay = 0, className, inView = false }: Props) {
  const variants = {
    hidden: { opacity: 0, filter: "blur(6px)", y: 6 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  };

  if (inView) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay, duration: 0.5, ease: "easeOut" }}
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
