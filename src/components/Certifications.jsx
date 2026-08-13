import React, { useState, useMemo, useEffect } from 'react';
import { ExternalLink, Calendar, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import certs from '../data/certifications.json';

import googleLogo from '../assets/company-logo/google.png';
import ibmLogo from '../assets/company-logo/ibm-logo.png';
import microsoftLogo from '../assets/company-logo/microsoft.png';
import hackerrankLogo from '../assets/company-logo/hackerrank.png';
import dremioLogo from '../assets/company-logo/dremio.png';
import oracleLogo from '../assets/company-logo/oracle.png';
import dagsterLogo from '../assets/company-logo/dagster.jpg';
import dbtLogo from '../assets/company-logo/dbt.png';
import airbyteLogo from '../assets/company-logo/airbyte.png';
import mongodbLogo from '../assets/company-logo/mongodb.png';
import worldquantLogo from '../assets/company-logo/worldquant.jpg';
import xomdataLogo from '../assets/company-logo/xomdata.svg';
import britishCouncilLogo from '../assets/company-logo/britishcouncil.png';
import anthropicLogo from '../assets/company-logo/anthropic .png';
import otherLogo from '../assets/company-logo/other.png';

const ORG_LOGOS = {
  'Anthropic': anthropicLogo,
  'Google': googleLogo,
  'IBM': ibmLogo,
  'Microsoft': microsoftLogo,
  'HackerRank': hackerrankLogo,
  'Dremio': dremioLogo,
  'Oracle': oracleLogo,
  'Dagster Labs': dagsterLogo,
  'dbt Labs': dbtLogo,
  'Airbyte': airbyteLogo,
  'MongoDB': mongodbLogo,
  'WorldQuant University': worldquantLogo,
  'Xóm Data': xomdataLogo,
  'British Council': britishCouncilLogo,
  'Others': otherLogo
};

export default function Certifications() {
  const [selectedOrg, setSelectedOrg] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Derive unique organizations with counts
  const orgs = useMemo(() => {
    const counts = certs.reduce((acc, cert) => {
      acc[cert.organization] = (acc[cert.organization] || 0) + 1;
      return acc;
    }, {});

    const sorted = Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => {
        if (a.name === 'Others') return 1;
        if (b.name === 'Others') return -1;
        return b.count - a.count;
      });

    return [
      { name: 'All', count: certs.length },
      ...sorted
    ];
  }, []);

  const filteredCerts = useMemo(() => {
    if (selectedOrg === 'All') return certs;
    return certs.filter(cert => cert.organization === selectedOrg);
  }, [selectedOrg]);

  const totalPages = Math.ceil(filteredCerts.length / itemsPerPage);
  const paginatedCerts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredCerts.slice(start, start + itemsPerPage);
  }, [filteredCerts, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedOrg]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const el = document.getElementById('certifications');
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

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="cert-header-container" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Professional Certifications</h2>
          <div style={{
            padding: '0.4rem 1rem',
            background: 'var(--primary)',
            color: 'var(--on-primary)',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            boxShadow: '0 0 20px rgba(91, 155, 213, 0.3)'
          }}>
            {certs.length} Verified
          </div>
        </div>

        {/* Filter Chips (All + each organization) */}
        <div className="filter-container" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '2rem',
          paddingBottom: '0.5rem',
          overflowX: 'auto'
        }}>
          {orgs.map(org => (
            <button
              key={org.name}
              onClick={() => setSelectedOrg(org.name)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '100px',
                border: '1px solid',
                borderColor: selectedOrg === org.name ? 'var(--primary)' : 'var(--outline-low)',
                background: selectedOrg === org.name ? 'var(--tag-bg)' : 'var(--surface-container)',
                color: selectedOrg === org.name ? 'var(--primary)' : 'var(--text-muted)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {org.name}
              <span style={{
                fontSize: '0.75rem',
                opacity: 0.8,
                background: selectedOrg === org.name ? 'var(--primary)' : 'var(--surface-low)',
                color: selectedOrg === org.name ? 'var(--on-primary)' : 'inherit',
                padding: '2px 8px',
                borderRadius: '10px'
              }}>
                {org.count}
              </span>
            </button>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gridAutoRows: 'minmax(200px, auto)',
          gap: '2rem'
        }}>
          {paginatedCerts.map((cert, index) => (
            <div
              key={cert.title + index}
              className="glass-panel cert-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid var(--outline-low)',
                background: 'var(--glass-bg)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                height: '100%',
                boxSizing: 'border-box'
              }}
            >
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <img
                    src={cert.image || ORG_LOGOS[cert.organization]}
                    alt={cert.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px' }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginBottom: '0.5rem',
                    color: 'var(--text-main)',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {cert.title}
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600 }}>
                    <Briefcase size={14} /> {cert.organization}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--outline-low)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  <Calendar size={14} /> {cert.date}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: 'var(--secondary)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                  className="cert-link"
                >
                  Verify <ExternalLink size={14} />
                </a>
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
                background: 'var(--surface-container)',
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
                    style={{
                      minWidth: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      border: '1px solid',
                      borderColor: isActive ? 'var(--primary)' : 'var(--outline-low)',
                      background: isActive ? 'var(--primary)' : 'var(--surface-container)',
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
                background: 'var(--surface-container)',
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

        <style>{`
          .filter-container::-webkit-scrollbar {
            height: 4px;
          }
          .filter-container::-webkit-scrollbar-thumb {
            background: var(--outline-low);
            border-radius: 10px;
          }
          .cert-card:hover {
            background: var(--glass-bg-hover) !important;
            border-color: var(--primary) !important;
            transform: translateY(-6px) scale(1.01) !important;
            box-shadow: 0 12px 30px rgba(0,0,0,0.3) !important;
          }
          .cert-link:hover {
            color: var(--primary) !important;
            text-decoration: underline !important;
          }
          @media (max-width: 768px) {
            .cert-header-container {
              flex-direction: column;
              justify-content: center;
              text-align: center;
            }
            .filter-container {
              justify-content: center;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
