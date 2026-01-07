import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import resumePDF from "../../assets/jiyaresume.pdf";





export function ResumeSection() {
  return (
    <section id="resume" className="min-h-screen flex items-center justify-center px-8 lg:px-32 relative py-20">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Have
            <br />
            look
            <br />
            at my
            <br />
            <span className="text-[#FF6B2C]">Resume</span>
          </h2>

          <motion.a
  href={resumePDF}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-[#A78BFA] text-lg font-semibold hover:text-[#C4B5FD] transition-colors mt-8"
  whileHover={{ x: 10 }}
>
  MY RESUME <ExternalLink className="w-5 h-5" />
</motion.a>



          {/* Decorative elements */}
          <div className="absolute left-20 top-1/3 flex flex-col gap-6">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-4 h-4 bg-[#FF6B2C] rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
              className="w-4 h-4 bg-[#0066FF] rounded-full"
            />
          </div>
        </motion.div>

        {/* Right Content - Floating Resume Images */}
        <div className="relative h-96 lg:h-[500px]">
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -10 }}
            whileInView={{ opacity: 1, y: 0, rotate: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            animate={{
              y: [0, -20, 0],
              rotate: [-5, -8, -5]
            }}
            style={{
              transition: {
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }
            }}
            className="absolute top-0 left-0 w-64 h-80 bg-white rounded-lg shadow-2xl overflow-hidden transform"
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 p-6">
              <div className="space-y-4">
                <div className="h-4 bg-gray-400 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 rounded w-full"></div>
                <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                <div className="h-3 bg-gray-300 rounded w-4/6"></div>
                <div className="mt-6 space-y-2">
                  <div className="h-2 bg-gray-300 rounded w-full"></div>
                  <div className="h-2 bg-gray-300 rounded w-full"></div>
                  <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                </div>
              </div>
              {/* Purple corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#A78BFA] transform rotate-45 translate-x-16 translate-y-16"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 10 }}
            whileInView={{ opacity: 1, y: 0, rotate: 5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            animate={{
              y: [0, 20, 0],
              rotate: [5, 8, 5]
            }}
            style={{
              transition: {
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }
            }}
            className="absolute top-20 right-0 w-64 h-80 bg-gray-900 rounded-lg shadow-2xl overflow-hidden transform"
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 p-6">
              <div className="space-y-4">
                <div className="h-4 bg-[#FF6B2C] rounded w-3/4"></div>
                <div className="h-3 bg-gray-700 rounded w-full"></div>
                <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                <div className="h-3 bg-gray-700 rounded w-4/6"></div>
                <div className="mt-6 space-y-2">
                  <div className="h-2 bg-gray-700 rounded w-full"></div>
                  <div className="h-2 bg-gray-700 rounded w-full"></div>
                  <div className="h-2 bg-gray-700 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 15 }}
            whileInView={{ opacity: 1, y: 0, rotate: 10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            animate={{
              y: [0, -15, 0],
              rotate: [10, 13, 10]
            }}
            style={{
              transition: {
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }
            }}
            className="absolute bottom-0 right-20 w-64 h-80 bg-gray-900 rounded-lg shadow-2xl overflow-hidden transform"
          >
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 p-6">
              <div className="space-y-4">
                <div className="h-4 bg-[#FF6B2C] rounded w-3/4"></div>
                <div className="h-3 bg-gray-700 rounded w-full"></div>
                <div className="h-3 bg-gray-700 rounded w-5/6"></div>
                <div className="h-3 bg-gray-700 rounded w-4/6"></div>
                <div className="mt-6 space-y-2">
                  <div className="h-2 bg-gray-700 rounded w-full"></div>
                  <div className="h-2 bg-gray-700 rounded w-full"></div>
                  <div className="h-2 bg-gray-700 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating dots */}
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-10 left-10 w-3 h-3 bg-[#0066FF] rounded-full"
          />
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-4 h-4 bg-[#FF6B2C] rounded-full"
          />
        </div>
      </div>

      <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600 text-xs">
        transparency.
      </p>
    </section>
  );
}
