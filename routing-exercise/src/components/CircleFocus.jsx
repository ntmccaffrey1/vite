import { useEffect, useRef } from 'react';
import './CircleFocus.css';

const CircleFocus = () => {
  const circleRef = useRef(null);

  useEffect(() => {
    const handleMouseDown = (e) => {
      const link = e.target.closest('a, button');
      if (!link) return;

      const circle = document.createElement('div');
      circle.className = 'circle';
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
      document.body.appendChild(circle);
      circleRef.current = circle;
    };

    const handleMouseUp = () => {
      if (circleRef.current) {
        setTimeout(() => {
          circleRef.current?.remove();
          circleRef.current = null;
        }, 0);
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseUp);
    };
  }, []);

  return null;
};

export default CircleFocus;