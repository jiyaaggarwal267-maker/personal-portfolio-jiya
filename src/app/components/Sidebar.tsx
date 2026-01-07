interface SidebarProps {
  activeSection: number;
}

export function Sidebar({ activeSection }: SidebarProps) {
  const sections = [
    { id: 1, label: 'Home', href: '#home' },
    { id: 2, label: 'About', href: '#about' },
    { id: 3, label: 'Projects', href: '#projects' },
    { id: 4, label: 'Skills', href: '#skills' },
    { id: 5, label: 'Resume', href: '#resume' },
    { id: 6, label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-16 flex flex-col items-center justify-center z-40 hidden lg:flex">
      <div className="space-y-12">
        {sections.map((section) => (
          <a
            key={section.id}
            href={section.href}
            className="group relative flex items-center"
          >
            <span
              className={`text-sm transition-all ${
                activeSection === section.id
                  ? 'text-[#FF6B2C] font-bold'
                  : 'text-gray-600 hover:text-white'
              }`}
            >
              {String(section.id).padStart(2, '0')}
            </span>
            <span className="absolute left-full ml-4 bg-black px-3 py-1 rounded text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
