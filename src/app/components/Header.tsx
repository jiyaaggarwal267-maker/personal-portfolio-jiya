import { useState } from 'react';
import { Instagram, Linkedin, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-900">
      <div className="px-6 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
              <span className="text-black font-bold text-xl">JA</span>
            </div>
            <span className="text-white font-bold text-base lg:text-lg tracking-wider">JIYA AGRAWAL</span>
          </div>

          {/* Social Icons & Menu */}
          <div className="flex items-center gap-4 lg:gap-6">
            <a
              href="https://www.instagram.com/__jiyyyaaa__/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF6B2C] transition-colors"
            >
              <Instagram className="w-5 h-5 lg:w-6 lg:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/jiya-agrawal-24460537a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF6B2C] transition-colors"
            >
              <Linkedin className="w-5 h-5 lg:w-6 lg:h-6" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#FF6B2C] transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5 lg:w-6 lg:h-6" /> : <Menu className="w-5 h-5 lg:w-6 lg:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-black/95 backdrop-blur-lg border-t border-gray-900">
          <nav className="flex flex-col gap-4 px-6 lg:px-16 py-6">
            <a href="#home" className="text-white hover:text-[#FF6B2C] text-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#about" className="text-white hover:text-[#FF6B2C] text-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#projects" className="text-white hover:text-[#FF6B2C] text-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
              Projects
            </a>
            <a href="#skills" className="text-white hover:text-[#FF6B2C] text-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
              Skills
            </a>
            <a href="#resume" className="text-white hover:text-[#FF6B2C] text-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
              Resume
            </a>
            <a href="#contact" className="text-white hover:text-[#FF6B2C] text-xl transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}