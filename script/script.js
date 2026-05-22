const awardsData = [
  {
    "icon": "img/style/icon.png",
    "year": "2025",
    "name": "Regional Honoree Latin America",
    "org": "Technovation Girls",
    "link": "https://technovationchallenge.org/results/2025-season/"
  },
  {
    "icon": "img/style/icon.png",
    "year": "2025",
    "name": "Climate Prize",
    "org": "Technovation Girls",
    "link": "https://technovationchallenge.org/results/2025-season/"
  },
  {
    "icon": "img/style/icon.png",
    "year": "2025",
    "name": "AI Favorite",
    "org": "Coolest Projects",
    "link": "https://online.coolestprojects.org/projects/17449"
  },
  {
    "icon": "img/style/icon.png",
    "year": "2025",
    "name": "IE Junior Venture Day Finalist",
    "org": "Córdoba",
    "link": "https://youtu.be/Y1VyWhMC_8o?si=lRLQubGf_rtAzwMK"
  },
  {
    "icon": "img/style/icon.png",
    "year": "2025",
    "name": "Reconocimiento a RiverStream",
    "org": "Por parte del proyecto PREVENIR",
    "link": ""
  },
  {
    "icon": "img/style/icon.png",
    "year": "2024",
    "name": "Social Impact Winner",
    "org": "Technovation Girls · California",
    "link": "https://www.technovation.org/blogs/technovation-girls-2024-award-winners/"
  },
  {
    "icon": "img/style/icon.png",
    "year": "2024",
    "name": "Carlospacense del Año",
    "org": "El Diario de Carlos Paz",
    "link": "https://www.eldiariodecarlospaz.com.ar/sociedad/2025/1/14/chiara-catalini-fue-elegida-como-la-carlospacense-del-ano-224608.html"
  },
  {
    "icon": "img/style/icon.png",
    "year": "2024",
    "name": "Adolescente Destacada",
    "org": "Consejo Deliberante Córdoba",
    "link": "https://deportebox.com/centros-vecinales-unificaran-fechas-de-elecciones-y-los-mandatos-seran-por-tres-anos/#:~:text=11887/C/24%20(Con%20Despacho)%20Declara%20%E2%80%9CAdolescente%20Destacada%20de%20la%20ciudad%20de%20C%C3%B3rdoba%E2%80%9D%2C%20a%20Chiara%20Angelina%20Catalini%20Monsu%2C%20ganadora%20del%20Premio%20al%20Impacto%20Social%2C%20por%20el%20desarrollo%20de%20la%20aplicaci%C3%B3n%20%E2%80%9CFlame%20Fighter%E2%80%9D%2C%20cuyo%20objeto%20es%20detectar%20y%20prevenir%20incendios%20forestales%20en%20todo%20el%20mundo."
  },
  {
    "icon": "img/style/icon.png",
    "year": "2024",
    "name": "Reconocimiento Consejo de Representantes VCP",
    "org": "Villa Carlos Paz",
    "link": "https://lajornadaweb.com.ar/chiara-catalini-fue-reconocida-en-el-concejo-de-representantes-por-su-aporte-innovador-en-la-deteccion-de-incendios-forestales/"
  },
  {
    "icon": "img/style/icon.png",
    "year": "2024",
    "name": "Mención Legislatura de Córdoba",
    "org": "Jóvenes Eco-Revolucionarios",
    "link": ""
  },
  {
    "icon": "img/style/icon.png",
    "year": "2024",
    "name": "FlameFighers Finalista",
    "org": "Technovation Girls",
    "link": ""
  },
  {
    "icon": "img/style/icon.png",
    "year": "2024",
    "name": "Curso de IA",
    "org": "Programo mi Futuro",
    "link": ""
  },
  {
    "icon": "img/style/icon.png",
    "year": "2024",
    "name": "Diseño Avanzado de páginas web",
    "org": "Chicas Digitalers",
    "link": ""
  },
  {
    "icon": "img/style/icon.png",
    "year": "2024",
    "name": "Medalla de Plata · Canguro Matemático",
    "org": "OMA",
    "link": ""
  },
  {
    "icon": "img/style/icon.png",
    "year": "2023",
    "name": "Mención Honorable Diseño Web",
    "org": "Chicas Digitalers · Telecom",
    "link": ""
  },
  {
    "icon": "img/style/icon.png",
    "year": "2023",
    "name": "Algebraicos del Mal - Semifinalistas",
    "org": "OMA - Mateclubes",
    "link": ""
  },
  {
   "icon": "img/style/icon.png",
    "year": "2022",
    "name": "B1 English Level",
    "org": "International Test",
    "link": "" 
  },
  {
    "icon": "img/style/icon.png",
    "year": "2021",
    "name": "Mejor Promedio · Abanderada Nacional",
    "org": "Top 10 escuela",
    "link": ""
  }
];

async function loadAwards() {
    const container = document.getElementById('award-list');

    container.innerHTML = awardsData.map(a => `
        <div  class="award-item">
            ${a.icon ? `<img class="award-icon" src="${a.icon}" alt="${a.name}">` : ''}
            <div class="award-info">
                <div class="award-year">${a.year}</div>
                <div class="award-name">
                    ${a.link
                        ? `<a href="${a.link}" target="_blank" class="award-link">${a.name}</a>`
                        : a.name
                    }
                </div>
                <div class="award-org">${a.org}</div>
            </div>
        </div>   
    `).join('');
}

loadAwards();

//Load carousel
let currentIndex = 0;
let slidesPerView = getSlidesPerView();

function getSlidesPerView() {
  if (window.innerWidth <= 500) return 1;
  if (window.innerWidth <= 860) return 2;
  return 3;
}

function buildCarousel() {
  const track = document.getElementById('carouselTrack');
  const dotsContainer = document.getElementById('carouselDots');
  if (!track || !dotsContainer) return;

  track.innerHTML = projectData.extra.map((item, i) => {
    const hasImg = item.image;
    const imgEl = hasImg
      ? `<img class="slide-img" src="${item.image}" alt="${item.title}" onerror="this.style.display='none'">`
      : `<div class="slide-img-placeholder">📌</div>`;

    const awardEl = item.award
      ? `<span class="slide-award">🏆 ${item.award}</span>`
      : '';

    const links = [];
    if (item.download) links.push(`<a class="slide-link" href="${item.download}" target="_blank">More</a>`);
    if (item.link2) links.push(`<a class="slide-link" href="${item.link2}" target="_blank">Video</a>`);
    const linksEl = links.length ? `<div class="slide-links">${links.join('')}</div>` : '';

    return `
      <div class="carousel-slide" data-index="${i}">
        ${imgEl}
        <div class="slide-title">${item.title}</div>
        ${item.description ? `<div class="slide-desc">${item.description.slice(0, 140)}${item.description.length > 140 ? '…' : ''}</div>` : ''}
        ${awardEl}
        ${linksEl}
      </div>
  `}).join('');

  const totalPages = Math.ceil(projectData.extra.length / slidesPerView);
  dotsContainer.innerHTML = Array.from({length: totalPages}, (_, i) =>
    `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-page="${i}" aria-label="Página ${i+1}"></button>`
  ).join('');

  dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
    dot.addEventListener('click', () => goToPage(+dot.dataset.page));
  });

  updateCarousel();
}

function goToPage(page) {
  const totalPages = Math.ceil(projectData.extra.length / slidesPerView);
  currentIndex = Math.max(0, Math.min(page, totalPages - 1));
  updateCarousel();
}
 
function updateCarousel() {
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const counter = document.getElementById('carouselCounter');
  const dots = document.querySelectorAll('.carousel-dot'); 

  if (!track) return;

  const totalSlides = projectData.extra.length;
  const totalPages = Math.ceil(totalSlides / slidesPerView);

  const slideWidthPx = track.parentElement.offsetWidth / slidesPerView;
  const offset = currentIndex * track.parentElement.offsetWidth;

  track.style.transform = `translateX(-${offset}px)`;

  if (prevBtn) prevBtn.disabled = currentIndex === 0;
  if (nextBtn) nextBtn.disabled = currentIndex >= totalPages - 1;

  const start = currentIndex * slidesPerView + 1;
  const end = Math.min(start + slidesPerView - 1, totalSlides);
  if (counter) counter.textContent = `${start}–${end} / ${totalSlides}`;

  dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
}

function initCarouselControls() {
  const totalPages = Math.ceil(projectData.extra.length / slidesPerView);

  document.getElementById('prevBtn')?.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--; 
      updateCarousel();
    }
  });

  document.getElementById('nextBtn')?.addEventListener('click', () => {
    if (currentIndex < totalPages - 1) {
      currentIndex++; 
      updateCarousel();
    }
  });
}

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    const newSpv = getSlidesPerView();
    if (newSpv !== slidesPerView) {
      slidesPerView = newSpv;
      currentIndex = 0;
      buildCarousel();
      initCarouselControls();
    } else {
      updateCarousel();
    }
  }, 200);
});

document.addEventListener('DOMContentLoaded', () => {
  loadAwards();
  buildCarousel();
  initCarouselControls();
});