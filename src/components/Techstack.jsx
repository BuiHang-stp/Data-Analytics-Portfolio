import React from 'react';
import {
  SiPython, SiPostgresql, SiDbt, SiApacheairflow, SiSnowflake,
  SiDatabricks, SiSupabase, SiApachespark, SiAirbyte, SiSelenium,
  SiGooglecloud, SiGooglebigquery, SiLooker, SiApachesuperset,
  SiMetabase, SiGoogleanalytics, SiJira, SiConfluence, SiFigma,
  SiNotion, SiDbeaver, SiMongodb
} from 'react-icons/si';
import {
  Database, Terminal, Cloud, BarChart3, Workflow,
  PieChart, Code, Download, Layers, ShieldCheck,
  Eye, FileText, Layout, Users
} from 'lucide-react';

export const techStackData = [
    {
      category: "Programming & Query Languages",
      icon: <Terminal size={20} />,
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
      icon: <Download size={20} />,
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
      icon: <Workflow size={20} />,
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
      icon: <Layers size={20} />,
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
      icon: <BarChart3 size={20} />,
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
      category: "Collaboration & Tools",
      icon: <Users size={20} />,
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

export default function Techstack() {
  return (
    <section id="techstack" className="section">
      <div className="container">
        <h2 className="section-title">End-to-End Stack</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2.5rem'
        }}>
        {techStackData.map((group, idx) => (
          <div key={idx} className="glass-panel animate-fade-in" style={{
            animationDelay: `${idx * 0.1}s`,
            border: '1px solid var(--outline-low)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header Group */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              marginBottom: '1.5rem', paddingBottom: '0.875rem',
              borderBottom: '1px solid var(--outline-low)'
            }}>
              <div style={{ color: 'var(--primary)', opacity: 0.8 }}>
                {group.icon}
              </div>
              <h3 style={{
                fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--text-main)', margin: 0
              }}>
                {group.category}
              </h3>
            </div>

            {/* Icons Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '0.75rem'
            }}>
              {group.items.map((tech, tIdx) => (
                <div
                  key={tIdx}
                  className="tech-item-hover"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    background: 'var(--surface-container)',
                    padding: '0.5rem 0.75rem', borderRadius: '6px',
                    border: '1px solid transparent',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    {tech.icon}
                  </div>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: 600,
                    color: 'var(--text-muted)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      </div>

      <style>{`
        .tech-item-hover:hover {
          background: var(--tag-bg) !important;
          border-color: var(--tag-border) !important;
          transform: translateY(-2px);
        }
        .tech-item-hover:hover span {
          color: var(--primary) !important;
        }
      `}</style>
    </section>
  );
}
