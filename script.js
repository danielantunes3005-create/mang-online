// Passo 1 - Listar páginas do mangá
const pages = [
    './Assests/dragon-ball-vol-1-s Capa.jpg',
    './Assests/1.jpg',
    './Assests/2.jpg',
    './Assests/3.jpg',
    './Assests/4.jpg',
    './Assests/5.jpg',
    './Assests/6.jpg',
    './Assests/7.jpg',
    './Assests/8.jpg',
    './Assests/9.jpg',
    './Assests/10.jpg',
    './Assests/11.jpg',
    './Assests/12.jpg',
    './Assests/13.jpg',
    './Assests/14.jpg',
    './Assests/15.jpg',
    './Assests/16.jpg',
    './Assests/17.jpg',
    './Assests/18.jpg',
    './Assests/19.jpg',
    './Assests/20.jpg',
    './Assests/21.jpg',
    './Assests/22.jpg',
    './Assests/23.jpg',
    './Assests/24.jpg',
    './Assests/25.jpg',
    './Assests/26.jpg',
    './Assests/27.jpg',
    './Assests/28.jpg',
    './Assests/29.jpg',
    './Assests/30.jpg',
    './Assests/31.jpg'
];

// Passo 2 - Página atual
let CurrentPageIndex = 0;

// Passo 3 - Selecionar elementos HTML
const imgElement = document.getElementById("manga-page");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const pageCounter = document.getElementById("page-counter");

// Passo 4 - Atualizar a tela
function updateReader() {
    imgElement.src = pages[CurrentPageIndex];
    pageCounter.textContent =
        `Página ${CurrentPageIndex + 1} de ${pages.length}`;
    btnPrev.disabled = CurrentPageIndex === 0;
    btnNext.disabled = CurrentPageIndex === pages.length - 1;
}

// Passo 5 - Botão Anterior
     btnPrev.addEventListener("click", () => {
     if (CurrentPageIndex > 0) {
        CurrentPageIndex--;
        updateReader();
    }

});
     btnNext.addEventListener("click", () => {
    if (CurrentPageIndex < pages.length - 1) {
        CurrentPageIndex++;
        updateReader();
    }

});

// Passo 7 - Controle pelas setas do teclado
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && CurrentPageIndex > 0) {
        CurrentPageIndex--;
        updateReader();
    } else if (
        event.key === "ArrowRight" &&
        CurrentPageIndex < pages.length - 1
    ) {
        CurrentPageIndex++;
        updateReader();
    }

});

updateReader();
