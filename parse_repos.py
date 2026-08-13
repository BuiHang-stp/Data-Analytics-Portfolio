import json
import urllib.request
import urllib.error
import concurrent.futures
import os
from datetime import datetime

# Fetch repos from GitHub API
def fetch_github_repos(username):
    """Fetch all public repos for a GitHub user"""
    repos = []
    page = 1
    per_page = 100
    
    while True:
        url = f"https://api.github.com/users/{username}/repos?per_page={per_page}&page={page}&sort=updated&direction=desc"
        try:
            req = urllib.request.Request(url, headers={
                'User-Agent': 'Mozilla/5.0',
                'Accept': 'application/vnd.github.v3+json'
            })
            with urllib.request.urlopen(req, timeout=10) as response:
                page_data = json.loads(response.read().decode('utf-8'))
                if not page_data:
                    break
                repos.extend(page_data)
                page += 1
        except Exception as e:
            print(f"Error fetching page {page}: {e}")
            break
    
    return repos

def fetch_readme(repo_name, default_branch):
    """Fetch README from repository with multiple fallback URLs"""
    urls = [
        f"https://raw.githubusercontent.com/tunguyenn99/{repo_name}/{default_branch}/README.md",
        f"https://raw.githubusercontent.com/tunguyenn99/{repo_name}/main/README.md",
        f"https://raw.githubusercontent.com/tunguyenn99/{repo_name}/master/README.md",
        f"https://raw.githubusercontent.com/tunguyenn99/{repo_name}/{default_branch}/README.MD",
        f"https://raw.githubusercontent.com/tunguyenn99/{repo_name}/{default_branch}/readme.md"
    ]
    for url in urls:
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=5) as response:
                if response.status == 200:
                    return response.read().decode('utf-8', errors='ignore')
        except Exception:
            continue
    return ""

def extract_techstack(readme, repo_name, description):
    """
    Extract tech stack from README content with comprehensive pattern matching
    Returns list of detected technologies
    """
    if not readme:
        return []
    
    content_to_check = (repo_name + " " + (description or "") + " " + readme).lower()
    
    # Comprehensive tech detection with patterns
    tech_patterns = {
        # Data Engineering & Orchestration
        'dbt': r'\bdbt\b',
        'Airflow': r'airflow|apache.?airflow',
        'Spark': r'spark|pyspark|apache.?spark',
        'Databricks': r'databricks',
        'Kestra': r'kestra',
        'Dagster': r'dagster',
        'Mage': r'mage\.ai|mageai',
        'Fivetran': r'fivetran',
        'Airbyte': r'airbyte',
        'DLT': r'\bdlt\b|data.?load.?tool',
        
        # Databases & Data Platforms
        'Snowflake': r'snowflake',
        'BigQuery': r'bigquery|big.?query',
        'PostgreSQL': r'postgresql|postgres\b',
        'MySQL': r'mysql\b',
        'MongoDB': r'mongodb',
        'Supabase': r'supabase',
        'Trino': r'trino|presto',
        'Iceberg': r'iceberg|apache.?iceberg',
        'Redis': r'redis\b',
        'Elasticsearch': r'elasticsearch',
        'Oracle': r'\boracle\b',
        'SQL Server': r'sql.?server|mssql',
        
        # Cloud Platforms
        'GCP': r'\bgcp\b|google.?cloud.?platform|google.?cloud\b',
        'AWS': r'\baws\b|amazon.?web.?services',
        'Azure': r'\bazure\b|microsoft.?azure',
        
        # Infrastructure & DevOps
        'Docker': r'docker',
        'Kubernetes': r'kubernetes|k8s\b',
        'GitHub Actions': r'github.?actions?|workflows?',
        
        # Programming Languages
        'Python': r'\bpython\b|\.py\b',
        'SQL': r'\bsql\b',
        'JavaScript': r'javascript|node\.js|nodejs',
        'Java': r'\bjava\b|\.java',
        'Go': r'\bgo\b|golang',
        'Rust': r'\brust\b',
        
        # Data Processing Libraries
        'Pandas': r'pandas',
        'NumPy': r'numpy',
        'Scikit-learn': r'scikit.?learn|sklearn',
        'TensorFlow': r'tensorflow',
        'PyTorch': r'pytorch',
        
        # Visualization & BI Tools
        'Power BI': r'power.?bi|powerbi',
        'Tableau': r'tableau',
        'Metabase': r'metabase',
        'Looker': r'looker(?!\s)',
        'Superset': r'superset|apache.?superset',
        'Matplotlib': r'matplotlib',
        'Seaborn': r'seaborn',
        'Plotly': r'plotly',
        
        # Web Frameworks & APIs
        'FastAPI': r'fastapi',
        'Flask': r'flask\b',
        'Django': r'django\b',
        'React': r'react\.js|react\b',
        'Vue': r'vue\.js|vue\b',
        
        # Data Formats & Serialization
        'Parquet': r'parquet',
        'Avro': r'avro\b',
        'JSON': r'json\b',
        'CSV': r'csv\b',
        'XML': r'xml\b',
        'Protobuf': r'protobuf|proto\b',
        
        # Web Scraping & HTTP
        'Selenium': r'selenium',
        'BeautifulSoup': r'beautifulsoup|bs4\b',
        'Requests': r'requests.?library|import requests|requests\b',
        'Scrapy': r'scrapy',
        
        # Development Tools
        'Git': r'\bgit\b',
        'GitHub': r'github\.com|@github',
        'GitLab': r'gitlab',
        'VS Code': r'vscode|vs.?code',
        'Jupyter': r'jupyter',
        'DBeaver': r'dbeaver',
        
        # Testing & Quality
        'Pytest': r'pytest',
        'unittest': r'unittest',
        'Jira': r'jira\b',
        'Confluence': r'confluence',
        
        # Other Tools
        'Excel': r'excel|xlsxwriter',
        'Notion': r'notion',
        'Figma': r'figma',
        'Streamlit': r'streamlit',
        'uv': r'\buv\b|uv.?python|uv.?package',
        'GA4': r'ga4|google.?analytics',
        'SmartLook': r'smartlook',
        'Faker': r'faker\b|faker\.py',
        'Kafka': r'kafka|apache\.?kafka',
        'MQ': r'rabbitmq|ibm\.?mq',
    }
    
    detected_tech = set()
    
    import re
    for tech, pattern in tech_patterns.items():
        try:
            if re.search(pattern, content_to_check):
                detected_tech.add(tech)
        except:
            # Fallback to simple string matching if regex fails
            if pattern.replace('\\b', '').lower() in content_to_check:
                detected_tech.add(tech)
    
    return sorted(list(detected_tech))

def process_repo(repo):
    """Process a single repository to extract metadata and tech stack"""
    name = repo.get('name', '')
    desc = repo.get('description') or ''
    default_branch = repo.get('default_branch', 'main')
    url = repo.get('html_url', '')
    
    # Fetch README
    readme = fetch_readme(name, default_branch)
    has_readme = len(readme) > 0
    readme_lines = len(readme.split('\n')) if readme else 0
    readme_excerpt = readme[:500] if readme else ''
    
    # Extract metadata
    language = repo.get('language') or 'N/A'
    stars = repo.get('stargazers_count', 0)
    forks = repo.get('forks_count', 0)
    is_fork = repo.get('fork', False)
    is_private = repo.get('private', False)
    
    # Parse dates
    created_at = repo.get('created_at', '').split('T')[0]
    updated_at = repo.get('updated_at', '').split('T')[0]
    
    # Extract topics directly from GitHub API (user-defined tags)
    topics = repo.get('topics', [])
    if not topics:
        topics = []
    
    # Extract tech stack
    techstack = extract_techstack(readme, name, desc)
    
    return {
        'name': name,
        'description': desc,
        'url': url,
        'language': language,
        'stars': stars,
        'forks': forks,
        'is_fork': is_fork,
        'is_private': is_private,
        'created_at': created_at,
        'updated_at': updated_at,
        'topics': topics,
        'has_readme': has_readme,
        'readme_lines': readme_lines,
        'readme_excerpt': readme_excerpt,
        'techstack': techstack
    }

def parse_member_count(text):
    import re
    match = re.search(r'([\d\.,]+)\s*([KMBkmb])?', text)
    if not match:
        return None, text
    num_str, unit = match.groups()
    num_val = float(num_str.replace(',', ''))
    if unit:
        u = unit.upper()
        if u == 'K':
            num_val *= 1000
        elif u == 'M':
            num_val *= 1000000
        elif u == 'B':
            num_val *= 1000000000
    return int(num_val), f"{num_str}{unit.upper() if unit else ''}"

def update_community_stats(total_stars=0):
    """Fetch Facebook group member count and update community_stats.json"""
    print("\nFetching Facebook group member count...")
    urls = [
        'https://www.facebook.com/groups/1707916343455196/',
        'https://www.facebook.com/groups/xomdata/'
    ]
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1'
    }
    
    fb_data = None
    import re
    for url in urls:
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=10) as resp:
                html = resp.read().decode('utf-8', errors='ignore')
                match = re.search(r'\"formatted_count_text\"\s*:\s*\"([^\"]+)\"', html)
                if match:
                    count_text = match.group(1)
                    count_num, formatted = parse_member_count(count_text)
                    fb_data = {
                        'count': count_num,
                        'formatted': formatted,
                        'raw_text': count_text
                    }
                    break
                match2 = re.search(r'(\d+(?:\.\d+)?[KMB]?)\s*(?:members|thành viên)', html, re.IGNORECASE)
                if match2:
                    count_text = match2.group(1)
                    count_num, formatted = parse_member_count(count_text)
                    fb_data = {
                        'count': count_num,
                        'formatted': formatted,
                        'raw_text': count_text
                    }
                    break
        except Exception as e:
            print(f"Error fetching {url}: {e}")
            
    stats_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'community_stats.json')
    existing = {}
    if os.path.exists(stats_file):
        try:
            with open(stats_file, 'r') as f:
                existing = json.load(f)
        except Exception:
            pass
            
    fb_stats = fb_data and {
        'url': 'https://www.facebook.com/groups/1707916343455196/',
        'member_count': fb_data['count'],
        'formatted_count': fb_data['formatted'],
        'raw_text': fb_data['raw_text'],
        'updated_at': datetime.now().isoformat()
    } or existing.get('facebook_group') or {
        'url': 'https://www.facebook.com/groups/1707916343455196/',
        'member_count': 104100,
        'formatted_count': '104.1K',
        'raw_text': '104.1K members',
        'updated_at': datetime.now().isoformat()
    }

    if fb_data:
        print(f"✅ Extracted FB group member count: {fb_data['formatted']} ({fb_data['count']} members)")
    else:
        print("⚠️ Could not fetch live FB group stats, using existing/fallback stats")

    community_stats = {
        'facebook_group': fb_stats,
        'github': {
            'total_stars': total_stars,
            'updated_at': datetime.now().isoformat()
        }
    }
        
    with open(stats_file, 'w') as f:
        json.dump(community_stats, f, indent=2)
    print(f"✅ Saved community stats (FB: {fb_stats.get('formatted_count')}, GitHub Stars: {total_stars}) to community_stats.json")

# Fetch repos from GitHub API
print("Fetching repos from GitHub API...")
repos = fetch_github_repos('tunguyenn99')

# Filter only public repos
public_repos = [repo for repo in repos if not repo.get('private', False)]

print(f"Processing {len(public_repos)} public repos...")
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
    results = list(executor.map(process_repo, public_repos))

# Sort by stars descending
results.sort(key=lambda x: x['stars'], reverse=True)

# Save to repos_analysis.json
output_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'repos_analysis.json')
with open(output_path, 'w') as f:
    json.dump(results, f, indent=2)

total_stars = sum(r.get('stars', 0) for r in results)
print(f"✅ Analyzed {len(results)} repos ({total_stars} total stars). Saved to repos_analysis.json")
print(f"Sample tech stacks:")
for repo in results[:3]:
    print(f"  - {repo['name']}: {', '.join(repo['techstack'][:5])}{'...' if len(repo['techstack']) > 5 else ''}")

# Run community stats update
update_community_stats(total_stars=total_stars)



