import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = [];
    const particleCount = 80; // Number of particles
    const connectionDistance = 150; // Distance to connect particles
    const mouseValues = { x: null, y: null, radius: 200 };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5; // Slight movement
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction
        if (mouseValues.x != null) {
          const dx = mouseValues.x - this.x;
          const dy = mouseValues.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouseValues.radius) {
             const forceDirectionX = dx / distance;
             const forceDirectionY = dy / distance;
             const force = (mouseValues.radius - distance) / mouseValues.radius;
             const directionX = forceDirectionX * force * 3; // Push strength
             const directionY = forceDirectionY * force * 3;
             
             // Gentle push away from mouse
             this.x -= directionX;
             this.y -= directionY;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.5)'; // Cyan particles
        ctx.fill();
      }
    }

    const init = () => {
        particles.length = 0;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Connect particles
        for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0, 240, 255, ${1 - distance / connectionDistance})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
        mouseValues.x = e.x;
        mouseValues.y = e.y;
    }
    
    const handleMouseLeave = () => {
        mouseValues.x = null;
        mouseValues.y = null;
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Behind everything
        background: 'transparent', // Let CSS background show through
        pointerEvents: 'none' // Don't block clicks
      }}
    />
  );
};

export default AnimatedBackground;
