import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const numStars = Math.floor((canvas.width * canvas.height) / 8000);
      stars.length = 0;

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#0f0f23");
      gradient.addColorStop(0.3, "#1a1a2e");
      gradient.addColorStop(0.7, "#16213e");
      gradient.addColorStop(1, "#0f3460");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate stars
      stars.forEach((star) => {
        // Update twinkle
        star.twinklePhase += star.twinkleSpeed;
        const twinkleOpacity = star.opacity + Math.sin(star.twinklePhase) * 0.3;

        // Draw star
        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, twinkleOpacity));
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle glow for larger stars
        if (star.size > 1.5) {
          ctx.globalAlpha = Math.max(0, Math.min(0.3, twinkleOpacity * 0.3));
          ctx.fillStyle = "#a5b4fc";
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        // Move star (slow drift)
        star.y += star.speed;
        if (star.y > canvas.height + star.size) {
          star.y = -star.size;
          star.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
};

export default AnimatedBackground;
