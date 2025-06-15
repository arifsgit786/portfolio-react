import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ABOUT_TEXT } from "../constants";
import aboutVideo from "../assets/assets/Frontend.mp4";

const About = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate video container only
      gsap.from(containerRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        {/* Video Section */}
        <div
          ref={containerRef}
          className="w-full lg:w-1/2 p-8 flex items-center justify-center"
        >
          <video
            ref={videoRef}
            src={aboutVideo}
            className="rounded-2xl shadow-lg w-full max-w-md"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
