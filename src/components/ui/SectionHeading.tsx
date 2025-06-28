import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { fadeInUp } from '../../utils/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div className={cn(
      'mb-12',
      centered && 'text-center',
      className
    )}>
      <motion.h2 
        variants={fadeInUp}
        className="text-3xl font-bold md:text-4xl mb-4"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          variants={fadeInUp}
          className="dark:white max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        variants={fadeInUp}
        className={cn(
          'h-1 w-16 bg-primary-400 mt-4',
          centered && 'mx-auto'
        )}
      />
    </div>
  );
};

export default SectionHeading;