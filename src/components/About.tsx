import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Linkedin, 
  Twitter, 
  Github,
  ArrowUpRight 
} from 'lucide-react';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import { TeamMember } from '../types';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../utils/animations';
import { Link } from 'react-scroll';

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Vansh Nawander',
    role: 'CEO & AI Specialist',
    bio: 'Full-stack developer passionate about building innovative web applications and leading technical teams.',
    imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/',
      github: 'https://github.com/'
    }
  },
  {
    id: 2,
    name: 'Siddhesh Pardeshi',
    role: 'CTO & Lead Developer',
    bio: 'Frontend expert with a keen eye for design and user experience, specializing in modern web technologies.',
    imageUrl: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/'
    }
  },
  {
    id: 3,
    name: 'Lipika Arya',
    role: 'COO & Machine Learning Expert',
    bio: 'Business strategist focused on optimizing operations and driving growth through data-driven decisions.',
    imageUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
    socialLinks: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  }
];

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id="about">
      <SectionHeading
        title="About Us"
        subtitle="We're a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences."
      />
      
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          ref={ref}
          variants={fadeInLeft}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="mb-6">
            At MVP Makers, we're on a mission to help businesses thrive in the digital age by providing innovative, scalable, and user-centered technology solutions. We believe that technology should empower, not complicate.
          </p>
          
          <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
          <p className="mb-6">
            We take a collaborative, agile approach to every project. We begin by understanding your business goals, then craft customized solutions that deliver measurable results. Our process emphasizes transparent communication, iterative development, and continuous improvement.
          </p>
          
          <div className="flex space-x-4 mt-8">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="btn-primary cursor-pointer"
            >
              Our Work
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="btn-outline cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          <div className="aspect-video bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg overflow-hidden relative">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Team collaboration" 
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800/50 p-6 rounded-lg shadow-lg max-w-xs">
            <p className="text-lg font-semibold mb-2">Growing Fast</p>
            <p>
              Founded in 2024, we're rapidly expanding our team and client base.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Team Section */}
      <div className="mt-24">
        <h3 className="text-2xl font-bold text-center mb-12">Meet Our Founders</h3>
        
        <motion.div
          ref={teamRef}
          variants={staggerContainer}
          initial="hidden"
          animate={teamInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={fadeInUp}
              className="card group overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-primary-500 dark:text-primary-400 mb-3">{member.role}</p>
              <p className="text-sm mb-4">{member.bio}</p>
              
              <div className="flex space-x-3 mt-auto">
                {member.socialLinks.linkedin && (
                  <a 
                    href={member.socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                
                {member.socialLinks.twitter && (
                  <a 
                    href={member.socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                )}
                
                {member.socialLinks.github && (
                  <a 
                    href={member.socialLinks.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Hiring Banner */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={teamInView ? 'visible' : 'hidden'}
          className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            We're looking for talented individuals to join our growing team. Check out our current openings.
          </p>
          <Link
            to="careers"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="inline-flex items-center px-6 py-3 bg-white text-primary-500 rounded-md font-medium hover:bg-slate-100 transition-colors cursor-pointer"
          >
            View Openings <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;