import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '../../utils/cn';
import { fadeIn } from '../../utils/animations';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  className,
  children,
  animate = true,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      className={cn('section-padding', className)}
    >
      {animate ? (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          className="container-custom"
        >
          {children}
        </motion.div>
      ) : (
        <div className="container-custom">{children}</div>
      )}
    </section>
  );
};

export default Section;