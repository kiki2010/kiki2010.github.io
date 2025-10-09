//Project Display
//All the project into different categories.
const projectData = {
  apps:[
    {
      title: "FlameFighters",
      description: "Is an app to help prevent wildfires by knowing local risk, easy to use and install.",
      image: "img/apps/FlameFighters.png",
      award: "TG 2024 Finalist | TG 2024 Social Impact",
      download: "https://drive.google.com/file/d/18ZRr60LK3G1Hk6mRzfUu4LIiLH605Es7/view?usp=sharing",
      link2: "https://youtu.be/XPj_qefKi-0?si=nxAPOon67m-sdTVK"
    },
    {
      title: "RiverStream",
      description: "We developed RiverStream, an app that can be used worldwide. It allows users to receive and contribute flood data, while AI predicts floods in useful time and notifies users when risk increases. A simulation feature visualizes flood scenarios, raising awareness and preparedness.",
      image: "img/apps/riverstream.png",
      award: "TG 2025 Regional Honoree Latin America | TG 2025 Special Award Climate Prize | AI Favorite Coolest Projects 2025",
      download: "https://drive.google.com/file/d/1tl-qEZ-nsGtlDHISIv4JyX_9gIaMRI_h/view?pli=1",
      link2: "https://youtu.be/jkq4ou5rxqM?si=GzRkf5APuyT3eBU0"
    }
  ],
  robots: [
    {
      title: "Wall-e",
      description: "Inspired by the Disney movie, an educational project with an ESP8266 controlled via Wi-Fi.",
      image: "img/robots/wall-e.jpeg",
      award: "",
      download: "https://prensa.cba.gov.ar/informacion-general/mas-de-1-500-estudiantes-en-una-jornada-de-programacion-y-robotica-en-carlos-paz/",
      link2: "https://www.youtube.com/watch?v=LBcReW58eu0&list=PL7ie2Y_RCl3W_cpKh4Z0GaOTGP4dyDPOZ&pp=gAQB",
    },
    {
      title: "R2D2",
      description: "Line follower inspired by the robot from the Star Wars saga.",
      image: "img/robots/r2d2.jpg",
      award: "",
      download: "https://www.youtube.com/watch?v=K4iaySrlFJo&list=PL7ie2Y_RCl3VQk3bSd_nUX1wbGXMWMPRr&pp=gAQB",
    },
    {
      title: "KikiBot",
      description: "Small UFO-shaped battle robot.",
      image: "img/robots/sumo.jpg",
      award: "",
      download: "",
      link2: "",
    }
  ],
  extra: [
    {
      title: "2016: participation in the ADOPTO project.",
      description: "First contact with citizen science.",
      image: "img/events/2016.jpg",
      award: "",
      download: "",
    },
    {
      title: "2018: participation in the MATTEO project.",
      description: "Contributing with recorded rainfall data.",
      image: "img/events/2018.jpg",
      award: "",
      download: "",
    },
    {
      title: "2020: Book Review: 'Fieldwork: Ayla's Adventures on Earth'",
      description: "“...I read it twice yesterday. I liked it because it reinforced all the information I learned last year, like the Mar Chiquita lagoon and the water cycle. It was good because it's easy to understand, and when it talks about evaporation, I like that it mentions plant transpiration...”.",
      image: "img/events/2020.jpg",
      award: "",
      download: "https://drive.google.com/file/d/1VK_yglDDCMZPrz-4iQBXhRKt62SiboAO/view"
    },
    {
      title: "2021: Best School average and national flag bearer",
      description: "Into the school top 10 of 2021. Last year of primary school.",
      image: "img/events/2021.jpg",
      award: "",
      download: "",
    },
    {
      title: "2022: First TV interview",
      description: "Because of the international day of the women and girls in science.",
      image: "img/events/2022.jpg",
      award: "",
      download: "https://youtu.be/NKntUT4E0g0?si=7oN4s4yLM3181AhW",
    },
    {
      title: "2022: Creation of the Social Media of 'Guardianes del Lago'",
      description: "Where the care of the San Roque dam and our environment was promoted",
      image: "img/events/2022_1.jpg",
      award: "",
      download: "",
    },
    {
      title: "2022: Kiki! Youtube Channel Creation",
      description: "You can find videos of models, video games, and Rubik's cubes.",
      image: "img/events/2022_2.png",
      award: "",
      download: "https://youtube.com/@kiki--?si=BrmN9nZzEMnkUbEL",
    },
    {
      title: "Get B1 english level",
      description: "International Test",
      image: "img/events/2022_3.jpg",
      award: "",
      download: "",
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
      title: "2023: Member of Robot maintance team at University Extension.",
      description: "Helping with the maintance and explaining to other teenagers.",
      image: "img/events/2023_2.jpg",
      award: "",
      download: "",
    },
    {
      title: "2023: Semifinalist at Mateclubes from OMA",
      description: "Virtual and in-person group math olympics.",
      image: "img/events/2023_3.png",
      award: "",
      download: "",
    },
    {
      title: "2023: Honorable Mention in Web Design Course of Chicas Digitalers by Telecom.",
      description: "First contact with web page development",
      image: "img/events/2023_4.png",
      award: "",
      download: "",
      link2: "",
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
      title: "2024: Silver Medal in Math Kangaroo (OMA).",
      description: "Virtual Individual Math Olympiad.",
      image: "img/events/2024_1.png",
      award: "",
      download: "",
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
      title: "2024: Advanced Web Design Course at Chicas Digitalers.",
      description: "",
      image: "img/events/2024_5.png",
      award: "",
      download: "",
    },
    {
      title: "2024: AI Course at Programo mi Futuro",
      description: "",
      image: "img/events/2024_6.png",
      award: "",
      download: "",
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
      title: "2024: Social Impact winner at Technovation Girls 2024.",
      description: "Traveling to California to defend FlameFighters app along with the other 5 finalist teams.",
      image: "img/events/2024_10.jpg",
      award: "Social Impact Winner 2024",
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
      title: "2024: Creation of the VCPCode club.",
      description: "The first HackClub in Argentina.",
      image: "img/events/2024_14.jpg",
      award: "",
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
      title: "2025: Recognition by PREVENIR project",
      description: "For the importance of the Riverstream app.",
      image: "img/events/2025_4.png",
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
      award: "",
      download: "https://youtu.be/5OqA0G57u4M?si=iGZkT7lVXnjDxftl",
    },
  ]
}
//Index of the current project displayed nad currently selected category
let currentIndex = 0;
let currentCategory = "";

//Updates the current category. Resets the index to the first project. And calls renderCarousel() to display the projects in that category. 
function showCategory(category) {
  currentCategory = category;
  currentIndex = 0;
  renderCarousel();
}

function renderCarousel() {
  const container = document.getElementById("projects-display");
  container.innerHTML = "";

  const items = projectData[currentCategory];
  //If there are no projects
  if (!items || items.length === 0) {
    container.innerHTML = "<p class='placeholder'>No projects found.</p>";
    return;
  }

  const project = items[currentIndex];

  //Create the project card, showing each value.
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    ${project.image ? `<img src="${project.image}" alt="${project.title}">` : `<div style="width:150px; height:150px; border:2px solid #00ff00; display:flex; align-items:center; justify-content:center; color:#00ff00;">No Image</div>`}
    <div class="project-content">
      <div class="project-title">${project.title}</div>
      <div class="project-description">${project.description || "  "}</div>
      ${project.award ? `<div class="project-awards">🏆 ${project.award}</div>` : ""}
      ${project.download ? `<a class="project-link" href="${project.download}" target="_blank">🔗Check it! </a>` : ""}
      ${project.link2 ? `<a class="project-link" href="${project.link2}" target="_blank">🔗Check it! </a>` : ""}
    </div>
  `;

  container.appendChild(card);

  //Carousel buttons
  const controls = document.createElement("div");
  controls.className = "carousel-controls";

  const prevBtn = document.createElement("button");
  prevBtn.className = "carousel-button";
  prevBtn.innerText = "◀️";
  prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    renderCarousel();
  };

  const nextBtn = document.createElement("button");
  nextBtn.className = "carousel-button";
  nextBtn.innerText = "▶️";
  nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % items.length;
    renderCarousel();
  };

  controls.appendChild(prevBtn);
  controls.appendChild(nextBtn);
  container.appendChild(controls);
}

// Please select a category
document.addEventListener("DOMContentLoaded", () => {
  typeText("typed-text", "Select a category...");
});

//Write select category like is typed.
function typeText(elementId, text, speed = 80) {
  const el = document.getElementById(elementId);
  el.innerHTML = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}

//If imáges are visible add the 'visible' class to show animation
document.addEventListener("DOMContentLoaded", () => {
  const groups = document.querySelectorAll('.hobby-group');

  groups.forEach(group => {
    const photoGroup = group.querySelector('.photo-group');
    const images = photoGroup.querySelectorAll('.photo-frame');

    function checkHorizontalVisibility() {
      const containerRect = photoGroup.getBoundingClientRect();

      images.forEach(img => {
        const imgRect = img.getBoundingClientRect();

        const isVisible = (
          imgRect.right > containerRect.left &&
          imgRect.left < containerRect.right
        );

        if (isVisible) {
          img.classList.add('visible');
        } else {
          img.classList.remove('visible');
        }
      });
    }

    photoGroup.addEventListener('scroll', checkHorizontalVisibility);
    checkHorizontalVisibility();
  });
});

//Buttons at the end of each group
function showMorecubes(button) {
  const group = button.parentElement;
  const hiddenImages = group.querySelectorAll('.photo-frame.hidden');
  hiddenImages.forEach(img => img.style.display = 'block');
  button.style.display = 'none';
  window.location.href = 'https://www.worldcubeassociation.org/persons/2023MONS06';
}

function showMoreGames(button) {
  const group = button.parentElement;
  const hiddenImages = group.querySelectorAll('.photo-frame.hidden');
  hiddenImages.forEach(img => img.style.display = 'block');
  button.style.display = 'none';
  window.location.href = 'https://www.youtube.com/@kiki--';
}

function showMorePhoto(button) {
  const group = button.parentElement;
  const hiddenImages = group.querySelectorAll('.photo-frame.hidden');
  hiddenImages.forEach(img => img.style.display = 'block');
  button.style.display = 'none';
  window.location.href = 'collage.html';
}
