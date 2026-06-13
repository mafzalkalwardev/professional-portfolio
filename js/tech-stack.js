window.TECH_STACK = [
  { name: "Python", slug: "python", color: "#3776AB" },
  { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
  { name: "TypeScript", slug: "typescript", color: "#3178C6" },
  { name: "React", slug: "react", color: "#61DAFB" },
  { name: "Node.js", slug: "nodejs", color: "#339933" },
  { name: "Go", slug: "go", color: "#00ADD8" },
  { name: "FastAPI", slug: "fastapi", color: "#009688", si: "fastapi" },
  { name: "Express", slug: "express", color: "#000000", si: "express" },
  { name: "PyQt6", slug: "qt", color: "#41CD52", si: "qt" },
  { name: "Playwright", slug: "playwright", color: "#2EAD33", si: "playwright" },
  { name: "Selenium", slug: "selenium", color: "#43B02A" },
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "MongoDB", slug: "mongodb", color: "#47A248" },
  { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
  { name: "SQLite", slug: "sqlite", color: "#003B57", si: "sqlite" },
  { name: "Redis", slug: "redis", color: "#DC382D" },
  { name: "TensorFlow", slug: "tensorflow", color: "#FF6F00" },
  { name: "Git", slug: "git", color: "#F05032" },
  { name: "GitHub", slug: "github", color: "#181717" },
  { name: "HTML5", slug: "html5", color: "#E34F26" },
  { name: "CSS3", slug: "css3", color: "#1572B6" },
  { name: "Linux", slug: "linux", color: "#FCC624" },
  { name: "Whisper", slug: "openai", color: "#412991", si: "openai" },
  { name: "Groq", slug: "groq", color: "#F55036", si: "groq" },
];

window.CV_PATH = "assets/Muhammad-Afzal-Kalwar-CV.pdf";

function techIconUrl(item) {
  if (item.si) {
    return `https://cdn.simpleicons.org/${item.si}/${item.color.replace("#", "")}`;
  }
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item.slug}/${item.slug}-original.svg`;
}

function renderTechIcon(item) {
  const url = techIconUrl(item);
  return `
    <div class="tech-icon-item" title="${item.name}">
      <div class="tech-icon-wrap">
        <img src="${url}" alt="${item.name}" width="32" height="32" loading="lazy" />
      </div>
      <span class="tech-icon-label">${item.name}</span>
    </div>`;
}

function renderTechIconGrid(containerId) {
  const el = document.getElementById(containerId);
  if (!el || !window.TECH_STACK) return;
  el.classList.add('stagger-grid');
  el.innerHTML = window.TECH_STACK.map(renderTechIcon).join("");
  if (window.initReveal) window.initReveal([el]);
  if (window.initTechIconHover) window.initTechIconHover(el);
}

window.renderTechIconGrid = renderTechIconGrid;
