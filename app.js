const { useState, useEffect, useRef, useCallback } = React;
const { createRoot } = ReactDOM;

// Portfolio Data
const portfolioData = {
  personalInfo: {
    name: "Jawwad Ahmed Khan",
    title: "SEO Specialist",
    tagline: "Providing the best SEO Solutions",
    bio: "I'm an SEO Specialist with experience in Website SEO Audits, Schema, On-Page & Technical SEO, Off-Page SEO, Voice SEO, Local SEO, Ecommerce SEO, Content Optimization. Click below for Pricings."
  },
  socialLinks: {
    whatsapp: "https://wa.me/+923180840075",
    upwork: "https://www.upwork.com/freelancers/~01449dba2630d968e7?mp_source=share",
    linkedin: "https://www.linkedin.com/in/jawad-ahmed-khan-seo-services/",
    instagram: "https://www.instagram.com/jawwad_ahmed_khan93/"
  },
  navigation: ["About Me", "Skills", "Projects", "Blogs", "FAQs", "Contact"],
  heroTools: [
    "Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", 
      "Content Strategy", "Schema Markup", "Core Web Vitals", "Local SEO", "Analytics", "SERP Tracking"
  ],
  skillsTools: [
    { name: "Google Search Console", category: "Analytics" },
    { name: "Google Analytics (GA4)", category: "Analytics" },
    { name: "Perplexity Pro", category: "AI Tools" },
    { name: "Ahrefs", category: "SEO Tools" },
    { name: "Semrush", category: "SEO Tools" },
    { name: "Moz Pro", category: "SEO Tools" },
    { name: "Screaming Frog SEO Spider", category: "Crawling" },
    { name: "Surfer SEO", category: "Content" },
    { name: "Rank Math", category: "WordPress" },
    { name: "Yoast SEO", category: "WordPress" },
    { name: "Bing Webmaster Tools", category: "Analytics" },
    { name: "Webflow", category: "Development" },
    { name: "Google Keyword Planner", category: "Research" },
    { name: "Looker Studio", category: "Reporting" },
    { name: "SE Ranking", category: "SEO Tools" },
    { name: "AnswerThePublic", category: "Research" },
    { name: "Keywords Everywhere", category: "Research" },
    { name: "Google Trends", category: "Research" },
    { name: "SimilarWeb", category: "Analytics" },
    { name: "Majestic SEO", category: "Link Analysis" },
    { name: "Hotjar", category: "UX Analytics" },
    { name: "Zapier", category: "Automation" },
    { name: "Canva", category: "Design" }
  ],
  securityFeatures: {
    title: "Safe. Secure. Search-Ready.",
    description: "Ensuring site integrity, data privacy, and technical compliance for every project. Secure, trustworthy, and search engine-friendly websites maximize user confidence and ranking potential.",
    icons: ["Core Web Vitals", "SSL/TLS certificates", "Google Lighthouse", "HTTPS", "Schema.org"]
  },
  projects: [
    {
      title: "E-Commerce SEO Overhaul",
      description: "Transformed an online store's search visibility and sales through comprehensive technical and on-page SEO.",
      techStack: ["Google Search Console", "Ahrefs", "Screaming Frog", "Shopify", "Google Analytics"],
      achievements: ["150% organic traffic increase", "Boosted keyword rankings for 'summer shoes'", "2x CTR improvement on key product pages"]
    },
    {
      title: "Local Service Business Ranking Boost",
      description: "Optimized a local plumbing company's website for Google Maps and local searches.",
      techStack: ["Google Business Profile", "Moz Local", "Surfer SEO", "WordPress", "Google Keyword Planner"],
      achievements: ["#1 map pack listings for 'emergency plumber near me'", "40% increase in phone inquiries", "20+ new Google reviews"]
    },
    {
      title: "Content-Driven Blog SEO Strategy",
      description: "Developed and executed a data-backed SEO content plan for a technology review blog.",
      techStack: ["Semrush", "Google Trends", "Yoast SEO", "Looker Studio", "WordPress"],
      achievements: ["Grew from 2K to 12K monthly sessions", "Multiple posts ranked in Google Discover", "DA increase from 18 to 28"]
    },
    {
      title: "Technical SEO Site Audit & Remediation",
      description: "Identified and resolved technical SEO barriers for a SaaS company website.",
      techStack: ["Screaming Frog", "Google Lighthouse", "Bing Webmaster Tools", "GTmetrix"],
      achievements: ["Fixed crawling/indexing issues", "40% reduction in site load time", "Improved Core Web Vitals to 'Good'", "Featured snippets gained"]
    },
    {
      title: "Affiliate Website SEO & Monetization Growth",
      description: "Scaled a niche affiliate website's traffic and revenue with white-hat SEO and conversion rate optimization.",
      techStack: ["Ahrefs", "SimilarWeb", "Rank Math", "Canva", "Google AdSense"],
      achievements: ["3x affiliate revenue increase", "600+ keyword  expansion", "Multiple top-5 rankings for buyer-intent keywords"]
    }
  ]
};

// Three.js Animation Component
const ThreeBackground = ({ heroTools }) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    sceneRef.current = scene;
    rendererRef.current = renderer;
    
    // Create floating objects
    const objects = [];
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.5, 8, 6),
      new THREE.ConeGeometry(0.5, 1, 8),
      new THREE.TetrahedronGeometry(0.8),
      new THREE.OctahedronGeometry(0.6)
    ];
    
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x32B8C5, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x2DA6B2, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x208091, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x1D7480, wireframe: true }),
      new THREE.MeshBasicMaterial({ color: 0x1A6873, wireframe: true })
    ];

    // Create floating SEO tool representations
    for (let i = 0; i < heroTools.length; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);
      
      // Random positioning
      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 10;
      mesh.position.z = (Math.random() - 0.5) * 10;
      
      // Store initial position and rotation speeds
      mesh.userData = {
        initialY: mesh.position.y,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: 0.5 + Math.random() * 0.5,
        floatAmplitude: 1 + Math.random() * 2
      };
      
      scene.add(mesh);
      objects.push(mesh);
    }
    
    camera.position.z = 15;
    
    // Animation loop
    const animate = (time) => {
      objects.forEach((mesh) => {
        // Rotation
        mesh.rotation.x += mesh.userData.rotationSpeed.x;
        mesh.rotation.y += mesh.userData.rotationSpeed.y;
        mesh.rotation.z += mesh.userData.rotationSpeed.z;
        
        // Floating animation
        mesh.position.y = mesh.userData.initialY + 
          Math.sin(time * 0.001 * mesh.userData.floatSpeed) * mesh.userData.floatAmplitude;
      });
      
      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };
    
    animate(0);
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      // Cleanup
      objects.forEach((mesh) => {
        scene.remove(mesh);
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) mesh.material.dispose();
      });
    };
  }, [heroTools]);

  return <canvas ref={canvasRef} className="three-canvas" />;
};

// Header Component
const Header = ({ socialLinks }) => {
  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo">
          <i className="fas fa-search" style={{marginRight: '8px'}}></i>
          
        </div>
        <nav>
          <ul className="nav-menu">
            {portfolioData.navigation.map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="nav-link">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="social-links">
          <a href={socialLinks.whatsapp} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href={socialLinks.upwork} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
            <i className="fas fa-briefcase"></i>
          </a>
          <a href={socialLinks.linkedin} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href={socialLinks.instagram} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = ({ personalInfo, socialLinks, heroTools }) => {
  return (
    <section className="hero" id="about-me">
      <div className="hero-background">
        <ThreeBackground heroTools={heroTools} />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">{personalInfo.titleo</h1>
        <p className="hero-tagline">{personalInfo.tagline}</p>
        <p className="hero-description">{personalInfo.bio}</p>
        <a href={socialLinks.upwork} className="cta-button" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-external-link-alt"></i>
          View Upwork Profile
        </a>
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = ({ skillsTools, securityFeatures }) => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const cardRef = useCallback((node, index) => {
    if (node && observerRef.current) {
      node.dataset.index = index;
      observerRef.current.observe(node);
    }
  }, []);

  const getToolIcon = (toolName) => {
    const iconMap = {
      'Google Search Console': 'fas fa-search',
      'Google Analytics (GA4)': 'fas fa-chart-line',
      'Perplexity Pro': 'fas fa-brain',
      'Ahrefs': 'fas fa-link',
      'Semrush': 'fas fa-chart-bar',
      'Moz Pro': 'fas fa-rocket',
      'Screaming Frog SEO Spider': 'fas fa-spider',
      'Surfer SEO': 'fas fa-wave-square',
      'Rank Math': 'fas fa-trophy',
      'Yoast SEO': 'fas fa-check-circle',
      'Bing Webmaster Tools': 'fas fa-tools',
      'Webflow': 'fas fa-code',
      'Google Keyword Planner': 'fas fa-key',
      'Looker Studio': 'fas fa-chart-pie',
      'SE Ranking': 'fas fa-ranking-star',
      'AnswerThePublic': 'fas fa-question-circle',
      'Keywords Everywhere': 'fas fa-globe',
      'Google Trends': 'fas fa-trending-up',
      'SimilarWeb': 'fas fa-sitemap',
      'Majestic SEO': 'fas fa-crown',
      'Hotjar': 'fas fa-mouse-pointer',
      'Zapier': 'fas fa-bolt',
      'Canva': 'fas fa-palette'
    };
    return iconMap[toolName] || 'fas fa-cog';
  };

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Think Bigger with Advanced SEO Tools</h2>
      <p className="section-subtitle">
        Optimizing digital presence with proven SEO strategies. Never miss a ranking, opportunity, or insight.
      </p>
      
      <div className="skills-grid">
        {skillsTools.map((tool, index) => (
          <div 
            key={index}
            ref={(node) => cardRef(node, index)}
            className={`skill-card fade-in ${visibleCards.has(String(index)) ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-icon">
              <i className={getToolIcon(tool.name)}></i>
            </div>
            <h4 className="skill-name">{tool.name}</h4>
            <p className="skill-category">{tool.category}</p>
          </div>
        ))}
      </div>

      <div className="security-section">
        <h3>{securityFeatures.title}</h3>
        <p>{securityFeatures.description}</p>
        <div className="security-icons">
          {securityFeatures.icons.map((icon, index) => (
            <div key={index} className="security-icon" title={icon}>
              <i className="fas fa-shield-alt"></i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const cardRef = useCallback((node, index) => {
    if (node && observerRef.current) {
      node.dataset.index = index;
      observerRef.current.observe(node);
    }
  }, []);

  return (
    <section className="section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        Showcasing successful SEO implementations and their measurable impact on business growth.
      </p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index}
            ref={(node) => cardRef(node, index)}
            className={`project-card fade-in ${visibleProjects.has(String(index)) ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
            </div>
            <div className="project-content">
              <p className="project-description">{project.description}</p>
              
              <div className="tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <ul className="achievements">
                {project.achievements.map((achievement, achieveIndex) => (
                  <li key={achieveIndex} className="achievement">{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Footer Component
const Footer = ({ socialLinks }) => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-cta">
          <h3>Ready to Boost Your SEO Rankings?</h3>
          <p className="footer-text">
            Let's work together to elevate your website's search performance and drive organic growth.
          </p>
          <a href={socialLinks.upwork} className="cta-button" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-handshake"></i>
            Start Your Project
          </a>
        </div>
        <p className="footer-text">© 2025 Jawwad Ahmed Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Loading Component
const Loading = ({ isLoading }) => {
  return (
    <div className={`loading ${!isLoading ? 'fade-out' : ''}`}>
      <div className="spinner"></div>
    </div>
  );
};

// Main Portfolio App
const PortfolioApp = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for 3D elements
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Smooth scroll for navigation links
    const handleNavClick = (e) => {
      if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  return (
    <div className="portfolio-app">
      <Loading isLoading={isLoading} />
      <Header socialLinks={portfolioData.socialLinks} />
      <main>
        <HeroSection 
          personalInfo={portfolioData.personalInfo}
          socialLinks={portfolioData.socialLinks}
          heroTools={portfolioData.heroTools}
        />
        <SkillsSection 
          skillsTools={portfolioData.skillsTools}
          securityFeatures={portfolioData.securityFeatures}
        />
        <ProjectsSection projects={portfolioData.projects} />
      </main>
      <Footer socialLinks={portfolioData.socialLinks} />
    </div>
  );
};

// Render the application
const root = createRoot(document.getElementById('root'));
root.render(<PortfolioApp />);
