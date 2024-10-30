'use client'

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    let cursorX = 0,
      cursorY = 0,
      mouseX = 0,
      mouseY = 0;

    // Update cursor position based on mouse movement
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    document.addEventListener('mousemove', handleMouseMove);

    // Smooth cursor movement
    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.35;
      cursorY += (mouseY - cursorY) * 0.35;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Hide cursor on elements with pointer style
    const handleMouseEnter = () => setIsHidden(true);
    const handleMouseLeave = () => setIsHidden(false);

    const pointerElements = document.querySelectorAll('a, button, [role="button"]');
    pointerElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      pointerElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className={`pointer-events-none fixed top-0 left-0 z-50 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${
        isHidden ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ width: '20px', height: '20px' }}
    >
      {/* Inline SVG for the custom cursor with white color */}
      <svg
       width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 21L4 4L21 11L14.7353 13.6849C14.2633 13.8872 13.8872 14.2633 13.6849 14.7353L11 21Z"
        stroke="#ffffff"  // Change the color to white or any other color
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        style={{ fill: '#FFFFFF' }}
      />
    </svg>
    </div>
  );
};

export default CustomCursor;
