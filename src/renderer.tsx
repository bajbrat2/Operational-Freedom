import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title, description }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || 'Operational Freedom | Human-Centered AI. Built for the Real World.'}</title>
        <meta name="description" content={description || 'Operational Freedom empowers business owners to leverage AI automation without losing the human connection that makes their business exceptional.'} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="/static/style.css" rel="stylesheet" />
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
      </body>
    </html>
  )
})
