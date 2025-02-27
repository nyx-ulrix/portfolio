// src/App.tsx
import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import './styles/global.css';

const App: React.FC = () => {
  const { scrollY } = useViewportScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -200]);
  const y3 = useTransform(scrollY, [0, 500], [0, -300]);

  return (
    <div id="root" className="container">
      <section className="section">
        <motion.div className="card" style={{ y: y1 }}>
          Card 1
        </motion.div>
      </section>
      <section className="section">
        <motion.div className="card" style={{ y: y2 }}>
          Card 2
        </motion.div>
      </section>
      <section className="section">
        <motion.div className="card" style={{ y: y3 }}>
          Card 3
        </motion.div>
      </section>
    </div>
  );
};

export default App;
