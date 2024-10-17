import Image from "next/image";
import React from "react";

const OurFeatures = () => {
  return (
    <div>
      <section>
        <div className="relative flex w-full flex-col items-start py-12 md:py-24">
          <h1 className="mx-auto w-full max-w-6xl px-4 font-aspekta text-3xl font-medium tracking-[-0.2px] md:mb-2 md:text-[40px] md:leading-[42px] md:tracking-[-1px] xl:pe-4 xl:ps-0">
            Our Features
          </h1>

          <div
            style={{ paddingLeft: 186 }}
            className="scrollbar-hide relative flex w-full gap-4 overflow-x-scroll px-4 pb-4 pt-3 xl:ps-0 xl:pt-4"
          >
            <div className="min-w-72 max-w-fit select-none md:min-w-96">
              <Image
                src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019744/feature-1_zepkcz.webp"
                alt="Feature 1"
                draggable="false"
                width={500}
                height={500}
              />
            </div>
            <div className="min-w-72 max-w-fit select-none md:min-w-96">
              <Image
                src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-2_xfgklf.webp"
                alt="Feature 2"
                draggable="false"
                width={500}
                height={500}
              />
            </div>
            <div className="min-w-72 max-w-fit select-none md:min-w-96">
              <Image
                src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019744/feature-3_ouj8od.webp"
                alt="Feature 1"
                draggable="false"
                width={500}
                height={500}
              />
            </div>
            <div className="min-w-72 max-w-fit select-none md:min-w-96">
              <Image
                src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-4_xaqpz1.webp"
                alt="Feature 2"
                draggable="false"
                width={500}
                height={500}
              />
            </div>
            <div className="min-w-72 max-w-fit select-none md:min-w-96">
              <Image
                src="https://res.cloudinary.com/dzv61qpeu/image/upload/v1727019743/feature-5_ftjick.webp"
                alt="Feature 1"
                draggable="false"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFeatures;
