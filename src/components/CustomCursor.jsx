import { useRef, useEffect } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  // Hide cursor on mobile devices
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) return null;

  // Cursor tracking logic
  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Position the main cursor dot
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }

      // Position the outer cursor border with some lag
      if (cursorBorderRef.current) {
        cursorBorderRef.current.animate(
          [
            { transform: `translate3d(${clientX}px, ${clientY}px, 0)` }
          ],
          { duration: 300, fill: "forwards" }
        );
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[8px] h-[8px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"
      />
      
      {/* Cursor Border */}
      <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[32px] h-[32px] border border-white rounded-full pointer-events-none z-[999] mix-blend-difference opacity-50"
      />
    </>
  );
};

export default CustomCursor;
