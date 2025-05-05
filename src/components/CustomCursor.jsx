import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let mouseX = 0;
    let mouseY = 0;

    let posX = 0;
    let posY = 0;

    const updatePosition = () => {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      gsap.set(follower, {
        x: posX - 12,
        y: posY - 12,
      });

      gsap.set(cursor, {
        x: mouseX - 6,
        y: mouseY - 6,
      });

      requestAnimationFrame(updatePosition);
    };

    const mouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    updatePosition();
    window.addEventListener("mousemove", mouseMove);

    const hoverTargets = document.querySelectorAll("a, button, .cursor-hover");

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(follower, { scale: 1.1, backgroundColor: "00FFFFFF" });
        gsap.to(cursor, { scale: 0, opacity: 0 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(follower, { scale: 1, backgroundColor: "#4E2DB3" });
        gsap.to(cursor, { scale: 1, opacity: 1 });
      });
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={followerRef}
        className="hidden md:block fixed top-0 left-0 w-6 h-6 rounded-full bg-[#4E2DB3] pointer-events-none z-[9999]"
      ></div>
      <div
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 w-3 h-3 rounded-full bg-[#394BE4] pointer-events-none z-[9999]"
      ></div>
    </>
  );
};

export default CustomCursor;
