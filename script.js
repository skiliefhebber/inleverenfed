// JavaScript Document
console.log("hi");

const afbeeldingEen = document.querySelector(".tekst1");
const afbeeldingTwee = document.querySelector(".latenzienimg2");
const afbeeldingDrie = document.querySelector(".latenzienimg3");

const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");
const img3 = document.getElementById("img-3");


let openMenu = document.querySelector (".button1");
let sluitMenu = document.querySelector (".button2");

openMenu.onclick = openenButton;
sluitMenu.onclick = sluitenButton;

buttonDark.onclick = paginaDarkMode;
buttonLight.onclick = paginaLightMode;


function openenButton() {
    let deNav = document.querySelector (".navigatie2");
    deNav.classList.add("toonMenu");
}

function sluitenButton(){
    let deNav = document.querySelector (".navigatie2");
    deNav.classList.remove("toonMenu");
}

function toonAfbeelding(afbeelding, selectedElement) {
    img1.classList.add('hidden');
    img2.classList.add('hidden');
    img3.classList.add('hidden');

    afbeelding.classList.remove('hidden');

    afbeelding.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); 

    resetSelected();

    selectedElement.classList.add('geselecteerd');
}

function resetSelected() {
    afbeeldingEen.classList.remove('geselecteerd');
    afbeeldingTwee.classList.remove('geselecteerd');
    afbeeldingDrie.classList.remove('geselecteerd');
}

function paginaDarkMode() {
    document.body.classList.add('darkthema');
    buttonDark.classList.add('verbergen');
    buttonLight.classList.remove('verbergen');
}

function paginaLightMode() {
    document.body.classList.remove('darkthema');
    buttonDark.classList.remove('verbergen');
    buttonLight.classList.add('verbergen');
}

afbeeldingEen.addEventListener('click', function() {
    toonAfbeelding(img1, afbeeldingEen);
});

afbeeldingTwee.addEventListener('click', function() {
    toonAfbeelding(img2, afbeeldingTwee);
});

afbeeldingDrie.addEventListener('click', function() {
    toonAfbeelding(img3, afbeeldingDrie);
});


let buttonDark = document.querySelector(".darkmode");
let buttonLight = document.querySelector(".lightmode");







