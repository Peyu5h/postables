import React from "react";

const Logo = ({ ref }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-neutral-10 size-6"
      ref={ref}
    >
      <path
        d="M22.1513 5.10429C20.7173 2.76204 18.5184 0.945608 15.6026 0.324196C11.6829 -0.584022 7.18959 0.419798 4.27373 3.28785C1.74028 5.7735 0.83206 9.16737 0.927661 12.7046C1.02326 15.2859 1.59687 18.1539 2.55289 20.544C3.17431 22.0258 4.70394 24.4159 6.61597 23.9379C8.19341 23.5555 8.52801 21.022 9.96204 21.022C12.7823 21.022 15.6982 20.9264 18.375 20.0182C21.2909 19.0144 23.0117 16.9589 23.6331 13.8041C24.2545 10.7926 23.6809 7.63774 22.1513 5.10429Z"
        fill="#FAF9F9"
      ></path>
    </svg>
  );
};

export default Logo;
