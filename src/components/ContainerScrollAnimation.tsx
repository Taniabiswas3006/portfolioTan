"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress starting only when the section enters the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // starts when bottom of viewport hits section top, ends when section leaves top
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Card starts tilted (rotateX 25°) and flattens to 0° as you scroll through it
  // Animation is most visible between 20%–60% scroll through the section
  const rotate = useTransform(scrollYProgress, [0.1, 0.55], [25, 0]);

  // Slightly scale up as it flattens
  const scale = useTransform(
    scrollYProgress,
    [0.1, 0.55],
    isMobile ? [0.75, 1] : [0.82, 1]
  );

  // Title slides up slightly as card comes in
  const translate = useTransform(scrollYProgress, [0.1, 0.55], [60, 0]);

  // Opacity fades in
  const opacity = useTransform(scrollYProgress, [0.08, 0.25], [0, 1]);

  return (
    <div
      className="min-h-[30rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: isMobile ? "800px" : "1200px",
        }}
      >
        <Header translate={translate} opacity={opacity} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale} opacity={opacity} isMobile={isMobile}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  opacity,
  titleComponent,
}: {
  translate: MotionValue<number>;
  opacity: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
        opacity,
      }}
      className="max-w-5xl mx-auto text-center mb-10 md:mb-4 px-4"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  opacity,
  children,
  isMobile,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  opacity: MotionValue<number>;
  children: React.ReactNode;
  isMobile: boolean;
}) => {
  return (
    <motion.div
      style={{
        rotateX: isMobile ? 0 : rotate, // Disable 3D rotation on mobile to prevent clipping issues
        scale,
        opacity,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
        transformOrigin: "center top",
      }}
      className="max-w-5xl mt-12 md:mt-48 mx-auto h-auto min-h-[25rem] md:h-[45rem] w-full border-2 border-[#FF85A1]/20 p-2 md:p-6 bg-[#0B0A10] rounded-[30px] shadow-2xl relative z-10"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-[#0B0A10] md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
