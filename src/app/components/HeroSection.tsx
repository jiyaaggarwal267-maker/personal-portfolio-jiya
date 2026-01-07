import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 lg:px-32 relative">
      <div className="max-w-7xl w-full">
        {/* Center Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center"
        >
          <h1 className="text-6xl lg:text-8xl font-bold mb-8">
            <span className="text-white block mb-4">Hello, I am</span>
            <motion.span 
              className="text-[#FF6B2C] block"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              JIYA AGRAWAL
            </motion.span>
          </h1>

          <motion.a
            href="#about"
            className="inline-flex items-center gap-2 bg-[#0066FF] text-white px-8 py-4 rounded-sm font-semibold hover:bg-[#0052CC] transition-colors mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            KNOW ME! <ArrowRight className="w-5 h-5" />
          </motion.a>

          {/* Education Info */}
          <div className="mt-20 space-y-8 max-w-3xl mx-auto">
            <div className="relative">
              <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="h-full bg-[#0066FF]"
                />
              </div>
            </div>

            <motion.div 
              className="text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <h3 className="font-bold text-lg mb-3">B. TECH IN ELECTRONICS & COMMUNICATION ENGINEERING</h3>
              <p className="text-gray-400 text-sm lg:text-base">GURU GOBIND SINGH INDRAPRASTHA UNIVERSITY | UNIVERSITY SCHOOL OF INFORMATION, COMMUNICATION AND TECHNOLOGY (USICT)</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 left-20 w-4 h-4 bg-[#FF6B2C] rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 right-20 w-6 h-6 bg-[#0066FF] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 right-32 w-3 h-3 bg-[#FF6B2C] rounded-full"
        />
      </div>
    </section>
  );
}