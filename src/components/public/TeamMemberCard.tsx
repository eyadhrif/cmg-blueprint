'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TeamMember {
  name: string;
  role?: string;
  photo?: string;
  description?: string;
  email?: string;
  linkedin?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  onOpen: (member: TeamMember) => void;
}

const CARD_WIDTH = 208;
const CARD_HEIGHT = 277;

export function TeamMemberCard({ member, index, onOpen }: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const scale = useMotionValue(1);
  const y = useMotionValue(0);
  const boxShadow = useMotionValue(0);
  
  const springScale = useSpring(scale, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const springShadow = useSpring(boxShadow, { stiffness: 300, damping: 30 });

  const transform = useTransform(
    [springScale, springY],
    ([s, yVal]) => `scale(${s}) translateY(${yVal}px)`
  );

  const shadow = useTransform(
    springShadow,
    (v) => v > 0.5
      ? '0 20px 60px -20px rgba(168, 24, 40, 0.25), 0 8px 30px -10px rgba(10, 10, 10, 0.1)'
      : '0 2px 8px rgba(10, 10, 10, 0.06)'
  );

  const imageScale = useTransform(
    springScale,
    (s) => `scale(${1 + (s - 1) * 0.5})`
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
    scale.set(1.03);
    y.set(-6);
    boxShadow.set(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    scale.set(1);
    y.set(0);
    boxShadow.set(0);
  };

  const handleClick = () => {
    setIsSelected(true);
    onOpen(member);
  };

  useEffect(() => {
    if (!isSelected) return;
    const timer = setTimeout(() => setIsSelected(false), 600);
    return () => clearTimeout(timer);
  }, [isSelected]);

  return (
    <motion.div
      ref={cardRef}
      className="group flex flex-col items-center text-center cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
      style={{
        transform,
        zIndex: isHovered ? 10 : 1,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        className="relative rounded-2xl overflow-hidden bg-[#F0F0F0] shadow-soft ring-1 ring-black/[0.06] transition-all duration-500 group-hover:-translate-y-1.5"
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          perspective: '1200px',
        }}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-[position:50%_8%]"
          style={{
            backgroundImage: member.photo ? `url(${member.photo})` : undefined,
            backgroundSize: '115%',
            transform: imageScale,
          }}
        />
        {!member.photo && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#F2F2F2] to-[#E5E5E5]">
            <span className="font-serif text-5xl text-accent/40 select-none">
              {member.name.split(' ').map((n) => n[0]).join('')}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {isHovered && (
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: 'inset 0 0 0 1px rgba(168, 24, 40, 0.3), 0 0 40px rgba(168, 24, 40, 0.15)',
            }}
          />
        )}

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1.5 py-3 bg-gradient-to-t from-black/60 to-transparent text-white/90 text-[11px] tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>Voir le profil</span>
        </div>
      </div>

      <h3 className="font-serif text-lg lg:text-xl text-text-dark mt-4 group-hover:text-accent transition-colors duration-300">
        {member.name}
      </h3>
      {member.role && (
        <p className="text-[11px] tracking-[0.2em] uppercase text-text-dark-muted mt-1.5">
          {member.role}
        </p>
      )}
    </motion.div>
  );
}