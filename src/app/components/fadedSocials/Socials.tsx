import Image from "next/image";
import React, { useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Socials = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const socialCards = gsap.utils.toArray(".social-card");
      socialCards.forEach((card, index) => {
        const currentX = gsap.getProperty(card as gsap.TweenTarget, "x");
        gsap.fromTo(
          card as gsap.TweenTarget,
          { x: (currentX as number) - 100 },
          {
            x: currentX,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
            delay: index * 0.5,
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <div>
      <div className="relative mb-16 overflow-hidden md:mb-32">
        <div
          ref={containerRef}
          className="mx-auto flex w-full max-w-6xl px-4 xl:pe-4 xl:ps-0"
        >
          <div
            className="social-card flex flex-col"
            style={{
              transform: "translateY(120px) rotate(3deg)",
              willChange: "auto",
            }}
          >
            <h4 className="flex items-center gap-2 rounded-t-3xl bg-[#80C0EE] px-4 py-4 text-lg font-medium md:rounded-t-[50px] md:px-12 md:py-8">
              <FaLinkedin className="size-8 text-white" />
              <span className="text-lg font-medium tracking-[-0.5px] text-white md:text-[32px] md:leading-[150%]">
                LinkedIn Post
              </span>
            </h4>
            <div className="relative aspect-square w-64 overflow-hidden md:w-[500px]">
              <Image
                src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-1_tcu61i.webp"
                alt="LinkedIn Post"
                width={500}
                height={500}
                className="object-cover object-left-top"
              />
            </div>
          </div>

          <div
            className="social-card flex flex-col"
            style={{
              transform: "translateY(100px) translateX(-100px) rotate(3deg)",
              willChange: "auto",
            }}
          >
            <h4 className="flex items-center gap-2 rounded-t-3xl bg-[#F6A886] px-4 py-4 text-lg font-medium md:rounded-t-[50px] md:px-12 md:py-8">
              <FaLinkedin className="size-8 text-white" />
              <span className="text-lg font-medium tracking-[-0.5px] text-white md:text-[32px] md:leading-[150%]">
                Instagram Story
              </span>
            </h4>
            <div className="relative aspect-square w-64 overflow-hidden md:w-[500px]">
              <Image
                src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-1_tcu61i.webp"
                alt="LinkedIn Post"
                width={500}
                height={500}
                className="object-cover object-left-top"
              />
            </div>
          </div>

          <div
            className="social-card flex flex-col"
            style={{
              transform: "translateY(80px) translateX(-160px) rotate(3deg)",
              willChange: "auto",
            }}
          >
            <h4 className="flex items-center gap-2 rounded-t-3xl bg-[#77BE7E] px-4 py-4 text-lg font-medium md:rounded-t-[50px] md:px-12 md:py-8">
              <FaLinkedin className="size-8 text-white" />
              <span className="text-lg font-medium tracking-[-0.5px] text-white md:text-[32px] md:leading-[150%]">
                Facebook Post
              </span>
            </h4>
            <div className="relative aspect-square w-64 overflow-hidden md:w-[500px]">
              <Image
                src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-1_tcu61i.webp"
                alt="LinkedIn Post"
                width={500}
                height={500}
                className="object-cover object-left-top"
              />
            </div>
          </div>

          <div
            className="social-card flex flex-col"
            style={{
              transform: "translateY(120px) rotate(3deg)",
              willChange: "auto",
            }}
          >
            <h4 className="flex items-center gap-2 rounded-t-3xl bg-[#80C0EE] px-4 py-4 text-lg font-medium md:rounded-t-[50px] md:px-12 md:py-8">
              <FaLinkedin className="size-8 text-white" />
              <span className="text-lg font-medium tracking-[-0.5px] text-white md:text-[32px] md:leading-[150%]">
                LinkedIn Post
              </span>
            </h4>
            <div className="relative aspect-square w-64 overflow-hidden md:w-[500px]">
              <Image
                src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726028193/textures-1_tcu61i.webp"
                alt="LinkedIn Post"
                width={500}
                height={500}
                className="object-cover object-left-top"
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 translate-y-36 bg-gradient-to-b from-transparent via-white/50 via-50% to-white to-75%"></div>
      </div>
    </div>
  );
};

export default Socials;
