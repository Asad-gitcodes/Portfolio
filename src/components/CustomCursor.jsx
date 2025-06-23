import { useRef, useEffect } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  const endX = useRef(0);
  const endY = useRef(0);
  const _x = useRef(0);
  const _y = useRef(0);

  // Mobile check
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
  if (isMobile) return null;

  useEffect(() => {
    const onMouseMove = (e) => {
      const offsetDot = 4;     // half of 8px
      const offsetRing = 18;   // half of 36px

      endX.current = e.clientX - offsetRing;
      endY.current = e.clientY - offsetRing;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - offsetDot}px, ${e.clientY - offsetDot}px, 0)`;
      }
    };

    const render = () => {
      _x.current += (endX.current - _x.current) * 0.1;
      _y.current += (endY.current - _y.current) * 0.1;

      if (cursorBorderRef.current) {
        cursorBorderRef.current.style.transform = `translate3d(${_x.current}px, ${_y.current}px, 0)`;
      }
      requestAnimationFrame(render);
    };

    document.addEventListener('mousemove', onMouseMove);
    requestAnimationFrame(render);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [data-cursor-hover]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorRef.current?.classList.add('scale-150');
        cursorBorderRef.current?.classList.add('scale-125', 'bg-violet-300/10');
      });
      el.addEventListener('mouseleave', () => {
        cursorRef.current?.classList.remove('scale-150');
        cursorBorderRef.current?.classList.remove('scale-125', 'bg-violet-300/10');
      });
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[8px] h-[8px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference transition-transform duration-150 ease-out"
      />
      <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[36px] h-[36px] border border-white rounded-full pointer-events-none z-[998] mix-blend-difference opacity-50 transition-transform duration-200 ease-out"
      />
    </>
  );
};

export default CustomCursor;
