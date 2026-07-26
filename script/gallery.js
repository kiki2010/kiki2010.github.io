// Cada carpeta representa una "tanda" de fotos/videos.
// El nombre de la carpeta debe incluir el mes y año (y opcionalmente el/los día/s),
// por ejemplo: "9 Abril 2026", "4 y 8 de Mayo 2026", "25 y 27 marzo 2026", "Abril 2026".
//
// COMPLETÁ acá los archivos que corresponden a cada carpeta:
const folders = [
    {
        name: "11 Abril 2026",
        files: [
            "WhatsApp Image 2026-07-23 at 20.35.21.jpeg",
            "WhatsApp Image 2026-07-23 at 20.40.13.jpeg",
            "WhatsApp Image 2026-07-23 at 20.40.17 (1).jpeg",
            "WhatsApp Image 2026-07-23 at 20.40.17 (2).jpeg",
            "WhatsApp Image 2026-07-23 at 20.40.17.jpeg",
            "WhatsApp Image 2026-07-23 at 20.40.18 (1).jpeg",
            "WhatsApp Image 2026-07-23 at 20.40.18 (2).jpeg",
            "WhatsApp Image 2026-07-23 at 20.40.18.jpeg",
            "WhatsApp Image 2026-07-23 at 20.41.12.jpeg",
            "WhatsApp Video 2026-07-23 at 20.39.37.mp4",
            "WhatsApp Video 2026-07-23 at 20.39.39.mp4",
            "WhatsApp Video 2026-07-23 at 20.39.44.mp4",
            "WhatsApp Video 2026-07-23 at 20.40.02 (1).mp4",
            "WhatsApp Video 2026-07-23 at 20.40.02 (2).mp4",
            "WhatsApp Video 2026-07-23 at 20.40.02.mp4",
            "WhatsApp Video 2026-07-23 at 20.40.05.mp4",
            "WhatsApp Video 2026-07-23 at 20.40.13 (1).mp4",
            "WhatsApp Video 2026-07-23 at 20.40.13 (2).mp4",
            "WhatsApp Video 2026-07-23 at 20.40.13 (3).mp4",
            "WhatsApp Video 2026-07-23 at 20.40.13.mp4",
            "WhatsApp Video 2026-07-23 at 20.40.14 (1).mp4",
            "WhatsApp Video 2026-07-23 at 20.40.14 (2).mp4",
            "WhatsApp Video 2026-07-23 at 20.40.14 (3).mp4",
            "WhatsApp Video 2026-07-23 at 20.40.14.mp4",
            "WhatsApp Video 2026-07-23 at 20.40.16 (1).mp4",
            "WhatsApp Video 2026-07-23 at 20.40.16 (2).mp4",
            "WhatsApp Video 2026-07-23 at 20.40.16 (3).mp4",
            "WhatsApp Video 2026-07-23 at 20.40.16.mp4",
            "WhatsApp Video 2026-07-23 at 20.40.17.mp4",
            "WhatsApp Video 2026-07-23 at 20.41.11.mp4",
        ]
    },
    {
        name: "20 Mayo 2026",
        files: [
            "20260520_134704.mp4",
            "20260520_134856.mp4",
            "20260520_135853.mp4",
            "20260520_140001.mp4",
            "20260520_140024.mp4",
            "20260520_140154.mp4",
            "20260520_140154_1.mp4",
            "20260520_140252.mp4",
            "20260520_140706.mp4",
            "20260520_140706_1.mp4",
            "20260520_140830.mp4",
            "20260520_142102.mp4",
            "20260520_142133.mp4",
            "20260520_142212.mp4",
            "20260520_142306.mp4",
            "20260520_142400.mp4",
            "20260520_144928.mp4",
            "20260520_144942.mp4",
            "20260520_145045.mp4",
            "20260520_145208.jpg",
            "20260520_145218.mp4",
            "20260520_145755.mp4",
            "20260520_151142.jpg",
            "20260520_151152.jpg",
            "20260520_151300.jpg",
            "20260520_151819.jpg",
            "20260520_151942.jpg",
            "20260520_152152.jpg",
        ]
    },
    {
        name: "23 Abril 2026",
        files: [
            "2026-07-23 (2).mp4",
            "WhatsApp Video 2026-07-23 at 20.44.30 (1).mp4",
            "WhatsApp Video 2026-07-23 at 20.44.30 (2).mp4",
            "WhatsApp Video 2026-07-23 at 20.44.30 (3).mp4",
            "WhatsApp Video 2026-07-23 at 20.44.30.mp4",
            "WhatsApp Video 2026-07-23 at 20.44.31 (1).mp4",
            "WhatsApp Video 2026-07-23 at 20.44.31.mp4",
        ]
    },
    {
        name: "25 y 27 marzo 2026",
        files: [
            "20260325_181233.mp4",
            "20260325_181543.mp4",
            "20260325_190316.mp4",
            "20260325_191115.mp4",
            "20260325_191612.mp4",
            "20260325_200438.mp4",
            "WhatsApp Image 2026-07-23 at 20.12.21.jpeg",
            "WhatsApp Image 2026-07-23 at 20.12.22 (1).jpeg",
            "WhatsApp Image 2026-07-23 at 20.12.22 (2).jpeg",
            "WhatsApp Image 2026-07-23 at 20.12.22.jpeg",
            "WhatsApp Image 2026-07-23 at 20.12.23 (1).jpeg",
            "WhatsApp Image 2026-07-23 at 20.12.23.jpeg",
            "WhatsApp Image 2026-07-23 at 20.12.24.jpeg",
            "WhatsApp Video 2026-07-23 at 20.12.23.mp4",
            "WhatsApp Video 2026-07-23 at 20.12.24.mp4",
        ]
    },
    {
        name: "4 y 8 de Mayo 2026",
        files: [
            "2026-07-23 (3).mp4",
            "WhatsApp Image 2026-07-23 at 20.44.52.jpeg",
            "WhatsApp Image 2026-07-23 at 20.44.53 (1).jpeg",
            "WhatsApp Image 2026-07-23 at 20.44.53 (2).jpeg",
            "WhatsApp Image 2026-07-23 at 20.44.53 (3).jpeg",
            "WhatsApp Image 2026-07-23 at 20.44.53 (4).jpeg",
            "WhatsApp Image 2026-07-23 at 20.44.53.jpeg",
            "WhatsApp Image 2026-07-23 at 20.44.54 (1).jpeg",
            "WhatsApp Image 2026-07-23 at 20.44.54 (2).jpeg",
            "WhatsApp Image 2026-07-23 at 20.44.54.jpeg",
            "WhatsApp Video 2026-07-23 at 20.44.44.mp4",
            "WhatsApp Video 2026-07-23 at 20.44.45.mp4",
            "WhatsApp Video 2026-07-23 at 20.44.47.mp4",
            "WhatsApp Video 2026-07-23 at 20.44.52.mp4",
        ]
    },
    {
        name: "9 Abril 2026",
        files: [
            "2026-07-23 (1).mp4",
            "WhatsApp Image 2026-07-23 at 20.43.11 (1).jpeg",
            "WhatsApp Image 2026-07-23 at 20.43.11 (2).jpeg",
            "WhatsApp Image 2026-07-23 at 20.43.11 (3).jpeg",
            "WhatsApp Image 2026-07-23 at 20.43.11.jpeg",
            "WhatsApp Image 2026-07-23 at 20.43.19 (1).jpeg",
            "WhatsApp Image 2026-07-23 at 20.43.19 (2).jpeg",
            "WhatsApp Image 2026-07-23 at 20.43.19.jpeg",
            "WhatsApp Video 2026-07-23 at 20.42.49.mp4",
            "WhatsApp Video 2026-07-23 at 20.42.53.mp4",
            "WhatsApp Video 2026-07-23 at 20.42.57.mp4",
            "WhatsApp Video 2026-07-23 at 20.43.10.mp4",
            "WhatsApp Video 2026-07-23 at 20.43.11.mp4",
            "WhatsApp Video 2026-07-23 at 20.43.18.mp4",
            "WhatsApp Video 2026-07-23 at 20.43.19 (1).mp4",
            "WhatsApp Video 2026-07-23 at 20.43.19.mp4",
            "WhatsApp Video 2026-07-23 at 20.43.20.mp4",
        ]
    },
    {
        name: "Abril 2026",
        files: [
            "2026.mp4",
            "WhatsApp Image 2026-07-23 at 20.35.19 (1).jpeg",
            "WhatsApp Image 2026-07-23 at 20.35.19.jpeg",
            "WhatsApp Image 2026-07-23 at 20.41.39 (1).jpeg",
            "WhatsApp Image 2026-07-23 at 20.41.39 (2).jpeg",
            "WhatsApp Image 2026-07-23 at 20.41.39.jpeg",
            "WhatsApp Image 2026-07-23 at 20.41.40.jpeg",
            "WhatsApp Video 2026-07-23 at 20.34.58.mp4",
            "WhatsApp Video 2026-07-23 at 20.35.00.mp4",
            "WhatsApp Video 2026-07-23 at 20.35.03.mp4",
            "WhatsApp Video 2026-07-23 at 20.35.19.mp4",
            "WhatsApp Video 2026-07-23 at 20.35.20.mp4",
            "WhatsApp Video 2026-07-23 at 20.35.21.mp4",
            "WhatsApp Video 2026-07-23 at 20.35.22.mp4",
            "WhatsApp Video 2026-07-23 at 20.35.23 (1).mp4",
            "WhatsApp Video 2026-07-23 at 20.35.23 (2).mp4",
            "WhatsApp Video 2026-07-23 at 20.35.23 (3).mp4",
            "WhatsApp Video 2026-07-23 at 20.35.23 (4).mp4",
            "WhatsApp Video 2026-07-23 at 20.35.23.mp4",
        ]
    },
];

const MEDIA_PATH = "../img/talks/";

const MESES = {
    enero: 0, febrero: 1, marzo: 2, abril: 3, mayo: 4, junio: 5,
    julio: 6, agosto: 7, septiembre: 8, octubre: 9, noviembre: 10, diciembre: 11
};

// Extrae una fecha "representativa" del nombre de la carpeta para poder ordenar.
// Si hay varios días mencionados (ej: "4 y 8 de Mayo"), usa el más alto (8),
// asumiendo que querés que la carpeta "suba" según su día más reciente.
function parseFolderDate(folderName) {
    const name = folderName.toLowerCase();

    // Año (4 dígitos)
    const yearMatch = name.match(/(\d{4})/);
    const year = yearMatch ? parseInt(yearMatch[1], 10) : 1970;

    // Mes (nombre en español)
    let month = 0;
    for (const [mesNombre, mesIndex] of Object.entries(MESES)) {
        if (name.includes(mesNombre)) {
            month = mesIndex;
            break;
        }
    }

    // Día/s mencionados en el nombre (puede haber más de uno)
    const dayMatches = [...name.matchAll(/\b(\d{1,2})\b/g)]
        .map(m => parseInt(m[1], 10))
        .filter(d => d >= 1 && d <= 31);

    const day = dayMatches.length ? Math.max(...dayMatches) : 1;

    return new Date(year, month, day);
}

function isVideo(filename) {
    return /\.(mp4|mov|webm)$/i.test(filename);
}

// Ordenamos las carpetas de más nueva a más vieja
const sortedFolders = [...folders].sort(
    (a, b) => parseFolderDate(b.name) - parseFolderDate(a.name)
);

// Aplanamos todo en una sola lista, guardando la carpeta de origen de cada archivo
const talks = sortedFolders.flatMap(folder =>
    folder.files.map(file => ({
        file,
        folder: folder.name,
        path: `${MEDIA_PATH}${encodeURIComponent(folder.name)}/${file}`
    }))
);

function buildGallery() {
    const grid = document.getElementById("gallery-grid");
    grid.innerHTML = "";

    talks.forEach((talk, index) => {
        const wrapper = document.createElement("a");
        wrapper.className = "gallery-item";
        wrapper.href = "#";

        const media = isVideo(talk.file)
            ? `<video src="${talk.path}" muted playsinline preload="metadata"></video><span class="play-badge">&#9654;</span>`
            : `<img src="${talk.path}" alt="" loading="lazy">`;

        wrapper.innerHTML = `
            ${media}
            <span class="stamp">${talk.folder}</span>
        `;

        wrapper.addEventListener("click", (e) => {
            e.preventDefault();
            openLightbox(index);
        });

        grid.appendChild(wrapper);
    });
}

function openLightbox(index) {
    const talk = talks[index];
    const lightbox = document.getElementById("lightbox");
    const content = lightbox.querySelector(".lightbox-content");
    const caption = lightbox.querySelector(".lightbox-caption");

    content.innerHTML = isVideo(talk.file)
        ? `<video src="${talk.path}" controls autoplay></video>`
        : `<img src="${talk.path}" alt="">`;

    caption.textContent = talk.folder;
    lightbox.classList.add("open");
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("open");
    lightbox.querySelector(".lightbox-content").innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
    buildGallery();
    document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    document.getElementById("lightbox").addEventListener("click", (e) => {
        if (e.target.id === "lightbox") closeLightbox();
    });
});