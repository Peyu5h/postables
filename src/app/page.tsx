import Image from "next/image";
import TweetCircle from "~/utils/icons/tweetCircle";
import { GoPaste } from "react-icons/go";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <section className="mx-auto mt-6 flex w-full max-w-6xl flex-col gap-8 px-4 pb-7 pt-6 text-center md:mt-0 md:py-24">
        <div className="text-primaryForeground mx-auto w-full max-w-5xl text-balance px-8 text-center font-aspekta text-[30px] font-bold leading-[32px] tracking-[-1.4px] md:px-0 md:text-[80px] md:leading-[80px]">
          Convert
          <div className="relative inline-block">
            <TweetCircle className="absolute left-[55%] top-1/2 z-10 w-[100%] -translate-x-1/2 -translate-y-1/2" />
            <span className="relative z-10">&nbsp;Tweets</span>
          </div>
          into Engaging Social Media Posts, Instantly!
        </div>
        <p className="mx-auto hidden max-w-72 text-balance px-8 font-sans text-sm font-medium text-neutral-900 sm:block md:mt-4 md:max-w-fit md:text-xl">
          Paste your tweet link below to get started for FREE
        </p>

        <div className="inputBar md:pt-4">
          <div className="mx-auto hidden max-w-xl items-center gap-1 rounded-2xl border-[1.5px] border-neutral-100 bg-background pl-5 pr-3 shadow-lg duration-150 focus-within:border-neutral-200 sm:flex lg:max-w-3xl">
            <input
              className="text-md flex-1 py-5 font-normal text-foreground placeholder-muted focus-visible:outline-none"
              placeholder="Paste tweet link here..."
              type="url"
            />
            <button className="relative inline-flex h-10 items-center justify-center gap-1.5 rounded-[8px] bg-secondary px-4 text-foreground">
              <span className="font- text-sm">Paste</span>
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
      <div className="h-48"></div>
      <div className="h-48"></div>
      <div className="h-48"></div>
      <div className="h-48"></div>
      <div className="h-48"></div>
      <div className="h-48"></div>
      <div className="h-48"></div>
      <div className="h-48"></div>
      <div className="h-48"></div>
      <div className="h-48"></div>
      <div className="h-48"></div>
      <div className="h-48"></div>
      <div className="h-48"></div>
    </div>
  );
}
