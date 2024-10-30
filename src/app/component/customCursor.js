'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    let cursorX = 0, cursorY = 0, mouseX = 0, mouseY = 0;

    // Update cursor position based on mouse movement
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsHidden(false); // Ensure cursor shows when mouse moves within the viewport
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

    // Hide cursor on interactive elements
    const handleMouseEnterInteractive = () => setIsHidden(true);
    const handleMouseLeaveInteractive = () => setIsHidden(false);

    // Select all elements that should hide the custom cursor
    const pointerElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, label'
    );

    pointerElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive);
      el.addEventListener('mouseleave', handleMouseLeaveInteractive);
    });

    // Hide cursor when leaving the viewport
    const handleMouseLeaveViewport = (e) => {
      if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    document.addEventListener('mouseout', handleMouseLeaveViewport);

    // Cleanup event listeners
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseLeaveViewport);
      pointerElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className={`pointer-events-none fixed top-0 left-0 z-50 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${
        isHidden ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ width: '22px', height: '22px' }}
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
          stroke="#ffffff" // White stroke color
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
