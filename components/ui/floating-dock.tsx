"use client";

/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export type FloatingDockItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
  onClick?: () => void;
  external?: boolean;
};

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: FloatingDockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: FloatingDockItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => {
              const showSeparatorBefore =
                item.title === "GitHub" || item.title === "Toggle theme";
              return (
                <div key={item.title} className="flex flex-col items-center gap-2">
                  {showSeparatorBefore && (
                    <div className="h-px w-8 bg-gray-200 dark:bg-neutral-700 shrink-0" />
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      transition: {
                        delay: idx * 0.05,
                      },
                    }}
                    transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                  >
                    {item.onClick ? (
                      <button
                        onClick={() => {
                          setOpen(false);
                          item.onClick?.();
                        }}
                        aria-label={item.title}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900 border border-border shadow-sm"
                      >
                        <div className="h-4 w-4">{item.icon}</div>
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        onClick={(e) => {
                          if (!item.external && item.href.startsWith("#")) {
                            e.preventDefault();
                            const id = item.href.replace("#", "");
                            const el = document.getElementById(id);
                            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                          }
                          setOpen(false);
                        }}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900 border border-border shadow-sm"
                      >
                        <div className="h-4 w-4">{item.icon}</div>
                      </a>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800 border border-border shadow-sm"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: FloatingDockItem[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-14 items-end gap-2.5 rounded-xl bg-gray-50 px-3 pb-2 md:flex dark:bg-neutral-900 border dark:border-neutral-800 shadow-lg",
        className
      )}
    >
      {items.map((item, idx) => {
        const showSeparatorBefore =
          item.title === "GitHub" || item.title === "Toggle theme";
        return (
          <div key={item.title} className="flex items-end gap-2.5">
            {showSeparatorBefore && (
              <div className="h-8 w-px bg-gray-200 dark:bg-neutral-700 self-center mb-1.5 shrink-0" />
            )}
            <IconContainer mouseX={mouseX} {...item} />
          </div>
        );
      })}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  onClick,
  external,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  onClick?: () => void;
  external?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [34, 58, 34]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [34, 58, 34]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [16, 28, 16]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [16, 28, 16]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
      return;
    }
    if (!external && href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    onClick || (!external && href.startsWith("#")) ? (
      <a href={href} onClick={handleClick}>
        {children}
      </a>
    ) : (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );

  return (
    <Wrapper>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Wrapper>
  );
}
