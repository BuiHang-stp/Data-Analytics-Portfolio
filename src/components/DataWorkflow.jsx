import React, { useState } from 'react';
import {
  Database, Terminal, BarChart3, Code, Download, Layers,
  Eye, FileText, Users, ArrowRight, CheckCircle2,
  Grid, GitBranch, ArrowLeft, MessageSquare
} from 'lucide-react';
import { SiPython, SiPostgresql } from 'react-icons/si';

export default function DataWorkflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [viewMode, setViewMode] = useState('pipeline'); // 'pipeline' | 'matrix'

  // Stage-by-stage pipeline flow (6 stages for 3x2 Selector Grid)
  const flowSteps = [
    {
      id: 'business',
      stage: '01. Business Understanding',
      title: 'Business Understanding',
      icon: <MessageSquare size={22} color="#B07A00" />,
      accentColor: '#B07A00',
      tools: [
        { name: 'Stakeholder Discussion', icon: <Users size={14} color="var(--primary)" /> },
        { name: 'Requirement Analysis', icon: <FileText size={14} color="#6B7280" /> },
      ],
      tagline: 'From Business Questions to Analytical Problems',
      description: 'Understanding stakeholder needs and business context, then translating open-ended business questions into concrete analytical problems.',
      highlights: [
        'Clarifying business needs & context',
        'Framing analytical questions',
        'Defining success metrics'
      ]
    },
    {
      id: 'collection',
      stage: '02. Data Collection',
      title: 'Sources & Collection',
      icon: <Download size={22} color="#2563C7" />,
      accentColor: '#2563C7',
      tools: [
        { name: 'Excel', icon: <FileText size={14} color="#217346" /> },
        { name: 'CSV', icon: <FileText size={14} color="#6B7280" /> },
      ],
      tagline: 'Gathering Raw Datasets',
      description: 'Collecting data from CSV/Excel files and publicly available sources, preparing the initial data intake for downstream analysis.',
      highlights: [
        'Gathering raw datasets from multiple sources',
        'Initial data intake & consolidation',
        'Documenting source provenance'
      ]
    },
    {
      id: 'profiling',
      stage: '03. Profiling & Cleaning',
      title: 'Data Profiling & Cleaning',
      icon: <Eye size={22} color="#C85A5A" />,
      accentColor: '#C85A5A',
      tools: [
        { name: 'Python', icon: <SiPython color="#3776AB" /> },
        { name: 'pandas', icon: <Code size={14} color="#150458" /> },
      ],
      tagline: 'Data Quality & Consistency',
      description: 'Exploring the data, running quality checks (nulls, duplicates, inconsistent values) and cleaning it into a reliable analytical dataset.',
      highlights: [
        'Data profiling & quality checks',
        'Handling missing / inconsistent values',
        'Deduplication & type standardization'
      ]
    },
    {
      id: 'storage',
      stage: '04. Storage & Modeling',
      title: 'Storage & Data Modeling',
      icon: <Database size={22} color="#7652B8" />,
      accentColor: '#7652B8',
      tools: [
        { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
        { name: 'SQL Server', icon: <Database size={14} color="#CC2927" /> },
        { name: 'SQL', icon: <SiPostgresql color="#336791" /> },
      ],
      tagline: 'Layered Design & Star Schema',
      description: 'Organizing data across raw → staging → marts layers, and designing star schemas with dimension and fact tables for analytical workloads.',
      highlights: [
        'Layered design (raw / staging / marts)',
        'Star schema (dimension & fact tables)',
        'Data quality tests'
      ]
    },
    {
      id: 'analysis',
      stage: '05. Analytics & Insights',
      title: 'SQL Analysis',
      icon: <Terminal size={22} color="#00875A" />,
      accentColor: '#00875A',
      tools: [
        { name: 'SQL', icon: <SiPostgresql color="#336791" /> },
        { name: 'Python', icon: <SiPython color="#3776AB" /> },
      ],
      tagline: 'Business-Question-Driven Queries',
      description: 'Writing analytical queries to answer business questions and running statistical tests to validate patterns and hypotheses in the data.',
      highlights: [
        'Business-question-driven queries',
        'CTEs & window functions',
        'Statistical testing'
      ]
    },
    {
      id: 'visualization',
      stage: '06. Visualization',
      title: 'BI & Reporting',
      icon: <BarChart3 size={22} color="#C76500" />,
      accentColor: '#C76500',
      tools: [
        { name: 'Power BI', icon: <BarChart3 size={14} color="#F2C811" /> },
        { name: 'DAX', icon: <Code size={14} color="#185ABD" /> },
        { name: 'Excel', icon: <FileText size={14} color="#217346" /> },
      ],
      tagline: 'From Data to Actionable Insight',
      description: 'Building interactive dashboards and reports that turn analytical results into insights business teams can act on.',
      highlights: [
        'Interactive dashboards',
        'DAX measures',
        'Actionable business insights'
      ]
    }
  ];

  // Categorized Tech Stack Matrix Data
  const techCategories = [
    {
      category: "Languages & Query",
      icon: <Terminal size={18} color="var(--primary)" />,
      items: [
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "SQL", icon: <SiPostgresql color="#336791" /> }
      ]
    },
    {
      category: "Databases & Storage",
      icon: <Layers size={18} color="#7C3AED" />,
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
        { name: "SQL Server", icon: <Database size={14} color="#CC2927" /> }
      ]
    },
    {
      category: "BI & Visualization",
      icon: <BarChart3 size={18} color="#D97706" />,
      items: [
        { name: "Power BI", icon: <BarChart3 size={14} color="#F2C811" /> },
        { name: "DAX", icon: <Code size={14} color="#185ABD" /> },
        { name: "Excel (Power Query, PivotTables)", icon: <FileText size={14} color="#217346" /> }
      ]
    },
    {
      category: "Libraries & Tools",
      icon: <Users size={18} color="#059669" />,
      items: [
        { name: "pandas", icon: <Code size={14} color="#150458" /> },
        { name: "Git", icon: <GitBranch size={14} color="#F05032" /> },
        { name: "VS Code", icon: <Code size={14} color="#007ACC" /> }
      ]
    }
  ];

  return (
    <section id="architecture" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title">Data Workflow & Tech Stack</h2>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            marginTop: '-1rem'
          }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0, maxWidth: '640px' }}>
              End-to-end approach to data analysis, from understanding the business question to delivering actionable insights. Select any stage to explore the tools involved.
            </p>

            {/* Mode Switcher Buttons */}
            <div style={{
              display: 'inline-flex', gap: '0.5rem',
              background: 'var(--surface-low)', padding: '0.35rem', borderRadius: '9999px',
              border: '1px solid var(--outline-low)'
            }}>
              <button
                onClick={() => setViewMode('pipeline')}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.55rem 1.35rem', borderRadius: '9999px',
                  border: 'none',
                  background: viewMode === 'pipeline' ? 'var(--primary)' : 'transparent',
                  color: viewMode === 'pipeline' ? 'var(--on-primary)' : 'var(--text-muted)',
                  cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem', transition: 'all 0.3s'
                }}
              >
                <GitBranch size={16} /> 3x2 Stage Selector
              </button>
              <button
                onClick={() => setViewMode('matrix')}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.55rem 1.35rem', borderRadius: '9999px',
                  border: 'none',
                  background: viewMode === 'matrix' ? 'var(--primary)' : 'transparent',
                  color: viewMode === 'matrix' ? 'var(--on-primary)' : 'var(--text-muted)',
                  cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem', transition: 'all 0.3s'
                }}
              >
                <Grid size={16} /> Categorized Stack Matrix
              </button>
            </div>
          </div>
        </div>

        {/* View Mode 1: 3x2 Selector Grid + Detailed Breakdown Card Below */}
        {viewMode === 'pipeline' && (
          <div>
            {/* 3x2 Grid Selector Header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem'
            }}>
              {flowSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(idx)}
                    style={{
                      padding: '1.25rem 1.15rem',
                      borderRadius: '16px',
                      border: isActive ? `2px solid ${step.accentColor}` : '1px solid var(--outline-low)',
                      background: isActive ? 'var(--surface-container)' : 'var(--glass-bg)',
                      color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: isActive ? '0 10px 25px rgba(30, 74, 156, 0.15)' : '0 2px 8px rgba(0,0,0,0.02)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.55rem',
                      position: 'relative'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', width: '100%' }}>
                      <span style={{
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', sans-serif",
                        textTransform: 'uppercase',
                        letterSpacing: '0.03em',
                        lineHeight: 1.25,
                        color: isActive ? step.accentColor : 'var(--text-main)'
                      }}>
                        {step.stage}
                      </span>
                      <div style={{
                        padding: '0.4rem', borderRadius: '8px',
                        background: isActive ? 'var(--tag-bg)' : 'var(--surface-low)',
                        display: 'flex',
                        flexShrink: 0
                      }}>
                        {step.icon}
                      </div>
                    </div>
                    <span style={{
                      fontSize: '0.82rem',
                      color: 'var(--text-muted)',
                      fontWeight: 400,
                      lineHeight: 1.4
                    }}>
                      {step.tagline}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detailed Breakdown Card For Active Stage (Below 3x2 Grid) */}
            <div className="glass-panel" style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              border: `2px solid ${flowSteps[activeStep].accentColor}`,
              background: 'var(--surface-container)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
              position: 'relative'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}>
                {/* Left Column: Stage Description & Highlights */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
                    <div style={{
                      padding: '0.75rem', borderRadius: '14px', background: 'var(--tag-bg)',
                      border: '1px solid var(--tag-border)', display: 'flex'
                    }}>
                      {flowSteps[activeStep].icon}
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: flowSteps[activeStep].accentColor, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        {flowSteps[activeStep].stage}
                      </span>
                      <h3 style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: 'Space Grotesk', margin: 0, color: 'var(--text-main)' }}>
                        {flowSteps[activeStep].title}
                      </h3>
                    </div>
                  </div>

                  <p style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem' }}>
                    {flowSteps[activeStep].tagline}
                  </p>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {flowSteps[activeStep].description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                    {flowSteps[activeStep].highlights.map((item, hIdx) => (
                      <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={16} color={flowSteps[activeStep].accentColor} style={{ flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Integrated Tools Badges & Nav */}
                <div style={{
                  background: 'var(--surface-low)', padding: '2rem', borderRadius: '16px',
                  border: '1px solid var(--outline-low)', display: 'flex', flexDirection: 'column', gap: '1.25rem'
                }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', margin: 0 }}>
                    Integrated Technologies & Tools
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {flowSteps[activeStep].tools.map((tool, tIdx) => (
                      <div key={tIdx} style={{
                        display: 'flex', alignItems: 'center', gap: '0.6rem',
                        padding: '0.6rem 1rem', borderRadius: '12px', background: 'var(--surface-container)',
                        border: '1px solid var(--outline-low)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                      }}>
                        <span style={{ fontSize: '1.2rem', display: 'flex' }}>{tool.icon}</span>
                        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-main)' }}>{tool.name}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--outline-low)',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                  }}>
                    <button
                      onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : flowSteps.length - 1))}
                      style={{
                        background: 'none', border: 'none', color: 'var(--text-muted)',
                        cursor: 'pointer', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem'
                      }}
                    >
                      <ArrowLeft size={14} /> Previous Stage
                    </button>
                    <button
                      onClick={() => setActiveStep((prev) => (prev < flowSteps.length - 1 ? prev + 1 : 0))}
                      style={{
                        background: 'none', border: 'none', color: flowSteps[activeStep].accentColor,
                        cursor: 'pointer', fontWeight: 700, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem'
                      }}
                    >
                      Next Stage <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View Mode 2: Categorized Tech Stack Matrix */}
        {viewMode === 'matrix' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '1.75rem'
          }}>
            {techCategories.map((group, gIdx) => (
              <div key={gIdx} className="glass-panel" style={{
                padding: '1.75rem',
                border: '1px solid var(--outline-low)',
                background: 'var(--surface-container)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid var(--outline-low)', paddingBottom: '1rem' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'var(--tag-bg)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0
                  }}>
                    {group.icon}
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, fontFamily: 'Space Grotesk', margin: 0, color: 'var(--text-main)', lineHeight: 1.3 }}>
                    {group.category}
                  </h3>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                  gap: '0.75rem'
                }}>
                  {group.items.map((item, iIdx) => (
                    <div key={iIdx} style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      padding: '0.6rem 0.75rem', borderRadius: '10px',
                      background: 'var(--surface-low)', border: '1px solid var(--outline-low)',
                      transition: 'transform 0.2s, border-color 0.2s'
                    }}>
                      <span style={{ fontSize: '1.1rem', display: 'flex' }}>{item.icon}</span>
                      <span style={{ fontSize: '0.825rem', fontWeight: 700, color: 'var(--text-main)' }}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
