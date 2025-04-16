// Mythical Creature Catalog
const catalog = [
    {
        name: "Phoenix",
        image: "images/phoenix.jpg",
        origin: "Ancient Egypt",
        region: "Middle East",
        size: "Large",
        colors: ["Red", "Gold"],
        shapes: ["Bird-like"],
        temperament: "Reborn and proud",
        weakness: "Magic chains",
        mythPurpose: "Symbol of rebirth",
        funFact: "Bursts into flames to be reborn from its ashes."
    },
    {
        name: "Dragon",
        image: "images/dragon.jpg",
        origin: "China",
        region: "East Asia",
        size: "Massive",
        colors: ["Green", "Gold", "Red"],
        shapes: ["Serpentine"],
        temperament: "Wise and fierce",
        weakness: "Piercing cries",
        mythPurpose: "Power and protection",
        funFact: "Some breathe fire, others bring rain."
    },
    {
        name: "Kraken",
        image: "images/kraken.jpg",
        origin: "Norway",
        region: "Northern Seas",
        size: "Gigantic",
        colors: ["Dark Blue", "Black"],
        shapes: ["Octopus-like"],
        temperament: "Aggressive",
        weakness: "Surface air",
        mythPurpose: "Terror of the seas",
        funFact: "Sailors mistook it for an island."
    },
    {
        name: "Unicorn",
        image: "images/unicorn.jpg",
        origin: "Medieval Europe",
        region: "Western Forests",
        size: "Medium",
        colors: ["White", "Silver"],
        shapes: ["Horse-like"],
        temperament: "Gentle",
        weakness: "Deception",
        mythPurpose: "Purity and healing",
        funFact: "Its horn neutralizes poison."
    },
    {
        name: "Griffin",
        image: "images/griffin.jpg",
        origin: "Persia",
        region: "Middle East",
        size: "Large",
        colors: ["Brown", "Gold"],
        shapes: ["Lion-Eagle hybrid"],
        temperament: "Loyal",
        weakness: "Ground traps",
        mythPurpose: "Royal protector",
        funFact: "Said to guard gold mines."
    },
    {
        name: "Basilisk",
        image: "images/basilisk.jpg",
        origin: "Ancient Rome",
        region: "Mediterranean",
        size: "Small",
        colors: ["Green", "Yellow"],
        shapes: ["Serpent"],
        temperament: "Deadly",
        weakness: "Mirror",
        mythPurpose: "Guardian of treasure",
        funFact: "Its gaze can turn anyone to stone."
    },
    {
        name: "Mermaid",
        image: "images/mermaid.jpg",
        origin: "Various",
        region: "Oceans",
        size: "Human-sized",
        colors: ["Blue", "Green"],
        shapes: ["Human-Fish hybrid"],
        temperament: "Mysterious",
        weakness: "Nets",
        mythPurpose: "Sea enchantress",
        funFact: "Singing draws sailors off course."
    },
    {
        name: "Yeti",
        image: "images/yeti.jpg",
        origin: "Tibet",
        region: "Himalayas",
        size: "Tall",
        colors: ["White", "Grey"],
        shapes: ["Ape-like"],
        temperament: "Shy",
        weakness: "Heat",
        mythPurpose: "Mountain guardian",
        funFact: "Footprints found but never confirmed."
    },
    {
        name: "Gorgon",
        image: "images/gorgon.jpg",
        origin: "Greek mythology",
        region: "Islands",
        size: "Human-sized",
        colors: ["Green", "Bronze"],
        shapes: ["Snake-haired woman"],
        temperament: "Cursed",
        weakness: "Mirrors",
        mythPurpose: "Cautionary tale",
        funFact: "Medusa is the most famous."
    },
    {
        name: "Manticore",
        image: "images/manticore.jpg",
        origin: "Persian mythology",
        region: "Deserts",
        size: "Large",
        colors: ["Red", "Orange"],
        shapes: ["Lion-Scorpion hybrid"],
        temperament: "Fierce",
        weakness: "Back of neck",
        mythPurpose: "Beast of punishment",
        funFact: "Has a venomous tail."
    },
    {
        name: "Wendigo",
        image: "images/wendigo.jpg",
        origin: "Algonquian folklore",
        region: "Northern forests",
        size: "Tall",
        colors: ["Pale", "Grey"],
        shapes: ["Gaunt humanoid"],
        temperament: "Insatiable",
        weakness: "Fire",
        mythPurpose: "Warning against greed",
        funFact: "Said to grow with each victim."
    },
    {
        name: "Fairy",
        image: "images/fairy.jpg",
        origin: "Celtic folklore",
        region: "Forests",
        size: "Tiny",
        colors: ["Pink", "Green", "Blue"],
        shapes: ["Humanoid with wings"],
        temperament: "Mischievous",
        weakness: "Iron",
        mythPurpose: "Nature spirits",
        funFact: "Lure you into dance circles."
    },
    {
        name: "Centaur",
        image: "images/centaur.jpg",
        origin: "Greece",
        region: "Plains",
        size: "Large",
        colors: ["Brown", "Beige"],
        shapes: ["Human-Horse hybrid"],
        temperament: "Proud",
        weakness: "Arrows",
        mythPurpose: "Wild warriors",
        funFact: "Some are scholars, others brutes."
    },
    {
        name: "Banshee",
        image: "images/banshee.jpg",
        origin: "Irish folklore",
        region: "Celtic regions",
        size: "Medium",
        colors: ["White", "Grey"],
        shapes: ["Wailing woman"],
        temperament: "Mournful",
        weakness: "Silence",
        mythPurpose: "Harbinger of death",
        funFact: "Her scream foretells tragedy."
    },
    {
        name: "Chimera",
        image: "images/chimera.jpg",
        origin: "Ancient Greece",
        region: "Southern Europe",
        size: "Large",
        colors: ["Tan", "Red"],
        shapes: ["Lion-Goat-Serpent hybrid"],
        temperament: "Unstable",
        weakness: "Strike to goat head",
        mythPurpose: "Chaos incarnate",
        funFact: "Each head acts on its own instinct."
    }
];

const currentCatalog = [...catalog];
let currentPage = 0;

function renderCatalog() {
    const container = document.getElementById("card-container");
    container.innerHTML = "";

    const item = currentCatalog[currentPage];

    const card = document.createElement("div");
    card.className = "card";

    const cardInner = document.createElement("div");
    cardInner.className = "card-inner";

    const front = document.createElement("div");
    front.className = "card-face card-front";
    const icon = document.createElement("img");
    icon.src = "images/scissors.png";
    icon.alt = "Reveal";
    icon.className = "reveal-icon";
    icon.onclick = () => card.classList.add("flipped");
    front.appendChild(icon);

    const back = document.createElement("div");
    back.className = "card-face card-back";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.className = "creature-img";

    const content = document.createElement("div");
    content.className = "card-content";
    content.innerHTML = `
    <h2>${item.name}</h2>
    <ul>
      <li><strong>Origin:</strong> ${item.origin}</li>
      <li><strong>Region:</strong> ${item.region}</li>
      <li><strong>Size:</strong> ${item.size}</li>
      <li><strong>Colors:</strong> ${item.colors}</li>
      <li><strong>Shapes:</strong> ${item.shapes}</li>
      <li><strong>Temperament:</strong> ${item.temperament}</li>
      <li><strong>Weakness:</strong> ${item.weakness}</li>
      <li><strong>Purpose:</strong> ${item.mythPurpose}</li>
      <li><em>${item.funFact}</em></li>
    </ul>
  `;

    back.appendChild(img);
    back.appendChild(content);
    back.onclick = () => card.classList.remove("flipped");

    cardInner.appendChild(front);
    cardInner.appendChild(back);
    card.appendChild(cardInner);
    container.appendChild(card);

    updateNav();
}

function updateNav() {
    const nav = document.getElementById("catalog-nav");
    nav.innerHTML = "";

    const prev = document.createElement("button");
    prev.textContent = "←";
    prev.onclick = () => {
        currentPage = (currentPage - 1 + currentCatalog.length) % currentCatalog.length;
        renderCatalog();
    };

    const next = document.createElement("button");
    next.textContent = "→";
    next.onclick = () => {
        currentPage = (currentPage + 1) % currentCatalog.length;
        renderCatalog();
    };

    const label = document.createElement("span");
    label.textContent = `Page ${currentPage + 1} of ${currentCatalog.length}`;

    nav.appendChild(prev);
    nav.appendChild(label);
    nav.appendChild(next);
}

function showSection(id) {
    document.querySelectorAll(".page-section").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");

    if (id === "catalog") renderCatalog();
}

let ctx;
let isDrawing = false;

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    if (canvas) {
        ctx = canvas.getContext("2d");
        canvas.addEventListener("mousedown", () => isDrawing = true);
        canvas.addEventListener("mouseup", () => {
            isDrawing = false;
            ctx.beginPath();
        });
        canvas.addEventListener("mouseout", () => isDrawing = false);
        canvas.addEventListener("mousemove", draw);
    }

    const form = document.getElementById("create-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const newCreature = {
                name: getVal("name"),
                origin: getVal("origin"),
                region: getVal("region"),
                size: getVal("size"),
                colors: getVal("colors"),
                shapes: getVal("shapes"),
                temperament: getVal("temperament"),
                weakness: getVal("weakness"),
                mythPurpose: getVal("mythPurpose"),
                funFact: getVal("funFact"),
                image: canvas.toDataURL()
            };
            currentCatalog.push(newCreature);
            currentPage = currentCatalog.length - 1;
            showSection("catalog");
        });
    }

    showSection("catalog");
});

function getVal(id) {
    return document.getElementById(id).value.trim();
}

function clearCanvas() {
    const canvas = document.getElementById("canvas");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(e) {
    if (!isDrawing) return;
    const rect = e.target.getBoundingClientRect();
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}
