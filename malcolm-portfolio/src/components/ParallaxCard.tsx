import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ParallaxCard.css';

const ParallaxCard: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <motion.div className="parallax-card" style={{ y }}>
      {/* Card content */}
    </motion.div>
  );
};

export default ParallaxCard;
