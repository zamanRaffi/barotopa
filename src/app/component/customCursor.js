'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // `sm` breakpoint: less than 640px
    };

    updateScreenSize(); // Check on mount
    window.addEventListener('resize', updateScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setIsHidden(true); // Hide cursor on small screens
      return;
    }

    const cursor = document.getElementById('custom-cursor');
    let cursorX = 0,
      cursorY = 0,
      mouseX = 0,
      mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    document.addEventListener('mousemove', handleMouseMove);

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 1;
      cursorY += (mouseY - cursorY) * 1;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    const handleMouseEnter = () => setIsHidden(true);
    const handleMouseLeave = () => setIsHidden(false);

    const pointerElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, label, [data-nextjs-link]'
    );

    pointerElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    const handleMouseLeaveViewport = (e) => {
      if (
        e.clientY <= 0 ||
        e.clientX <= 0 ||
        e.clientX >= window.innerWidth ||
        e.clientY >= window.innerHeight
      ) {
        setIsHidden(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeaveViewport);
    document.addEventListener('mouseenter', () => setIsHidden(false));

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveViewport);
      document.removeEventListener('mouseenter', () => setIsHidden(false));
      pointerElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMobile]);

  if (isMobile) return null; // Do not render on small screens

  return (
    <div
      id="custom-cursor"
      className={`pointer-events-none fixed top-0 left-0 z-50 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${
        isHidden ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ width: '22px', height: '22px' }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 21L4 4L21 11L14.7353 13.6849C14.2633 13.8872 13.8872 14.2633 13.6849 14.7353L11 21Z"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          style={{ fill: '#000' }}
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
