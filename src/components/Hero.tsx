import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { fadeInUp, fadeInDown, fadeIn } from '../utils/animations';
import StarsBackground from './StarsBackground';
import { PopupButton } from 'react-calendly';



const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <StarsBackground />


      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          <motion.h1

            variants={fadeInDown}
            initial="hidden"
            animate="visible"
            className="font-bold mb-6 text-6xl text-gradient bg-gradient-to-r from-purple-300 via-gray-100 to-purple-400 bg-clip-text text-transparent leading-[1.2]"
          >

            Transforming Ideas Into <br />

            Digital Excellence
          </motion.h1>



          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl mb-8 max-w-2xl mt-6"
          >
            We craft cutting-edge web applications, develop custom software solutions,
            build AI-powered systems, and deliver data-driven business insights.
          </motion.p>


          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >

            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="btn-outline cursor-pointer"
            >
              Explore Services
            </Link>
            <Link
              to="#"
              // spy={true}
              // smooth={true}
              // offset={-100}
              // duration={500}
              className="btn-primary cursor-pointer"
            >
              <PopupButton
                url="https://calendly.com/vanshnawander"
                /*
                 * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                 * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                 */
                rootElement={document.getElementById("root")!}
                text="Book a Call"
              /> <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 w-full"
          >
            <div className="text-center">
              <p className="text-5xl md:text-5xl font-bold text-primary-500 dark:text-primary-200">50+</p>
              {/* <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 via-gray-100 to-purple-400 bg-clip-text text-transparent leading-[1.2] inline-block">50+</p> */}
              <p className="text-md">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-5xl font-bold text-primary-500 dark:text-primary-200">15+</p>
              {/* <p className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 via-gray-100 to-purple-400 bg-clip-text text-transparent leading-[1.2] inline-block">15+</p> */}
              <p className="text-md">Technologies</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-5xl font-bold text-primary-500 dark:text-primary-200">30+</p>
              {/* <p className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 via-gray-100 to-purple-400 bg-clip-text text-transparent leading-[1.2] inline-block">30+</p> */}
              <p className="text-md">Happy Clients</p>
            </div>
            {/* <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400">3+</p>
              <p className="text-sm">Years Experience</p>
            </div> */}
          </motion.div>

        </div>

        {/* Scroll down indicator */}
        {/* <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;