const nav = document.querySelector("#nav");
const abrir = document.querySelector("#menu-hamburguesa-abrir");
const cerrar = document.querySelector("#menu-hamburguesa-cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

