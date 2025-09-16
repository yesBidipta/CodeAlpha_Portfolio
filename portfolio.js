
document.addEventListener("DOMContentLoaded", () => {
  console.log("JS loaded ✅");

  // ===== Mobile Navigation Toggle =====
  // ===== Mobile Navigation Toggle =====
const nav = document.querySelector("nav ul");
const menuToggle = document.createElement("button");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "&#9776;"; // hamburger icon

const headerContainer = document.querySelector("header .container");

// Just append safely instead of insertBefore
headerContainer.appendChild(menuToggle);

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Project Filters
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    projectCards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";   // show matching cards
      } else {
        card.style.display = "none";    // hide others
      }
    });
  });
});


  // Close menu when a nav link is clicked
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("active"));
  });

  // ===== Smooth Scrolling =====
  document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  
  // ===== FAQ Accordion =====
const faqItems = document.querySelectorAll(".faq-item");
console.log("Found FAQ questions:", faqItems.length);

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  question.addEventListener("click", () => {
    if (answer.style.maxHeight) {
      // Collapse
      answer.style.maxHeight = null;
    } else {
      // Close all other answers first
      faqItems.forEach((i) => i.querySelector(".faq-answer").style.maxHeight = null);

      // Expand this one
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
    console.log("FAQ clicked:", question.innerText);
  });
});

// Vanta Background
VANTA.WAVES({
  el: "#hero-bg",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x333333, // charcoal waves
  shininess: 50,
  waveHeight: 15,
  waveSpeed: 0.8,
  zoom: 0.85
});


  // ===== Highlight Active Section in Nav =====
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) current = section.getAttribute("id");
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
});
