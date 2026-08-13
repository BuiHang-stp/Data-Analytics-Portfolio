import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Sparkles, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { SiGithub as Github } from 'react-icons/si';
import { FaLinkedin as Linkedin } from 'react-icons/fa';
import profilePic from '../assets/avatar/github-avatar.jpg';

export default function AboutMe() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const titles = [
    "Fresher Data Analyst"
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("buihang.work@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Business Data Analytics graduate with hands-on experience in SQL, PostgreSQL, Power BI and DAX. Skilled in transforming raw data into analytical datasets, validating data quality, and building dashboards to translate business questions into actionable insights.";

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 28);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="section" style={{ minHeight: '88vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative' }}>
      <div className="container responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
        
        {/* Left Column: Minimal Typography & Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Live Status Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.4rem 0.9rem',
              borderRadius: '9999px',
              background: 'var(--tag-bg)',
              border: '1px solid var(--tag-border)',
              marginBottom: '1.25rem',
              boxShadow: '0 4px 15px rgba(91, 155, 213, 0.12)'
            }}
          >
            <span className="pulse-dot"></span>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.04em' }}>
              Open to Work
            </span>
          </motion.div>

          {/* Subtitle Badge */}
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
            <span style={{ height: '1px', width: '28px', background: 'var(--primary)' }}></span>
            <span
              key={titleIndex}
              className="animate-fade-in"
              style={{
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontSize: '0.825rem',
                fontFamily: 'Space Grotesk',
                color: 'var(--primary)'
              }}
            >
              {titles[titleIndex]}
            </span>
          </div>

          {/* Clean Main Title */}
          <h1 style={{ fontSize: 'clamp(2.5rem, 6.5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 1.5rem 0', fontFamily: 'Space Grotesk' }}>
            Hi there, I'm <br />
            <span style={{ color: 'var(--primary)' }}>
              Bùi Thu Hằng
            </span>
          </h1>

          {/* Typing Description */}
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'var(--text-muted)', marginBottom: '2.25rem', maxWidth: '620px', lineHeight: 1.65, fontWeight: 400 }}>
            {displayedText}
            {!isTypingComplete && <span className="typing-cursor">|</span>}
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="btn-primary"
                style={{ padding: '0.75rem 1.5rem', borderRadius: '12px' }}
              >
                Explore Work <ArrowRight size={18} />
              </motion.a>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCopyEmail}
                className="btn-secondary"
                style={{ padding: '0.75rem 1.25rem', borderRadius: '12px', gap: '0.5rem', cursor: 'pointer', border: '1px solid var(--outline-low)' }}
              >
                {copied ? <Check size={18} color="var(--primary)" /> : <Copy size={18} />}
                <span>{copied ? 'Copied Email!' : 'Copy Email'}</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/BuiHang-stp"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '0.75rem 1.25rem', borderRadius: '12px', gap: '0.5rem' }}
              >
                <Github size={18} /> GitHub
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.linkedin.com/in/buithuhang/"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '0.75rem 1.25rem', borderRadius: '12px', gap: '0.5rem' }}
              >
                <Linkedin size={18} /> LinkedIn
              </motion.a>
            </div>
          </div>

          {/* Location */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>
            <MapPin size={16} color="var(--primary)" />
            <span>Kieu Phu, Hanoi, Vietnam</span>
          </div>
        </motion.div>

        {/* Right Column: Clean Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <motion.div
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="glass-panel profile-img-hover"
            style={{
              width: '100%',
              maxWidth: '360px',
              height: '460px',
              borderRadius: '24px',
              overflow: 'hidden',
              padding: 0,
              position: 'relative',
              background: 'var(--surface-container)'
            }}
          >
            <img
              src={profilePic}
              alt="Bui Thu Hang"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                filter: 'contrast(1.03) brightness(0.98)'
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 40%)' }}></div>
          </motion.div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #about .responsive-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}

