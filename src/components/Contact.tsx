import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle 
} from 'lucide-react';
import Section from './ui/Section';
import SectionHeading from './ui/SectionHeading';
import { ContactFormData } from '../types';
import { fadeInLeft, fadeInRight } from '../utils/animations';
import { cn } from '../utils/cn';

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData(initialFormData);
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <Section id="contact">
      <SectionHeading
        title="Contact Us"
        subtitle="Have a question or want to work together? Reach out to us and we'll get back to you as soon as possible."
      />
      
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          ref={ref}
          variants={fadeInLeft}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-primary-500 dark:text-primary-400" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p>
                  Hyderabad, Telangana, India
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-primary-500 dark:text-primary-400" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <a 
                  href="mailto:contact@mvpmakers.in" 
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  contact@mvpmakers.in
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-primary-500 dark:text-primary-400" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Phone</h4>
                <a 
                  href="tel:+919876543210" 
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  +91 8125544202
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Business Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <div className="bg-white dark:bg-slate-800/50 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8">
                <div className="bg-success-100 dark:bg-success-900/30 p-3 rounded-full mb-4">
                  <CheckCircle className="h-10 w-10 text-success-500" />
                </div>
                <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                <p>
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={cn(
                      'input',
                      errors.name ? 'border-error-500 focus:ring-error-500' : ''
                    )}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error-500">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                      'input',
                      errors.email ? 'border-error-500 focus:ring-error-500' : ''
                    )}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error-500">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={cn(
                      'input',
                      errors.subject ? 'border-error-500 focus:ring-error-500' : ''
                    )}
                    placeholder="How can we help you?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-error-500">{errors.subject}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={cn(
                      'textarea',
                      errors.message ? 'border-error-500 focus:ring-error-500' : ''
                    )}
                    placeholder="Your message here..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-error-500">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    'btn-primary w-full',
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;