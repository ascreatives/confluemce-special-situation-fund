const metrics = [
  ["USD 25M", "Target fund size"],
  ["AUD 250,000", "Minimum investment allocation"],
  ["10% p.a.", "Target preferred return, non-guaranteed"],
  ["1–3 yrs", "Target holding & liquidity horizon"],
];

const marketReasons = [
  {
    number: "01",
    title: "The asset class",
    accent: "Why private equity",
    text: "Certain private equity strategies have historically outperformed public market benchmarks over long periods, though outcomes vary materially and are not guaranteed. Late-stage pre-IPO positions provide entry points into mature technological scale before general public market price discovery.",
    note: "Valuation discipline & downside protection",
  },
  {
    number: "02",
    title: "Deepest market",
    accent: "Why the United States",
    text: "The US combines an unparalleled concentration of commercial talent, capital infrastructure, deep and active M&A markets, and robust corporate balance sheets. It remains the global epicenter for frontier technology commercialization and secondary market turnover.",
    note: "Global standard for liquidity & exits",
  },
  {
    number: "03",
    title: "Cross-border synergies",
    accent: "Why Europe & Australia",
    text: "Europe offers distinct technical depth in defence, sovereign space infrastructure, and precision engineering. Concurrently, Australia provides the Directors with domestic structural governance, tax treaty efficiency, and strategic wholesale alignment.",
    note: "Sourcing networks & alignment",
  },
];

const companies = [
  "Anthropic", "OpenAI", "Anduril", "Groq", "Cerebras", "Kalshi",
  "xAI", "PsiQuantum", "American Bitcoin", "Polymarket", "New America Acquisition Corp",
];

const principles = [
  ["01", "Traction", "Established businesses with demonstrated product-market fit and validated commercial traction."],
  ["02", "Economics", "Businesses with demonstrated product-market fit and validated commercial traction."],
  ["03", "Selectivity", "Capital deployed selectively across resilient, high-growth sectors with active acquisition markets."],
  ["04", "Discipline", "Avoidance of early-stage, binary or token-driven investment. Every investment is considered with access."],
];

const sectors = [
  ["AI & Digital Infrastructure", "Critical infrastructure powering the next generation of intelligent systems.", "images/sector-1.webp"],
  ["Healthcare & Biotech", "High-impact technologies improving health outcomes and expanding access.", "images/sector-2.webp"],
  ["Defence & Security", "Mission-critical systems advancing resilience, autonomy and national security.", "images/sector-3.webp"],
  ["Energy Transition", "Scalable technologies supporting energy security and a lower-carbon future.", "images/sector-4.webp"],
  ["Space & Advanced Systems", "Frontier technologies connecting a more capable, connected world.", "images/sector-5.webp"],
  ["Frontier Finance", "New market infrastructure designed for durable, transparent participation.", "images/sector-6.webp"],
];

const processSteps = [
  ["01", "Deal flow", "Established network of investment banks, family offices and corporate advisors."],
  ["02", "Screening & diligence", "Apply disciplined 3–5 opportunity screens. Subject to availability and suitability, external financial, legal and commercial diligence."],
  ["03", "Structure", "USD 500,000–1,000,000 per transaction. Deployed on a staged basis where appropriate."],
  ["04", "Stewardship & exit", "Active investment monitoring, with an indicative holding period of 1–3 years and exit planning from inception."],
];

const avoidList = [
  "No pre-revenue ventures", "No speculative positions", "No highly leveraged balance sheets",
  "No concentrated single-asset bets", "No related-party transactions", "No rental distribution",
];

const riskControls = [
  {
    title: "Conservative valuation applied at entry",
    detail: "Independent benchmarking against primary rounds ensures margin of safety.",
  },
  {
    title: "Diversification across sectors & companies",
    detail: "Portfolio limits avoid single-asset concentration risks across cyclical verticals.",
  },
  {
    title: "Ongoing portfolio monitoring & oversight",
    detail: "Quarterly performance audits and operational checks by the Investment Committee.",
  },
  {
    title: "Avoidance of excessive leverage & pre-revenue models",
    detail: "Zero structural debt leverage applied within the primary fund entity.",
  },
  {
    title: "Multiple downside and exit scenarios assessed at entry",
    detail: "M&A, secondary transfer, and buyback pathways modeled under stress test.",
  },
];

const riskCategories = [
  {
    title: "Investment Management Risk",
    description: "The Fund's performance depends on the investment manager's ability to identify, assess, execute and monitor suitable opportunities. Decisions may not achieve expected outcomes, and changes in key personnel, processes or strategy could affect execution.",
  },
  {
    title: "Market & Macroeconomic Risk",
    description: "Changes in economic conditions, interest rates, inflation, geopolitical events or market sentiment may reduce investment values or limit opportunities to realise investments. These conditions can be outside the Fund's control.",
  },
  {
    title: "Liquidity & Transfer Restriction Risk",
    description: "Private investments may be difficult or impossible to sell when desired, and transfers may be restricted. An exit may take longer than expected or occur at a lower value than anticipated.",
  },
  {
    title: "Key Person Risk",
    description: "The Fund may rely on a limited number of key individuals. Their unavailability or departure may affect sourcing, investment decisions, oversight or execution.",
  },
  {
    title: "Valuation Uncertainty",
    description: "Private assets may not have observable market prices. Valuations rely on estimates and assumptions and may differ materially from the amounts ultimately realised on sale.",
  },
  {
    title: "Multi-Currency & FX Exposure",
    description: "Investments, proceeds or expenses in foreign currencies may be affected by exchange-rate movements. Any hedging may be unavailable, incomplete or ineffective.",
  },
  {
    title: "Digital Asset & Crypto Volatility",
    description: "Digital assets and related businesses may involve significant price volatility, technology, custody, liquidity, cyber and regulatory risks. Values can change rapidly, and losses may be substantial.",
  },
  {
    title: "Potential Conflicts of Interest",
    description: "Conflicts may arise between the Fund, its manager, investors and other clients or counterparties. Policies and disclosures intended to manage conflicts may not eliminate every potential impact.",
  },
  {
    title: "Fund Structure & Operational Risk",
    description: "The Fund depends on legal, governance, service-provider and administrative arrangements. Errors, failures, delays or changes could disrupt operations, reporting, transactions or distributions.",
  },
  {
    title: "Legislative & Regulatory Changes",
    description: "Changes in laws, regulations, tax treatment or their interpretation could increase costs, restrict activities or adversely affect investments or returns.",
  },
  {
    title: "Cross-Border & Withholding Tax Risk",
    description: "Cross-border investments may be subject to withholding taxes, treaty limitations, reporting obligations or different legal regimes. Tax treatment depends on circumstances and may change.",
  },
  {
    title: "Strategy Evolution Risk",
    description: "The investment strategy or operating environment may evolve over time. Changes in opportunity availability or market conditions could alter the Fund's exposures and may not deliver intended results.",
  },
];

const leaders = [
  {
    name: "Brian Joffe",
    role: "Founder & Chief Investment Officer",
    experience: "35+ Years Experience",
    bio: "Brian brings over 35 years of senior leadership across institutional investment banking, debt and equity capital markets, asset management, and proprietary private investing. Prior to founding Confluence, he led executive investment initiatives and multi-asset structuring across South Africa, the United Kingdom, and Australasia.",
    focusAreas: ["Investment Committee Governance", "Risk Underwriting", "Cross-Border Structuring"],
    photo: "images/brian.png",
  },
  {
    name: "Michael Rothschild",
    role: "Director, Investment Origination",
    experience: "40+ Years Experience",
    bio: "Michael has four decades of distinguished commercial practice, including building the Rothschild Family Office with deep direct participation across US private technology, secondary market transactions, and pre-IPO consortiums. His direct relationships across tier-one US funds anchor the Fund’s deal flow.",
    focusAreas: ["US & European Origination", "Secondary Market Access", "Co-Investment Syndication"],
    photo: "images/michael.png",
  },
];

const disclosures = [
  ["Wholesale Clients Only (Corporations Act 2001)", "This communication and the Information Memorandum are provided strictly to wholesale clients within the meaning of section 761G of the Corporations Act 2001 (Cth). It is not available to, nor may it be relied upon by, any retail clients."],
  ["Trust Deed & Information Memorandum Prevail", "The summary descriptions contained on this website are indicative only. In the event of any inconsistency, the provisions of the Fund Trust Deed and Fund Information Memorandum take absolute precedence."],
  ["Unregistered Wholesale Scheme", "Confluence Fund No. 1 is an unregistered managed investment scheme. This document has not been, and is not required to be, lodged with the Australian Securities and Investments Commission (ASIC)."],
  ["No Capital or Performance Guarantee", "None of the Trustee, the Investment Manager, the Directors, or their associates guarantee any specific rate of return, the performance of the Fund, or the repayment of capital deployed by investors."],
  ["AML / CTF Act Compliance", "In accordance with the Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (Cth), the Trustee conducts mandatory customer identification, source-of-wealth, and verification checks prior to issuing units."],
  ["Privacy & Data Safeguards", "Personal and financial records are maintained in strict confidentiality under the Privacy Act 1988 (Cth) and are used solely for fund registry, statutory reporting, and compliance verification."],
];

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
})[character]);

function renderList(selector, items, renderItem) {
  const container = document.querySelector(selector);
  if (!container) {
    throw new Error(`Missing page element for ${selector}`);
  }
  container.innerHTML = items.map(renderItem).join("");
}

renderList("#metrics-list", metrics, ([value, label], index) => `
  <article class="metric-card ${index % 2 ? "metric-tint" : ""}">
    <strong data-counter aria-live="off">${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span>
  </article>
`);

renderList("#market-list", marketReasons, ({ number, title, accent, text, note }) => `
  <article class="market-card">
    <p class="card-kicker">${escapeHtml(number)} / ${escapeHtml(title)}</p>
    <h3>${escapeHtml(accent)}</h3>
    <p>${escapeHtml(text)}</p>
    <span class="market-note"><i></i> ${escapeHtml(note)}</span>
  </article>
`);

renderList("#strategy-sector-list", ["AI", "Defence", "Healthcare", "Space", "Digital Assets", "Energy"], (sector) => `
  <span>${escapeHtml(sector)}</span>
`);

renderList("#company-list", companies, (company) => `<span role="listitem">${escapeHtml(company)}</span>`);

renderList("#principle-list", principles, ([number, title, text]) => `
  <article><span>${escapeHtml(number)}</span><b>${escapeHtml(title)}</b><p>${escapeHtml(text)}</p></article>
`);

renderList("#sector-list", sectors, ([title, text, image], index) => `
  <article class="sector-card" role="listitem" style="--sector-image: url(${image})">
    <span class="sector-number">0${index + 1} / 06</span>
    <div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></div>
  </article>
`);

const reducedMotionQuery = typeof window.matchMedia === "function"
  ? window.matchMedia("(prefers-reduced-motion: reduce)")
  : null;

function initializeAutoSlider(slider, track, getVisibleSlideCount, interval) {
  const slides = Array.from(track.children);
  let visibleSlides = 0;
  let slideIndex = 0;
  let autoplayTimer = 0;
  let transitionTimer = 0;
  let isTransitioning = false;
  let isHovered = false;
  let isInViewport = false;

  function prefersReducedMotion() {
    return Boolean(reducedMotionQuery && reducedMotionQuery.matches);
  }

  function updateTrack(animate) {
    const firstRealSlide = track.children[visibleSlides];
    if (!firstRealSlide) {
      return;
    }

    const firstRect = firstRealSlide.getBoundingClientRect();
    const nextRealSlide = track.children[visibleSlides + 1];
    const slideStep = nextRealSlide
      ? nextRealSlide.getBoundingClientRect().left - firstRect.left
      : firstRect.width;
    track.style.transition = animate && !prefersReducedMotion() ? "" : "none";
    track.style.transform = `translate3d(-${(slideIndex + visibleSlides) * slideStep}px, 0, 0)`;

    if (!animate || prefersReducedMotion()) {
      track.offsetWidth;
      window.requestAnimationFrame(() => {
        track.style.transition = "";
      });
    }
  }

  function updateAutoplay() {
    window.clearInterval(autoplayTimer);
    autoplayTimer = 0;
    if (slides.length <= visibleSlides || prefersReducedMotion() || isHovered || !isInViewport || document.hidden) {
      return;
    }
    autoplayTimer = window.setInterval(advance, interval);
  }

  function rebuild() {
    const nextVisibleSlides = Math.min(Math.max(1, getVisibleSlideCount()), slides.length);
    if (nextVisibleSlides === visibleSlides) {
      updateTrack(false);
      return;
    }

    window.clearTimeout(transitionTimer);
    isTransitioning = false;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    visibleSlides = nextVisibleSlides;

    while (track.firstChild) {
      track.removeChild(track.firstChild);
    }

    slides.slice(-visibleSlides).forEach((slide) => appendClone(slide));
    slides.forEach((slide) => track.appendChild(slide));
    slides.slice(0, visibleSlides).forEach((slide) => appendClone(slide));
    updateTrack(false);
    updateAutoplay();
  }

  function appendClone(slide) {
    const clone = slide.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.setAttribute("role", "presentation");
    clone.setAttribute("data-slider-clone", "true");
    track.appendChild(clone);
  }

  function finishTransition() {
    if (!isTransitioning) {
      return;
    }
    window.clearTimeout(transitionTimer);
    isTransitioning = false;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    updateTrack(false);
  }

  function advance() {
    if (isTransitioning || slides.length <= visibleSlides) {
      return;
    }

    slideIndex += 1;
    if (prefersReducedMotion()) {
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      updateTrack(false);
      return;
    }

    isTransitioning = true;
    updateTrack(true);
    transitionTimer = window.setTimeout(finishTransition, 900);
  }

  track.addEventListener("transitionend", (event) => {
    if (event.target === track && event.propertyName.indexOf("transform") !== -1) {
      finishTransition();
    }
  });
  slider.addEventListener("mouseenter", () => {
    isHovered = true;
    updateAutoplay();
  });
  slider.addEventListener("mouseleave", () => {
    isHovered = false;
    updateAutoplay();
  });
  document.addEventListener("visibilitychange", updateAutoplay);

  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(rebuild, 120);
  });

  if (reducedMotionQuery) {
    if (typeof reducedMotionQuery.addEventListener === "function") {
      reducedMotionQuery.addEventListener("change", updateAutoplay);
    } else if (typeof reducedMotionQuery.addListener === "function") {
      reducedMotionQuery.addListener(updateAutoplay);
    }
  }

  rebuild();

  if (typeof IntersectionObserver === "function") {
    const sliderObserver = new IntersectionObserver((entries) => {
      isInViewport = entries.some((entry) => entry.isIntersecting);
      updateAutoplay();
    }, { threshold: 0.12 });
    sliderObserver.observe(slider);
  } else {
    isInViewport = true;
    updateAutoplay();
  }
}

function getCompanyVisibleSlides() {
  const width = document.documentElement.clientWidth || window.innerWidth;
  return width <= 740 ? 2 : width <= 920 ? 3 : 5;
}

function getSectorVisibleSlides() {
  const viewport = document.querySelector(".sector-slider-viewport");
  const firstSlide = document.querySelector("#sector-list").children[0];
  const nextSlide = document.querySelector("#sector-list").children[1];
  if (!firstSlide) {
    return 1;
  }
  const firstRect = firstSlide.getBoundingClientRect();
  const step = nextSlide
    ? nextSlide.getBoundingClientRect().left - firstRect.left
    : firstRect.width;
  return Math.max(1, Math.ceil(viewport.clientWidth / step));
}

initializeAutoSlider(
  document.querySelector("#company-slider"),
  document.querySelector("#company-list"),
  getCompanyVisibleSlides,
  3600,
);
initializeAutoSlider(
  document.querySelector("#sector-slider"),
  document.querySelector("#sector-list"),
  getSectorVisibleSlides,
  4200,
);

renderList("#avoid-list", avoidList, (item) => `<li><img src="images/cross.svg" alt="Cross" />${escapeHtml(item)}</li>`);

renderList("#process-list", processSteps, ([number, title, text]) => `
  <article><span>${escapeHtml(number)}</span><div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></div></article>
`);

renderList("#risk-list", riskControls, ({ title, detail }) => `
  <li>
    <span class="control-check" aria-hidden="true">✓</span>
    <div><strong>${escapeHtml(title)}</strong><small>${escapeHtml(detail)}</small></div>
  </li>
`);

renderList("#governance-list", riskCategories, ({ title }, index) => `
  <button class="risk-category-button ${index === 6 ? "risk-category-highlight" : ""}" type="button" data-risk-index="${index}" aria-haspopup="dialog" aria-controls="risk-dialog">
    ${escapeHtml(title)}
  </button>
`);

const riskDialog = document.querySelector("#risk-dialog");
const riskDialogTitle = document.querySelector("#risk-dialog-title");
const riskDialogDescription = document.querySelector("#risk-dialog-description");

document.querySelector("#governance-list").addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-risk-index]");
  if (!trigger) {
    return;
  }

  const riskIndex = Number(trigger.dataset.riskIndex);
  const riskCategory = riskCategories[riskIndex];
  if (!Number.isInteger(riskIndex) || !riskCategory) {
    throw new Error(`Missing risk detail for category index ${trigger.dataset.riskIndex}`);
  }

  riskDialogTitle.textContent = riskCategory.title;
  riskDialogDescription.textContent = riskCategory.description;
  riskDialog.showModal();
});

document.querySelector("#risk-dialog-close").addEventListener("click", () => {
  riskDialog.close();
});

riskDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  riskDialog.close();
});

riskDialog.addEventListener("click", (event) => {
  if (event.target === riskDialog) {
    riskDialog.close();
  }
});

renderList("#leaders-list", leaders, ({ name, role, experience, bio, focusAreas, photo }) => `
  <article class="leader-card">
    <img src="${escapeHtml(photo)}" alt="${escapeHtml(name)}, ${escapeHtml(role)}" loading="lazy" />
    <span class="leader-badge">${escapeHtml(experience)}</span>
    <h3>${escapeHtml(name)}</h3>
    <p class="leader-role">${escapeHtml(role)}</p>
    <p class="leader-bio">${escapeHtml(bio)}</p>
    <div class="leader-focus">
      <h4>Focus Areas</h4>
      <p>${focusAreas.map(escapeHtml).join(" · ")}</p>
    </div>
  </article>
`);

renderList("#disclosure-list", disclosures, ([title, text]) => `
  <article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>
`);

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const sectionLinks = [...navigation.querySelectorAll(".nav-items a")];
const navigationSections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
let pendingNavigationSection = null;
let activeNavigationId = "";

function setActiveNavigation(sectionId) {
  if (activeNavigationId === sectionId) {
    return;
  }
  activeNavigationId = sectionId;

  sectionLinks.forEach((link) => {
    if (link.hash === `#${sectionId}`) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function updateActiveNavigation() {
  const activationPoint = window.scrollY + document.querySelector(".site-header").offsetHeight + 24;
  const sectionsAboveActivationPoint = navigationSections
    .filter((section) => section.getBoundingClientRect().top + window.scrollY <= activationPoint);
  let activeSection = sectionsAboveActivationPoint[sectionsAboveActivationPoint.length - 1] || null;

  if (pendingNavigationSection) {
    const pendingSectionTop = pendingNavigationSection.getBoundingClientRect().top + window.scrollY;
    if (pendingSectionTop > activationPoint) {
      activeSection = pendingNavigationSection;
    } else {
      pendingNavigationSection = null;
    }
  }

  setActiveNavigation(activeSection ? activeSection.id : "");
}

let previousScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (pendingNavigationSection && currentScrollY !== previousScrollY) {
    const activationPoint = currentScrollY + document.querySelector(".site-header").offsetHeight + 24;
    const sectionTop = pendingNavigationSection.getBoundingClientRect().top + currentScrollY;
    const movingTowardSection = sectionTop > activationPoint
      ? currentScrollY > previousScrollY
      : currentScrollY < previousScrollY;
    if (!movingTowardSection) {
      pendingNavigationSection = null;
    }
  }
  previousScrollY = currentScrollY;
  updateActiveNavigation();
}, { passive: true });

window.addEventListener("resize", updateActiveNavigation);
window.addEventListener("hashchange", updateActiveNavigation);
updateActiveNavigation();

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  navigation.classList.toggle("navigation-open", isOpen);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navigation.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (link) {
    const section = document.querySelector(link.getAttribute("href"));
    if (section) {
      pendingNavigationSection = section;
      setActiveNavigation(section.id);
    }
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
  }
});

const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const submitButton = contactForm.querySelector(".form-submit");
  submitButton.innerHTML = 'Inquiry validated — preview only <span aria-hidden="true" class="arrow">↗</span>';

  let status = contactForm.querySelector(".form-success");
  if (!status) {
    status = document.createElement("p");
    status.className = "form-success";
    status.setAttribute("role", "status");
    contactForm.querySelector(".form-submit").after(status);
  }
  status.textContent = "Form validation succeeded. This preview does not submit or store inquiries.";
});

function animateMetricCounter(counter) {
  const finalText = counter.textContent.trim();
  const tokenPattern = /\d[\d,]*/g;
  const tokens = [...finalText.matchAll(tokenPattern)].map(([text]) => {
    const value = Number(text.replace(/,/g, ""));
    if (!Number.isFinite(value)) {
      throw new Error(`Invalid metric counter value: ${text}`);
    }
    return {
      value,
      formatter: new Intl.NumberFormat("en-US", { useGrouping: text.includes(",") }),
    };
  });

  if (!tokens.length) {
    throw new Error(`Metric counter has no numeric value: ${finalText}`);
  }

  const duration = 1600;
  const startTime = performance.now();

  function updateCounter(timestamp) {
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    let tokenIndex = 0;

    counter.textContent = finalText.replace(tokenPattern, () => {
      const token = tokens[tokenIndex++];
      return token.formatter.format(Math.round(token.value * easedProgress));
    });

    if (progress < 1) {
      window.requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = finalText;
    }
  }

  window.requestAnimationFrame(updateCounter);
}

function initializePageMotion() {
  if (reducedMotionQuery?.matches || typeof IntersectionObserver !== "function") {
    return;
  }

  const revealTargets = new Set(document.querySelectorAll([
    ".section-label",
    ".section-title",
    ".overview-copy > *",
    ".market-card",
    ".map-visual",
    ".strategy-diagram",
    ".company-slider",
    ".principle-block",
    ".sectors-intro",
    ".sector-card:not([data-slider-clone])",
    ".no-list",
    ".process-steps article",
    ".process-aside > *",
    ".structure-grid > *",
    ".risk-statement",
    ".risk-grid > *",
    ".leader-card",
    ".disclosure-grid > *",
    ".contact-layout > *",
  ].join(", ")));

  document.querySelectorAll(".metric-card").forEach((card) => revealTargets.add(card));

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const target = entry.target;
      target.classList.add("is-visible");
      currentObserver.unobserve(target);

      const counter = target.querySelector("[data-counter]");
      if (counter && !counter.dataset.counted) {
        counter.dataset.counted = "true";
        animateMetricCounter(counter);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

  revealTargets.forEach((target) => {
    const siblingIndex = Array.from(target.parentElement.children).indexOf(target);
    target.classList.add("scroll-reveal");
    target.style.setProperty("--reveal-delay", `${Math.min(siblingIndex, 4) * 70}ms`);
    observer.observe(target);
  });
}

function splitTextForReveal(element) {
  if (!element || element.dataset.wordsSplit === "true") {
    return;
  }

  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) {
    if (walker.currentNode.textContent.trim()) {
      textNodes.push(walker.currentNode);
    }
  }

  textNodes.forEach((textNode) => {
    const fragment = document.createDocumentFragment();
    textNode.textContent.split(/(\s+)/).forEach((token) => {
      if (!token) return;
      if (/^\s+$/.test(token)) {
        fragment.appendChild(document.createTextNode(token));
        return;
      }
      const line = document.createElement("span");
      line.className = "split-line";
      const word = document.createElement("span");
      word.className = "split-word";
      const inner = document.createElement("span");
      inner.className = "split-word-inner";
      inner.textContent = token;
      word.appendChild(inner);
      line.appendChild(word);
      fragment.appendChild(line);
    });
    textNode.replaceWith(fragment);
  });
  element.dataset.wordsSplit = "true";
}

function initializePremiumMotion() {
  if (reducedMotionQuery?.matches || typeof window.gsap === "undefined" || typeof window.ScrollTrigger === "undefined") {
    initializePageMotion();
    return;
  }

  const gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger);

  let lenis = null;
  if (typeof window.Lenis === "function") {
    lenis = new window.Lenis({
      duration: 1.05,
      lerp: 0.075,
      smoothWheel: true,
      touchMultiplier: 1.15,
    });

    lenis.on("scroll", window.ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  const animatedSections = document.querySelectorAll([
    ".hero",
    ".metrics",
    ".overview",
    ".market",
    ".strategy-band",
    ".track-section",
    ".sectors-section",
    ".process",
    ".structure",
    ".risk-section",
    ".leadership",
    ".disclosures",
    ".contact-section",
    ".site-footer",
  ].join(", "));

  if (typeof IntersectionObserver === "function") {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("section-in-view", entry.isIntersecting);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
    animatedSections.forEach((section) => sectionObserver.observe(section));
  } else {
    animatedSections.forEach((section) => section.classList.add("section-in-view"));
  }

  document.querySelectorAll(".hero h1, .section-title").forEach(splitTextForReveal);

  gsap.set(".hero-copy > *, .hero-regions", { opacity: 0, y: 24, filter: "blur(8px)" });
  gsap.set(".hero-background", { scale: 1.035 });
  gsap.set(".hero h1 .split-word-inner", { yPercent: 115, rotateX: -24, filter: "blur(6px)", transformOrigin: "50% 100%" });

  gsap.timeline({
    defaults: { ease: "power3.out" },
    scrollTrigger: {
      trigger: ".hero",
      start: "top 82%",
      once: true,
    },
  })
    .to(".hero-background", { opacity: 1, scale: 1, duration: 1.35 })
    .to(".hero-copy > *, .hero-regions", { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.82, stagger: 0.09 }, 0.12)
    .to(".hero h1 .split-word-inner", {
      yPercent: 0,
      rotateX: 0,
      filter: "blur(0px)",
      opacity: 1,
      duration: 0.95,
      stagger: 0.032,
      ease: "power3.out",
    }, 0.3);

  gsap.to(".hero-background", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  document.querySelectorAll(".section-title").forEach((title) => {
    gsap.set(title.querySelectorAll(".split-word-inner"), {
      yPercent: 115,
      rotateX: -18,
      filter: "blur(5px)",
      opacity: 0,
      transformOrigin: "50% 100%",
    });
    gsap.to(title.querySelectorAll(".split-word-inner"), {
      yPercent: 0,
      rotateX: 0,
      filter: "blur(0px)",
      opacity: 1,
      duration: 0.82,
      stagger: 0.028,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title,
        start: "top 82%",
        once: true,
      },
    });
  });

  const revealTargets = [
    ".section-label",
    ".overview-copy > *",
    ".market-card",
    ".map-visual",
    ".strategy-diagram",
    ".company-slider",
    ".principle-block",
    ".sectors-intro",
    ".sector-card",
    ".no-list",
    ".process-steps article",
    ".process-aside > *",
    ".structure-grid > *",
    ".risk-statement",
    ".risk-grid > *",
    ".leader-card",
    ".disclosure-grid > *",
    ".contact-layout > *",
  ];

  revealTargets.forEach((selector) => {
    document.querySelectorAll(selector).forEach((target, index) => {
      gsap.from(target, {
        y: 34,
        scale: 0.985,
        filter: "blur(5px)",
        opacity: 0,
        duration: 0.82,
        delay: Math.min(index % 5, 4) * 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: target,
          start: "top 86%",
          once: true,
        },
      });
    });
  });

  document.querySelectorAll(".city-image, .map-visual img").forEach((image) => {
    image.classList.add("image-reveal");
    gsap.fromTo(image,
      { clipPath: "inset(0 0 100% 0)", y: 24, scale: 1.04 },
      {
        clipPath: "inset(0 0 0% 0)",
        y: 0,
        scale: 1,
        duration: 1.05,
        ease: "power3.out",
        scrollTrigger: { trigger: image, start: "top 84%", once: true },
      },
    );
  });

  gsap.utils.toArray(".metric-card").forEach((card) => {
    gsap.from(card, {
      y: 16,
      opacity: 0,
      duration: 0.65,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        once: true,
        onEnter: () => {
          const counter = card.querySelector("[data-counter]");
          if (counter && !counter.dataset.counted) {
            counter.dataset.counted = "true";
            animateMetricCounter(counter);
          }
        },
      },
    });
  });

  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll(".button, .nav-cta").forEach((button) => {
      button.classList.add("magnetic");
      button.addEventListener("pointermove", (event) => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        gsap.to(button, { x: x * 0.14, y: y * 0.14, duration: 0.35, ease: "power2.out" });
      });
      button.addEventListener("pointerleave", () => {
        gsap.to(button, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, .4)" });
      });
    });

    document.querySelectorAll("[data-tilt], .leader-card, .market-card, .sector-card").forEach((card) => {
      card.setAttribute("data-tilt", "");
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 5;
        const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -5;
        gsap.to(card, { rotateX, rotateY, y: -3, transformPerspective: 900, duration: 0.25, ease: "power2.out" });
      });
      card.addEventListener("pointerleave", () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, y: 0, duration: 0.55, ease: "power3.out" });
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();

      const curtain = document.querySelector(".page-transition");
      gsap.set(curtain, { visibility: "visible" });
      gsap.timeline()
        .to(curtain, { y: "0%", duration: 0.28, ease: "power2.inOut" })
        .to(curtain.querySelector("span"), { scaleX: 1, duration: 0.18 }, "<")
        .add(() => {
          if (lenis) {
            lenis.scrollTo(target, { offset: -24, duration: 1 });
          } else {
            target.scrollIntoView({ behavior: "smooth" });
          }
          history.pushState(null, "", link.getAttribute("href"));
        })
        .to(curtain.querySelector("span"), { scaleX: 0, duration: 0.12 })
        .to(curtain, { y: "-101%", duration: 0.32, ease: "power2.inOut" })
        .set(curtain, { visibility: "hidden", y: "101%" });
    });
  });

  window.addEventListener("resize", () => window.ScrollTrigger.refresh());
}

initializePremiumMotion();
