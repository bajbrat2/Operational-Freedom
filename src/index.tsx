import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// ============================================================
// HOME PAGE
// ============================================================
app.get('/', (c) => {
  return c.render(
    <>
      {/* ── HERO ── */}
      <section class="hero">
        <div class="hero-bg"></div>
        <div class="hero-content">
          <div class="hero-text fade-in">
            <p class="hero-eyebrow">AI Automation Consulting</p>
            <h1 class="hero-h1">
              Your Business Should Run<br />
              <span>Without You Running It.</span>
            </h1>
            <p class="hero-tagline">AI Systems Built for Real Operations — by someone who's run real businesses.</p>
            <div class="hero-actions">
              <a href="https://links.aiservices.amplifyroiai.com/widget/booking/sjYrt5urlLvUY3YE03UJ" target="_blank" rel="noopener" class="btn btn-primary">Book a Discovery Call</a>
              <a href="/roadmap" class="btn btn-outline">See the Roadmap</a>
            </div>
          </div>
          <div class="hero-visual fade-in delay-2">
            <div class="hero-stat-card slide-up delay-1">
              <div class="hero-stat-icon"><i class="fas fa-briefcase"></i></div>
              <div class="hero-stat-text">
                <div class="hero-stat-number">35+</div>
                <div class="hero-stat-label">Years of Business Operations</div>
              </div>
            </div>
            <div class="hero-stat-card slide-up delay-2">
              <div class="hero-stat-icon"><i class="fas fa-laptop-code"></i></div>
              <div class="hero-stat-text">
                <div class="hero-stat-number">14+</div>
                <div class="hero-stat-label">Years of IT Leadership</div>
              </div>
            </div>
            <div class="hero-stat-card slide-up delay-3">
              <div class="hero-stat-icon"><i class="fas fa-robot"></i></div>
              <div class="hero-stat-text">
                <div class="hero-stat-number">24/7</div>
                <div class="hero-stat-label">AI Employee Systems Built</div>
              </div>
            </div>
            <div class="hero-stat-card slide-up delay-4">
              <div class="hero-stat-icon"><i class="fas fa-chart-line"></i></div>
              <div class="hero-stat-text">
                <div class="hero-stat-number">ROI</div>
                <div class="hero-stat-label">Every Build Makes Financial Sense</div>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-scroll">
          <i class="fas fa-chevron-down"></i>
          <span>Scroll</span>
        </div>
      </section>

      {/* ── BAND ── */}
      <div class="band">
        <div class="band-inner">
          <span class="band-text">The only consultancy that combines 35 years of business grit</span>
          <div class="band-divider"></div>
          <span class="band-text">with creative thinking to build systems that make financial sense.</span>
        </div>
      </div>

      {/* ── ABOUT TEASER ── */}
      <section class="section about-teaser">
        <div class="container">
          <div class="about-teaser-grid">
            <div class="about-portrait fade-in">
              <div class="about-portrait-frame">
                <img src="/static/bev-headshot.jpg" alt="Beverly Scheider — Founder, Operational Freedom" style="width:100%;border-radius:4px;display:block;object-fit:cover;" />
              </div>
              <div class="about-portrait-badge">
                <div class="badge-num">4</div>
                <div class="badge-text">Companies<br />Founded</div>
              </div>
            </div>
            <div class="about-text slide-up">
              <span class="section-label">About the Builder</span>
              <h2>Systems Built for Life,<br />Not Just for Scale</h2>
              <span class="accent-heading">Where operational grit meets creative logic</span>
              <p>
                For more than 35 years, I've been a builder—of businesses, of operational systems, and of ideas designed to work in the real world. From leading national operations overhauls for major insurance providers to owning multiple companies for over two decades, I have seen firsthand where businesses run and where they break.
              </p>
              <p>
                I believe that efficiency isn't about speed; it's about <strong>freedom</strong>. My background as a commissioned acrylic artist is my greatest technical asset — I see your business as a canvas, not a rigid set of rules.
              </p>
              <div class="about-pillars">
                <div class="pillar">
                  <div class="pillar-icon"><i class="fas fa-shield-alt"></i></div>
                  <div class="pillar-text">Six Sigma Green Belt</div>
                </div>
                <div class="pillar">
                  <div class="pillar-icon"><i class="fas fa-microphone"></i></div>
                  <div class="pillar-text">Speaker & Trainer</div>
                </div>
                <div class="pillar">
                  <div class="pillar-icon"><i class="fas fa-cogs"></i></div>
                  <div class="pillar-text">Consult-Train-Implement</div>
                </div>
              </div>
              <a href="/about" class="btn btn-primary">Read My Full Story</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section class="section services-overview">
        <div class="container">
          <div class="section-header fade-in">
            <span class="section-label">What We Build Together</span>
            <h2>Four Systems.<br />One Operational Freedom.</h2>
            <span class="accent-heading">From stopping revenue leaks to building your full AI team</span>
            <p>Each service is a calculated move — not "cool" tech for tech's sake, but engineered to buy back your most sacred asset: time.</p>
          </div>
          <div class="services-grid">
            <div class="service-card fade-in delay-1">
              <div class="service-card-icon"><i class="fas fa-map-marked-alt"></i></div>
              <div class="service-card-tag">Start Here</div>
              <h3>The Freedom Roadmap Workshop</h3>
              <p>A strategic deep-dive to identify exactly where AI should already be working in your business. We map the gaps, stop the leaks, and chart your path to freedom.</p>
              <a href="/services#workshop" class="service-card-link">Explore Service <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="service-card fade-in delay-2">
              <div class="service-card-icon"><i class="fas fa-user-robot"></i></div>
              <div class="service-card-tag">Phase 1 · 24/7 Lead Capture</div>
              <h3>The 24/7 Digital Anchor</h3>
              <p>A custom AI employee trained on your unique services, personality, and lead capture process — working around the clock so you never miss a prospect again.</p>
              <a href="/services#anchor" class="service-card-link">Explore Service <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="service-card fade-in delay-3">
              <div class="service-card-icon"><i class="fas fa-phone-alt"></i></div>
              <div class="service-card-tag">Phase 1 · Never Miss a Call</div>
              <h3>The Sentinel Voice System</h3>
              <p>A professional voice AI employee that answers inbound calls 24/7, qualifies leads, books appointments, and handles FAQs — with your brand's voice and warmth.</p>
              <a href="/services#sentinel" class="service-card-link">Explore Service <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="service-card fade-in delay-4">
              <div class="service-card-icon"><i class="fas fa-network-wired"></i></div>
              <div class="service-card-tag">Phase 3 · Full System Build</div>
              <h3>The Operational Freedom Engine</h3>
              <p>A fully built, front-end AI team for your business — CRM integrations, automated workflows, and a scalable competitive moat that grows with you.</p>
              <a href="/services#engine" class="service-card-link">Explore Service <i class="fas fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROADMAP PREVIEW ── */}
      <section class="section roadmap-section">
        <div class="container">
          <div class="section-header fade-in">
            <span class="section-label" style="color: var(--sage);">The Framework</span>
            <h2 style="color: var(--white);">The Roadmap<br />to Freedom</h2>
            <span class="accent-heading" style="color: var(--mauve-light);">A phased strategy for systemic remediation</span>
            <p>We don't just hand you a tech stack and walk away. Every phase is designed to build on the last — stopping the bleeding first, then building the moat.</p>
          </div>
          <div class="roadmap-phases">
            <div class="phase-card fade-in delay-1">
              <div class="phase-number">01</div>
              <div class="phase-tag">Emergency Intervention</div>
              <h3>Stop the Bleeding</h3>
              <p>Deploy immediate tools to stop revenue hemorrhaging from missed calls and unresponsive systems.</p>
              <ul class="phase-items">
                <li>24/7 call answering AI deployed</li>
                <li>Lead capture automation live</li>
                <li>Revenue leak audit completed</li>
              </ul>
            </div>
            <div class="phase-card fade-in delay-2">
              <div class="phase-number">02</div>
              <div class="phase-tag">High-Priority Gap Closure</div>
              <h3>Close the Gaps</h3>
              <p>Move from manual, time-draining tasks to automated CRM integrations and intelligent follow-up systems.</p>
              <ul class="phase-items">
                <li>CRM automation connected</li>
                <li>Follow-up sequences built</li>
                <li>Manual task elimination</li>
              </ul>
            </div>
            <div class="phase-card fade-in delay-3">
              <div class="phase-number">03</div>
              <div class="phase-tag">Operational Optimization</div>
              <h3>Build the Moat</h3>
              <p>Construct a competitive, scalable AI Employee Suite that elevates your entire operation and buys back sacred time.</p>
              <ul class="phase-items">
                <li>Full AI Employee Suite deployed</li>
                <li>Scalable systems architected</li>
                <li>Competitive moat established</li>
              </ul>
            </div>
          </div>
          <div class="text-center" style="margin-top: 48px; position: relative; z-index: 3;">
            <a href="/roadmap" class="btn btn-sage">Deep Dive into the Roadmap</a>
          </div>
        </div>
      </section>

      {/* ── ONLINESS ── */}
      <section class="onliness-section">
        <div class="onliness-inner">
          <span class="section-label">Why Operational Freedom</span>
          <p class="onliness-statement">
            We are the only consultancy that combines <strong>35 years of business grit</strong> with creative "out-of-the-box" thinking to build automated systems that <strong>actually make financial sense.</strong>
          </p>
          <a href="https://links.aiservices.amplifyroiai.com/widget/booking/sjYrt5urlLvUY3YE03UJ" target="_blank" rel="noopener" class="btn btn-outline">Start Your Freedom Journey</a>
        </div>
      </section>

      {/* ── TRUST / TESTIMONIALS ── removed, placeholder for real testimonials ── */}

      {/* ── CTA BANNER ── */}
      <section class="cta-banner">
        <div class="container">
          <span class="section-label">Ready to Build?</span>
          <h2>Stop the Revenue Leaks.<br />Buy Back Your Time.</h2>
          <span class="accent-heading">Your freedom starts with one conversation.</span>
          <p>In 30 minutes, we'll identify exactly where AI should already be working for you — and what it would cost to make that happen.</p>
          <div class="cta-actions">
            <a href="https://links.aiservices.amplifyroiai.com/widget/booking/sjYrt5urlLvUY3YE03UJ" target="_blank" rel="noopener" class="btn btn-sage">Book Your Free Discovery Call</a>
            <a href="/services" class="btn btn-outline">Explore All Services</a>
          </div>
        </div>
      </section>
    </>,
    {
      title: 'Operational Freedom | Human-Centered AI. Built for the Real World.',
      description: 'Beverly Scheider combines 35 years of business operations with creative AI thinking to build systems that make financial sense for small and mid-sized businesses.'
    }
  )
})

// ============================================================
// ABOUT PAGE
// ============================================================
app.get('/about', (c) => {
  return c.render(
    <>
      <section class="page-hero">
        <div class="page-hero-content">
          <span class="section-label" style="color: var(--sage);">The Builder Behind the Brand</span>
          <h1>About Beverly Scheider</h1>
          <span class="accent-heading">35 years of grit. One mission: your freedom.</span>
        </div>
      </section>

      <section class="section story-section">
        <div class="container">
          <div class="story-grid">
            {/* Sidebar */}
            <div class="story-sidebar fade-in">
              <div class="story-sticky">
                <div class="story-img-block">
                  <img
                    src="/static/bev-headshot.jpg"
                    alt="Beverly Scheider — AI Consultant, Speaker, Builder"
                    style="width:100%;border-radius:8px;display:block;object-fit:cover;box-shadow:0 12px 40px rgba(78,84,87,0.2);"
                  />
                </div>
                <div class="credentials">
                  <div class="credential-item">
                    <i class="fas fa-robot"></i>
                    <span>AI Automation Specialist</span>
                  </div>
                  <div class="credential-item">
                    <i class="fas fa-certificate"></i>
                    <span>Six Sigma Green Belt</span>
                  </div>
                  <div class="credential-item">
                    <i class="fas fa-building"></i>
                    <span>20+ Years Business Ownership</span>
                  </div>
                  <div class="credential-item">
                    <i class="fas fa-microphone-alt"></i>
                    <span>Keynote Speaker & Trainer</span>
                  </div>
                  <div class="credential-item">
                    <i class="fas fa-palette"></i>
                    <span>Commissioned Acrylic Artist</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div class="story-content slide-up">
              <h2>Systems Built for Life,<br />Not Just for Scale</h2>
              <span class="accent-heading">Where 35 years of operational grit meets the eye of an artist</span>
              <p>
                For more than 35 years, I've been a builder — of businesses, of operational systems, and of ideas designed to work in the real world. From leading national operations overhauls for major insurance providers to owning multiple companies for over two decades, I have seen firsthand where businesses run and where they break.
              </p>
              <p>
                I believe that efficiency isn't about speed; it's about freedom.
              </p>

              <div class="pullquote">
                <p>"I don't see a business as a rigid set of rules; I see it as a canvas."</p>
              </div>

              <h2>Breaking the Box: Why AI Demands Creativity</h2>
              <span class="accent-heading">The artist's edge in a technical world</span>
              <p>
                We are living through an AI revolution that has made "inside the box" thinking obsolete. In a world where anyone can use a tool to perform a standard task, the only way to win is to think outside the box creatively.
              </p>
              <p>
                This is where my background as a commissioned acrylic artist becomes my greatest technical asset. My creative practice allows me to look at your operations through a lens of <em>"What if?"</em> rather than just <em>"What is."</em> I see patterns that linear thinkers miss. I find solutions where others see only problems.
              </p>

              <h2>The Strategic Question: Financial Sense over Tech Hype</h2>
              <span class="accent-heading">Every build is a calculated financial move</span>
              <p>
                In the current landscape, the question is no longer, "Can it be done?" The tools exist. The real questions — the ones I help you answer — are:
              </p>
              <p>
                <strong>"How exactly will we do it?"</strong> and <strong>"Does it make sense financially for your business?"</strong>
              </p>
              <p>
                I combine my analytical IT background with decades of business leadership to ensure that every automation we build isn't just "cool" tech — it's a calculated move to stop revenue leaks and drive measurable growth.
              </p>

              <div class="pullquote">
                <p>"Every automation should stop a revenue leak, buy back time, or open a new revenue channel. If it doesn't do at least one of those things, we don't build it."</p>
              </div>

              <h2>I Don't Just Consult — I Build</h2>
              <span class="accent-heading">The Consult-Train-Implement model</span>
              <p>
                I help small to mid-sized businesses cut through the hype to find where AI can realistically help them. But I don't stop at the strategy. I am a hands-on builder who designs and implements the automations myself so they can be used, maintained, and trusted.
              </p>
              <p>
                I use a <strong>Consult-Train-Implement</strong> model to ensure that when we build your automation, we don't sacrifice the human connection that makes your business exceptional. You'll understand every system I build. Your team will know how to run it. And if anything ever needs adjusting, you won't be left helpless.
              </p>

              <h2>Why I Do This</h2>
              <span class="accent-heading">Work should support life, not replace it</span>
              <p>
                At my core, I value integrity, competence, and time. I believe work should support life, not replace it. Whether I am spending time with my family, my dog, or tending to my 15 acres, I know that time is our most sacred asset.
              </p>
              <p>
                Operational Freedom exists to give you that time back. We stop the revenue leaks so you can focus on what actually matters.
              </p>

              <div style="margin-top: 40px; display: flex; gap: 16px; flex-wrap: wrap;">
                <a href="https://links.aiservices.amplifyroiai.com/widget/booking/sjYrt5urlLvUY3YE03UJ" target="_blank" rel="noopener" class="btn btn-primary">Work With Beverly</a>
                <a href="/services" class="btn btn-dark">Explore Services</a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section class="cta-banner">
        <div class="container">
          <span class="section-label">Ready to Build Together?</span>
          <h2>Your Business is a Canvas.<br />Let's Paint It Right.</h2>
          <span class="accent-heading">Strategy-first. Human-centered. Built to last.</span>
          <div class="cta-actions">
            <a href="https://links.aiservices.amplifyroiai.com/widget/booking/sjYrt5urlLvUY3YE03UJ" target="_blank" rel="noopener" class="btn btn-sage">Book a Discovery Call</a>
            <a href="/services" class="btn btn-outline">View All Services</a>
          </div>
        </div>
      </section>
    </>,
    {
      title: 'About Beverly Scheider | Operational Freedom',
      description: '35 years of business operations, IT leadership, and creative thinking. Beverly Scheider is the builder behind Operational Freedom.'
    }
  )
})

// ============================================================
// SERVICES PAGE
// ============================================================
app.get('/services', (c) => {
  return c.render(
    <>
      <section class="page-hero">
        <div class="page-hero-content">
          <span class="section-label" style="color: var(--sage);">Built to Stop Revenue Leaks</span>
          <h1>Services & Solutions</h1>
          <span class="accent-heading">Every build is a calculated financial move.</span>
        </div>
      </section>

      <section class="section-sm" style="background: var(--white);">
        <div class="container">
          <div class="services-intro fade-in">
            <p style="font-size: 18px; color: var(--charcoal-light); line-height: 1.8; text-align: center;">
              The question is never "Can it be done?" — the tools exist. The real question is: <em>"Does it make financial sense for your business?"</em> Every service below is designed to answer that question with a resounding yes.
            </p>
          </div>
        </div>
      </section>

      <div class="full-service-list">
        {/* Service 1: Freedom Roadmap Workshop */}
        <div class="full-service" id="workshop">
          <div class="service-content fade-in">
            <span class="section-label">Start Here</span>
            <h2>The Freedom Roadmap Workshop</h2>
            <p>
              Before you invest in any automation, you need a map. The Freedom Roadmap Workshop is a strategic deep-dive designed to identify exactly where AI should already be working in your business — and what it's costing you that it isn't.
            </p>
            <p>
              We'll audit your current operations, identify your highest-value automation opportunities, and deliver a prioritized, phased plan with clear ROI projections. No hype. No filler. Just an honest strategic blueprint.
            </p>
            <ul class="service-features">
              <li><i class="fas fa-check-circle"></i> Full operational audit and gap analysis</li>
              <li><i class="fas fa-check-circle"></i> Revenue leak identification and quantification</li>
              <li><i class="fas fa-check-circle"></i> Phased automation roadmap with ROI projections</li>
              <li><i class="fas fa-check-circle"></i> Prioritized implementation plan (Phase 1–3)</li>
              <li><i class="fas fa-check-circle"></i> Written deliverable you own and can act on immediately</li>
            </ul>
            <a href="https://links.aiservices.amplifyroiai.com/widget/booking/sjYrt5urlLvUY3YE03UJ" target="_blank" rel="noopener" class="btn btn-primary">Book the Workshop</a>
          </div>
          <div class="service-visual">
            <i class="service-visual-icon fas fa-map-marked-alt"></i>
            <div class="service-visual-content">
              <div class="service-phase-badge"><i class="fas fa-flag"></i> Recommended First Step</div>
              <h3 style="margin-top: 20px;">The Freedom Roadmap Workshop</h3>
              <p style="opacity: 0.8; font-size: 15px;">Your strategic blueprint for operational transformation</p>
            </div>
          </div>
        </div>

        {/* Service 2: Digital Anchor */}
        <div class="full-service" id="anchor">
          <div class="service-content fade-in">
            <span class="section-label">Phase 1 · 24/7 Lead Capture</span>
            <h2>The 24/7 Digital Anchor</h2>
            <p>
              Imagine having an employee who knows your business inside and out, never sleeps, never has a bad day, and captures every single lead that comes your way — even at 2am on a Sunday.
            </p>
            <p>
              The Digital Anchor is a custom AI employee trained on your unique services, brand voice, FAQs, and lead capture process. It engages website visitors, qualifies prospects, and books consultations — without you lifting a finger.
            </p>
            <ul class="service-features">
              <li><i class="fas fa-check-circle"></i> Custom AI trained on your specific business</li>
              <li><i class="fas fa-check-circle"></i> 24/7 website lead capture and qualification</li>
              <li><i class="fas fa-check-circle"></i> Appointment booking integration</li>
              <li><i class="fas fa-check-circle"></i> Brand-voice matched responses</li>
              <li><i class="fas fa-check-circle"></i> CRM integration for seamless follow-up</li>
              <li><i class="fas fa-check-circle"></i> Performance dashboard and reporting</li>
            </ul>
            <a href="https://links.aiservices.amplifyroiai.com/widget/booking/sjYrt5urlLvUY3YE03UJ" target="_blank" rel="noopener" class="btn btn-primary">Build My Digital Anchor</a>
          </div>
          <div class="service-visual">
            <i class="service-visual-icon fas fa-user-robot"></i>
            <div class="service-visual-content">
              <div class="service-phase-badge"><i class="fas fa-bolt"></i> Phase 1 — Emergency Intervention</div>
              <h3 style="margin-top: 20px;">The 24/7 Digital Anchor</h3>
              <p style="opacity: 0.8; font-size: 15px;">Your AI employee never misses a lead</p>
            </div>
          </div>
        </div>

        {/* Service 3: Sentinel Voice System */}
        <div class="full-service" id="sentinel">
          <div class="service-content fade-in">
            <span class="section-label">Phase 1 · Never Miss a Call</span>
            <h2>The Sentinel Voice System</h2>
            <p>
              Every missed call is a missed sale. The Sentinel Voice System deploys a professional AI voice employee that answers every inbound call 24/7 — with the warmth and professionalism of your best team member.
            </p>
            <p>
              The Sentinel qualifies callers, answers FAQs, books appointments, routes urgent calls, and captures contact information — all in your brand's voice and tone. This is the emergency intervention that stops the revenue hemorrhaging from missed calls immediately.
            </p>
            <ul class="service-features">
              <li><i class="fas fa-check-circle"></i> 24/7 professional inbound call answering</li>
              <li><i class="fas fa-check-circle"></i> Lead qualification and appointment booking</li>
              <li><i class="fas fa-check-circle"></i> FAQ handling with your specific responses</li>
              <li><i class="fas fa-check-circle"></i> Smart call routing for urgent situations</li>
              <li><i class="fas fa-check-circle"></i> Custom voice and brand personality</li>
              <li><i class="fas fa-check-circle"></i> Full call transcripts and analytics</li>
            </ul>
            <a href="https://links.aiservices.amplifyroiai.com/widget/booking/sjYrt5urlLvUY3YE03UJ" target="_blank" rel="noopener" class="btn btn-primary">Deploy the Sentinel</a>
          </div>
          <div class="service-visual">
            <i class="service-visual-icon fas fa-phone-alt"></i>
            <div class="service-visual-content">
              <div class="service-phase-badge"><i class="fas fa-bolt"></i> Phase 1 — Emergency Intervention</div>
              <h3 style="margin-top: 20px;">The Sentinel Voice System</h3>
              <p style="opacity: 0.8; font-size: 15px;">Never miss another inbound call</p>
            </div>
          </div>
        </div>

        {/* Service 4: Operational Freedom Engine */}
        <div class="full-service" id="engine">
          <div class="service-content fade-in">
            <span class="section-label">Phase 3 · Full System Build</span>
            <h2>The Operational Freedom Engine</h2>
            <p>
              The Engine is the full vision — a completely built, front-end AI team for your business. This is the Phase 3 build where we architect the scalable competitive moat that will define your business's operational future.
            </p>
            <p>
              We integrate every system, automate every friction point, and build the infrastructure that allows you to grow without adding overhead. This is not a product — it's a complete operational transformation delivered through our Consult-Train-Implement model.
            </p>
            <ul class="service-features">
              <li><i class="fas fa-check-circle"></i> Full AI Employee Suite built and deployed</li>
              <li><i class="fas fa-check-circle"></i> End-to-end CRM automation and integration</li>
              <li><i class="fas fa-check-circle"></i> Custom workflow design and implementation</li>
              <li><i class="fas fa-check-circle"></i> Complete Consult-Train-Implement delivery</li>
              <li><i class="fas fa-check-circle"></i> Scalable architecture for future growth</li>
              <li><i class="fas fa-check-circle"></i> Ongoing support and optimization options</li>
            </ul>
            <a href="https://links.aiservices.amplifyroiai.com/widget/booking/sjYrt5urlLvUY3YE03UJ" target="_blank" rel="noopener" class="btn btn-primary">Build My Freedom Engine</a>
          </div>
          <div class="service-visual">
            <i class="service-visual-icon fas fa-network-wired"></i>
            <div class="service-visual-content">
              <div class="service-phase-badge"><i class="fas fa-rocket"></i> Phase 3 — Full Optimization</div>
              <h3 style="margin-top: 20px;">The Operational Freedom Engine</h3>
              <p style="opacity: 0.8; font-size: 15px;">Your complete front-end AI team</p>
            </div>
          </div>
        </div>
      </div>

      <section class="cta-banner">
        <div class="container">
          <span class="section-label">Not Sure Where to Start?</span>
          <h2>Start With the<br />Freedom Roadmap Workshop</h2>
          <span class="accent-heading">Your clarity session — before your first dollar is invested.</span>
          <p>In one strategic session, we identify exactly where your money is leaking, where AI makes financial sense, and what your path to freedom looks like. This is always step one.</p>
          <div class="cta-actions">
            <a href="https://links.aiservices.amplifyroiai.com/widget/booking/sjYrt5urlLvUY3YE03UJ" target="_blank" rel="noopener" class="btn btn-sage">Book the Workshop</a>
            <a href="/about" class="btn btn-outline">About Beverly</a>
          </div>
        </div>
      </section>
    </>,
    {
      title: 'Services | Operational Freedom',
      description: 'AI automation services for small and mid-sized businesses. The Freedom Roadmap Workshop, 24/7 Digital Anchor, Sentinel Voice System, and Operational Freedom Engine.'
    }
  )
})

// ============================================================
// ROADMAP PAGE
// ============================================================
app.get('/roadmap', (c) => {
  return c.render(
    <>
      <section class="page-hero">
        <div class="page-hero-content">
          <span class="section-label" style="color: var(--sage);">The Framework</span>
          <h1>The Roadmap to Freedom</h1>
          <span class="accent-heading">A phased strategy for systemic remediation</span>
        </div>
      </section>

      <section class="section roadmap-full">
        <div class="container">
          <div class="roadmap-intro fade-in">
            <span class="section-label">How We Build</span>
            <h2>The Consult-Train-Implement Model</h2>
            <span class="accent-heading" style="display: block; margin-bottom: 20px;">The signature method for delivering end-to-end support</span>
            <p style="font-size: 17px; color: var(--charcoal-light); line-height: 1.8;">
              Every client engagement follows the same fundamental architecture: we start by stopping the bleeding, then we close the gaps, then we build the moat. No skipping phases. No building on a broken foundation. We don't just hand you a tech stack and walk away — we consult, we train, and we implement.
            </p>
          </div>

          {/* CTI Model */}
          <div class="services-grid" style="margin-bottom: 80px;">
            <div class="service-card fade-in delay-1">
              <div class="service-card-icon"><i class="fas fa-search"></i></div>
              <div class="service-card-tag">Step 1</div>
              <h3>Consult</h3>
              <p>We diagnose before we prescribe. Every engagement begins with a deep operational audit — identifying revenue leaks, process gaps, and the highest-ROI automation opportunities.</p>
            </div>
            <div class="service-card fade-in delay-2">
              <div class="service-card-icon"><i class="fas fa-graduation-cap"></i></div>
              <div class="service-card-tag">Step 2</div>
              <h3>Train</h3>
              <p>You and your team understand every system we build. We don't create black boxes. We create confident operators who can run, maintain, and trust their new AI infrastructure.</p>
            </div>
            <div class="service-card fade-in delay-3">
              <div class="service-card-icon"><i class="fas fa-wrench"></i></div>
              <div class="service-card-tag">Step 3</div>
              <h3>Implement</h3>
              <p>We build it. Hands-on. Beverly designs and implements the automations herself — ensuring every system performs as promised and integrates seamlessly with your existing operations.</p>
            </div>
          </div>

          {/* Timeline */}
          <div class="section-header fade-in" style="margin-bottom: 64px;">
            <span class="section-label">The Three Phases</span>
            <h2>From Emergency to Excellence</h2>
            <span class="accent-heading">Building in layers, like a canvas</span>
          </div>

          <div class="roadmap-timeline">
            <div class="timeline-item fade-in">
              <div class="timeline-content" style="background: linear-gradient(135deg, var(--cream), var(--cream-dark));">
                <div class="timeline-phase-tag">Phase 1 · Emergency Intervention</div>
                <h3>Stop the Revenue Hemorrhage</h3>
                <p>
                  We deploy immediate tools to stop the most critical revenue leaks. Missed calls. Unresponded website inquiries. Manual processes eating your most productive hours. Phase 1 is triage — and it moves fast.
                </p>
                <ul class="phase-items" style="margin-top: 16px;">
                  <li>Sentinel Voice System deployed for 24/7 call coverage</li>
                  <li>Digital Anchor live for continuous lead capture</li>
                  <li>Revenue leak audit completed and quantified</li>
                  <li>Emergency response protocols established</li>
                </ul>
              </div>
              <div class="timeline-dot">
                <div class="timeline-dot-inner"><i class="fas fa-bolt"></i></div>
              </div>
              <div class="timeline-empty"></div>
            </div>

            <div class="timeline-item fade-in delay-2">
              <div class="timeline-empty"></div>
              <div class="timeline-dot">
                <div class="timeline-dot-inner" style="background: var(--sage-dark); box-shadow: 0 0 0 4px var(--sage-dark);"><i class="fas fa-puzzle-piece"></i></div>
              </div>
              <div class="timeline-content">
                <div class="timeline-phase-tag">Phase 2 · High-Priority Gap Closure</div>
                <h3>Close the Operational Gaps</h3>
                <p>
                  With the emergency systems live, we move to systematic gap closure. Manual tasks become automated. CRM integrations eliminate data siloes. Follow-up sequences run without human intervention.
                </p>
                <ul class="phase-items" style="margin-top: 16px;">
                  <li>Full CRM automation and integration built</li>
                  <li>Automated follow-up sequences deployed</li>
                  <li>Manual task identification and elimination</li>
                  <li>Data flow optimization across all platforms</li>
                </ul>
              </div>
            </div>

            <div class="timeline-item fade-in delay-3">
              <div class="timeline-content">
                <div class="timeline-phase-tag">Phase 3 · Operational Optimization</div>
                <h3>Build the Competitive Moat</h3>
                <p>
                  This is where we build for the future. The Operational Freedom Engine goes live — a complete, scalable AI infrastructure that gives you a competitive advantage and buys back your most sacred asset: time.
                </p>
                <ul class="phase-items" style="margin-top: 16px;">
                  <li>Full AI Employee Suite deployed and active</li>
                  <li>Scalable systems architecture established</li>
                  <li>Competitive moat built and documented</li>
                  <li>Team training complete — you own the system</li>
                </ul>
              </div>
              <div class="timeline-dot">
                <div class="timeline-dot-inner" style="background: var(--teal-dark); box-shadow: 0 0 0 4px var(--teal-dark);"><i class="fas fa-flag-checkered"></i></div>
              </div>
              <div class="timeline-empty"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="onliness-section">
        <div class="onliness-inner">
          <span class="section-label">The Sacred Time Principle</span>
          <p class="onliness-statement">
            Time is our most sacred asset. <strong>Every phase of this roadmap is engineered to buy it back</strong> — for your family, your life, and the parts of your business only you can do.
          </p>
          <a href="https://links.aiservices.amplifyroiai.com/widget/booking/sjYrt5urlLvUY3YE03UJ" target="_blank" rel="noopener" class="btn btn-outline">Start Phase 1 Today</a>
        </div>
      </section>

      <section class="cta-banner">
        <div class="container">
          <span class="section-label">Begin the Journey</span>
          <h2>Every Roadmap Starts<br />With One Conversation</h2>
          <span class="accent-heading">Book your Freedom Roadmap Workshop — your personalized blueprint.</span>
          <div class="cta-actions">
            <a href="https://links.aiservices.amplifyroiai.com/widget/booking/sjYrt5urlLvUY3YE03UJ" target="_blank" rel="noopener" class="btn btn-sage">Book the Workshop</a>
            <a href="/services" class="btn btn-outline">View All Services</a>
          </div>
        </div>
      </section>
    </>,
    {
      title: 'The Roadmap to Freedom | Operational Freedom',
      description: 'A phased strategy for AI-driven business transformation. Phase 1: Emergency Intervention. Phase 2: Gap Closure. Phase 3: Operational Optimization.'
    }
  )
})

// ============================================================
// CONTACT PAGE
// ============================================================
app.get('/contact', (c) => {
  return c.render(
    <>
      <section class="page-hero">
        <div class="page-hero-content">
          <span class="section-label" style="color: var(--sage);">Let's Build Something Real</span>
          <h1>Book a Discovery Call</h1>
          <span class="accent-heading">30 minutes to find your freedom path</span>
          <div style="margin-top: 28px; display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
            <a href="https://links.aiservices.amplifyroiai.com/widget/booking/sjYrt5urlLvUY3YE03UJ" target="_blank" rel="noopener" class="btn btn-sage">
              <i class="fas fa-calendar-check" style="margin-right: 8px;"></i>Schedule Directly
            </a>
            <a href="#contact-form" class="btn btn-outline">Or Send a Message</a>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--white);">
        <div class="container">
          <div class="contact-layout">
            <div class="contact-form-block slide-up">
              <h2>Start the Conversation</h2>
              <span class="accent-heading">Tell me about your business</span>
              <form id="contact-form" action="/api/contact" method="POST">
                <div class="form-row">
                  <div class="form-group">
                    <label for="first-name">First Name *</label>
                    <input type="text" id="first-name" name="first_name" required placeholder="Beverly" />
                  </div>
                  <div class="form-group">
                    <label for="last-name">Last Name *</label>
                    <input type="text" id="last-name" name="last_name" required placeholder="Scheider" />
                  </div>
                </div>
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input type="email" id="email" name="email" required placeholder="you@yourbusiness.com" />
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
                </div>
                <div class="form-group">
                  <label for="company">Business Name *</label>
                  <input type="text" id="company" name="company" required placeholder="Your Business Name" />
                </div>
                <div class="form-group">
                  <label for="service">Interested In</label>
                  <select id="service" name="service">
                    <option value="">Select a service...</option>
                    <option value="workshop">Freedom Roadmap Workshop</option>
                    <option value="anchor">The 24/7 Digital Anchor</option>
                    <option value="sentinel">The Sentinel Voice System</option>
                    <option value="engine">The Operational Freedom Engine</option>
                    <option value="speaking">Speaking / Training</option>
                    <option value="unsure">Not sure — need guidance</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="challenge">What's Your Biggest Operational Challenge? *</label>
                  <textarea id="challenge" name="challenge" required placeholder="Tell me where your business is leaking time or money — missed calls, manual processes, slow follow-up..."></textarea>
                </div>
                <button type="submit" class="btn btn-primary" id="submit-btn" style="width: 100%; font-size: 15px;">
                  <i class="fas fa-paper-plane" style="margin-right: 8px;"></i>Send My Message
                </button>
                <p style="font-size: 12px; color: var(--charcoal-light); text-align: center; margin-top: 12px;">
                  I respond to every message personally. Usually within 24 hours.
                </p>
              </form>
              <div id="form-success" style="display: none; background: rgba(109,140,147,0.1); border: 1px solid var(--teal); border-radius: var(--radius); padding: 24px; text-align: center; margin-top: 16px;">
                <i class="fas fa-check-circle" style="font-size: 32px; color: var(--teal); margin-bottom: 12px; display: block;"></i>
                <h3 style="margin-bottom: 8px;">Message Received!</h3>
                <p style="color: var(--charcoal-light); margin: 0;">Thank you for reaching out. I'll be in touch personally within 24 hours.</p>
              </div>
            </div>

            <div class="contact-info fade-in delay-2">
              <h2>Why This<br />30 Minutes Matters</h2>
              <span class="accent-heading">A real conversation. No sales pressure.</span>
              <p>
                In 30 minutes, we'll identify exactly where AI should already be working for you, what it's costing you that it isn't, and what your personalized roadmap to freedom looks like.
              </p>

              <div class="contact-details">
                <div class="contact-detail-item">
                  <div class="contact-detail-icon"><i class="fas fa-envelope"></i></div>
                  <div class="contact-detail-text">
                    <strong>Email</strong>
                    <span>bev@bevscheider.com</span>
                  </div>
                </div>
                <div class="contact-detail-item">
                  <div class="contact-detail-icon"><i class="fas fa-map-marker-alt"></i></div>
                  <div class="contact-detail-text">
                    <strong>Location</strong>
                    <span>Serving businesses nationwide</span>
                  </div>
                </div>
                <div class="contact-detail-item">
                  <div class="contact-detail-icon"><i class="fas fa-clock"></i></div>
                  <div class="contact-detail-text">
                    <strong>Response Time</strong>
                    <span>Personal reply within 24 hours</span>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div style="background: var(--cream); border-radius: var(--radius-lg); padding: 28px; margin-bottom: 24px;">
                <h4 style="font-size: 14px; color: var(--teal); letter-spacing: 0.15em; margin-bottom: 16px;">WHAT TO EXPECT ON THE CALL</h4>
                <ul class="phase-items phase-items-dark">
                  <li>Identification of your top 3 revenue leaks</li>
                  <li>A clear picture of which phase to start in</li>
                  <li>Honest assessment of ROI timeline</li>
                  <li>No pressure — just clarity and a plan</li>
                </ul>
              </div>

              <div class="companies-list">
                <h4>Part of the Operational Freedom Family</h4>
                <div class="companies-grid">
                  <span class="company-tag">Operational Freedom</span>
                  <span class="company-tag">AI'm In</span>
                  <span class="company-tag">Aerial Domination</span>
                  <span class="company-tag">It's Just Fun LLC</span>
                  <span class="company-tag">The Palmer Financial Group</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>,
    {
      title: 'Book a Discovery Call | Operational Freedom',
      description: '30 minutes to find your path to operational freedom. Book a discovery call with Beverly Scheider today.'
    }
  )
})

// ============================================================
// API: Contact Form Handler
// ============================================================
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.parseBody()
    // In production: send email, save to CRM, etc.
    console.log('Contact form submission:', body)
    return c.json({ success: true, message: 'Message received! Beverly will respond within 24 hours.' })
  } catch (e) {
    return c.json({ success: false, message: 'Something went wrong. Please try again.' }, 500)
  }
})

export default app
