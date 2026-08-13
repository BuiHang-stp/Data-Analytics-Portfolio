import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Sun, Moon, User, GraduationCap, FolderGit2, Workflow, MessageSquare } from 'lucide-react';
import { SiGithub as Github } from 'react-icons/si';
import { FaLinkedin as Linkedin } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Track active section based on scroll position
      const sections = ['about', 'education', 'projects', 'architecture', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Architecture & Stack', href: '#architecture' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        padding: '1rem 0', transition: 'all 0.3s',
        background: isScrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ fontSize: '1.75rem', fontWeight: 700, textDecoration: 'none', color: 'var(--primary)', fontFamily: 'Space Grotesk' }}>BH<span style={{color: 'var(--secondary)'}}>.</span></a>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {/* Desktop Nav */}
            <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} style={{ 
                  color: activeSection === link.href.substring(1) ? 'var(--primary)' : 'var(--text-main)', 
                  textDecoration: 'none', 
                  fontWeight: activeSection === link.href.substring(1) ? 800 : 600, 
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  transition: 'color 0.3s'
                }}>
                  {link.name}
                </a>
              ))}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Light/Dark Theme"
              style={{
                background: 'var(--surface-container)',
                border: '1px solid var(--outline-low)',
                color: 'var(--primary)',
                borderRadius: '9999px',
                padding: '0.5rem 0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
              }}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={18} color="var(--secondary)" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)' }}>Light</span>
                </>
              ) : (
                <>
                  <Moon size={18} color="var(--primary)" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)' }}>Dark</span>
                </>
              )}
            </button>
            
            {/* Mobile Nav Toggle */}
            <button id="mobile-nav-toggle" aria-controls="mobile-nav-overlay" aria-expanded={isMenuOpen} aria-label="Toggle navigation menu" className="mobile-toggle" style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <div id="mobile-nav-overlay" role="dialog" aria-modal="true" aria-hidden={!isMenuOpen} style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, minHeight: '100dvh',
          background: 'var(--surface)', zIndex: 100,
          display: isMenuOpen ? 'flex' : 'none', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '2rem',
          padding: '2rem', overflowY: 'auto'
        }}>
          <button 
            style={{ position: 'absolute', top: '1.5rem', right: '2rem', background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={32} />
          </button>
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              style={{ 
                color: activeSection === link.href.substring(1) ? 'var(--primary)' : 'var(--text-main)', textDecoration: 'none', 
                fontSize: '2rem', fontWeight: 700, fontFamily: 'Space Grotesk'
              }}
            >
              {link.name}
            </a>
          ))}
          
          {/* Mobile Socials */}
          <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
            <a href="https://github.com/BuiHang-stp" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/buithuhang/" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}><Linkedin size={24} /></a>
            <a href="mailto:buihang.work@gmail.com" style={{ color: 'var(--text-muted)' }}><Mail size={24} /></a>
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .desktop-nav { display: flex !important; }
            .mobile-toggle { display: none !important; }
          }
        `}</style>
      </nav>

      {/* Glassmorphic Mobile Bottom Tab Bar (< 768px) */}
      <div className="mobile-bottom-bar">
        <a 
          href="#about" 
          onClick={() => setActiveSection('about')}
          className={`mobile-bottom-item ${activeSection === 'about' ? 'active' : ''}`}
        >
          <User size={18} />
          <span>About</span>
        </a>
        <a
          href="#education"
          onClick={() => setActiveSection('education')}
          className={`mobile-bottom-item ${activeSection === 'education' ? 'active' : ''}`}
        >
          <GraduationCap size={18} />
          <span>Education</span>
        </a>
        <a 
          href="#projects" 
          onClick={() => setActiveSection('projects')}
          className={`mobile-bottom-item ${activeSection === 'projects' ? 'active' : ''}`}
        >
          <FolderGit2 size={18} />
          <span>Projects</span>
        </a>
        <a 
          href="#architecture" 
          onClick={() => setActiveSection('architecture')}
          className={`mobile-bottom-item ${activeSection === 'architecture' ? 'active' : ''}`}
        >
          <Workflow size={18} />
          <span>Stack</span>
        </a>
        <a 
          href="#contact" 
          onClick={() => setActiveSection('contact')}
          className={`mobile-bottom-item ${activeSection === 'contact' ? 'active' : ''}`}
        >
          <MessageSquare size={18} />
          <span>Contact</span>
        </a>
      </div>
    </>
  );
}


