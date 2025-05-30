import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code,
  MapPin, 
  Clock, 
  CheckCircle, 
  List, 
  ArrowUpRight 
} from 'lucide-react';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import { JobPosition } from '../types';
import { staggerContainer, fadeInUp } from '../utils/animations';
import { cn } from '../utils/cn';

const jobs: JobPosition[] = [
  {
    id: 1,
    title: 'Frontend Development Intern',
    type: 'Internship',
    location: 'Remote',
    description: 'Join our team as a Frontend Development Intern to gain hands-on experience in building modern web applications.',
    requirements: [
      'Currently pursuing a degree in Computer Science or related field',
      'Basic knowledge of HTML, CSS, and JavaScript',
      'Familiarity with React or similar frameworks',
      'Strong problem-solving skills',
      'Ability to work independently'
    ],
    responsibilities: [
      'Assist in developing user interfaces',
      'Implement responsive designs',
      'Write clean and maintainable code',
      'Collaborate with senior developers',
      'Learn modern development practices'
    ]
  }
];

const Careers: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleJob = (id: number) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <Section id="careers">
      <SectionHeading
        title="Careers"
        subtitle="Join our dynamic team and gain valuable experience while working on real-world projects."
      />
      
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mt-12 space-y-6"
      >
        {jobs.map((job) => (
          <motion.div
            key={job.id}
            variants={fadeInUp}
            className={cn(
              'bg-white dark:bg-slate-800/50 rounded-lg overflow-hidden transition-all duration-300 border border-transparent',
              expandedJob === job.id ? 'border-primary-500 shadow-lg' : 'shadow hover:shadow-md'
            )}
          >
            <div 
              className="p-6 cursor-pointer"
              onClick={() => toggleJob(job.id)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary-100 text-secondary-700 dark:bg-secondary-900/50 dark:text-secondary-300">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" /> {job.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" /> Flexible Hours
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open('mailto:careers@mvpmakers.in?subject=Application for ' + job.title, '_blank');
                    }}
                    className="btn-primary"
                  >
                    Apply Now <ArrowUpRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 mt-4">
                {job.description}
              </p>
              
              <div className="flex justify-center mt-4">
                <button 
                  className="flex items-center text-sm text-primary-500 dark:text-primary-400"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleJob(job.id);
                  }}
                >
                  {expandedJob === job.id ? 'Show Less' : 'Show More'} 
                  <span className={cn(
                    'inline-block ml-1 transition-transform',
                    expandedJob === job.id ? 'rotate-180' : ''
                  )}>
                    ▼
                  </span>
                </button>
              </div>
            </div>
            
            {expandedJob === job.id && (
              <div className="px-6 pb-6 pt-2 border-t dark:border-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="flex items-center text-lg font-semibold mb-4">
                      <CheckCircle className="h-5 w-5 mr-2 text-primary-500" /> Requirements
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="flex items-center text-lg font-semibold mb-4">
                      <List className="h-5 w-5 mr-2 text-primary-500" /> Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-500 mt-2 mr-2"></span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t dark:border-slate-700">
                  <h4 className="text-lg font-semibold mb-2">How to Apply</h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Send your resume and a brief cover letter to <a href="mailto:careers@mvpmakers.in" className="text-primary-500 dark:text-primary-400 hover:underline">careers@mvpmakers.in</a> with the subject line "Application for {job.title}". Please include links to your portfolio or GitHub profile if applicable.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
      
      {/* General Application */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mt-12 bg-white dark:bg-slate-800/50 rounded-lg p-8 shadow text-center"
      >
        <h3 className="text-xl font-semibold mb-4">Don't see a position that fits your skills?</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
          We're always looking for talented individuals to join our team. Send us your resume and tell us how you can contribute to MVP Makers.
        </p>
        <a 
          href="mailto:careers@mvpmakers.in?subject=General Application"
          className="btn-outline"
        >
          Send General Application <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </motion.div>
    </Section>
  );
};

export default Careers;