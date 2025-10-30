            , current.rating))
          )
        ),
        React.createElement('div', { className: 'carousel-controls' },
          React.createElement('button', {
            className: 'btn-icon',
            onClick: () => setIndex((i) => (i - 1 + items.length) % items.length),
            'aria-label': 'Previous testimonial'
          }, '‹'),
          React.createElement('button', {
            className: 'btn-icon',
            onClick: () => setIndex((i) => (i + 1) % items.length),
            'aria-label': 'Next testimonial'
          }, '›')
        )
      )
    )
  );
});

const CaseStudies = memo(function CaseStudies({ items }) {
  return (
    React.createElement('section', { id: 'cases', className: 'section' },
      React.createElement('div', { className: 'container' },
        React.createElement('h2', null, 'Featured Case Studies'),
        React.createElement('div', { className: 'grid-3' },
          items.map((c, i) => (
            React.createElement('article', { key: i, className: 'card case-card' },
              React.createElement('h3', null, c.client),
              React.createElement('p', { className: 'muted' }, `${c.industry} • Challenge: ${c.challenge}`),
              React.createElement('p', null, `Results: ${c.results}`)
            )
          ))
        ),
        React.createElement('div', { className: 'cta-row center' },
          React.createElement('a', { href: '#contact', className: 'btn btn-primary' }, 'Book Strategy Call')
        )
      )
    )
  );
});

const About = memo(function About({ about }) {
  return (
    React.createElement('section', { id: 'about', className: 'section' },
      React.createElement('div', { className: 'container grid-2' },
        React.createElement('div', null,
          React.createElement('h2', null, about.title),
          React.createElement('p', null, about.body)
        ),
        React.createElement('aside', { className: 'cta-panel' },
          React.createElement('h3', null, 'Ready to Grow?'),
          React.createElement('p', { className: 'muted' }, 'Get a free audit and roadmap.'),
          React.createElement('a', { href: '#contact', className: 'btn btn-primary' }, 'Get a Free SEO Audit')
        )
      )
    )
  );
});

const FAQ = memo(function FAQ({ items }) {
  const [open, setOpen] = useState(0);
  return (
    React.createElement('section', { id: 'faq', className: 'section' },
      React.createElement('div', { className: 'container' },
        React.createElement('h2', null, 'Frequently Asked Questions'),
        React.createElement('div', { className: 'accordion', role: 'tablist' },
          items.map((f, i) => (
            React.createElement('div', { key: i, className: 'accordion-item' },
              React.createElement('button', {
                className: 'accordion-header',
                role: 'tab',
                'aria-expanded': open === i,
                'aria-controls': `faq-panel-${i}`,
                id: `faq-tab-${i}`,
                onClick: () => setOpen(open === i ? -1 : i)
              }, f.q),
              React.createElement('div', {
                id: `faq-panel-${i}`,
                role: 'tabpanel',
                'aria-labelledby': `faq-tab-${i}`,
                hidden: open !== i,
                className: 'accordion-panel'
              }, React.createElement('p', null, f.a))
            )
          ))
        )
      )
    )
  );
});

const Blog = memo(function Blog({ posts }) {
  return (
    React.createElement('section', { id: 'blog', className: 'section' },
      React.createElement('div', { className: 'container' },
        React.createElement('h2', null, 'Latest Resources'),
        React.createElement('div', { className: 'grid-3' },
          posts.map((p, i) => (
            React.createElement('article', { key: i, className: 'card blog-card' },
              React.createElement('h3', null, p.title),
              React.createElement('p', { className: 'muted' }, p.desc),
              React.createElement('a', { href: p.href, className: 'btn-link' }, 'Read More')
            )
          ))
        )
      )
    )
  );
});

const Contact = memo(function Contact({ contact }) {
  const [status, setStatus] = useState('idle');
  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('sent');
  };
  return (
    React.createElement('section', { id: 'contact', className: 'section contact' },
      React.createElement('div', { className: 'container grid-2' },
        React.createElement('form', { className: 'card form', onSubmit },
          React.createElement('h2', null, 'Get a Free SEO Audit'),
          React.createElement('label', null, 'Name', React.createElement('input', { type: 'text', name: 'name', required: true, placeholder: 'Your name' })),
          React.createElement('label', null, 'Email', React.createElement('input', { type: 'email', name: 'email', required: true, placeholder: 'you@example.com' })),
          React.createElement('label', null, 'Website', React.createElement('input', { type: 'url', name: 'website', required: true, placeholder: 'https://yourdomain.com' })),
          React.createElement('label', null, 'Message', React.createElement('textarea', { name: 'message', rows: 4, placeholder: 'Tell me about your goals' })),
          React.createElement('button', { type: 'submit', className: 'btn btn-primary' }, 'Request Audit'),
          status === 'sent' ? React.createElement('p', { role: 'status', className: 'success' }, 'Thanks! I will get back shortly.') : null
        ),
        React.createElement('aside', { className: 'contact-side' },
          React.createElement('h3', null, 'Connect'),
          React.createElement('ul', { className: 'contact-links' },
            React.createElement('li', null, React.createElement('a', { href: contact.whatsapp, target: '_blank', rel: 'noopener', 'aria-label': 'WhatsApp' }, 'WhatsApp')),
            React.createElement('li', null, React.createElement('a', { href: contact.linkedin, target: '_blank', rel: 'noopener', 'aria-label': 'LinkedIn' }, 'LinkedIn')),
            React.createElement('li', null, React.createElement('a', { href: contact.upwork, target: '_blank', rel: 'noopener', 'aria-label': 'Upwork' }, 'Upwork')),
            React.createElement('li', null, React.createElement('a', { href: contact.email, 'aria-label': 'Email' }, 'Email'))
          )
        )
      )
    )
  );
});

/*****************
 * App Shell
 *****************/
const App = () => {
  useMeta(portfolioData.meta);
  useEffect(() => {
    document.documentElement.lang = 'en';
  }, []);
  return (
    React.createElement(React.Fragment, null,
      React.createElement(Schema, { org: portfolioData.org, faq: portfolioData.faq, localBusiness: portfolioData.localBusiness }),
      React.createElement(Header, { nav: portfolioData.navigation }),
      React.createElement('main', { id: 'main', role: 'main' },
        React.createElement(HeroSection, { data: portfolioData.hero }),
        React.createElement(TrustDashboard, { trust: portfolioData.trust }),
        React.createElement(Services, { services: portfolioData.services }),
        React.createElement(Testimonials, { items: portfolioData.testimonials }),
        React.createElement(CaseStudies, { items: portfolioData.cases }),
        React.createElement(About, { about: portfolioData.about }),
        React.createElement(FAQ, { items: portfolioData.faq }),
        React.createElement(Blog, { posts: portfolioData.blog }),
        React.createElement(Contact, { contact: portfolioData.contact })
      ),
      React.createElement('footer', { className: 'footer' },
        React.createElement('div', { className: 'container' },
          React.createElement('p', null, '© ', new Date().getFullYear(), ' Jawwad Ahmed Khan. All rights reserved.'),
          React.createElement('div', { className: 'cta-row center' },
            React.createElement('a', { href: '#contact', className: 'btn btn-secondary' }, 'Download SEO Checklist')
          )
        )
      ),
      React.createElement('style', { dangerouslySetInnerHTML: { __html: baseStyles } })
    )
  );
};

/*****************
 * Styles (CSS-in-JS for single-file deploy)
 *****************/
const baseStyles = `
:root{--bg:#090b10;--card:#0f1220;--muted:#9aa4b2;--text:#eef2f6;--brand:#3ad1a9;--brand-2:#51a9ff;--border:#1c2233}
*{box-sizing:border-box}
html,body,#root{height:100%}
body{margin:0;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,'Helvetica Neue',Arial;line-height:1.6;color:var(--text);background:var(--bg)}
a{color:inherit;text-decoration:none}
.container{max-width:1120px;margin-inline:auto;padding:0 20px}
.header{position:sticky;top:0;background:rgba(9,11,16,.8);backdrop-filter:saturate(180%) blur(10px);border-bottom:1px solid var(--border);z-index:10}
.flex-between{display:flex;justify-content:space-between;align-items:center;padding:12px 0}
.brand{display:flex;gap:10px;align-items:center;font-weight:700}
.nav-list{display:flex;gap:18px;list-style:none;padding:0;margin:0}
.nav-list a{padding:8px 10px;border-radius:8px}
.nav-list a:hover{background:#12172a}
.section{padding:56px 0}
.grid-2{display:grid;grid-template-columns:1.1fr .9fr;gap:36px}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.hero .sub{color:var(--muted);max-width:56ch}
.cta-row{display:flex;gap:12px;margin-top:14px;flex-wrap:wrap}
.cta-row.center{justify-content:center}
.btn{display:inline-block;border-radius:10px;padding:10px 16px;font-weight:600}
.btn-primary{background:linear-gradient(135deg,var(--brand),var(--brand-2));color:#071018}
.btn-secondary{background:#141a2f;border:1px solid var(--border)}
.btn-link{color:var(--brand)}
.card{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:18px}
.trust .metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;list-style:none;padding:0;margin:0}
.metric-card{display:flex;flex-direction:column;align-items:center;gap:6px;padding:14px;border-radius:12px;background:#0d1224}
.metric-value{font-size:28px;font-weight:800;color:var(--brand)}
.metric-label{color:var(--muted)}
.logos{display:flex;gap:22px;align-items:center;opacity:.8;flex-wrap:wrap;margin-top:16px}
.service-card h3{margin-top:0}
.testimonial-card{max-width:760px;margin:0 auto;text-align:center}
.rating{display:inline-block;margin-left:8px;color:#ffcc66}
.case-card h3{margin-top:0}
.muted{color:var(--muted)}
.form label{display:block;margin:8px 0}
.form input,.form textarea{width:100%;margin-top:6px;border-radius:10px;border:1px solid var(--border);background:#0b0f1d;color:var(--text);padding:10px}
.form button{margin-top:10px}
.success{color:#3ad1a9}
.footer{border-top:1px solid var(--border);padding:28px 0;background:#0b0f1d}
.hero-visual img{width:100%;height:auto;border-radius:14px;border:1px solid var(--border);background:#0d1224}
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
@media (max-width: 960px){.grid-2{grid-template-columns:1fr}.grid-3{grid-template-columns:repeat(2,1fr)}.grid-4{grid-template-columns:repeat(2,1fr)}}
@media (max-width: 640px){.grid-3,.grid-4{grid-template-columns:1fr}.nav-list{gap:10px;font-size:14px}.hero .sub{font-size:15px}}
`;

/*****************
 * Mount
 *****************/
const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));
