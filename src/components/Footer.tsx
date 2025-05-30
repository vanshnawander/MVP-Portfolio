import React from 'react';
import { Link } from 'react-scroll';
import { 
  Laptop2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram, 
  ArrowUpCircle 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Laptop2 className="h-8 w-8 text-primary-400 mr-2" />
              <span className="text-xl font-bold">MVP Makers</span>
            </div>
            <p className="text-slate-400">
              Transforming ideas into digital excellence with cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                  AI Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Business Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-slate-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-slate-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="careers"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-slate-400 hover:text-primary-400 transition-colors cursor-pointer"
                >
                  Careers
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-slate-400">
                Hyderabad, Telangana, India <br />
                
              </li>
              <li>
                <a 
                  href="mailto:info@mvpmakers.com" 
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                >
                  info@mvpmakers.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+14155550123" 
                  className="text-slate-400 hover:text-primary-400 transition-colors"
                >
                  +91 8125544202
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} MVP Makers. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              className="flex items-center text-slate-400 hover:text-primary-400 transition-colors cursor-pointer"
            >
              <span className="mr-2">Back to Top</span>
              <ArrowUpCircle className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer