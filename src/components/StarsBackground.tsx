import React, { useRef, useEffect } from 'react';

const StarsBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  <canvas
  ref={canvasRef}
  className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
/>


  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let stars: any[] = [];
    const numStars = 40;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStar = () => {
      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.max(canvas.width, canvas.height) / 2 + 100;
      return {
        x: canvas.width / 2 + radius * Math.cos(angle),
        y: canvas.height / 2 + radius * Math.sin(angle),
        speed: 0.3 + Math.random() * 1.0,

      };
    };

    const createStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push(createStar());
      }
    };

    const moveStars = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)'; // slight trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        const dx = canvas.width / 2 - star.x;
        const dy = canvas.height / 2 - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const moveX = (dx / dist) * star.speed;
        const moveY = (dy / dist) * star.speed;

        star.x += moveX;
        star.y += moveY;

        // Glow effect
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(200,150,255,0.6)';
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Remove if close to center
        if (dist < 300) {
          stars[i] = createStar();
        }
      }
    };

    const animate = () => {
      moveStars();
      requestAnimationFrame(animate);
    };

    resize();
    createStars();
    animate();

    window.addEventListener('resize', () => {
      resize();
      createStars();
    });

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
    />
  );
};

export default StarsBackground;
