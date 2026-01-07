export function Skills() {
  const skills = [
    { name: 'HTML & CSS', level: 'Expert', percentage: 90 },
    { name: 'JavaScript', level: 'Intermediate', percentage: 70 },
    { name: 'React', level: 'Intermediate', percentage: 65 },
    { name: 'UI/UX Design', level: 'Intermediate', percentage: 70 },
    { name: 'Python', level: 'Beginner', percentage: 40 },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills & Expertise</h2>
        <div className="space-y-8">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
