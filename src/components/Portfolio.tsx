import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import { PortfolioItem } from '../types';
import { staggerContainer, fadeInUp, scaleIn } from '../utils/animations';
import { cn } from '../utils/cn';

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Modern E-Commerce Platform',
    description: 'A sleek e-commerce solution with a focus on user experience and mobile responsiveness.',
    imageUrl: 'https://images.pexels.com/photos/6956892/pexels-photo-6956892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'Portfolio Website Generator',
    description: 'An AI-powered tool that creates personalized portfolio websites for professionals.',
    imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'AI Automation',
    technologies: ['Next.js', 'OpenAI', 'Tailwind CSS', 'Vercel'],
    link: '#'
  },
  {
    id: 3,
    title: 'Business Analytics Dashboard',
    description: 'Interactive dashboard showcasing key business metrics and insights.',
    imageUrl: 'https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Business Analytics',
    technologies: ['React', 'D3.js', 'Firebase', 'Material-UI'],
    link: '#'
  },
  {
    id: 4,
    title: 'Task Management App',
    description: 'A collaborative project management tool with real-time updates and team features.',
    imageUrl: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Software Development',
    technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
    link: '#'
  }
];

const categories = ['All', 'Web Development', 'Software Development', 'AI Automation', 'Business Analytics'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <Section id="portfolio">
      <SectionHeading
        title="Our Portfolio"
        subtitle="Explore our recent projects and see how we're helping businesses transform their digital presence."
      />
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              'px-4 py-2 rounded-full text-sm transition-colors',
              activeCategory === category
                ? 'bg-primary-500 text-white dark:bg-primary-400'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700'
            )}
          >
            {category}
          </button>
        ))}
      </div>
      
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeInUp}
            className="card group overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden rounded-lg mb-4">
              <motion.img 
                variants={scaleIn}
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary-500">{item.category}</span>
                </div>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold group-hover:text-primary-400 transition-colors">
              {item.title}
            </h4>
            
            <p className="text-sm my-3">
              {item.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {item.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {item.link && (
              <a 
                href={item.link} 
                className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:text-primary-200 dark:hover:text-white text-sm font-medium"
              >
                View Project <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Portfolio;