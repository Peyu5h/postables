"use client";

import Image from "next/image";
import TweetCircle from "~/utils/icons/tweetCircle";
import { GoPaste } from "react-icons/go";
import Navbar from "./components/Navbar";
import PostpreviewSection from "./components/postPreview/PostpreviewSection";
import HoverCard from "./components/HoverCard";

import Button from "./components/Button";

import { FAQ } from "./components/FAQ";
import Footer from "./components/footer/Footer";

import TabSection from "./components/tabsSection/TabSection";
import OurFeatures from "./components/ourFeatures/OurFeatures";
import FadedSocials from "./components/fadedSocials/FadedSocials";
import MagneticBtn from "./components/MagnetEffect";
import { FaArrowRightLong } from "react-icons/fa6";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="">
      <Navbar />
      <section className="mx-auto mt-6 flex w-full max-w-6xl flex-col gap-8 px-4 pb-7 pt-6 text-center md:mt-0 md:py-24">
        <div className="mx-auto w-full max-w-5xl text-balance px-8 text-center font-aspekta text-[30px] font-bold leading-[32px] tracking-[-1.4px] text-primaryForeground md:px-0 md:text-[80px] md:leading-[80px]">
          Convert
          <div className="relative inline-block">
            <TweetCircle className="absolute left-[55%] top-1/2 z-10 w-[100%] -translate-x-1/2 -translate-y-1/2" />
            <span className="relative z-10">&nbsp;Tweets</span>
          </div>
          into Engaging Social Media Posts, Instantly!
        </div>
        <p className="mx-auto hidden max-w-72 text-balance px-8 font-sans text-sm font-medium text-foreground sm:block md:mt-4 md:max-w-fit md:text-xl">
          Paste your tweet link below to get started for FREE
        </p>

        <div className="inputBar md:pt-4">
          <div className="mx-auto hidden max-w-xl items-center gap-1 rounded-2xl border-[1.5px] border-graySecondary bg-background pl-5 pr-3 shadow-lg duration-150 focus-within:border-neutral-200 sm:flex lg:max-w-3xl">
            <input
              className="text-md flex-1 py-5 font-normal text-foreground placeholder-muted focus-visible:outline-none"
              placeholder="Paste tweet link here..."
              type="url"
            />
            <button className="relative inline-flex h-10 items-center justify-center gap-1.5 rounded-[8px] bg-[#F2F2F2] px-4 text-foreground duration-150 hover:bg-[#E6E6E6]">
              <span className="font-sans text-sm">Paste</span>
              <span>
                <GoPaste className="text-xs" />
              </span>
            </button>
          </div>
          <p className="mb-0.5 mt-4 text-sm font-medium text-neutral-400">
            No signup, no credit card, no crap!
          </p>

          <div className="group mx-auto -mb-24 mt-6 hidden w-fit origin-top scale-[0.6] flex-col items-center justify-center gap-4 rounded-[42px] bg-transparent px-4 py-6 transition-colors hover:bg-[#F9F4FE] sm:flex md:-mb-48">
            <span className="bg-gradient-to-r from-purple to-pink-500 bg-clip-text text-xl font-medium italic text-transparent [text-shadow:0_0_1px_rgba(0,0,0,0.1)]">
              Try sample tweet
            </span>
            <div className="max-w-96 origin-top -rotate-3 scale-90 cursor-pointer rounded-3xl p-1 drop-shadow-xl transition-transform group-hover:rotate-0">
              <Image
                src="https://res.cloudinary.com/dkysrpdi6/image/upload/v1729081341/tweet_k6rnkb.png"
                alt="sample"
                width={300}
                height={300}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      <PostpreviewSection />

      <section className="mx-auto flex h-fit w-full max-w-6xl flex-col gap-3.5 py-12 md:gap-8 md:py-24">
        <div className="px-4 font-aspekta text-2xl font-medium tracking-[-0.2px] text-foreground md:text-4xl xl:pe-4 xl:ps-0">
          How it works
        </div>
        <div className="flex gap-4 overflow-y-visible overflow-x-scroll px-4 pb-4 md:overflow-x-visible lg:pb-4 lg:pe-4 lg:ps-0">
          <HoverCard />
          <HoverCard />
          <HoverCard />
        </div>
      </section>

      <FadedSocials />

      <div className="relative mx-auto mt-8 flex w-full max-w-6xl flex-col items-start gap-6 py-12 font-aspekta md:mt-0 md:gap-12 md:py-24">
        <p className="relative max-w-4xl text-balance font-aspekta text-3xl font-medium tracking-[-0.4px] text-muted md:text-[40px] md:leading-[42px]">
          We help you create postable content that not only
          <span className="text-foreground"> looks great </span>but also
          <span className="text-foreground"> engages your audience</span>.
        </p>

        <Button>Get Started for FREE</Button>
      </div>

      <OurFeatures />

      <TabSection />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-12 md:gap-12 md:py-24 xl:pe-4 xl:ps-0">
        <p className="relative max-w-4xl text-balance font-aspekta text-3xl font-medium tracking-[-0.4px] text-muted md:text-[40px] md:leading-[42px]">
          <span className="text-foreground">
            Grow your audience with powerful visuals
          </span>
          shared across all your social media platforms.
        </p>
        <Button>Get Started for FREE</Button>
      </div>

      <div className="relative py-12 md:py-24">
        <Image
          width={1920}
          height={1080}
          src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1726913723/engaging_uhqrqs.webp"
          alt="Engaging"
          className="w-full"
          draggable="false"
        />
      </div>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 md:py-24 xl:pe-4 xl:ps-0">
        <h3 className="text-2xl font-medium tracking-[-0.2px] md:text-[40px] md:leading-[42px] md:tracking-[-1px]">
          FAQ
        </h3>
        <p className="hidden max-w-lg text-balance text-xl font-medium text-black md:mb-9 md:mt-4 md:block">
          Let’s help you with some of your frequently asked questions.
        </p>

        <div className="relative flex w-full flex-col gap-4 md:flex-row md:gap-24">
          <div className="max-w-sm">
            <div className="hidden w-max flex-col md:flex">
              <span className="text-lg font-medium text-mutedGray">
                Couldn&apos;t find your answer?
              </span>
              <span className="cursor-pointer font-medium text-purple">
                Contact us
              </span>
            </div>
          </div>

          <div className="w-full md:ms-auto md:max-w-xl">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <FAQ />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 w-full overflow-hidden rounded-[64px] bg-blackBg">
        <div className="mt-12 flex flex-col items-center md:mt-28">
          <h1 className="mb-4 text-3xl tracking-[-0.2px] text-white md:mb-6 md:text-[60px] md:font-[850] md:leading-[54px] md:tracking-[-1px]">
            One-Click to Create
          </h1>
          <p className="text-md md:text-md max-w-md text-balance text-center font-normal leading-relaxed text-blackFg md:max-w-2xl">
            Postable is built with simplicity and fun at its core. No design
            skills? No problem. We handle the heavy lifting so you can
            effortlessly create stunning posts.
          </p>
          <div className="my-8 md:mt-12">
            <MagneticBtn>
              <button className="text-md md:text-md relative inline-flex w-fit items-center justify-center gap-1 whitespace-nowrap rounded-xl bg-blackPri px-4 py-2.5 font-semibold text-blackFg transition-colors md:px-6 md:py-3">
                Get Started for FREE <FaArrowRightLong className="ml-2" />
              </button>
            </MagneticBtn>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-7xl">
          <Image
            src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727020129/app-screenshot_uficxp.webp"
            alt="Last Section"
            width={1920}
            height={1080}
            className="w-full"
          />
        </div>
      </section>

      <footer
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dkysrpdi6/image/upload/v1729080818/postable/footer-background_nfg8rf_gcyxft.webp')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        className="relative -mt-16 h-full bg-cover bg-center"
      >
        <Footer />
      </footer>
    </div>
  );
}
