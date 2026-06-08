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

// Talks Section
const talksData = [
  {
    title: "2022: First TV interview",
    description: "Because of the international day of the women and girls in science.",
    image: "img/events/2022.jpg",
    award: "",
    download: "https://youtu.be/NKntUT4E0g0?si=7oN4s4yLM3181AhW",
  },
  {
    title: "2023: Speaker on 'Transformando el mundo que queremos: el rol de la mujer en esa transformación'",
    description: "A talk about wwomen and girl in science",
    image: "img/events/2023.JPG",
    award: "",
    download: "",
  },
  {
    title: "2023: Children's month in FCEFyN",
    description: "Showing Wall-e and how it works.",
    image: "img/events/2023_1.jpg",
    award: "",
    download: "",
  },
  {
    title: "2023: PracTICarlos first edition.",
    description: "An event where I was able to meet many teenagers with the same interests and introduce Wall-E.",
    image: "img/robots/wall-e.jpeg",
    download: "https://prensa.cba.gov.ar/informacion-general/mas-de-1-500-estudiantes-en-una-jornada-de-programacion-y-robotica-en-carlos-paz/",
    link2: "https://youtu.be/h0GT-O1h3uo?si=dIsGfTKAlbAgMWNG",
  },
  {
    title: "2024: Robotis talks at the Summer Intensive Course of Chicas Digitalers by Telecom.",
    description: "Explaining the project planning and development process, along with virtual tools.",
    image: "img/events/2024.png",
    award: "",
    download: "https://drive.google.com/file/d/14tP8rZ09KUNxBMaV796ajUBBKGdXot5A/view?usp=drivesdk",
  },
  {
    title: "2024: Speaker about Robotics at Random Play.",
    description: "Meeting organized by teenagers in Villa de Rosario. Projects created by teenagers are presented.",
    image: "img/events/2024_2.png",
    award: "",
    download: "https://youtu.be/CT7xnA-JOYo?si=aqz44vUwf_5Hl1AV",
  },
  {
    title: "2024: Speaker about FlameFighters at 'Semana TIC'.",
    description: "Explaining the development process, utility and operation.",
    image: "img/events/2024_3.png",
    award: "",
    download: "",
  },
  {
    title: "2024: Exhibitor at 'Encuentro de Innovadores Tecnológicos de Villa Carlos Paz'.",
    description: "Showing FlameFighters, Wall-e, R2D2 and KikiBot",
    image: "img/events/2024_4.png",
    award: "",
    download: "https://www.eldiariodecarlospaz.com.ar/sociedad/2024/11/13/mas-de-150-participantes-en-el-segundo-encuentro-de-innovadores-tecnologicos-220163.html",
    link2: "https://youtube.com/shorts/KUvpq75qIH4?si=4AqIfBGoSHGvlzCA",
  },
  {
    title: "2024: Talk with the Ministry of the Enviroment",
    description: "About the FlameFighters App, showing it and explaining how it works.",
    image: "img/events/2024_7.png",
    award: "",
    download: "https://www.instagram.com/reel/DMOr6yaKUtC/?utm_source=ig_web_copy_link",
  },
  {
    title: "2024: Talk at the Legislature called: 'Jóvenes Eco - Revolucionarios'. And Mention in the Córdoba Legislature ",
    description: "For the values and impact of the application in our province.",
    image: "img/events/2024_8.jpg",
    award: "Mention by the legislature.",
    download: "",
  },
  {
    title: "2024: Finalist at Technovation Girls 2024.",
    description: "Traveling to California to defend FlameFighters app along with the other 5 finalist teams.",
    image: "img/events/2024_9.jpg",
    award: "Finalist TG 2024",
    download: "",
  },
  {
    title: "2024: Recognition of the deliberative council: 'Adolescente destacada de la ciudad de Córdoba'.",
    description: "For my valuable contribution to environmental protection through the development of 'FlameFighters', winner of the Girls 2024 Technovation Social Impact Award, held in Silicon Valley, United States.",
    image: "img/events/2024_11.jpg",
    award: "Adolescente destacada de la ciudad de Córdoba",
    download: "",
  },
  {
    title: "2024: chosen as 'Carlospacense del Año'.",
    description: "Award presented by 'El Diario de Carlos Paz'.",
    image: "img/events/2024_12.jpg",
    award: "Carlospacense del Año",
    download: "",
  },
  {
    title: "2024: Recognition by the Council of Representatives of Villa Carlos Paz",
    description: "",
    image: "img/events/2024_13.jpg",
    award: "Reconocimiento en el Consejo de Representantes VCP",
    download: "",
  },
  {
    title: "2025: RandomPlay",
    description: "Showing the app RiverStream.",
    image: "img/events/2025.jpg",
    award: "",
    download: "",
  },
  {
    title: "2025: Technovation Girls",
    description: "Submitting the RiverStream application. Getting the Regional Honoree Latin America and Global Special Award of Climate Prize",
    image: "img/events/2025_1.jpg",
    award: "TG 2025 Regional Honoree Latin America | TG 2025 Special Award ClimatePrize",
    download: "https://youtu.be/jkq4ou5rxqM?si=MCh5Oblx09z3gLeC",
  },
  {
    title: "2025: Coolest Projects",
    description: "Submitting the RiverStream application. Getting the AI Favorite.",
    image: "img/events/2025_2.jpg",
    award: "Judge Feedback: 'I like this as it tackles a global problem (flood disaster preparedness) with data contributions, risk prediction, and awareness visualizations. It wins for its combination of global relevance, technical sophistication, and community-driven approach. It addresses a critical challenge with scalable technology and clear user benefit'.",
    download: "https://www.youtube.com/live/JZdbBJtsn5k?si=z5B9DEN7wvGBxAcv&t=1456",
  },
  {
    title: "2025: Mesa Redonda: Conectando Ciencia y Gestión para un Futuro Sostenible",
    description: "Focused on the exchange of experiences and interdisciplinary cooperation.",
    image: "img/events/2025_3.jpg",
    award: "",
    download: "",
  },
  {
    title: "2025: Orientadora en Club STEAM VCP",
    description: "Creando proyectos en conjunto con la comunidad, orientados a Róbotica, Ambiente, Programación, Sociedad, etc.",
    image: "img/events/2025_6.jpg",
    award: "",
    download: "https://youtu.be/bQzqXZn0G-g?si=O3GgW9a__d_WSBtF",
  },
  {
    title: "2025: Mercociudades: Encuentro de educación ambiental en Despeñaderos",
    description: "Comentando sobre la app RiverStream y su impacto a nivel local y global.",
    image: "img/events/2025_5.png",
    award: "https://carlospaznoticias.com/amplia_noti.php?id_noti=8793",
    download: "https://youtu.be/5OqA0G57u4M?si=iGZkT7lVXnjDxftl",
  },
  {
    title: "2025: Taller Laudato Si'",
    description: "Presentamos la iniciativa en la Parroquia San José, mostrando como la participación comunitaria es clave para resolver problemas locales.",
    image: "img/events/2025_9.jpeg",
    award: "",
    download: "https://www.youtube.com/shorts/xzRScB-88R4",
  },
  {
    title: "2025: Semifinalista: IE Junior Venture Day Córdoba 2025",
    description: "Junto con Akari presentamos la aplicación RiverStream, pasando a las Semifinales de IE Junior Venture Day Córdoba 2025",
    image: "img/events/2025_10.jpeg",
    award: "Semifinalista",
    download: "",
  },
  {
    title: "2025: Finalistas: IE Junior Venture Day Córdoba 2025",
    description: "Junto con Akari presentamos la aplicación RiverStream, pasando a las Semifinales de IE Junior Venture Day Córdoba 2025",
    image: "img/events/2025_12.png",
    award: "Finalista",
    download: "",
  },
  {
    title: "2025: Tercer Encuentro de Innovadores Tecnológicos ",
    description: "Presentamos los proyectos del Club STEAM, participamos en la batalla de sumoBot y laberinto.",
    image: "img/events/2025_13.jpeg",
    award: "",
    download: "",
  },
  {
    title: "2026: Mujer y niña en la ciencia Villa Carlos Paz.",
    description: "Presentaron su nueva aplicación “Multirisk” que puede prever y dar aviso en caso de incendios forestales o inundaciones.",
    image: "img/events/2026.jpeg",
    award: "",
    download: "https://www.instagram.com/p/DUtmCQqEjx_/",
    link2: "",
  },
  {
    title: "2026: Mujer y niña en la ciencia FCEFyN.",
    description: "“Ciencia con Voz de Mujer: De la Idea al Impacto”, en el marco del Día Internacional de la Mujer y la Niña en la Ciencia. 👩🏻‍🔬💜",
    image: "img/events/2026_1.jpeg",
    award: "",
    download: "https://www.instagram.com/p/DUtG3chkcU3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    link2: "",
  },
  {
    title: "2026: Club de ciencias en el IRESM.",
    description: "Con los ingresantes a la carrera de Analista de Sistemas.",
    image: "img/events/2026_2.jpeg",
    award: "",
    download: "https://youtube.com/shorts/uBpMwNElF7k",
    link2: "",
  },
  {
    title: "2026: Mantenimiento de la estación meteorológica del IPEM 359.",
    description: "Reemplazo de pluviometro y fuente.",
    image: "img/events/2026_3.jpeg",
    award: "",
    download: "https://youtube.com/shorts/5wj-vzuGX18",
    link2: "",
  },
  {
    title: "2026: Charlas de robótica en Jardín Nueva Latinoamerica.",
    description: "Turno mañana y turno tarde",
    image: "img/events/2026_5.png",
    award: "",
    download: "",
    link2: "",
  },
  {
    title: "2026: Charla Agua Justa",
    description: "En la universidad católica de córdoba",
    image: "img/events/2026_4.jpeg",
    award: "",
    download: "",
    link2: "",
  },
  {
    title: "2026: Visita UdeSA",
    description: "Conocimos los laboratorios de robótica y programación.",
    image: "img/events/2026_6.jpg",
    award: "",
    download: "https://youtube.com/playlist?list=PL7ie2Y_RCl3WWUOVt2yn_-1_hVORIDQ74&si=lI8muNet9T4DwI73",
    link2: "",
  },
  {
    title: "2026: 2° Congreso Educativo Ambiental",
    description: "Presentamos Cba MultiRisk.",
    image: "img/events/2026_7.jpeg",
    award: "",
    download: "",
    link2: "",
  },
];

function loadTalks() {
  const container = document.getElementById('talks-list');
  if (!container) return;
  container.innerHTML = talksData.map(t => {
    const links = [];
    if (t.download) links.push(`<a class="talk-link-btn" href="${t.download}" target="_blank" title="Link 1">Link</a>`);
    if (t.link2) links.push(`<a class="talk-link-btn" href="${t.link2}" target="_blank" title="Link 2">Link</a>`);

    return `
      <a ${t.download ? `href="${t.download}" target="_blank"` : ''} class="talk-item">
        <img class="talk-thumb" src="${t.image}" alt="${t.title}">
        <div class="talk-info">
          <div class="talk-title">${t.title}</div>
          ${t.description ? `<div class="talk-desc">${t.description}</div>` : ''}
        </div>
      </a>
    `;
  }).join('');
}

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
  loadTalks();
  buildCarousel();
  initCarouselControls();
});