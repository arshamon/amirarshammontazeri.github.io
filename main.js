/* Shared across all pages: builds the sidebar/topbar nav and small helpers. */

const NAV = [
  { href: "index.html", label: "Home" },
  { href: "research.html", label: "Research" },
  { href: "tutoring.html", label: "Tutoring" },
  { href: "cv.html", label: "CV" },
  { href: "blog.html", label: "Blog" },
  { href: "contact.html", label: "Contact" }
];

function currentPage() {
  const p = location.pathname.split("/").pop();
  return p === "" ? "index.html" : p;
}

function buildNav() {
  const here = currentPage();
  const shell = document.getElementById("shell");

  // Desktop sidebar
  const sidebar = document.createElement("aside");
  sidebar.className = "sidebar";
  sidebar.innerHTML = `
    <div class="sidebar-top">
      <a href="index.html" class="mark">${SITE.name}<span>${SITE.title}</span></a>
      <nav>${NAV.map(n => `<a href="${n.href}" class="${n.href === here ? "active" : ""}">${n.label}</a>`).join("")}</nav>
    </div>
    <div class="sidebar-bottom">&copy; ${new Date().getFullYear()} ${SITE.name}</div>
  `;

  // Mobile topbar
  const topbar = document.createElement("div");
  topbar.className = "topbar";
  topbar.innerHTML = `
    <a href="index.html" class="mark">${SITE.name}</a>
    <button id="menuToggle" aria-expanded="false" aria-controls="mobileNav">Menu</button>
  `;

  const mobileNav = document.createElement("div");
  mobileNav.className = "mobile-nav";
  mobileNav.id = "mobileNav";
  mobileNav.innerHTML = NAV.map(n => `<a href="${n.href}" class="${n.href === here ? "active" : ""}">${n.label}</a>`).join("");

  const wrap = document.createElement("div");
  wrap.style.width = "100%";
  wrap.appendChild(topbar);
  wrap.appendChild(mobileNav);

  shell.prepend(sidebar);
  document.body.prepend(wrap);

  document.getElementById("menuToggle").addEventListener("click", (e) => {
    const open = mobileNav.classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

/* ---------- Small render helpers used by page scripts ---------- */

function emptyState(text) {
  return `<div class="empty-note">${text}</div>`;
}

function renderLinks() {
  const items = [];
  if (SITE.links.email) items.push(`<li><a href="mailto:${SITE.links.email}">${SITE.links.email}</a></li>`);
  if (SITE.links.linkedin) items.push(`<li><a href="${SITE.links.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>`);
  if (SITE.links.github) items.push(`<li><a href="${SITE.links.github}" target="_blank" rel="noopener">GitHub</a></li>`);
  if (SITE.links.instagram) items.push(`<li><a href="${SITE.links.instagram}" target="_blank" rel="noopener">Instagram</a></li>`);
  if (SITE.links.x) items.push(`<li><a href="${SITE.links.x}" target="_blank" rel="noopener">X</a></li>`);
  return items.length ? `<ul class="link-list">${items.join("")}</ul>` : emptyState("Links coming soon.");
}

document.addEventListener("DOMContentLoaded", buildNav);
