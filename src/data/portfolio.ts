import type { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'MOHIT KUMAR',
    titles: [
      'Software Developer',
      'Data Engineer',
      'AI/ML Developer',
      'Full Stack Developer',
    ],
    tagline: 'Building high-performance data pipelines, backend APIs, and intelligent AI systems inspired by engineering clarity and natural elegance.',
    summary:
      'Computer Science undergraduate at Birla Institute of Technology, Mesra with core expertise across Software Development, Data Engineering, Backend Systems, and Generative AI. Proven track record in architecting RAG-based systems with vector databases, optimizing algorithms (ACO, PSO, Genetic Algorithms), developing high-throughput FastAPI/PostgreSQL backends, and engineering real-time computer vision safety pipelines.',
    extendedBio: [
      'I am an engineer focused at the intersection of robust backend engineering, high-scale data systems, and intelligent machine learning applications.',
      'My technical work spans architecting RAG pipelines using PostgreSQL + pgvector and Sentence Transformers, developing RESTful microservices with FastAPI and SQLAlchemy, and applying heuristic optimization algorithms (ACO, PSO) to complex real-world graphs.',
      'I value clean code, strong typing, algorithmic efficiency, and scalable system architecture, with a hands-on approach from low-level data modeling to full production deployment.'
    ],
    email: 'mohitkumar947275@gmail.com',
    phone: '9472759149',
    avatarUrl: '/avatar.png',
    location: 'Ranchi / Jharkhand, India',
    college: 'Birla Institute of Technology, Mesra',
    degree: 'B.Tech, Computer Science & Engineering',
    graduationYear: 'Expected May 2027',
    resumeUrl: '/resume/Mohit_Kumar_Resume.pdf',
    socials: {
      github: 'https://github.com/mohit-kumar-28',
      linkedin: 'https://www.linkedin.com/in/mohit-kumar-3803692a7',
      email: 'mailto:mohitkumar947275@gmail.com',
      phone: 'tel:+919472759149',
    },
    stats: [
      { label: 'Query Latency', value: '200–500ms', description: 'pgvector semantic search' },
      { label: 'Retrieval Boost', value: '~60%', description: 'RAG system efficiency' },
      { label: 'Data Analyzed', value: '50K+', description: 'Banking transaction records' },
      { label: 'Simulated Scale', value: '1,000+', description: 'Traffic optimization vehicles' },
    ],
  },

  specializations: [
    {
      id: 'ai-genai',
      title: 'AI-Powered Applications',
      subtitle: 'RAG, LLMs, NLP & Semantic Retrieval',
      description:
        'Architecting enterprise retrieval-augmented generation pipelines, fine-tuned text embedding workflows, pgvector similarity search, and conversational intelligence.',
      iconName: 'BrainCircuit',
      technologies: ['RAG', 'LLMs', 'Sentence Transformers', 'pgvector', 'Hugging Face', 'Scikit-learn'],
      gradient: 'from-emerald-500/10 via-sky-500/10 to-transparent',
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering Systems',
      subtitle: 'Data Ingestion, Pipelines & Storage',
      description:
        'Designing scalable data ingestion pipelines, automated cleaning workflows, relational schema modeling, vector indexing, and high-throughput query execution.',
      iconName: 'DatabaseZap',
      technologies: ['PostgreSQL', 'pgvector', 'MySQL', 'MongoDB', 'SQLAlchemy', 'Pandas'],
      gradient: 'from-sky-500/10 via-teal-500/10 to-transparent',
    },
    {
      id: 'backend-systems',
      title: 'Backend Systems & APIs',
      subtitle: 'FastAPI, Microservices & Architecture',
      description:
        'Developing production-grade REST APIs with FastAPI & Flask, implementing JWT authentication, robust Role-Based Access Control (RBAC), and schema validation.',
      iconName: 'ServerCrash',
      technologies: ['FastAPI', 'Flask', 'REST APIs', 'SQLAlchemy', 'PostgreSQL'],
      gradient: 'from-teal-500/10 via-emerald-500/10 to-transparent',
    },
    {
      id: 'analytics-optimization',
      title: 'Analytics & Decision Systems',
      subtitle: 'Data Science, BI & Metaheuristics',
      description:
        'Deriving actionable business intelligence from complex datasets, constructing interactive multi-KPI dashboards, and implementing metaheuristic optimization.',
      iconName: 'LineChart',
      technologies: ['SQL', 'Pandas', 'NumPy', 'Power BI', 'Excel Dashboards'],
      gradient: 'from-amber-500/10 via-emerald-500/10 to-transparent',
    },
  ],

  skillCategories: [
    {
      id: 'programming',
      title: 'Programming',
      iconName: 'Code2',
      skills: [
        { name: 'Python', featured: true },
        { name: 'Java', featured: true },
        { name: 'JavaScript', featured: true },
        { name: 'C', featured: false },
        { name: 'SQL', featured: true },
      ],
    },
    {
      id: 'backend',
      title: 'Backend',
      iconName: 'Server',
      skills: [
        { name: 'FastAPI', featured: true },
        { name: 'Flask', featured: false },
        { name: 'REST APIs', featured: true },
      ],
    },
    {
      id: 'data-databases',
      title: 'Data & Databases',
      iconName: 'Database',
      skills: [
        { name: 'PostgreSQL', featured: true },
        { name: 'MySQL', featured: false },
        { name: 'MongoDB', featured: false },
        { name: 'SQLAlchemy', featured: true },
        { name: 'pgvector', featured: true },
      ],
    },
    {
      id: 'ai-ml',
      title: 'AI / ML',
      iconName: 'Sparkles',
      skills: [
        { name: 'Machine Learning', featured: true },
        { name: 'Scikit-learn', featured: true },
        { name: 'RAG', featured: true },
        { name: 'LLMs', featured: true },
        { name: 'NLP', featured: true },
        { name: 'Sentence Transformers', featured: true },
        { name: 'Hugging Face', featured: false },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend',
      iconName: 'Layout',
      skills: [
        { name: 'React', featured: true },
        { name: 'HTML', featured: false },
        { name: 'CSS', featured: false },
      ],
    },
    {
      id: 'data-analytics',
      title: 'Data / Analytics',
      iconName: 'BarChart3',
      skills: [
        { name: 'Pandas', featured: true },
        { name: 'NumPy', featured: true },
        { name: 'Power BI', featured: true },
        { name: 'Excel', featured: true },
      ],
    },
    {
      id: 'tools',
      title: 'Tools',
      iconName: 'Wrench',
      skills: [
        { name: 'Git', featured: true },
        { name: 'GitHub', featured: true },
        { name: 'Docker', featured: true },
        { name: 'Streamlit', featured: true },
      ],
    },
  ],

  impactMetrics: [
    {
      value: '60%',
      label: 'Retrieval Efficiency',
      sublabel: 'Improvement in RAG information discovery speed',
      category: 'Generative AI',
      sourceProject: 'Enterprise AI Assistant',
    },
    {
      value: '200–500',
      suffix: 'ms',
      label: 'Semantic Query Latency',
      sublabel: 'High-throughput pgvector similarity search response',
      category: 'Vector Search',
      sourceProject: 'Enterprise AI Assistant',
    },
    {
      value: '50,000+',
      label: 'Transactions Modeled',
      sublabel: 'Analyzed for customer patterns and fraud indicators',
      category: 'Data Analytics',
      sourceProject: 'Bank Transaction Analysis',
    },
    {
      value: '60–70%',
      label: 'Analysis Time Reduction',
      sublabel: 'Automated natural language SQL & KPI generation',
      category: 'Business Intelligence',
      sourceProject: 'InsightIQ',
    },
    {
      value: '20%',
      label: 'Route Efficiency Gain',
      sublabel: 'Optimized travel paths over Bangalore traffic grid',
      category: 'Metaheuristics',
      sourceProject: 'Real-Time Route Prediction',
    },
    {
      value: '25%+',
      label: 'Congestion Reduction',
      sublabel: 'Dynamic priority queue and GA traffic scheduling',
      category: 'Optimization',
      sourceProject: 'Traffic Light Optimization',
    },
    {
      value: '1,000+',
      label: 'Simulated Vehicles',
      sublabel: 'Real-time agent simulation with priority queues',
      category: 'Simulations',
      sourceProject: 'Traffic Light Optimization',
    },
    {
      value: '10+',
      label: 'Executive KPIs',
      sublabel: 'Interactive banking metrics, slicers, and trends',
      category: 'BI Modeling',
      sourceProject: 'Bank Transaction Analysis',
    },
  ],

  projects: [
    {
      id: 'enterprise-ai-assistant',
      number: '01',
      title: 'Enterprise AI Assistant',
      category: 'AI & Generative AI',
      tagline: 'RAG-based enterprise document intelligence & semantic vector search platform',
      description:
        'Production-grade Retrieval-Augmented Generation (RAG) assistant that indexes heterogeneous enterprise documents into vector embeddings for sub-second semantic retrieval and context-grounded LLM answers.',
      longDescription:
        'Engineered an end-to-end Enterprise AI Assistant leveraging PostgreSQL + pgvector for high-dimensional vector similarity search. Integrates Sentence Transformers for chunk embedding, FastAPI for asynchronous API endpoints with JWT authentication and Role-Based Access Control (RBAC), and a responsive React chat UI.',
      problem:
        'Enterprise knowledge was fragmented across unstructured files and documentation, causing slow manual search times, knowledge worker friction, and high latency when accessing critical internal knowledge.',
      solution:
        'Constructed a robust RAG pipeline: document parsing, chunking with overlap, semantic embedding generation via Sentence Transformers, indexing in PostgreSQL pgvector, similarity retrieval with cosine distance, and LLM prompt grounding.',
      architecture: [
        { title: 'Ingestion & Chunking', desc: 'PDF, text, and doc ingestion with token-aware semantic windowing' },
        { title: 'Embedding Model', desc: 'Sentence Transformers generating high-dimensional dense vector embeddings' },
        { title: 'Vector Store (pgvector)', desc: 'PostgreSQL database with pgvector HNSW/IVFFlat similarity indexing' },
        { title: 'FastAPI Backend', desc: 'Async endpoints with Pydantic validation, JWT tokens, and RBAC policies' },
        { title: 'React Chat Interface', desc: 'Real-time conversational streaming UI with citations and source viewing' },
      ],
      technologies: [
        'Python',
        'FastAPI',
        'React',
        'RAG',
        'LLMs',
        'PostgreSQL',
        'pgvector',
        'Sentence Transformers',
        'SQLAlchemy',
        'JWT Auth',
        'RBAC',
      ],
      impactMetrics: [
        { value: '~60%', label: 'Retrieval efficiency boost over manual searches' },
        { value: '200–500ms', label: 'Query response latency for pgvector semantic search' },
        { value: '100%', label: 'Role-based access policy enforcement' },
      ],
      verifiedFeatures: [
        'RAG-based document question answering with strict citation support',
        'Embedding-based document retrieval using Sentence Transformers',
        'PostgreSQL + pgvector similarity search with 200–500 ms response times',
        'FastAPI backend with asynchronous request routing and Pydantic validation',
        'Secure JWT authentication and Role-Based Access Control (RBAC)',
        'Modern React interactive chat interface',
      ],
      contribution: [
        'Designed database schema and pgvector indexing strategy for sub-500ms retrieval',
        'Implemented FastAPI asynchronous REST endpoints and JWT/RBAC security layer',
        'Built embedding generation and cosine similarity retrieval pipeline in Python',
        'Developed interactive React frontend chat component with real-time feedback',
      ],
      visualType: 'rag-pipeline',
      githubUrl: 'https://github.com/mohit-kumar-28/Enterprise-AI-Assistant',
      featured: true,
    },
    {
      id: 'insightiq',
      number: '02',
      title: 'InsightIQ — AI Business Intelligence',
      category: 'Data & Analytics',
      tagline: 'Natural-language AI-powered data analytics and automated KPI generation engine',
      description:
        'Intelligent business analytics platform converting natural language queries into executable SQL queries, automated data summaries, and dynamic visualizations over CSV and PDF datasets.',
      longDescription:
        'InsightIQ revolutionizes business intelligence by bridging plain English questions to deep analytical database queries. Built with Python, Streamlit, LangChain, RAG, SQL, and LLMs to analyze multi-source datasets and render automated KPI dashboards on demand.',
      problem:
        'Non-technical stakeholders depend heavily on data engineering teams to write complex SQL queries and build manual dashboards, resulting in days of delay for routine business decisions.',
      solution:
        'Created a natural-language-to-SQL engine combined with automated statistical summarization, anomaly detection, and dynamic chart generation in Streamlit.',
      architecture: [
        { title: 'Multi-Format Ingestion', desc: 'Loads raw CSV datasets and structured PDF documents into runtime memory' },
        { title: 'Schema Introspection', desc: 'Extracts column metadata, data types, and relational constraints' },
        { title: 'NL to SQL Engine', desc: 'LangChain & LLM prompt framework generating validated SQL queries' },
        { title: 'Execution & Analysis', desc: 'Executes queries against data stores and calculates statistical KPIs' },
        { title: 'Streamlit Dashboard', desc: 'Renders dynamic interactive charts, metric scorecards, and data grids' },
      ],
      technologies: ['Python', 'Streamlit', 'LangChain', 'RAG', 'SQL', 'LLMs', 'Pandas'],
      impactMetrics: [
        { value: '60–70%', label: 'Reduction in manual data-analysis turnaround time' },
        { value: 'Zero-Code', label: 'Natural-language self-service querying for non-technical users' },
      ],
      verifiedFeatures: [
        'AI-powered Business Intelligence with instant natural language query execution',
        'Automated KPI generation and statistical summary calculation',
        'Seamless analysis across CSV files and PDF document tables',
        'Natural-language to verified SQL translation',
        'Automated visualization rendering charts, trends, and metrics',
        'Interactive Streamlit UI for immediate data exploration',
      ],
      contribution: [
        'Implemented LangChain LLM orchestration and prompt engineering for accurate SQL generation',
        'Constructed data parsing and validation routines for heterogeneous CSV/PDF inputs',
        'Built automated visualization dispatchers mapping query results to appropriate charts',
      ],
      visualType: 'bi-dashboard',
      githubUrl: 'https://github.com/mohit-kumar-28/INSIGHTIQ',
      featured: true,
    },
    {
      id: 'bank-transaction-analysis',
      number: '03',
      title: 'Bank Transaction Analysis & Fraud Analytics',
      category: 'Data & Analytics',
      tagline: 'Comprehensive financial modeling & anomaly detection over 50,000+ banking transactions',
      description:
        'Large-scale financial data engineering and analytics project analyzing 50,000+ transactional records using advanced SQL queries, customer segmentation, fraud indicator modeling, and multi-KPI interactive dashboards.',
      longDescription:
        'Engineered an analytical framework processing 50,000+ banking transaction records. Extracted customer spending trends, flagged high-risk fraud patterns, and structured dimensional data models powering an interactive Excel dashboard with 10+ core executive KPIs.',
      problem:
        'Raw transaction logs contained hidden fraudulent anomalies and fragmented spending patterns that standard manual auditing failed to identify quickly.',
      solution:
        'Executed deep SQL aggregation, window functions, and data modeling to categorize transactions, isolate outlier velocity spikes, and build a unified executive BI dashboard.',
      architecture: [
        { title: 'Data Cleaning & Prep', desc: 'Deduplication, timestamp normalization, and currency formatting in SQL' },
        { title: 'Dimensional Modeling', desc: 'Star schema with Fact Transactions and Customer/Merchant dimensions' },
        { title: 'Fraud Rule Engine', desc: 'Window queries detecting sudden velocity spikes and abnormal amounts' },
        { title: 'KPI Aggregation', desc: 'Calculation of customer lifetime volume, churn risk, and fraud ratios' },
        { title: 'Interactive BI Dashboard', desc: 'Excel dashboard with dynamic slicers, pivot charts, and KPI cards' },
      ],
      technologies: ['SQL', 'Excel Dashboards', 'Data Modeling', 'Data Cleaning', 'EDA', 'Financial Analytics'],
      impactMetrics: [
        { value: '50,000+', label: 'Banking transaction records analyzed and modeled' },
        { value: '10+', label: 'Executive KPIs tracked in real-time dashboards' },
      ],
      verifiedFeatures: [
        'Processed and analyzed 50,000+ real-world banking transactions',
        'Deep customer trend analysis and behavioral pattern extraction',
        'Rule-based fraud indicator detection and transaction anomaly flagging',
        '10+ dynamic executive KPIs with interactive slicers and pivot models',
        'Comprehensive multi-chart visual dashboard',
      ],
      contribution: [
        'Wrote complex multi-table SQL queries, CTEs, and window functions for analytics',
        'Modeled star schema and relational dimensions for efficient reporting',
        'Designed interactive financial dashboard with dynamic slicers and charts',
      ],
      visualType: 'bank-analysis',
      githubUrl: 'https://github.com/mohit-kumar-28/bank-transaction-analysis',
      featured: true,
    },
    {
      id: 'real-time-route-prediction',
      number: '04',
      title: 'Real-Time Route Prediction & Optimization',
      category: 'Algorithms & Optimization',
      tagline: 'Metaheuristic traffic pathfinding using Ant Colony Optimization & PSO on Bangalore road networks',
      description:
        'Intelligent pathfinding and traffic congestion mitigation engine utilizing Ant Colony Optimization (ACO), Particle Swarm Optimization (PSO), and Best First Search over real Bangalore road network traffic datasets.',
      longDescription:
        'Engineered heuristic algorithms to solve dynamic shortest-path and congestion routing problems across Bangalore traffic networks. Simulated 100+ concurrent route scenarios, achieving a 20% efficiency improvement in simulated route transit times.',
      problem:
        'Urban traffic congestion in complex road networks creates dynamic bottlenecks that static routing algorithms (e.g. traditional Dijkstra) fail to optimize in changing conditions.',
      solution:
        'Implemented bio-inspired optimization algorithms (ACO pheromone updates, PSO velocity particles) to dynamically discover optimal non-congested routes across graph topologies.',
      architecture: [
        { title: 'Graph Construction', desc: 'Bangalore road network mapped into weighted directed graph nodes' },
        { title: 'Dynamic Weighting', desc: 'Real-time simulated congestion and speed decay applied to edges' },
        { title: 'ACO Pathfinding', desc: 'Ant Colony agents deposit pheromones along fast flowing segments' },
        { title: 'PSO Optimization', desc: 'Particle swarm agents continuously explore multi-objective trade-offs' },
        { title: 'Visualization Engine', desc: 'Real-time rendering of active paths and congestion heatmaps' },
      ],
      technologies: ['Python', 'ACO', 'PSO', 'Best First Search', 'Algorithms & Optimization', 'Graph Theory'],
      impactMetrics: [
        { value: '20%', label: 'Simulated route efficiency improvement over baseline' },
        { value: '100+', label: 'Concurrent simulated routes evaluated' },
      ],
      verifiedFeatures: [
        'Trained and evaluated on Bangalore road network traffic datasets',
        'Ant Colony Optimization (ACO) for dynamic pheromone-driven routing',
        'Particle Swarm Optimization (PSO) and Best First Search path algorithms',
        'Simulated 100+ concurrent route configurations with real-time visualization',
        'Demonstrated ~20% improvement in routing efficiency',
      ],
      contribution: [
        'Implemented ACO and PSO heuristic algorithms from mathematical foundations in Python',
        'Constructed graph representation of urban road networks with dynamic edge costs',
        'Visualized route path convergence and pheromone decay dynamics',
      ],
      visualType: 'route-optimizer',
      githubUrl: 'https://github.com/mohit-kumar-28/intelligent-traffic-control',
      featured: true,
    },
    {
      id: 'traffic-light-optimization',
      number: '05',
      title: 'Traffic Light Optimization System',
      category: 'Algorithms & Optimization',
      tagline: 'Dynamic intersection signal scheduling using Priority Queues, Genetic Algorithms & PSO',
      description:
        'Dynamic urban intersection traffic management simulation combining Priority Queues, Genetic Algorithms, and Particle Swarm Optimization to minimize intersection waiting times and vehicle queue buildup.',
      longDescription:
        'Designed an algorithmic traffic signal controller that dynamically adjusts green light cycle durations according to live vehicle priority and lane queue densities, reducing simulated congestion by over 25% across 1,000+ simulated vehicles.',
      problem:
        'Fixed-timer traffic signals cause severe idle delays on empty lanes while opposing lanes experience massive vehicle queues during peak hours.',
      solution:
        'Developed an adaptive scheduling algorithm combining Priority Queues (emergency vehicle preemption) with Genetic Algorithms & PSO for optimal phase duration allocation.',
      architecture: [
        { title: 'Vehicle Queue Sensing', desc: 'Priority queue tracking emergency vehicles and vehicle counts per lane' },
        { title: 'Genetic Algorithm', desc: 'Evolves optimal green-light time slices across multi-way intersections' },
        { title: 'PSO Fine-Tuning', desc: 'Adapts cycle timing to adjacent intersection wave flows' },
        { title: 'Signal Actuation', desc: 'Dispatches real-time phase transitions and lane clears' },
      ],
      technologies: ['Priority Queue', 'Genetic Algorithm', 'PSO', 'Python', 'Algorithms & Simulation'],
      impactMetrics: [
        { value: '25%+', label: 'Simulated congestion and wait time reduction' },
        { value: '1,000+', label: 'Simulated vehicles managed concurrently' },
      ],
      verifiedFeatures: [
        'Priority Queue-based emergency vehicle and queue density scheduling',
        'Genetic Algorithm optimization for dynamic green signal duration',
        'Particle Swarm Optimization for intersection coordination',
        '25%+ reduction in simulated intersection congestion',
        'Scalable simulation supporting 1,000+ vehicles simultaneously',
      ],
      contribution: [
        'Designed multi-lane priority queue data structures with fast insertion and dispatch',
        'Built Genetic Algorithm fitness functions minimizing aggregate vehicle wait times',
        'Simulated dynamic traffic patterns across varying density loads',
      ],
      visualType: 'traffic-light',
      githubUrl: 'https://github.com/mohit-kumar-28/intelligent-traffic-control',
      featured: false,
    },
  ],

  experience: [
    {
      id: 'tata-motors',
      company: 'Tata Motors',
      role: 'Industrial Safety Monitoring — Intern',
      period: 'May 2026 – July 2026',
      location: 'India',
      type: 'Internship',
      technologies: ['YOLOv11', 'OpenCV', 'Streamlit', 'Python', 'Computer Vision'],
      description:
        'Engineered real-time computer vision safety monitoring systems to automate Personal Protective Equipment (PPE) compliance detection and restricted-zone perimeter surveillance across industrial shop floor environments.',
      highlights: [
        'Real-time industrial safety monitoring and video analytics using YOLOv11 and OpenCV',
        'Automated PPE compliance detection (hard hats, safety vests, boots) with high accuracy',
        'Restricted-zone perimeter intrusion violation detection and boundary tracking',
        'Instant automated alerting mechanism with incident timestamp logging',
        'Interactive Streamlit monitoring dashboard for plant safety supervisors',
      ],
      pipelineSteps: [
        'Camera Stream Ingestion (RTSP/Video Feeds)',
        'YOLOv11 Deep Learning Object & PPE Detection',
        'Restricted Zone Geometry & Polygon Intersection Checking',
        'Real-Time Safety Violation Alerting Engine',
        'Incident Log Persistence & Streamlit Supervisor Dashboard',
      ],
    },
  ],

  leadership: [
    {
      id: 'abhivyakti-society',
      role: 'General Secretary',
      organization: 'Abhivyakti Society — BIT Mesra',
      period: 'Sep 2023 – Present',
      type: 'Student Leadership',
      description:
        'Leading executive operations, strategic planning, team coordination, and administrative liaisons for one of the premier student organizations at BIT Mesra.',
      skills: ['Team Coordination', 'Event Planning', 'Scheduling', 'Logistics', 'Administration Coordination'],
      points: [
        'Spearhead end-to-end planning, scheduling, logistics, and execution for major college-wide events and cultural productions',
        'Coordinate directly with college administration, faculty mentors, and external vendor partners',
        'Lead and mentor cross-functional student teams across management, logistics, and technical execution',
      ],
    },
    {
      id: 'robotics-society',
      role: 'Member',
      organization: 'Robotics Society — BIT Mesra',
      period: 'Sep 2024 – Present',
      type: 'Technical Society',
      description:
        'Contributing to autonomous robotics concepts, logic design, automation workflows, and hardware-software prototype development.',
      skills: ['Automation Logic', 'AI-Driven Robotics', 'System Design', 'Prototype Testing'],
      points: [
        'Collaborate on automation logic design and control algorithms for robotic prototypes',
        'Explore AI-driven robotics concepts, sensor integration, and intelligent actuation',
        'Participate in hands-on prototype assembly, testing, and algorithmic performance tuning',
      ],
    },
  ],

  education: [
    {
      id: 'class-10',
      stage: 'Class 10',
      institution: 'Surendranath Centenary School, Ranchi',
      degreeOrExam: 'Secondary School Examination (Class X)',
      scoreOrField: '92.33%',
      period: '2020 – 2021',
      location: 'Ranchi, Jharkhand',
      status: 'Completed',
      isProminent: false,
      highlights: [
        'Graduated with distinction scoring 92.33%',
        'Strong academic foundation in Mathematics, Science, and Logical Problem Solving',
      ],
    },
    {
      id: 'class-12',
      stage: 'Class 12',
      institution: 'DAV Public School, Bariatu, Ranchi',
      degreeOrExam: 'Senior Secondary Examination (Class XII - Science)',
      scoreOrField: '81.00%',
      period: '2021 – 2023',
      location: 'Ranchi, Jharkhand',
      status: 'Completed',
      isProminent: false,
      highlights: [
        'Senior secondary coursework in Physics, Chemistry, Mathematics, and Computer Science',
        'Active participation in analytical and coding competitions',
      ],
    },
    {
      id: 'bit-mesra',
      stage: 'Graduation',
      institution: 'Birla Institute of Technology, Mesra',
      degreeOrExam: 'Bachelor of Technology (B.Tech)',
      scoreOrField: 'Computer Science & Engineering',
      period: '2023 – May 2027 (Expected)',
      location: 'Ranchi, Jharkhand, India',
      status: 'Undergraduate Degree',
      isProminent: true,
      highlights: [
        'Rigorous foundational curriculum in computer science, software engineering, and applied computing',
        'Active executive and technical leadership across college societies',
        'Hands-on engineering projects spanning GenAI, high-throughput backend APIs, and optimization algorithms',
      ],
      relevantCoursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (Java/C++)',
        'Database Management Systems (DBMS)',
        'Operating Systems',
        'Computer Networks',
        'Artificial Intelligence & Machine Learning',
        'Design & Analysis of Algorithms',
      ],
    },
  ],
};
