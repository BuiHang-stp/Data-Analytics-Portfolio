import React, { useState, useMemo } from 'react';
import { ExternalLink, Database, Code2, BarChart3, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  SiPython, SiPostgresql, SiDbt, SiApacheairflow, SiSnowflake,
  SiDatabricks, SiSupabase, SiApachespark, SiAirbyte, SiSelenium,
  SiGooglecloud, SiGooglebigquery, SiLooker, SiApachesuperset,
  SiMetabase, SiGoogleanalytics, SiJira, SiConfluence, SiFigma,
  SiNotion, SiDbeaver, SiMongodb, SiDocker, SiKubernetes,
  SiGithub
} from 'react-icons/si';
import reposData from '../data/projects.json';
import { techStackData } from './Techstack';

// Tech stack priority and colors
const techPriority = [
  'dbt', 'Airflow', 'Spark', 'Databricks', 'Kestra', 'Dagster', 'Mage',
  'Snowflake', 'BigQuery', 'PostgreSQL', 'Trino', 'MongoDB', 'Supabase',
  'Docker', 'Kubernetes', 'GCP', 'AWS', 'Azure', 'GitHub Actions',
  'Python', 'SQL', 'JavaScript', 'Requests', 'BeautifulSoup', 'Selenium'
];

const techColors = {
  'dbt': '#FF694B',
  'Airflow': '#23D9FF',
  'Spark': '#FF9D00',
  'Databricks': '#FF3621',
  'Kestra': '#FF6B6B',
  'Dagster': '#1890FF',
  'Mage': '#9D4EDD',
  'Snowflake': '#29B5E8',
  'BigQuery': '#5DADE2',
  'PostgreSQL': '#61DAFB',
  'Trino': '#4ECDC4',
  'MongoDB': '#00ED64',
  'Supabase': '#3ECF8E',
  'Docker': '#2496ED',
  'Kubernetes': '#326CE5',
  'AWS': '#FF9900',
  'GCP': '#4285F4',
  'Azure': '#0078D4',
  'GitHub Actions': '#2088F0',
  'Python': '#3776AB',
  'SQL': '#4ECDC4',
  'JavaScript': '#F1E05A',
  'BeautifulSoup': '#3776AB',
  'Requests': '#FFE135',
  'Selenium': '#00FF00',
  'Pandas': '#130654',
  'NumPy': '#013243',
  'Matplotlib': '#01A4D6',
  'Seaborn': '#0173B2',
  'Plotly': '#636EFA',
  'Git': '#F1502F',
  'GitHub': '#181717',
  'Jupyter': '#F37726',
  'Streamlit': '#FF0000'
};

// Flatten the centralized techstack icons
const centralizedTechIcons = {};
techStackData.forEach(group => {
  group.items.forEach(item => {
    centralizedTechIcons[item.name] = item.icon;
    // Map alternative names used in reposData
    if (item.name === 'Apache Spark') centralizedTechIcons['Spark'] = item.icon;
    if (item.name === 'Looker Studio') centralizedTechIcons['Looker'] = item.icon;
    if (item.name === 'GA4 / Analytics') centralizedTechIcons['Google Analytics'] = item.icon;
    if (item.name === 'VS Code') centralizedTechIcons['Visual Studio'] = item.icon;
  });
});
// Override: Techstack.jsx maps "SQL" to the Postgres icon (same as PostgreSQL) — distinguish them here.
centralizedTechIcons['SQL'] = <Database size={14} color="#4ECDC4" />;

// Tech icon fallback mapping (for technologies not present in Techstack.jsx)
const fallbackTechIcons = {
  'Docker': <SiDocker size={14} color="#2496ED" />,
  'Kubernetes': <SiKubernetes size={14} color="#326CE5" />,
  'GitHub Actions': <Code2 size={14} color="#2088F0" />,
  'Requests': <Download size={14} color="#FFE135" />,
  'Trino': <Database size={14} color="#4ECDC4" />,
  'Git': <Code2 size={14} color="#F1502F" />,
  'GitHub': <Code2 size={14} color="#181717" />,
  'Jupyter': <Code2 size={14} color="#F37726" />,
  'Pandas': <Code2 size={14} color="#130654" />,
  'NumPy': <Code2 size={14} color="#013243" />,
  'Matplotlib': <BarChart3 size={14} color="#01A4D6" />,
  'Seaborn': <BarChart3 size={14} color="#0173B2" />,
  'Plotly': <BarChart3 size={14} color="#636EFA" />
};

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(reposData.length / itemsPerPage);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return reposData.slice(start, start + itemsPerPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const getPageItems = (total, current) => {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const delta = 1;
    const range = [];
    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
        range.push(i);
      }
    }
    const rangeWithDots = [];
    let l;
    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l > 2) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }
    return rangeWithDots;
  };

  // Sort tech stack by priority
  const sortTechStack = (techs) => {
    if (!techs || !Array.isArray(techs)) return [];
    return [...techs].sort((a, b) => {
      const priorityA = typeof techPriority !== 'undefined' ? techPriority.indexOf(a) : -1;
      const priorityB = typeof techPriority !== 'undefined' ? techPriority.indexOf(b) : -1;
      if (priorityA === -1 && priorityB === -1) return 0;
      if (priorityA === -1) return 1;
      if (priorityB === -1) return -1;
      return priorityA - priorityB;
    });
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Highlighted Projects</h2>

        <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '2.5rem', justifyContent: 'center' }}>
          {paginatedProjects.map((repo, idx) => (
            <div key={repo.title || repo.id || idx} className="glass-panel equal-panel" style={{ height: '100%', transition: 'transform 0.3s', border: '1px solid var(--outline-low)', display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <Database size={24} color="var(--primary)" />
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', wordBreak: 'break-word' }}>
                  {repo.title}
                </h3>

                {/* Description */}
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  {repo.description}
                </p>

                {/* Footer: Tech Stack + Live Demo */}
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {repo.techstack && repo.techstack.length > 0 && (
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                        <Code2 size={12} /> TECH STACK
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {sortTechStack(repo.techstack).slice(0, 4).map(tech => {
                          const color = techColors[tech] || '#8B5CF6';
                          const rawIcon = centralizedTechIcons[tech] || fallbackTechIcons[tech];
                          const icon = React.isValidElement(rawIcon) ? React.cloneElement(rawIcon, { size: 14 }) : null;

                          return (
                            <span key={tech} style={{
                              background: `${color}20`,
                              color: color,
                              border: `1px solid ${color}50`,
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              padding: '0.35rem 0.6rem',
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              borderRadius: '4px',
                              boxShadow: `0 0 6px ${color}25`,
                              whiteSpace: 'nowrap'
                            }}>
                              {icon && <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}>{icon}</span>}
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Action buttons: Live Dashboard (primary) + Code (secondary) */}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {repo.demo && (
                      <a
                        href={repo.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-live-dashboard"
                        style={{
                          flex: 2,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          padding: '10px 14px',
                          borderRadius: '8px',
                          background: '#2860c4',
                          color: '#fff',
                          textDecoration: 'none',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          fontFamily: 'Space Grotesk, sans-serif',
                          transition: 'background 0.2s ease'
                        }}
                      >
                        <ExternalLink size={16} color="#fff" /> Live Dashboard
                      </a>
                    )}
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-code"
                      style={{
                        flex: 1,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        background: 'transparent',
                        border: '1px solid #85B7EB',
                        color: '#185FA5',
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        fontFamily: 'Space Grotesk, sans-serif',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <SiGithub size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div style={{
            marginTop: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--outline-low)',
                color: 'var(--text-main)',
                padding: '0.75rem',
                borderRadius: '12px',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                opacity: currentPage === 1 ? 0.3 : 1
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {getPageItems(totalPages, currentPage).map((item, idx) => {
                if (item === '...') {
                  return (
                    <div key={`dots-${idx}`} style={{ width: '36px', textAlign: 'center', color: 'var(--text-muted)' }}>...</div>
                  );
                }
                const pageNumber = item;
                const isActive = currentPage === pageNumber;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    aria-label={`Go to page ${pageNumber}`}
                    style={{
                      minWidth: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      border: '1px solid',
                      borderColor: isActive ? 'var(--primary)' : 'var(--outline-low)',
                      background: isActive ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                      color: isActive ? 'var(--on-primary)' : 'var(--text-main)',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--outline-low)',
                color: 'var(--text-main)',
                padding: '0.75rem',
                borderRadius: '12px',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                opacity: currentPage === totalPages ? 0.3 : 1
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      <style>{`
        .btn-live-dashboard:hover {
          background: #1e4a9c !important;
        }
        .btn-code:hover {
          background: rgba(133, 183, 235, 0.12) !important;
          border-color: #185FA5 !important;
        }
      `}</style>
    </section>
  );
}
