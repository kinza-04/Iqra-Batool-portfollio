import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate a fixed set of particles to avoid hydrate issues or infinite updates
    const colors = [
      'rgba(168, 85, 247, 0.15)', // Purple
      'rgba(236, 72, 153, 0.15)', // Pink
      'rgba(59, 130, 246, 0.15)', // Blue
      'rgba(14, 165, 233, 0.15)', // Sky
    ];
    
    const generatedParticles = Array.from({ length: 18 }).map((_, index) => {
      const size = Math.random() * 200 + 100; // Large soft glow blobs
      return {
        id: index,
        x: Math.random() * 100, // percentage x
        y: Math.random() * 100, // percentage y
        size,
        color: colors[index % colors.length],
        duration: Math.random() * 40 + 20, // 20s to 60s slow drift
        delay: Math.random() * -20, // start immediately
      };
    });
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-950">
      {/* Sleek radial background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Floating Animated Orbs */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-[80px]"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
