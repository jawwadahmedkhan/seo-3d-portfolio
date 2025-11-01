const {
  useState, useEffect, useRef, useCallback
} = React;
const { createRoot } = ReactDOM;
// Portfolio Data
const portfolioData = {
  personalInfo: {
    name: "Jawwad Ahmed Khan",
    title: "Lead SEO Specialist",
    tagline: "Providing Proven SEO Solutions for Growth",
    bio: "Unlock higher rankings, more traffic, and real business results. As an experienced SEO specialist, I deliver:\n\n- Comprehensive Website SEO Audits\n- On-Page & Technical SEO Optimization\n- Schema Implementation\n- Off-Page & Voice Search SEO\n- Local & Ecommerce SEO Strategies\n- AI-Driven SEO and Content Optimization\n\nReady to elevate your website’s visibility and sales?\nClick below for custom pricing and a FREE mini audit."
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
    "Content Strategy", "Schema Markup", "Core Web Vitals", "Local SEO",
    "Analytics", "SERP Tracking"
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
  }
};

// The rest of the file remains unchanged below...
