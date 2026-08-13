import React, { useState } from 'react';
import { GraduationCap, Award, Users, ExternalLink, Calendar, ChevronDown, Check } from 'lucide-react';
import vnuisLogo from '../assets/company-logo/vnuis.png';

export default function Education() {
  const [activeTab, setActiveTab] = useState('degree');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tabOptions = [
    { id: 'degree', label: 'Degree', icon: <GraduationCap size={16} />, color: 'var(--primary)', count: 1 },
    { id: 'research', label: 'Research & Awards', icon: <Award size={16} />, color: 'var(--secondary)', count: 2 },
    { id: 'activities', label: 'Activities', icon: <Users size={16} />, color: '#7C3AED', count: 3 }
  ];

  const educationData = {
    degree: [
      {
        company: 'VNU International School',
        companyFull: 'Vietnam National University - International School',
        url: 'https://is.vnu.edu.vn/',
        role: 'Bachelor of Business Data Analytics',
        period: '2022 - 2026',
        isCurrent: false,
        logo: vnuisLogo,
        description: 'GPA 3.53/4.0. Major in business data analytics.'
      }
    ],
    research: [
      {
        company: 'VNU International School',
        companyFull: 'Vietnam National University - International School',
        url: 'https://is.vnu.edu.vn/',
        role: 'First Prize, University-Level Student Research Competition',
        period: '2024',
        isCurrent: false,
        logo: vnuisLogo,
        description: 'Research on financial statement comparability and stock liquidity in Vietnam. Team of three; responsible for data collection and analysis.'
      },
      {
        company: 'VNU International School',
        companyFull: 'Vietnam National University - International School',
        url: 'https://is.vnu.edu.vn/',
        role: 'Faculty-level Research Project',
        period: '2024',
        isCurrent: false,
        logo: vnuisLogo,
        description: 'Tobacco tax rates and consumer behaviour in Vietnam. Project Lead: led research design, data analysis, and report writing.'
      }
    ],
    activities: [
      {
        company: 'VNU International School',
        companyFull: 'Vietnam National University - International School',
        url: 'https://is.vnu.edu.vn/',
        role: 'Star Awards 2023: Vietnamese Youth with Cyberspace',
        period: 'Sep 2023 – Dec 2023',
        isCurrent: false,
        logo: vnuisLogo,
        bullets: [
          'Created exam questions, prepared slides, and proctored rounds 1–2 of the competition.',
          'Coordinated the regional finals event for ~500 attendees and managed Thai Nguyen contestants in the national finals.',
          'Worked with stakeholders to organize and coordinate the event (70,000+ contestants, 183 universities nationwide).'
        ]
      },
      {
        company: 'VNU International School',
        companyFull: 'Vietnam National University - International School',
        url: 'https://is.vnu.edu.vn/',
        role: 'Academic & Scientific Research Board — Content Member',
        period: 'Feb 2023 – Oct 2025',
        isCurrent: false,
        logo: vnuisLogo,
        bullets: [
          'Co-organized academic and student events with internal teams and partner organizations.',
          'Built event timelines and coordinated task execution across team members.',
          'Wrote content and supported communications for academic and research events.'
        ]
      },
      {
        company: 'VNU International School',
        companyFull: 'Vietnam National University - International School',
        url: 'https://is.vnu.edu.vn/',
        role: 'Chikup Workshop — Organizing Assistant',
        period: 'Dec 2022 – Sep 2023',
        isCurrent: false,
        logo: vnuisLogo,
        bullets: [
          'Managed supplies, materials, and event resources within an allocated budget.',
          'Coordinated with external venue partners to run an event for ~200 attendees.',
          'Supported scheduling and on-site coordination to ensure smooth delivery.'
        ]
      }
    ]
  };

  const currentTabInfo = tabOptions.find(t => t.id === activeTab);
  const activeTabColor = currentTabInfo?.color || 'var(--primary)';
  const currentList = educationData[activeTab] || [];

  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title">Education</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '-0.75rem', maxWidth: '680px' }}>
            Academic journey and research work at VNU International School, from coursework in business data analytics to student research on finance and public policy.
          </p>
        </div>

        {/* Desktop Category Navigation Tabs (>= 769px) */}
        <div className="desktop-education-tabs" style={{
          display: 'flex',
          gap: '0.75rem',
          marginBottom: '2rem',
          borderBottom: '1px solid var(--outline-low)',
          paddingBottom: '0.75rem',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}>
          {tabOptions.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '12px',
                  border: 'none',
                  background: isActive ? `${tab.color}15` : 'transparent',
                  color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.9rem',
                  transition: 'all 0.25s ease',
                  borderBottom: isActive ? `3px solid ${tab.color}` : '3px solid transparent',
                  whiteSpace: 'nowrap'
                }}
              >
                <span style={{ color: tab.color, display: 'flex' }}>{tab.icon}</span>
                <span style={{ color: isActive ? tab.color : 'inherit' }}>{tab.label}</span>
                <span style={{
                  fontSize: '0.725rem',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '9999px',
                  background: isActive ? `${tab.color}22` : 'var(--surface-low)',
                  color: isActive ? tab.color : 'var(--text-muted)',
                  fontWeight: 700
                }}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Custom Mobile Glass Dropdown (< 769px) */}
        <div className="mobile-education-dropdown-container" style={{ position: 'relative', marginBottom: '2rem' }}>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--surface-container)',
              border: `1.5px solid ${activeTabColor}66`,
              borderRadius: '16px',
              padding: '0.85rem 1.25rem',
              cursor: 'pointer',
              boxShadow: `0 8px 25px ${activeTabColor}15`,
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ color: activeTabColor, display: 'flex' }}>{currentTabInfo?.icon}</span>
              <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)', fontFamily: 'Space Grotesk' }}>
                {currentTabInfo?.label}
              </span>
              <span style={{
                fontSize: '0.75rem',
                padding: '0.2rem 0.6rem',
                borderRadius: '9999px',
                background: `${activeTabColor}25`,
                color: activeTabColor,
                fontWeight: 800
              }}>
                {currentTabInfo?.count}
              </span>
            </div>
            <ChevronDown
              size={20}
              color={activeTabColor}
              style={{
                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          </div>

          {/* Floating Dropdown Menu Options */}
          {isDropdownOpen && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: 0,
                right: 0,
                zIndex: 100,
                background: 'rgba(15, 23, 42, 0.95)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                padding: '0.5rem',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                animation: 'dropdownFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {tabOptions.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <div
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsDropdownOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      background: isActive ? `${tab.color}22` : 'transparent',
                      border: isActive ? `1px solid ${tab.color}55` : '1px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ color: tab.color, display: 'flex' }}>{tab.icon}</span>
                      <span style={{
                        fontWeight: isActive ? 800 : 600,
                        color: isActive ? tab.color : 'var(--text-main)',
                        fontSize: '0.9rem',
                        fontFamily: 'Space Grotesk'
                      }}>
                        {tab.label}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{
                        fontSize: '0.7rem',
                        padding: '0.15rem 0.55rem',
                        borderRadius: '9999px',
                        background: isActive ? tab.color : 'var(--surface-low)',
                        color: isActive ? 'var(--on-primary)' : 'var(--text-muted)',
                        fontWeight: 800
                      }}>
                        {tab.count}
                      </span>
                      {isActive && <Check size={16} color={tab.color} />}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Ultra-Clean Education List synchronized with Active Tab Accent Color */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {currentList.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                '--active-accent': activeTabColor,
                '--active-accent-glow': `${activeTabColor}33`,
                padding: '1.5rem 1.75rem',
                border: '1px solid var(--outline-low)',
                background: 'var(--surface-container)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle Company Image Logo Background Watermark (Logo Chìm Mờ Image) */}
              <img
                src={item.logo}
                alt={item.company}
                style={{
                  position: 'absolute',
                  right: '-15px',
                  bottom: '-20px',
                  width: '130px',
                  height: '130px',
                  objectFit: 'contain',
                  opacity: 0.08,
                  pointerEvents: 'none',
                  userSelect: 'none',
                  transform: 'rotate(-8deg)',
                  filter: 'grayscale(30%)',
                  zIndex: 0
                }}
              />

              {/* Row Header: Company Logo Image Badge, Company Name & Role */}
              <div style={{
                display: 'flex',
                justify: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {/* Company Logo Image Badge */}
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '11px',
                    background: '#FFFFFF',
                    border: '1px solid var(--outline-low)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                    flexShrink: 0,
                    overflow: 'hidden'
                  }}>
                    <img
                      src={item.logo}
                      alt={item.company}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>

                  {activeTab === 'degree' ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        fontFamily: 'Space Grotesk',
                        color: activeTabColor,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      {item.company}
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        fontFamily: 'Space Grotesk',
                        color: activeTabColor
                      }}
                    >
                      {item.company}
                    </span>
                  )}

                  <span style={{ color: 'var(--outline-low)', fontSize: '1rem' }}>•</span>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>
                    {item.role}
                  </h3>

                  {item.isCurrent && (
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      color: 'var(--primary)',
                      background: 'rgba(30, 74, 156, 0.1)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(30, 74, 156, 0.2)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Current
                    </span>
                  )}
                </div>

                {/* Period Tag */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: item.isCurrent ? 'var(--primary)' : 'var(--text-muted)',
                    background: item.isCurrent ? 'rgba(30, 74, 156, 0.08)' : 'var(--surface-low)',
                    padding: '0.25rem 0.7rem',
                    borderRadius: '8px',
                    border: '1px solid var(--outline-low)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}>
                    <Calendar size={13} color={item.isCurrent ? 'var(--primary)' : 'var(--text-muted)'} />
                    {item.period}
                  </span>
                </div>
              </div>

              {/* Description Body */}
              {item.bullets && item.bullets.length > 0 ? (
                <ul style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  margin: 0,
                  paddingLeft: '1.25rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.bullets.map((b, i) => (
                    <li key={i} style={{ marginBottom: '0.35rem' }}>{b}</li>
                  ))}
                </ul>
              ) : (
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  margin: 0,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .desktop-education-tabs {
            display: none !important;
          }
          .mobile-education-dropdown-container {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .desktop-education-tabs {
            display: flex !important;
          }
          .mobile-education-dropdown-container {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
