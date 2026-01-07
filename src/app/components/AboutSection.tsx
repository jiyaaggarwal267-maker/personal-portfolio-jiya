import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 lg:px-32 relative">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-12">
            About <span className="text-[#FF6B2C]">Me</span>
          </h2>

          <div className="space-y-6 text-lg text-gray-300">
            <p>
              I'm Jiya Agrawal, a first-year B.Tech ECE student with a passion for technology and design. 
              I enjoy exploring the latest trends in web development and currently work as a frontend developer 
              with a strong interest in UI/UX.
            </p>
            <p>
              I have experience working with HTML, CSS, JavaScript, React, and Python (beginner–intermediate level), 
              along with Figma for UI/UX design. I love creating clean, visually appealing, and user-friendly website designs.
            </p>
            <p>
              My interests lie in combining creativity with technology to build meaningful digital experiences. 
              I'm always learning, experimenting, and exploring more in the world of web development and design.
            </p>
          </div>

          {/* Decorative dots */}
          <div className="absolute top-1/4 right-20 flex gap-4">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-[#FF6B2C] rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
              className="w-3 h-3 bg-[#0066FF] rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
