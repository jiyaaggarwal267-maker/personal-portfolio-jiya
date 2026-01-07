import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, Github, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gurgaon, Haryana',
      link: null,
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'jiyaaggarwal267@gmail.com',
      link: 'mailto:jiyaaggarwal267@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8882550313',
      link: 'tel:+918882550313',
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jiya-agrawal-24460537a/', color: '#0077B5' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/jiyaaggarwal267-maker', color: '#333' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/__jiyyyaaa__/?next=%2F', color: '#E4405F' },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-8 lg:px-32 relative py-20">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-4">
            Let's <span className="text-[#FF6B2C]">Connect</span>
          </h2>
          <p className="text-xl text-gray-400">Get in touch for collaborations or just a friendly hello</p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(255, 107, 44, 0.3)',
              }}
              className="relative group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 rounded-lg p-6 h-full hover:border-[#FF6B2C] transition-all duration-300">
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B2C]/0 via-[#FF6B2C]/5 to-[#FF6B2C]/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-[#FF6B2C]/10 rounded-full flex items-center justify-center mb-4 mx-auto"
                  >
                    <item.icon className="w-7 h-7 text-[#FF6B2C]" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{item.label}</h3>
                  
                  {item.link ? (
                    <a 
                      href={item.link}
                      className="text-gray-400 hover:text-[#FF6B2C] transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-400">{item.value}</p>
                  )}
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#FF6B2C]/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Connect on Social Media</h3>
          
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
                className="relative group"
              >
                <div className="w-16 h-16 bg-gray-900 border-2 border-gray-800 rounded-full flex items-center justify-center hover:border-[#FF6B2C] transition-all duration-300 relative overflow-hidden">
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${social.color}30, ${social.color}10)`,
                    }}
                  />
                  
                  <social.icon className="w-7 h-7 text-white relative z-10 group-hover:text-[#FF6B2C] transition-colors" />
                </div>

                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black px-3 py-1 rounded text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </span>

                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-[#FF6B2C] rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.3, 1.5],
                    opacity: [0.5, 0.3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="mailto:jiyaaggarwal267@gmail.com"
            className="inline-block relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B2C] to-[#FF8C5C] rounded-sm blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-[#FF6B2C] text-white px-10 py-4 rounded-sm font-semibold text-lg hover:bg-[#FF8C5C] transition-colors">
              CONNECT HERE
            </div>
          </motion.a>
        </motion.div>

        {/* Decorative tech grid background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(255, 107, 44, .3) 25%, rgba(255, 107, 44, .3) 26%, transparent 27%, transparent 74%, rgba(255, 107, 44, .3) 75%, rgba(255, 107, 44, .3) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(255, 107, 44, .3) 25%, rgba(255, 107, 44, .3) 26%, transparent 27%, transparent 74%, rgba(255, 107, 44, .3) 75%, rgba(255, 107, 44, .3) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#FF6B2C] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">© 2026 Jiya Agrawal. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </section>
  );
}
