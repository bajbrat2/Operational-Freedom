import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title, description, schema, path, ogImage }) => {
  const siteUrl = 'https://operational-freedom.com';
  const canonicalUrl = `${siteUrl}${path || '/'}`;
  const pageTitle = title || 'Operational Freedom | Human-Centered AI. Built for the Real World.';
  const pageDescription = description || 'Operational Freedom empowers business owners to leverage AI automation without losing the human connection that makes their business exceptional.';
  const socialImage = ogImage || `${siteUrl}/static/logo.png`;

  const globalSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://operational-freedom.com/#organization",
      "name": "Operational Freedom",
      "url": "https://operational-freedom.com",
      "logo": "https://operational-freedom.com/static/logo.png",
      "description": "AI automation consulting that helps businesses implement practical AI systems to simplify operations, capture opportunities, and strengthen customer relationships.",
      "founder": { "@id": "https://operational-freedom.com/#person" },
      "email": "bev@bevscheider.com",
      "areaServed": "US",
      "slogan": "Human-Centered AI. Built for the Real World.",
      "knowsAbout": [
        "AI Automation",
        "Business Operations",
        "AI Voice Agents",
        "CRM Automation",
        "Lead Capture Automation",
        "Workflow Automation",
        "AI Chatbots"
      ],
      "sameAs": []
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://operational-freedom.com/#business",
      "name": "Operational Freedom",
      "url": "https://operational-freedom.com",
      "image": "https://operational-freedom.com/static/logo.png",
      "description": "AI automation consulting for small and mid-sized businesses. We build practical AI systems that stop revenue leaks, simplify operations, and buy back your time.",
      "priceRange": "$$-$$$",
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "serviceType": [
        "AI Automation Consulting",
        "AI Voice Agent Deployment",
        "AI Chatbot Development",
        "CRM Automation",
        "Business Process Automation"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Automation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Freedom Roadmap Workshop",
              "url": "https://operational-freedom.com/services#workshop",
              "description": "Strategic deep-dive to identify where AI should already be working in your business. Includes operational audit, revenue leak identification, and phased automation roadmap with ROI projections."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "The 24/7 Digital Anchor",
              "url": "https://operational-freedom.com/services#anchor",
              "description": "Custom AI employee trained on your business that captures leads, qualifies prospects, and books consultations 24/7 through your website."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "The Sentinel Voice System",
              "url": "https://operational-freedom.com/services#sentinel",
              "description": "Professional AI voice agent that answers inbound calls 24/7, qualifies leads, books appointments, and handles FAQs with your brand voice."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "The Operational Freedom Engine",
              "url": "https://operational-freedom.com/services#engine",
              "description": "Complete front-end AI team for your business — CRM integrations, automated workflows, and scalable AI infrastructure delivered through the Consult-Train-Implement model."
            }
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://operational-freedom.com/#person",
      "name": "Beverly Scheider",
      "url": "https://operational-freedom.com/about",
      "image": "https://operational-freedom.com/static/bev-headshot.jpg",
      "jobTitle": "AI Automation Consultant & Founder",
      "worksFor": { "@id": "https://operational-freedom.com/#organization" },
      "description": "35+ years of business operations and IT leadership. Six Sigma Green Belt. Builds practical AI automation systems for small and mid-sized businesses using the Consult-Train-Implement model.",
      "knowsAbout": [
        "AI Automation",
        "Business Operations",
        "Process Improvement",
        "Six Sigma",
        "IT Leadership",
        "CRM Systems",
        "AI Voice Agents"
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "Six Sigma Green Belt"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://operational-freedom.com/#website",
      "name": "Operational Freedom",
      "url": "https://operational-freedom.com",
      "publisher": { "@id": "https://operational-freedom.com/#organization" }
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": ["Home", "About", "Services", "The Roadmap", "Contact", "Book a Call"],
      "url": [
        "https://operational-freedom.com/",
        "https://operational-freedom.com/about",
        "https://operational-freedom.com/services",
        "https://operational-freedom.com/roadmap",
        "https://operational-freedom.com/contact",
        "https://links.aiservices.amplifyroiai.com/widget/booking/sjYrt5urlLvUY3YE03UJ"
      ]
    }
  ];

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Operational Freedom" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={socialImage} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link href="/static/style.css" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }} />
        {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
      </head>
      <body>
        {/* Navigation */}
        <nav class="nav" id="main-nav">
          <div class="nav-container">
            <a href="/" class="nav-logo">
              <img src="/static/logo.png" alt="Operational Freedom" class="nav-logo-img" />
            </a>
            <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu">
              <span></span><span></span><span></span>
            </button>
            <div class="nav-links" id="nav-links">
              <a href="/" class="nav-link">Home</a>
              <a href="/about" class="nav-link">About</a>
              <a href="/services" class="nav-link">Services</a>
              <a href="/roadmap" class="nav-link">The Roadmap</a>
              <a href="https://links.aiservices.amplifyroiai.com/widget/booking/sjYrt5urlLvUY3YE03UJ" target="_blank" rel="noopener" class="nav-link nav-cta">Book a Call</a>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer class="footer">
          <div class="footer-container">
            <div class="footer-brand">
              <a href="/">
                <img src="/static/logo.png" alt="Operational Freedom" class="footer-logo-img" />
              </a>
            </div>
            <div class="footer-links">
              <div class="footer-col">
                <h4>Navigate</h4>
                <a href="/">Home</a>
                <a href="/about">About Beverly</a>
                <a href="/services">Services</a>
                <a href="/roadmap">The Roadmap</a>
                <a href="/contact">Contact</a>
              </div>
              <div class="footer-col">
                <h4>Services</h4>
                <a href="/services#workshop">Freedom Roadmap Workshop</a>
                <a href="/services#anchor">24/7 Digital Anchor</a>
                <a href="/services#sentinel">Sentinel Voice System</a>
                <a href="/services#engine">Operational Freedom Engine</a>
              </div>
              <div class="footer-col">
                <h4>Connect</h4>
                <a href="https://links.aiservices.amplifyroiai.com/widget/booking/sjYrt5urlLvUY3YE03UJ" target="_blank" rel="noopener">Book a Discovery Call</a>
                <a href="mailto:bev@bevscheider.com">bev@bevscheider.com</a>
                <div class="footer-social">
                  <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                  <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                  <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; 2026 Operational Freedom. All rights reserved. | Built with human grit &amp; creative logic.</p>
            <div class="footer-legal">
              <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=724981d2-1685-42ab-864a-5f2224d7b834" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
              <span class="footer-legal-divider">·</span>
              <a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=ca0f2221-ce99-4d2f-b0f7-8bc49aee34a0" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>
            </div>
          </div>
        </footer>

        <script src="/static/app.js"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          // Sticky nav
          window.addEventListener('scroll', function() {
            const nav = document.getElementById('main-nav');
            if (window.scrollY > 50) {
              nav.classList.add('nav-scrolled');
            } else {
              nav.classList.remove('nav-scrolled');
            }
          });

          // Mobile menu
          const hamburger = document.getElementById('nav-hamburger');
          const navLinks = document.getElementById('nav-links');
          hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('nav-open');
            hamburger.classList.toggle('active');
          });

          // Active nav link
          const currentPath = window.location.pathname;
          document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPath) {
              link.classList.add('active');
            }
          });

          // Animate on scroll
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          }, { threshold: 0.1 });

          document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
            observer.observe(el);
          });
        ` }} />

        {/* Voice Widget */}
        <div id="web-widget-container" data-widget-key="600b1748-f129-40b8-bbf1-18ed700bc256"></div>
        <script src="https://d2cqc7yqzf8c8f.cloudfront.net/web-widget-v1.js" defer></script>
      </body>
    </html>
  )
})
