import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FadeInSection = ({ children }) => {
  const control = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          control.start('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [control]);

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={control} variants={variants}>
      {children}
    </motion.div>
  );
};

export default FadeInSection;
