(() => {
  const d = siteData;
  const page = document.body.dataset.page || "home";
  const year = new Date().getFullYear();

  const icons = {
    truck: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h10v9H3zM13 9h4l4 4v2h-8zM6.5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg>`,
    crane: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20V5h2v15M4 7h11l-3-3h-2M15 7l-5 7h7l3-7h-5ZM3 20h18M15 14v4M17 18h3"/></svg>`,
    box: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 7 8-4 8 4-8 4-8-4Zm0 0v10l8 4 8-4V7M12 11v10"/></svg>`,
    route: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h.01M19 19h.01M5 5c0 7 14 3 14 14M5 5l4 4m10 10-4-4"/></svg>`,
    message: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H8l-4 4V5Zm4 5h8M8 13h5"/></svg>`,
    search: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg>`,
    check: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11"/></svg>`,
    phone: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h3l1.5 4-2 1.5c1 2.2 2.8 4 5 5l1.5-2 4 1.5v3c0 1-1 2-2 2C11.8 19 5 12.2 5 6c0-1 1-2 2-2Z"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5A8.5 8.5 0 0 1 7.2 19L4 20l1-3.2A8.5 8.5 0 1 1 20 11.5Z"/><path d="M9 8.5c.2 2 1.5 4 3.5 5.2 1 .6 1.8.8 2.5.4l1-.8-.9-1.5-1.2.4c-.9-.5-1.5-1.1-1.9-1.9l.4-1.2L11 8l-.8 1c-.4.5-.4.8-.2 1.2"/></svg>`
  };

  const whatsappUrl = (text = "Hello Shreya Transport, I need a trailer for goods transportation.") =>
    `https://wa.me/${d.company.whatsappNumber}?text=${encodeURIComponent(text)}`;

  const nav = d.nav.map(item =>
    `<a class="${location.pathname.endsWith(item.href) || (page === "home" && item.href === "index.html") ? "active" : ""}" href="${item.href}">${item.label}</a>`
  ).join("");

  document.getElementById("site-header").innerHTML = `
    <header class="header">
      <div class="container nav">
        <a class="logo" href="index.html" aria-label="${d.company.name} home">
          <span class="logo-mark">${icons.truck}</span>
          <span><b>${d.company.shortName}</b><small>TRANSPORT</small></span>
        </a>
        <nav class="nav-links" aria-label="Primary navigation">${nav}</nav>
        <a class="header-cta" href="${whatsappUrl()}">${icons.whatsapp}<span>Get a Quote</span></a>
        <button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
      <div class="mobile-nav" id="mobile-nav">${nav}<a class="mobile-quote" href="${whatsappUrl()}">${icons.whatsapp} Get a Transport Quote</a></div>
    </header>`;

  document.getElementById("site-footer").innerHTML = `
    <footer class="footer">
      <div class="container footer-grid">
        <div>
          <a class="logo footer-logo" href="index.html"><span class="logo-mark">${icons.truck}</span><span><b>${d.company.shortName}</b><small>TRANSPORT</small></span></a>
          <p>${d.footer.note}</p>
        </div>
        <div><h4>Quick Links</h4><div class="footer-links">${d.nav.map(x => `<a href="${x.href}">${x.label}</a>`).join("")}</div></div>
        <div><h4>Contact</h4><div class="footer-contact"><a href="${d.company.phoneHref}">${icons.phone}${d.company.phone}</a><a href="${whatsappUrl()}">${icons.whatsapp}WhatsApp</a><span>${d.company.address}</span></div></div>
      </div>
      <div class="footer-bottom"><div class="container"><span>© ${year} ${d.company.name}. All rights reserved.</span><span>Trailer Transportation • ${d.company.serviceArea}</span></div></div>
    </footer>
    <a class="floating-whatsapp" href="${whatsappUrl()}" aria-label="Chat on WhatsApp">${icons.whatsapp}<span>WhatsApp</span></a>`;

  const setMeta = (title, description) => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = description;
  };

  const serviceCards = () => d.services.map((s, i) => `
    <article class="service-card">
      <div class="service-icon">${icons[s.icon]}</div>
      <div class="service-no">0${i + 1}</div>
      <h3>${s.title}</h3>
      <p>${s.short}</p>
      <a href="contact.html">Enquire now ${icons.arrow}</a>
    </article>`).join("");

  const processSteps = () => d.process.map((s, i) => `
    <div class="process-item">
      <div class="process-icon">${icons[s.icon]}</div>
      <span>STEP ${s.number}</span><h3>${s.title}</h3><p>${s.text}</p>
    </div>${i < d.process.length - 1 ? '<div class="process-connector"></div>' : ''}`).join("");

  const contactBlock = () => `
    <div class="contact-details">
      <a href="${d.company.phoneHref}" class="contact-row">${icons.phone}<div><small>CALL US</small><strong>${d.company.phone}</strong></div></a>
      <a href="${whatsappUrl()}" class="contact-row">${icons.whatsapp}<div><small>WHATSAPP</small><strong>${d.company.whatsapp}</strong></div></a>
      <div class="contact-row">${icons.route}<div><small>ADDRESS</small><strong>${d.company.address}</strong></div></div>
      <div class="contact-row">${icons.check}<div><small>WORKING HOURS</small><strong>${d.company.hours}</strong></div></div>
    </div>`;

  function home() {
    setMeta(d.seo.homeTitle, d.seo.homeDescription);
    document.getElementById("page-content").innerHTML = `
      <main>
        <section class="hero">
          <div class="hero-bg"></div>
          <div class="container hero-grid">
            <div class="hero-copy">
              <div class="eyebrow">${d.hero.eyebrow}</div>
              <h1>${d.hero.title}</h1>
              <p>${d.hero.text}</p>
              <div class="hero-actions">
                <a class="btn btn-orange" href="${whatsappUrl()}">${d.hero.primaryButton}${icons.arrow}</a>
                <a class="btn btn-outline" href="${d.company.phoneHref}">${icons.phone}${d.hero.secondaryButton}</a>
              </div>
              <div class="trust-row">${d.hero.trustItems.map(x => `<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join('<i></i>')}</div>
            </div>
            <div class="hero-photo"><img src="images/transport-collage.png" alt="Trailer transportation and heavy cargo in India"></div>
          </div>
        </section>

        <section class="stats"><div class="container stats-grid">${d.stats.map(x => `<div><b>${x[0]}</b><strong>${x[1]}</strong><span>${x[2]}</span></div>`).join("")}</div></section>

        <section class="section"><div class="container">
          <div class="section-head"><div><div class="eyebrow dark">OUR SERVICES</div><h2>Transport solutions for <span>different cargo needs.</span></h2></div><p>From general goods to heavy industrial cargo, we help coordinate suitable trailer transportation based on your route and cargo requirements.</p></div>
          <div class="services-grid">${serviceCards()}</div>
          <div class="center-link"><a href="services.html" class="text-link">View all services ${icons.arrow}</a></div>
        </div></section>

        <section class="section light"><div class="container split">
          <div class="photo-card"><img src="images/transport-collage.png" alt="Transport service placeholder image" loading="lazy"><div class="photo-label">PAN-INDIA SERVICE</div></div>
          <div><div class="eyebrow dark">${d.about.eyebrow}</div><h2>${d.about.title}</h2>${d.about.paragraphs.slice(0,2).map(p => `<p>${p}</p>`).join("")}<ul class="checks">${d.about.highlights.map(x => `<li>${icons.check}<span>${x}</span></li>`).join("")}</ul><a class="text-link" href="about.html">More about us ${icons.arrow}</a></div>
        </div></section>

        <section class="section dark-section"><div class="container">
          <div class="center-head"><div class="eyebrow">HOW IT WORKS</div><h2>Simple process. <span>Clear coordination.</span></h2><p>Share the requirement. We coordinate the transport arrangement.</p></div>
          <div class="process-grid">${processSteps()}</div>
        </div></section>

        <section class="section"><div class="container coverage-home"><div><div class="eyebrow dark">PAN-INDIA COVERAGE</div><h2>Wherever your cargo needs to go, <span>let's discuss the route.</span></h2><p>${d.coverage.text}</p><div class="tags">${d.coverage.regions.slice(0,8).map(x => `<span>${x}</span>`).join("")}</div><a class="text-link" href="contact.html">Discuss your route ${icons.arrow}</a></div><div class="india-card"><div class="india-word">INDIA</div><span>TRAILER TRANSPORTATION</span><div class="route-dot a"></div><div class="route-dot b"></div><div class="route-dot c"></div></div></div></section>

        <section class="cta"><div class="container cta-inner"><div><div class="eyebrow">READY TO MOVE YOUR GOODS?</div><h2>Tell us your cargo and route.</h2></div><a class="btn btn-light" href="${whatsappUrl()}">${icons.whatsapp} Get a Transport Quote</a></div></section>
      </main>`;
  }

  function services() {
    setMeta(d.seo.servicesTitle, d.seo.homeDescription);
    document.getElementById("page-content").innerHTML = `
      <main>
        <section class="page-hero"><div class="container"><div class="eyebrow">SERVICES</div><h1>Trailer transport <span>for your cargo.</span></h1><p>Flexible transportation coordination for commercial, industrial, heavy and general goods across India.</p></div></section>
        <section class="section"><div class="container"><div class="services-detail">${d.services.map((s,i) => `<article class="detail-card"><div class="detail-icon">${icons[s.icon]}</div><span class="detail-no">0${i+1}</span><h2>${s.title}</h2><p>${s.description}</p><ul class="checks">${s.bullets.map(b=>`<li>${icons.check}<span>${b}</span></li>`).join("")}</ul><a class="btn btn-dark" href="contact.html">Discuss this requirement ${icons.arrow}</a></article>`).join("")}</div></div></section>
        <section class="section light"><div class="container narrow-center"><div class="eyebrow dark">WHAT WE NEED FROM YOU</div><h2>Give us the details and <span>we'll coordinate the rest.</span></h2><p>For a faster quotation, share the pickup location, destination, cargo description, approximate weight and dimensions, preferred date, and any special loading or unloading requirements.</p><a class="btn btn-orange" href="${whatsappUrl("Hello Shreya Transport, I would like to request a trailer. Pickup: ____. Destination: ____. Cargo: ____. Weight/dimensions: ____. Date: ____.")}">${icons.whatsapp} Send Requirement on WhatsApp</a></div></section>
      </main>`;
  }

  function about() {
    setMeta(d.seo.aboutTitle, d.company.description);
    document.getElementById("page-content").innerHTML = `
      <main>
        <section class="page-hero"><div class="container"><div class="eyebrow">ABOUT US</div><h1>Making trailer transportation <span>simpler.</span></h1><p>We connect businesses and individuals with suitable trailer operators for goods transportation across India.</p></div></section>
        <section class="section"><div class="container split"><div class="photo-card large"><img src="images/transport-collage.png" alt="Trailer transport service placeholder image"></div><div><div class="eyebrow dark">${d.about.eyebrow}</div><h2>${d.about.title}</h2>${d.about.paragraphs.map(p=>`<p>${p}</p>`).join("")}</div></div></section>
        <section class="section light"><div class="container"><div class="section-head"><div><div class="eyebrow dark">WHY WORK WITH US</div><h2>Built around <span>your requirement.</span></h2></div><p>Dummy content is being used for now. Replace these points later with your actual business strengths, experience and service commitments.</p></div><div class="feature-grid">${d.about.highlights.map((x,i)=>`<article><span>0${i+1}</span>${icons.check}<h3>${x}</h3><p>Dummy supporting text that can be replaced with a specific company benefit or service promise.</p></article>`).join("")}</div></div></section>
      </main>`;
  }

  function gallery() {
    setMeta(d.seo.galleryTitle, "Transport and trailer service gallery for Shreya Transport.");
    document.getElementById("page-content").innerHTML = `
      <main>
        <section class="page-hero"><div class="container"><div class="eyebrow">GALLERY</div><h1>Transport work, <span>on the road.</span></h1><p>These are temporary images. Replace them later with your real trailers, cargo, team, loading sites and completed transport movements.</p></div></section>
        <section class="section"><div class="container"><div class="gallery-grid">${d.gallery.map(g=>`<figure><img src="${g.image}" alt="${g.title}"><figcaption><strong>${g.title}</strong><span>${g.text}</span></figcaption></figure>`).join("")}</div></div></section>
        <section class="section light"><div class="container"><div class="center-head"><div class="eyebrow dark">CUSTOMER FEEDBACK</div><h2>Real reviews can be <span>added here later.</span></h2></div><div class="testimonial-grid">${d.testimonials.map(t=>`<article><div class="stars">★★★★★</div><p>“${t.quote}”</p><strong>${t.name}</strong><span>${t.role}</span></article>`).join("")}</div></div></section>
      </main>`;
  }

  function contact() {
    setMeta(d.seo.contactTitle, "Contact Shreya Transport for trailer transportation requirements across India.");
    document.getElementById("page-content").innerHTML = `
      <main>
        <section class="page-hero"><div class="container"><div class="eyebrow">CONTACT</div><h1>Let's discuss your <span>transport requirement.</span></h1><p>Send your route and cargo details. We'll use the information to coordinate a suitable trailer requirement.</p></div></section>
        <section class="section"><div class="container contact-grid">
          <div><div class="eyebrow dark">GET IN TOUCH</div><h2>Talk to <span>Shreya Transport.</span></h2><p>For a quick response, WhatsApp your pickup location, destination, cargo details, approximate weight/dimensions and preferred date.</p>${contactBlock()}</div>
          <div class="quote-card"><div class="eyebrow">QUICK ENQUIRY</div><h3>Send your requirement</h3><form id="quote-form">
            <label>Name<input required name="name" placeholder="Your name"></label>
            <label>Phone<input required name="phone" placeholder="Your phone number"></label>
            <label>Pickup location<input required name="pickup" placeholder="City / location"></label>
            <label>Destination<input required name="destination" placeholder="City / location"></label>
            <label>Cargo details<textarea required name="cargo" rows="3" placeholder="Cargo, approximate weight/dimensions"></textarea></label>
            <label>Required date<input name="date" type="date"></label>
            <button class="btn btn-orange full" type="submit">${icons.whatsapp} Send via WhatsApp</button>
            <small>This form opens WhatsApp with the details you enter. No enquiry database is connected yet.</small>
          </form></div>
        </div></section>
        <section class="section light"><div class="container map-placeholder"><div><div class="eyebrow dark">LOCATION</div><h2>Our office</h2><p>${d.company.address}</p><a class="text-link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.company.address)}">Open in Google Maps ${icons.arrow}</a></div><div class="map-box"><span>INDORE</span><small>Patel Market • Kelod Kartal • Rau Bypass</small></div></div></section>
      </main>`;

    document.getElementById("quote-form").addEventListener("submit", e => {
      e.preventDefault();
      const f = new FormData(e.currentTarget);
      const message = `Hello Shreya Transport,%0A%0AName: ${f.get("name")}%0APhone: ${f.get("phone")}%0APickup: ${f.get("pickup")}%0ADestination: ${f.get("destination")}%0ACargo: ${f.get("cargo")}%0ARequired date: ${f.get("date") || "Not specified"}`;
      location.href = `https://wa.me/${d.company.whatsappNumber}?text=${message}`;
    });
  }

  ({home, services, about, gallery, contact}[page] || home)();

  const toggle = document.querySelector(".menu-toggle");
  const mobile = document.getElementById("mobile-nav");
  toggle?.addEventListener("click", () => {
    const open = mobile.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  mobile?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobile.classList.remove("open")));
})();