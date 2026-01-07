import { motion } from 'motion/react';

export function SkillsSection() {
  const skills = [
    { name: 'HTML & CSS', level: 90, category: 'Expert' },
    { name: 'JavaScript', level: 70, category: 'Intermediate' },
    { name: 'React', level: 65, category: 'Intermediate' },
    { name: 'UI/UX Design', level: 70, category: 'Intermediate' },
    { name: 'Python', level: 40, category: 'Beginner' },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-8 lg:px-32 relative py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-12">
            My <span className="text-[#FF6B2C]">Skills</span>
          </h2>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <span className="text-sm text-gray-400">{skill.category}</span>
                </div>
                <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="h-full bg-gradient-to-r from-[#FF6B2C] to-[#FF8C5C] rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
