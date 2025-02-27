// src/main.tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/global.css';
import Lenis from '@studio-freight/lenis';
import { Provider } from 'react-redux';
import store from './store';

const container = document.getElementById('root');


const Main: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // smooth: true,
      // direction: 'vertical',
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
