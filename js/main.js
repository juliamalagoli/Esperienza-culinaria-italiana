/* Italy at Your Table — interactions
   Mobile nav · sticky header state · accordion · scroll reveals · form UX */
(function () {
  "use strict";

  /* ---- Flag JS so scroll-reveal only hides content when JS can restore it ---- */
  document.documentElement.classList.add("js");

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Sticky header shadow on scroll ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Accordion (FAQ) ---- */
  document.querySelectorAll(".acc-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".acc-item");
      var panel = item.querySelector(".acc-panel");
      var open = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      panel.style.maxHeight = open ? panel.scrollHeight + "px" : null;
    });
  });

  /* ---- Scroll reveal ---- */
  var revealables = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealables.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Floating WhatsApp button (on every page) ---- */
  if (!document.querySelector(".wa-float")) {
    var wa = document.createElement("a");
    wa.className = "wa-float";
    wa.href = "https://wa.me/447514488722?text=Hi%20Julia%2C%20I%27d%20love%20to%20book%20an%20Italian%20dinner%20at%20home.";
    wa.target = "_blank";
    wa.rel = "noopener";
    wa.setAttribute("aria-label", "Message Italy at Your Table on WhatsApp");
    wa.innerHTML = '<svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16.04 4C9.9 4 4.9 9 4.9 15.14c0 2.2.65 4.24 1.77 5.96L4.5 28l7.05-2.1a11.1 11.1 0 0 0 4.49.95h.01c6.14 0 11.14-5 11.14-11.14C27.18 9 22.18 4 16.04 4zm0 20.3h-.01c-1.4 0-2.77-.38-3.97-1.09l-.28-.17-4.18 1.25 1.27-4.07-.18-.29a9.24 9.24 0 0 1-1.42-4.92c0-5.1 4.15-9.25 9.26-9.25 2.47 0 4.79.96 6.54 2.71a9.2 9.2 0 0 1 2.71 6.55c0 5.1-4.15 9.25-9.25 9.25zm5.08-6.93c-.28-.14-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.18.28-.72.9-.88 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.24-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.47-.63-.48l-.54-.01c-.18 0-.48.07-.73.35-.25.28-.96.94-.96 2.3 0 1.35.98 2.66 1.12 2.84.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>';
    document.body.appendChild(wa);
  }

  /* ---- Booking form (no backend yet — graceful demo) ---- */
  var form = document.querySelector("[data-booking-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector("[data-form-status]");
      if (status) {
        status.hidden = false;
        status.textContent =
          "Grazie! Your enquiry is ready to send. (Connect this form to email before launch — see PROJECT.md.)";
      }
      form.querySelector("button[type=submit]").disabled = true;
    });
  }

  /* =======================================================================
     Analytics — SPENTO. Nessun dato viene raccolto finché non lo accendi.

     Per accenderlo servono due cose: il dominio comprato e un account.
     Poi basta cambiare `provider` qui sotto — nient'altro, su nessuna pagina.

       Plausible  → plausible.io  · ~£7/mese · niente cookie, niente banner
                    provider: "plausible"  (usa `domain`)

       Umami      → umami.is · gratis fino a 100k eventi · niente cookie
                    provider: "umami"  +  incolla `websiteId` dalla dashboard

     Entrambi sono senza cookie e non tracciano le persone fra un sito e
     l'altro: per il GDPR non serve il banner del consenso. Google Analytics
     lo richiederebbe, ed e' il motivo per cui non lo usiamo.
     ======================================================================= */
  var ANALYTICS = {
    provider: null,                        // null | "plausible" | "umami"
    domain: "italyatyourtable.co.uk",
    websiteId: ""                          // solo per Umami
  };

  if (ANALYTICS.provider === "plausible") {
    loadAnalytics("https://plausible.io/js/script.js", { "data-domain": ANALYTICS.domain });
  } else if (ANALYTICS.provider === "umami" && ANALYTICS.websiteId) {
    loadAnalytics("https://cloud.umami.is/script.js", { "data-website-id": ANALYTICS.websiteId });
  }

  function loadAnalytics(src, attrs) {
    var s = document.createElement("script");
    s.defer = true;
    s.src = src;
    Object.keys(attrs).forEach(function (k) { s.setAttribute(k, attrs[k]); });
    document.head.appendChild(s);
  }
})();
