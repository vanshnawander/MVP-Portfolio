import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Terminal, 
  Brain, 
  BarChart4, 
  CheckCircle
} from 'lucide-react';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import { Service } from '../types';
import { staggerContainer, fadeInUp } from '../utils/animations';

const services: Service[] = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Create responsive, user-friendly websites and web applications that engage your audience and drive results.',
    icon: 'Code',
    features: [
      'Responsive design for all devices',
      'Modern frameworks (React, Vue, Angular)',
      'Progressive Web Apps (PWAs)',
      'E-commerce solutions'
    ]
  },
  {
    id: 2,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs, from desktop applications to mobile apps.',
    icon: 'Terminal',
    features: [
      'Custom software architecture',
      'Mobile app development',
      'API development and integration',
      'Database design and optimization'
    ]
  },
  {
    id: 3,
    title: 'AI Automation',
    description: 'Leverage the power of artificial intelligence to automate processes and gain competitive advantages.',
    icon: 'Brain',
    features: [
      'Chatbots and virtual assistants',
      'Process automation',
      'Machine learning models',
      'Natural language processing'
    ]
  },
  {
    id: 4,
    title: 'Business Analytics',
    description: 'Turn your data into actionable insights with our comprehensive business analytics services.',
    icon: 'BarChart4',
    features: [
      'Data visualization dashboards',
      'Predictive analytics',
      'Business intelligence solutions',
      'Performance tracking metrics'
    ]
  }
];

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Code':
      return <Code className="h-10 w-10 text-primary-500 dark:text-primary-400" />;
    case 'Terminal':
      return <Terminal className="h-10 w-10 text-primary-500 dark:text-primary-400" />;
    case 'Brain':
      return <Brain className="h-10 w-10 text-primary-500 dark:text-primary-400" />;
    case 'BarChart4':
      return <BarChart4 className="h-10 w-10 text-primary-500 dark:text-primary-400" />;
    default:
      return <Code className="h-10 w-10 text-primary-500 dark:text-primary-400" />;
  }
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="services">
      <SectionHeading
        
        title="Our Services"
        subtitle="We provide comprehensive digital solutions to help businesses thrive in the digital landscape."
        
      />
      
      
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={fadeInUp}
            className="card group  hover:border-purple-200 hover:border cursor-pointer overflow-hidden"
          >
            <div className="flex flex-col h-full">
              <div className="mb-6 p-3 rounded-full bg-primary-50 dark:bg-primary-300/30 inline-flex">
                {getIconComponent(service.icon)}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400  transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {service.description}
              </p>
              
              <div className="mt-auto">
                <h4 className="font-medium mb-2 text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Features
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-success-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Services;