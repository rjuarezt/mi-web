/* ============================================
   ANGIE NAILS STUDIO — main.js
   ============================================ */

/* --------------------------------------------------
   1. CUSTOM CURSOR (solo desktop)
-------------------------------------------------- */
if (window.matchMedia("(pointer: fine)").matches) {
  const cursor = document.getElementById("cursor");
  const cursorRing = document.getElementById("cursor-ring");
  let mx = 0,
    my = 0,
    rx = 0,
    ry = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + "px";
    cursor.style.top = my + "px";
  });
  function animateRing() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    cursorRing.style.left = rx + "px";
    cursorRing.style.top = ry + "px";
    requestAnimationFrame(animateRing);
  }
  animateRing();
}

/* --------------------------------------------------
   1.5. PRELOADER & ENTRANCE SEQUENCE
-------------------------------------------------- */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("fade-out");
    document.body.classList.add("loaded");
  }, 1000); // 1s de 'branding' mínimo
});

/* PARALLAX HERO (Sutil) */
const hero = document.querySelector(".hero");
if (hero) {
  hero.addEventListener("mousemove", (e) => {
    const { clientX: x, clientY: y } = e;
    const moveX = (x - window.innerWidth / 2) / 50;
    const moveY = (y - window.innerHeight / 2) / 50;

    const visual = hero.querySelector(".hero-visual");
    const blob = hero.querySelector(".hero-blob");

    if (visual) visual.style.transform = `translate(${moveX}px, ${moveY}px)`;
    if (blob) blob.style.transform = `translate(${-moveX * 1.5}px, ${-moveY * 1.5}px)`;
  });
}

/* --------------------------------------------------
   2. NAVBAR — scroll + mobile toggle
-------------------------------------------------- */
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
});

function closeMenu() {
  navToggle.classList.remove("open");
  navLinks.classList.remove("open");
  document.body.classList.remove("nav-open");
}

/* Cerrar menú al hacer clic en enlaces */
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});



/* --------------------------------------------------
   3. SCROLL REVEAL
-------------------------------------------------- */
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
revealEls.forEach((el) => revealObserver.observe(el));

/* --------------------------------------------------
   3.5. FAQ ACCORDION
-------------------------------------------------- */
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    // Cerrar otros abiertos (Opcional, pero más ordenado)
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) otherItem.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

/* --------------------------------------------------
   4. GALLERY — estado y render
   Las imágenes se definen aquí directamente.
   Para agregar fotos: añade un objeto al array `galleryImages`
   con { src, name, category }
   Categorías: 'nail-art' | 'gel' | 'acrilico' | 'semipermanente' | 'spa'
-------------------------------------------------- */
const galleryImages = [
  // Polygel (41 imágenes)
  { src: './img_proy/polygel/polygel-1.jpeg', name: 'Diseño Polygel 1', category: 'polygel' },
  { src: './img_proy/polygel/polygel-2.jpeg', name: 'Diseño Polygel 2', category: 'polygel' },
  { src: './img_proy/polygel/polygel-3.jpeg', name: 'Diseño Polygel 3', category: 'polygel' },
  { src: './img_proy/polygel/polygel-4.jpeg', name: 'Diseño Polygel 4', category: 'polygel' },
  { src: './img_proy/polygel/polygel-5.jpeg', name: 'Diseño Polygel 5', category: 'polygel' },
  { src: './img_proy/polygel/polygel-6.jpeg', name: 'Diseño Polygel 6', category: 'polygel' },
  { src: './img_proy/polygel/polygel-7.jpeg', name: 'Diseño Polygel 7', category: 'polygel' },
  { src: './img_proy/polygel/polygel-8.jpeg', name: 'Diseño Polygel 8', category: 'polygel' },
  { src: './img_proy/polygel/polygel-9.jpeg', name: 'Diseño Polygel 9', category: 'polygel' },
  { src: './img_proy/polygel/polygel-10.jpeg', name: 'Diseño Polygel 10', category: 'polygel' },
  { src: './img_proy/polygel/polygel-11.jpeg', name: 'Diseño Polygel 11', category: 'polygel' },
  { src: './img_proy/polygel/polygel-12.jpeg', name: 'Diseño Polygel 12', category: 'polygel' },
  { src: './img_proy/polygel/polygel-13.jpeg', name: 'Diseño Polygel 13', category: 'polygel' },
  { src: './img_proy/polygel/polygel-14.jpeg', name: 'Diseño Polygel 14', category: 'polygel' },
  { src: './img_proy/polygel/polygel-15.jpeg', name: 'Diseño Polygel 15', category: 'polygel' },
  { src: './img_proy/polygel/polygel-16.jpeg', name: 'Diseño Polygel 16', category: 'polygel' },
  { src: './img_proy/polygel/polygel-17.jpeg', name: 'Diseño Polygel 17', category: 'polygel' },
  { src: './img_proy/polygel/polygel-18.jpeg', name: 'Diseño Polygel 18', category: 'polygel' },
  { src: './img_proy/polygel/polygel-19.jpeg', name: 'Diseño Polygel 19', category: 'polygel' },
  { src: './img_proy/polygel/polygel-20.jpeg', name: 'Diseño Polygel 20', category: 'polygel' },
  { src: './img_proy/polygel/polygel-21.jpeg', name: 'Diseño Polygel 21', category: 'polygel' },
  { src: './img_proy/polygel/polygel-22.jpeg', name: 'Diseño Polygel 22', category: 'polygel' },
  { src: './img_proy/polygel/polygel-23.jpeg', name: 'Diseño Polygel 23', category: 'polygel' },
  { src: './img_proy/polygel/polygel-24.jpeg', name: 'Diseño Polygel 24', category: 'polygel' },
  { src: './img_proy/polygel/polygel-25.jpeg', name: 'Diseño Polygel 25', category: 'polygel' },
  { src: './img_proy/polygel/polygel-26.jpeg', name: 'Diseño Polygel 26', category: 'polygel' },
  { src: './img_proy/polygel/polygel-27.jpeg', name: 'Diseño Polygel 27', category: 'polygel' },
  { src: './img_proy/polygel/polygel-28.jpeg', name: 'Diseño Polygel 28', category: 'polygel' },
  { src: './img_proy/polygel/polygel-29.jpeg', name: 'Diseño Polygel 29', category: 'polygel' },
  { src: './img_proy/polygel/polygel-30.jpeg', name: 'Diseño Polygel 30', category: 'polygel' },
  { src: './img_proy/polygel/polygel-31.jpeg', name: 'Diseño Polygel 31', category: 'polygel' },
  { src: './img_proy/polygel/polygel-32.jpeg', name: 'Diseño Polygel 32', category: 'polygel' },
  { src: './img_proy/polygel/polygel-33.jpeg', name: 'Diseño Polygel 33', category: 'polygel' },
  { src: './img_proy/polygel/polygel-34.jpeg', name: 'Diseño Polygel 34', category: 'polygel' },
  { src: './img_proy/polygel/polygel-35.jpeg', name: 'Diseño Polygel 35', category: 'polygel' },
  { src: './img_proy/polygel/polygel-36.jpeg', name: 'Diseño Polygel 36', category: 'polygel' },
  { src: './img_proy/polygel/polygel-37.jpeg', name: 'Diseño Polygel 37', category: 'polygel' },
  { src: './img_proy/polygel/polygel-38.jpeg', name: 'Diseño Polygel 38', category: 'polygel' },
  { src: './img_proy/polygel/polygel-39.jpeg', name: 'Diseño Polygel 39', category: 'polygel' },
  { src: './img_proy/polygel/polygel-40.jpeg', name: 'Diseño Polygel 40', category: 'polygel' },
  { src: './img_proy/polygel/polygel-41.jpeg', name: 'Diseño Polygel 41', category: 'polygel' },

  // Acrílicas (23 imágenes)
  { src: './img_proy/acrilicas/acrilicas-1.jpeg', name: 'Diseño Acrílica 1', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-2.jpeg', name: 'Diseño Acrílica 2', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-3.jpeg', name: 'Diseño Acrílica 3', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-4.jpeg', name: 'Diseño Acrílica 4', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-5.jpeg', name: 'Diseño Acrílica 5', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-6.jpeg', name: 'Diseño Acrílica 6', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-7.jpeg', name: 'Diseño Acrílica 7', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-8.jpeg', name: 'Diseño Acrílica 8', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-9.jpeg', name: 'Diseño Acrílica 9', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-10.jpeg', name: 'Diseño Acrílica 10', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-11.jpeg', name: 'Diseño Acrílica 11', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-12.jpeg', name: 'Diseño Acrílica 12', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-13.jpeg', name: 'Diseño Acrílica 13', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-14.jpeg', name: 'Diseño Acrílica 14', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-15.jpeg', name: 'Diseño Acrílica 15', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-16.jpeg', name: 'Diseño Acrílica 16', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-17.jpeg', name: 'Diseño Acrílica 17', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-18.jpeg', name: 'Diseño Acrílica 18', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-19.jpeg', name: 'Diseño Acrílica 19', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-20.jpeg', name: 'Diseño Acrílica 20', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-21.jpeg', name: 'Diseño Acrílica 21', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-22.jpeg', name: 'Diseño Acrílica 22', category: 'acrilicas' },
  { src: './img_proy/acrilicas/acrilicas-23.jpeg', name: 'Diseño Acrílica 23', category: 'acrilicas' },

  // Builder Gel (4 imágenes)
  { src: './img_proy/builder_gel/builder_gel-1.jpeg', name: 'Diseño Builder Gel 1', category: 'builder-gel' },
  { src: './img_proy/builder_gel/builder_gel-2.jpeg', name: 'Diseño Builder Gel 2', category: 'builder-gel' },
  { src: './img_proy/builder_gel/builder_gel-3.jpeg', name: 'Diseño Builder Gel 3', category: 'builder-gel' },
  { src: './img_proy/builder_gel/builder_gel-4.jpeg', name: 'Diseño Builder Gel 4', category: 'builder-gel' },

  // Rubber (2 imágenes)
  { src: './img_proy/rubber/rubber-1.jpeg', name: 'Diseño Rubber 1', category: 'rubber' },
  { src: './img_proy/rubber/rubber-2.jpeg', name: 'Diseño Rubber 2', category: 'rubber' },

  // Semipermanente (4 imágenes)
  { src: './img_proy/semipermanente/semipermanente-1.jpeg', name: 'Diseño Semipermanente 1', category: 'semipermanente' },
  { src: './img_proy/semipermanente/semipermanente-2.jpeg', name: 'Diseño Semipermanente 2', category: 'semipermanente' },
  { src: './img_proy/semipermanente/semipermanente-3.jpeg', name: 'Diseño Semipermanente 3', category: 'semipermanente' },
  { src: './img_proy/semipermanente/semipermanente-4.jpeg', name: 'Diseño Semipermanente 4', category: 'semipermanente' },

  // Soft Gel (1 imagen)
  { src: './img_proy/soft_gel/soft_gel-1.jpeg', name: 'Diseño Soft Gel 1', category: 'soft-gel' },
];

let currentFilter = "all";
let lightboxImages = [];
let lightboxIndex = 0;
let visibleCount = 9;
const PAGE_SIZE = 9;
let filteredItems = [];

function createGalleryItem(item, globalIndex, animDelay = 0) {
  const div = document.createElement("div");
  const layoutClass =
    globalIndex % 9 === 0 ? "gallery-item--feature" :
    globalIndex % 7 === 0 ? "gallery-item--tall" : "";
  div.className = `gallery-item ${layoutClass}`.trim();
  div.style.animationDelay = `${animDelay}ms`;

  const waMessage = encodeURIComponent(`Hola Angie Nails Studio! Me encantó este diseño: ${item.name}. ¿Me podrías dar una cotización? ✨`);
  const waUrl = `https://wa.me/51936926560?text=${waMessage}`;

  div.innerHTML = `
    <img src="${item.src}" alt="${item.name}" loading="lazy">
    <div class="gallery-item-overlay">
      <div class="gallery-item-top">
        <span class="gallery-item-tag">${item.category.replace("-", " ")}</span>
      </div>
      <div class="gallery-item-content">
        <h3 class="gallery-item-title">${item.name}</h3>
        <div class="gallery-item-actions">
          <button class="btn-item-view" aria-label="Ver imagen">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          <a href="${waUrl}" target="_blank" class="btn-item-wa" onclick="event.stopPropagation()">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span>Cotizar</span>
          </a>
        </div>
      </div>
    </div>
  `;
  div.addEventListener("click", () => openLightbox(globalIndex));
  return div;
}

function updateLoadMore() {
  const loadMoreEl = document.getElementById("galleryLoadMore");
  const btnEl = document.getElementById("btnLoadMore");
  const countEl = document.getElementById("galleryCount");
  const total = filteredItems.length;
  const shown = Math.min(visibleCount, total);

  countEl.textContent = `Mostrando ${shown} de ${total} trabajos`;

  if (shown >= total) {
    btnEl.style.display = "none";
  } else {
    btnEl.style.display = "flex";
  }
  loadMoreEl.style.display = total === 0 ? "none" : "flex";
}

function renderGallery(filter = "all") {
  const grid = document.getElementById("galleryGrid");
  const empty = document.getElementById("galleryEmpty");

  filteredItems = filter === "all"
    ? galleryImages
    : galleryImages.filter((i) => i.category === filter);

  lightboxImages = filteredItems;
  visibleCount = PAGE_SIZE;
  grid.innerHTML = "";

  if (filteredItems.length === 0) {
    empty.style.display = "block";
    document.getElementById("galleryLoadMore").style.display = "none";
    return;
  }
  empty.style.display = "none";

  const toShow = filteredItems.slice(0, visibleCount);
  toShow.forEach((item, i) => {
    grid.appendChild(createGalleryItem(item, i, i * 60));
  });

  updateLoadMore();
}

function loadMoreGallery() {
  const grid = document.getElementById("galleryGrid");
  const start = visibleCount;
  visibleCount = Math.min(visibleCount + PAGE_SIZE, filteredItems.length);
  const toAdd = filteredItems.slice(start, visibleCount);

  toAdd.forEach((item, i) => {
    const globalIndex = start + i;
    grid.appendChild(createGalleryItem(item, globalIndex, i * 60));
  });

  updateLoadMore();
}

/* --------------------------------------------------
   5. FILTROS
-------------------------------------------------- */
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderGallery(currentFilter);
  });
});

/* --------------------------------------------------
   6. LIGHTBOX
-------------------------------------------------- */
function openLightbox(index) {
  lightboxIndex = index;
  const item = lightboxImages[index];
  document.getElementById("lightboxImg").src = item.src;
  document.getElementById("lightboxCaption").textContent =
    `${item.name} — ${item.category.replace("-", " ")}`;
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function lightboxNav(dir) {
  if (lightboxImages.length === 0) return;
  lightboxIndex =
    (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  openLightbox(lightboxIndex);
}

document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!document.getElementById("lightbox").classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") lightboxNav(-1);
  if (e.key === "ArrowRight") lightboxNav(1);
});

/* --------------------------------------------------
   7. INIT
-------------------------------------------------- */
renderGallery();
