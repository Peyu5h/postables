import Image from "next/image";
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const HoverCard = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [-10, 10]); // Inverted
  const rotateY = useTransform(x, [-100, 100], [10, -10]); // Inverted

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = (ref.current as HTMLElement).getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    x.set(mouseX - centerX);
    y.set(mouseY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="flex w-fit min-w-72 flex-1 flex-shrink-0 transform-gpu flex-col gap-4 rounded-[32px] bg-graySecondary p-2 transition-all duration-200 ease-out will-change-transform"
      >
        <div className="relative overflow-hidden rounded-3xl bg-neutral-50">
          <Image
            src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726912063/step-1_grbgfh.webp"
            alt="Copy tweet's link"
            width={300}
            height={300}
            className="w-full rounded-3xl transition-transform"
          />
        </div>
        <div className="flex flex-col px-4 pb-2 pt-6 md:px-6 md:pb-8 md:pt-8">
          <span className="md:text-md text-xs font-semibold uppercase text-graySecondaryForegroundMuted">
            Step 1
          </span>
          <h1 className="text-md mb-4 font-medium text-foreground md:mb-5 md:text-lg">
            Copy tweet&apos;s link
          </h1>
          <p className="text-sm text-graySecondaryForeground">
            On X/Twitter, click the share icon at the bottom-right of the tweet
            and select &apos;Copy Link.&apos; Then, paste the link into the box
            above.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HoverCard;
