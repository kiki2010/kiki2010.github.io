const talks = [
  "2026-07-23 (1).mp4",
    "2026-07-23 (2).mp4",
    "2026-07-23 (3).mp4",
    "2026.mp4",
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
    "WhatsApp Image 2026-07-23 at 20.35.19 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 20.35.19.jpeg",
    "WhatsApp Image 2026-07-23 at 20.35.21.jpeg",
    "WhatsApp Image 2026-07-23 at 20.40.13.jpeg",
    "WhatsApp Image 2026-07-23 at 20.40.17 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 20.40.17 (2).jpeg",
    "WhatsApp Image 2026-07-23 at 20.40.17.jpeg",
    "WhatsApp Image 2026-07-23 at 20.40.18 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 20.40.18 (2).jpeg",
    "WhatsApp Image 2026-07-23 at 20.40.18.jpeg",
    "WhatsApp Image 2026-07-23 at 20.41.12.jpeg",
    "WhatsApp Image 2026-07-23 at 20.41.39 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 20.41.39 (2).jpeg",
    "WhatsApp Image 2026-07-23 at 20.41.39.jpeg",
    "WhatsApp Image 2026-07-23 at 20.41.40.jpeg",
    "WhatsApp Image 2026-07-23 at 20.43.11 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 20.43.11 (2).jpeg",
    "WhatsApp Image 2026-07-23 at 20.43.11 (3).jpeg",
    "WhatsApp Image 2026-07-23 at 20.43.11.jpeg",
    "WhatsApp Image 2026-07-23 at 20.43.19 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 20.43.19 (2).jpeg",
    "WhatsApp Image 2026-07-23 at 20.43.19.jpeg",
    "WhatsApp Image 2026-07-23 at 20.44.52.jpeg",
    "WhatsApp Image 2026-07-23 at 20.44.53 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 20.44.53 (2).jpeg",
    "WhatsApp Image 2026-07-23 at 20.44.53 (3).jpeg",
    "WhatsApp Image 2026-07-23 at 20.44.53 (4).jpeg",
    "WhatsApp Image 2026-07-23 at 20.44.53.jpeg",
    "WhatsApp Image 2026-07-23 at 20.44.54 (1).jpeg",
    "WhatsApp Image 2026-07-23 at 20.44.54 (2).jpeg",
    "WhatsApp Image 2026-07-23 at 20.44.54.jpeg",
    "WhatsApp Video 2026-07-23 at 20.12.23.mp4",
    "WhatsApp Video 2026-07-23 at 20.12.24.mp4",
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
    "WhatsApp Video 2026-07-23 at 20.42.49.mp4",
    "WhatsApp Video 2026-07-23 at 20.42.53.mp4",
    "WhatsApp Video 2026-07-23 at 20.42.57.mp4",
    "WhatsApp Video 2026-07-23 at 20.43.10.mp4",
    "WhatsApp Video 2026-07-23 at 20.43.11.mp4",
    "WhatsApp Video 2026-07-23 at 20.43.18.mp4",
    "WhatsApp Video 2026-07-23 at 20.43.19 (1).mp4",
    "WhatsApp Video 2026-07-23 at 20.43.19.mp4",
    "WhatsApp Video 2026-07-23 at 20.43.20.mp4",
    "WhatsApp Video 2026-07-23 at 20.44.30 (1).mp4",
    "WhatsApp Video 2026-07-23 at 20.44.30 (2).mp4",
    "WhatsApp Video 2026-07-23 at 20.44.30 (3).mp4",
    "WhatsApp Video 2026-07-23 at 20.44.30.mp4",
    "WhatsApp Video 2026-07-23 at 20.44.31 (1).mp4",
    "WhatsApp Video 2026-07-23 at 20.44.31.mp4",
    "WhatsApp Video 2026-07-23 at 20.44.44.mp4",
    "WhatsApp Video 2026-07-23 at 20.44.45.mp4",
    "WhatsApp Video 2026-07-23 at 20.44.47.mp4",
    "WhatsApp Video 2026-07-23 at 20.44.52.mp4"
];

const MEDIA_PATH = "../img/talks/";

function parseDate(filename) {
    // Busca primero formato YYYYMMDD (ej: 20260325_...) o formato WhatsApp YYYY-MM-DD
    const match = filename.match(/^(\d{4})(\d{2})(\d{2})/) || filename.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (!match) return "";
    const [, y, m, d] = match;
    const date = new Date(`${y}-${m}-${d}`);
    return date.toLocaleDateString("es-AR", { day: "2-digit", month: "short", year: "numeric" });
}

function isVideo(filename) {
    return /\.(mp4|mov|webm)$/i.test(filename);
}

function buildGallery() {
    const grid = document.getElementById("gallery-grid");
    grid.innerHTML = "";

    talks.forEach((file, index) => {
        const wrapper = document.createElement("a");
        wrapper.className = "gallery-item";
        wrapper.href = "#";

        const media = isVideo(file)
            ? `<video src="${MEDIA_PATH}${file}" muted playsinline preload="metadata"></video><span class="play-badge">&#9654;</span>`
            : `<img src="${MEDIA_PATH}${file}" alt="" loading="lazy">`;

        const date = parseDate(file);

        wrapper.innerHTML = `
            ${media}
            ${date ? `<span class="stamp">${date}</span>` : ""}
        `;

        wrapper.addEventListener("click", (e) => {
            e.preventDefault();
            openLightbox(index);
        });

        grid.appendChild(wrapper);
    });
}

function openLightbox(index) {
    const file = talks[index];
    const lightbox = document.getElementById("lightbox");
    const content = lightbox.querySelector(".lightbox-content");
    const caption = lightbox.querySelector(".lightbox-caption");

    content.innerHTML = isVideo(file)
        ? `<video src="${MEDIA_PATH}${file}" controls autoplay></video>`
        : `<img src="${MEDIA_PATH}${file}" alt="">`;

    caption.textContent = parseDate(file);
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