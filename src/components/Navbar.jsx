import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1F1F1F]/90 backdrop-blur-md border-b border-[#3D3D3D] py-3.5 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 2xl:px-24">
        <div className="flex items-center justify-between">
          
          {/* Logo with #DEB084 Accent Dot matching photo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-[#F4F4F4] hover:text-white transition-colors group"
          >
            <span className="w-2 h-2 rounded-full bg-[#DEB084] shadow-[0_0_8px_#DEB084] group-hover:scale-125 transition-transform" />
            <span>Sonu Saini</span>
          </a>

          {/* Desktop Nav Links (Matching photo layout) */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-xs font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#DEB084] font-semibold'
                      : 'text-[#CCCCCC] hover:text-[#F4F4F4]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#DEB084] rounded-full shadow-[0_0_8px_#DEB084]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Pill Button styled like photo */}
          <div className="hidden md:flex items-center gap-3">
            {PERSONAL_INFO.resumeUrl && (
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Sonu_Saini_Resume.pdf"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F4F4F4] hover:text-[#DEB084] border border-[#3D3D3D] hover:border-[#DEB084] bg-[#2E2E2E]/60 backdrop-blur px-4 py-1.5 rounded-full transition-all"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#DEB084]" />
              </a>
            )}
            <a
              href="#contact"
              className="text-xs font-semibold text-[#1F1F1F] bg-[#DEB084] hover:bg-[#CFA175] px-4 py-1.5 rounded-full shadow-md shadow-[#DEB084]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#CCCCCC] hover:text-white bg-[#2E2E2E] border border-[#3D3D3D]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 mt-3 border-t border-[#3D3D3D] space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-xs font-medium py-1.5 transition-colors ${
                  activeSection === link.id
                    ? 'text-[#DEB084]'
                    : 'text-[#CCCCCC] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#3D3D3D] flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-xs font-semibold text-[#1F1F1F] bg-[#DEB084] py-2 rounded-full shadow-md"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
