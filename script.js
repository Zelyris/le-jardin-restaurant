import heroImage from "./assets/le-jardin-hero.png";
import dishImage from "./assets/le-jardin-dish.png";

// Contenus faciles à adapter pour un autre restaurant ou commerce.
const siteContent = {
  dishes: [
    { name: "Tomate ancienne", description: "Fraise, verveine, crème de brebis", price: "14 €" },
    { name: "Truite de l’Ain", description: "Courgette, amande fraîche, oseille", price: "26 €" },
    { name: "Volaille fermière", description: "Petits pois, morilles, jus au thym", price: "29 €" },
    { name: "Abricot rôti", description: "Miel de châtaignier, romarin, lait ribot", price: "11 €" },
  ],
  countryMenu: [
    { course: "Entrée", name: "Œuf parfait de ferme", description: "Crème de champignons, noisette et mouillettes au levain" },
    { course: "Plat", name: "Volaille jaune rôtie", description: "Pommes grenailles, carotte fanes et jus au thym" },
    { course: "Dessert", name: "Tarte fine aux pommes", description: "Crème crue et caramel de cidre" },
  ],
  gallery: [
    { src: dishImage, alt: "Assiette de légumes de saison et sauce aux herbes" },
    { src: heroImage, alt: "Ambiance du jardin à la tombée du jour" },
    { src: heroImage, alt: "Détail de la terrasse végétalisée" },
    { src: dishImage, alt: "Détail d’une assiette colorée" },
  ],
};

const dishContainer = document.querySelector("[data-dishes]");
siteContent.dishes.forEach(({ name, description, price }) => {
  const article = document.createElement("article");
  article.className = "dish";
  article.innerHTML = `<h3>${name}</h3><p>${description}</p><strong>${price}</strong>`;
  dishContainer.append(article);
});

const countryMenuContainer = document.querySelector("[data-country-menu]");
siteContent.countryMenu.forEach(({ course, name, description }) => {
  const item = document.createElement("div");
  item.className = "country-menu-item";
  item.innerHTML = `<span>${course}</span><h4>${name}</h4><p>${description}</p>`;
  countryMenuContainer.append(item);
});

const galleryContainer = document.querySelector("[data-gallery]");
siteContent.gallery.forEach(({ src, alt }) => {
  const figure = document.createElement("figure");
  figure.className = "gallery-item";
  figure.innerHTML = `<img src="${src}" alt="${alt}" loading="lazy">`;
  galleryContainer.append(figure);
});

const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const setMenu = (open) => {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  nav.classList.toggle("is-open", open);
  document.body.style.overflow = open ? "hidden" : "";
};
menuToggle.addEventListener("click", () => setMenu(menuToggle.getAttribute("aria-expanded") !== "true"));
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

const header = document.querySelector("[data-header]");
const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

document.querySelector("[data-year]").textContent = new Date().getFullYear();
