import React, { useState } from 'react';
import {
  Database, Terminal, Cloud, BarChart3, Workflow,
  PieChart, Code, Download, Layers, ShieldCheck,
  Eye, FileText, Layout, Users, ArrowRight, Activity, CheckCircle2,
  Grid, GitBranch, ArrowLeft
} from 'lucide-react';
import {
  SiPython, SiPostgresql, SiDbt, SiApacheairflow, SiSnowflake,
  SiDatabricks, SiSupabase, SiApachespark, SiAirbyte, SiSelenium,
  SiGooglecloud, SiGooglebigquery, SiLooker, SiApachesuperset,
  SiMetabase, SiGoogleanalytics, SiJira, SiConfluence, SiFigma,
  SiNotion, SiDbeaver, SiMongodb
} from 'react-icons/si';

export default function ArchitectureFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [viewMode, setViewMode] = useState('pipeline'); // 'pipeline' | 'matrix'

  // Stage-by-stage pipeline flow (6 stages for 3x2 Selector Grid)
  const flowSteps = [
    {
      id: 'ingestion',
      stage: '01. Ingestion',
      title: 'Sources & Ingestion',
      icon: <Download size={22} color="var(--primary)" />,
      accentColor: 'var(--primary)',
      tools: [
        { name: 'Airbyte', icon: <SiAirbyte color="#6557FF" /> },
        { name: 'Fivetran', icon: <Code size={14} color="#005DFF" /> },
        { name: 'DLT', icon: <Download size={14} color="#FF694B" /> },
        { name: 'Selenium', icon: <SiSelenium color="#43B02A" /> },
        { name: 'BeautifulSoup', icon: <Code size={14} color="#3776AB" /> },
        { name: 'Python ETL', icon: <SiPython color="#3776AB" /> },
        { name: 'PostgreSQL / MySQL', icon: <SiPostgresql color="#336791" /> },
      ],
      tagline: 'Multi-source Data Extraction & Ingestion',
      description: 'Extracting high-volume transactional logs, payment streams, and e-commerce APIs across VNPAY, GPBank, and UpBase systems.',
      highlights: [
        'Automated CDC (Change Data Capture) & batch syncs',
        'Partitioned daily raw file extraction to cloud storage',
        'API & Web Scraping (Selenium / BeautifulSoup)'
      ]
    },
    {
      id: 'storage',
      stage: '02. Warehousing',
      title: 'Platforms & Warehouses',
      icon: <Layers size={22} color="#0284C7" />,
      accentColor: '#0284C7',
      tools: [
        { name: 'BigQuery', icon: <SiGooglebigquery color="#3367D6" /> },
        { name: 'Snowflake', icon: <SiSnowflake color="#29B5E8" /> },
        { name: 'Databricks', icon: <SiDatabricks color="#FF3621" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
        { name: 'GCP', icon: <SiGooglecloud color="#4285F4" /> },
        { name: 'AWS', icon: <Cloud size={14} color="#FF9900" /> },
        { name: 'Azure', icon: <Cloud size={14} color="#0078D4" /> },
        { name: 'Supabase', icon: <SiSupabase color="#3ECF8E" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#13AA52" /> }
      ],
      tagline: 'Enterprise Cloud Data Warehousing',
      description: 'Centralized cloud data warehouses serving as the single source of truth for all business and financial analytics domains.',
      highlights: [
        'Separation of compute & storage for cost optimization',
        'Role-based access control (RBAC) & data security',
        'Clustered & partitioned tables for sub-second query performance'
      ]
    },
    {
      id: 'transformation',
      stage: '03. Transformation',
      title: 'dbt & Data Engineering',
      icon: <Workflow size={22} color="#E11D48" />,
      accentColor: '#E11D48',
      tools: [
        { name: 'dbt Core/Cloud', icon: <SiDbt color="#FF694B" /> },
        { name: 'Apache Spark', icon: <SiApachespark color="#E25A1C" /> },
        { name: 'SQL', icon: <SiPostgresql color="#336791" /> },
        { name: 'Python', icon: <SiPython color="#3776AB" /> },
        { name: 'GitHub Actions', icon: <ShieldCheck size={14} color="var(--primary)" /> },
      ],
      tagline: 'Kimball Dimensional Modeling & Testing',
      description: 'Transforming raw schemas into production-ready Data Marts (Staging → Intermediate → Marts) with full CI/CD testing.',
      highlights: [
        'Automated dbt test assertions & documentation deployments',
        'Star-schema & Snowflake dimensional data modeling',
        'Slim CI PR checks via GitHub Actions'
      ]
    },
    {
      id: 'orchestration',
      stage: '04. Orchestration',
      title: 'Workflow Orchestration',
      icon: <Activity size={22} color="#7C3AED" />,
      accentColor: '#7C3AED',
      tools: [
        { name: 'Apache Airflow', icon: <SiApacheairflow color="#017CEE" /> },
        { name: 'Astronomer', icon: <Workflow size={14} color="#23D9FF" /> },
        { name: 'Dagster', icon: <Workflow size={14} color="#1890FF" /> },
        { name: 'Kestra', icon: <Workflow size={14} color="#FF6B6B" /> },
        { name: 'Mage', icon: <Code size={14} color="#9D4EDD" /> }
      ],
      tagline: 'DAG Execution & Monitoring',
      description: 'Scheduling complex DAG dependencies with SLA alerts, automatic retries, and real-time pipeline monitoring.',
      highlights: [
        'Modular Python DAG definitions & custom operators',
        'Slack/Email alert triggers on pipeline failure',
        'Backfill capability for historical data re-processing'
      ]
    },
    {
      id: 'serving',
      stage: '05. BI & Analytics',
      title: 'Executive BI & Serving',
      icon: <BarChart3 size={22} color="#059669" />,
      accentColor: '#059669',
      tools: [
        { name: 'Power BI', icon: <BarChart3 size={14} color="#F2C811" /> },
        { name: 'Looker Studio', icon: <SiLooker color="#4285F4" /> },
        { name: 'Superset', icon: <SiApachesuperset color="#00A2D3" /> },
        { name: 'Metabase', icon: <SiMetabase color="#509EE3" /> },
        { name: 'GA4 / Analytics', icon: <SiGoogleanalytics color="#E37400" /> },
        { name: 'SmartLook', icon: <Eye size={14} color="#FF6B35" /> }
      ],
      tagline: 'Actionable Business Intelligence',
      description: 'Delivering real-time executive dashboards, Cohort retention analysis, and financial KPIs for business decision-makers.',
      highlights: [
        'Automated semantic model refreshes',
        'Interactive drill-down reports & executive KPIs',
        'Self-service analytics for business teams'
      ]
    },
    {
      id: 'collaboration',
      stage: '06. Dev & Ops',
      title: 'Productivity & Collaboration',
      icon: <Users size={22} color="#D97706" />,
      accentColor: '#D97706',
      tools: [
        { name: 'Jira', icon: <SiJira color="#0052CC" /> },
        { name: 'Confluence', icon: <SiConfluence color="#0052CC" /> },
        { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
        { name: 'VS Code', icon: <Code size={14} color="#007ACC" /> },
        { name: 'DBeaver', icon: <SiDbeaver color="#382923" /> },
        { name: 'Excel', icon: <FileText size={14} color="#217346" /> },
        { name: 'Notion', icon: <SiNotion color="#000000" /> }
      ],
      tagline: 'Cross-functional Agile Workflow',
      description: 'Utilizing modern developer tooling, documentation standards, and agile collaboration platforms for team efficiency.',
      highlights: [
        'Agile sprint planning with Jira & Confluence',
        'UI/UX wireframing for BI dashboards with Figma',
        'Clean documentation in Notion & Markdown'
      ]
    }
  ];

  // Full Categorized Tech Stack Matrix Data
  const techCategories = [
    {
      category: "Programming & Query Languages",
      icon: <Terminal size={18} color="var(--primary)" />,
      items: [
        { name: "Python", icon: <SiPython color="#3776AB" /> },
        { name: "SQL", icon: <SiPostgresql color="#336791" /> },
        { name: "KQL", icon: <Database size={14} color="#0078D4" /> },
        { name: "MQL", icon: <Database size={14} color="#13AA52" /> },
        { name: "JQL", icon: <SiJira size={14} color="#0052CC" /> }
      ]
    },
    {
      category: "Data Ingestion & Collection (DE/AE focus)",
      icon: <Download size={18} color="#6557FF" />,
      items: [
        { name: "Airbyte", icon: <SiAirbyte color="#6557FF" /> },
        { name: "Fivetran", icon: <Code size={14} color="#005DFF" /> },
        { name: "DLT", icon: <Download size={14} color="#FF694B" /> },
        { name: "Selenium", icon: <SiSelenium color="#43B02A" /> },
        { name: "BeautifulSoup", icon: <Code size={14} color="#3776AB" /> }
      ]
    },
    {
      category: "Transformation & Orchestration (AE focus)",
      icon: <Workflow size={18} color="#E11D48" />,
      items: [
        { name: "dbt", icon: <SiDbt color="#FF694B" /> },
        { name: "Airflow", icon: <SiApacheairflow color="#017CEE" /> },
        { name: "Astronomer", icon: <Workflow size={14} color="#23D9FF" /> },
        { name: "Apache Spark", icon: <SiApachespark color="#E25A1C" /> },
        { name: "Dagster", icon: <Workflow size={14} color="#1890FF" /> },
        { name: "Kestra", icon: <Workflow size={14} color="#FF6B6B" /> },
        { name: "Mage", icon: <Code size={14} color="#9D4EDD" /> }
      ]
    },
    {
      category: "Data Platforms & Storage",
      icon: <Layers size={18} color="#0284C7" />,
      items: [
        { name: "GCP", icon: <SiGooglecloud color="#4285F4" /> },
        { name: "AWS", icon: <Cloud size={14} color="#FF9900" /> },
        { name: "Azure", icon: <Cloud size={14} color="#0078D4" /> },
        { name: "BigQuery", icon: <SiGooglebigquery color="#3367D6" /> },
        { name: "Snowflake", icon: <SiSnowflake color="#29B5E8" /> },
        { name: "Databricks", icon: <SiDatabricks color="#FF3621" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
        { name: "SQL Server", icon: <Database size={14} color="#CC2927" /> },
        { name: "Oracle", icon: <Database size={14} color="#F80000" /> },
        { name: "MongoDB", icon: <SiMongodb color="#13AA52" /> },
        { name: "Supabase", icon: <SiSupabase color="#3ECF8E" /> }
      ]
    },
    {
      category: "BI, Analytics & Visualization (DA/BI focus)",
      icon: <BarChart3 size={18} color="#059669" />,
      items: [
        { name: "Power BI", icon: <BarChart3 size={14} color="#F2C811" /> },
        { name: "Looker Studio", icon: <SiLooker color="#4285F4" /> },
        { name: "Superset", icon: <SiApachesuperset color="#00A2D3" /> },
        { name: "Metabase", icon: <SiMetabase color="#509EE3" /> },
        { name: "GA4 / Analytics", icon: <SiGoogleanalytics color="#E37400" /> },
        { name: "SmartLook", icon: <Eye size={14} color="#FF6B35" /> }
      ]
    },
    {
      category: "Collaboration & Productivity Tools",
      icon: <Users size={18} color="#D97706" />,
      items: [
        { name: "Jira", icon: <SiJira color="#0052CC" /> },
        { name: "Confluence", icon: <SiConfluence color="#0052CC" /> },
        { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
        { name: "VS Code", icon: <Code size={14} color="#007ACC" /> },
        { name: "DBeaver", icon: <SiDbeaver color="#382923" /> },
        { name: "Excel", icon: <FileText size={14} color="#217346" /> },
        { name: "Notion", icon: <SiNotion color="#000000" /> }
      ]
    }
  ];

  return (
    <section id="architecture" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title">Data Architecture & Tech Stack</h2>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            marginTop: '-1rem'
          }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', margin: 0, maxWidth: '640px' }}>
              Select any architectural stage below to explore its pipeline workflow and integrated tech stack.
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
                      gap: '0.65rem',
                      position: 'relative'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                      <span style={{
                        fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase',
                        letterSpacing: '0.08em', color: isActive ? step.accentColor : 'var(--text-muted)'
                      }}>
                        {step.stage}
                      </span>
                      <div style={{
                        padding: '0.4rem', borderRadius: '8px',
                        background: isActive ? 'var(--tag-bg)' : 'var(--surface-low)',
                        display: 'flex'
                      }}>
                        {step.icon}
                      </div>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 800, fontFamily: 'Space Grotesk', lineHeight: 1.25, margin: '0 0 0.2rem 0', color: 'var(--text-main)' }}>
                        {step.title}
                      </h4>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                        {step.tagline}
                      </span>
                    </div>
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
