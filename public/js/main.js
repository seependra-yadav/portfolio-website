const toggleBtn = document.getElementById("theme-toggle");
const particleCanvas = document.getElementById("particle-canvas");
const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

if (localStorage.getItem("theme") === "light") {
  document.documentElement.classList.add("light");
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");
    const theme = document.documentElement.classList.contains("light") ? "light" : "dark";
    localStorage.setItem("theme", theme);
  });
}

const revealTargets = document.querySelectorAll(".project-card, .skill-box, .about-p1, form, .quick-links a, .main-section img, .main-section h1, .main-section p");
revealTargets.forEach((el, index) => {
  el.classList.add("reveal");
  el.style.transitionDelay = `${Math.min(index * 50, 320)}ms`;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => observer.observe(el));

if (particleCanvas) {
  const context = particleCanvas.getContext("2d");
  const particles = [];
  const PARTICLE_COUNT = 45;

  const resize = () => {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
  };

  const createParticle = () => ({
    x: Math.random() * particleCanvas.width,
    y: Math.random() * particleCanvas.height,
    radius: Math.random() * 1.8 + 0.4,
    speedX: (Math.random() - 0.5) * 0.25,
    speedY: (Math.random() - 0.5) * 0.25,
    alpha: Math.random() * 0.5 + 0.2
  });

  resize();
  for (let i = 0; i < PARTICLE_COUNT; i += 1) {
    particles.push(createParticle());
  }

  const isLight = () => document.documentElement.classList.contains("light");

  const draw = () => {
    context.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

    particles.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0) particle.x = particleCanvas.width;
      if (particle.x > particleCanvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = particleCanvas.height;
      if (particle.y > particleCanvas.height) particle.y = 0;

      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = isLight()
        ? `rgba(0, 108, 224, ${particle.alpha * 0.45})`
        : `rgba(59, 168, 255, ${particle.alpha})`;
      context.fill();
    });

    requestAnimationFrame(draw);
  };

  draw();
  window.addEventListener("resize", resize);
}

if (cursorDot && cursorRing && window.matchMedia("(pointer: fine)").matches) {
  let ringX = 0;
  let ringY = 0;

  const moveCursor = (event) => {
    const { clientX, clientY } = event;
    cursorDot.style.transform = `translate(${clientX}px, ${clientY}px)`;

    ringX += (clientX - ringX) * 0.2;
    ringY += (clientY - ringY) * 0.2;
    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
  };

  window.addEventListener("mousemove", moveCursor);

  document.querySelectorAll("a, button, input, textarea").forEach((node) => {
    node.addEventListener("mouseenter", () => cursorRing.classList.add("cursor-ring-grow"));
    node.addEventListener("mouseleave", () => cursorRing.classList.remove("cursor-ring-grow"));
  });
} else {
  if (cursorDot) cursorDot.style.display = "none";
  if (cursorRing) cursorRing.style.display = "none";
}
