const nomeUtente = document.getElementById("inputName");
const saveButton = document.getElementById("saveButton");
const clearButton = document.getElementById("clearButton");
const userForm = document.getElementById("userForm");

let names = [];

function displayNames() {
  const sezioneH1 = document.getElementById("sezioneh1");
  const sezioneH2 = document.getElementById("sezioneh2");

  sezioneH1.innerHTML = "";
  sezioneH2.innerHTML = "";

  if (names.length > 0) {
    const titolo = document.createElement("h1");
    titolo.innerText = "Nomi utenti salvati:";
    sezioneH1.appendChild(titolo);

    names.forEach((nome) => {
      const nomeh2 = document.createElement("h2");
      nomeh2.innerText = nome;
      sezioneH2.appendChild(nomeh2);
    });
  }
}

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nomeUtenteInserito = nomeUtente.value;
  console.log(nomeUtenteInserito);
  names.push(nomeUtenteInserito);
  localStorage.setItem("nomeUtentiSalvati", JSON.stringify(names));
  nomeUtente.value = "";
  displayNames();
});

clearButton.addEventListener("click", () => {
  localStorage.clear();
  names = [];
  displayNames();
});
window.addEventListener("DOMContentLoaded", () => {
  displayNames();
});
/* window.addEventListener("DOMContentLoaded", () => {
  const seEsisteUnNomeInserito = localStorage.getItem("nomeUtentiSalvati");
  if (seEsisteUnNomeInserito) {
    const nomiArray = JSON.parse(seEsisteUnNomeInserito);
    const titolo = document.createElement("h1");
    titolo.innerText = "Nomi utenti salvati:";
    const sezioneH1 = document.getElementById("sezioneh1");
    sezioneH1.appendChild(titolo);

    nomiArray.forEach((nome) => {
      const nomeh2 = document.createElement("h2");
      nomeh2.innerText = nome;
      const sezioneH2 = document.getElementById("sezioneh2");
      sezioneH2.appendChild(nomeh2);
    });
  }
}); */

let timestart = sessionStorage.getItem("TimeStart");
if (timestart === null) {
  timestart = Date.now();
  sessionStorage.setItem("TimeStart", timestart);
} else {
  timestart = parseInt(timestart);
}
function tempo() {
  const diffMillisecondi = Date.now() - timestart;
  const secondiPassati = Math.floor(diffMillisecondi / 1000);
  const counterTime = document.getElementById("counterTime");
  counterTime.innerText = `Secondi Passati: ${secondiPassati}`;
  setTimeout(tempo, 1000);
}
tempo();

/* let time = 0;

setInterval(() => {
  time++;
  console.log(time);
  sessionStorage.setItem("Tempo", time);
}, 1000);

window.addEventListener("DOMContentLoaded", () => {
  const nameFromStorage = localStorage.getItem("Nome");
  if (nameFromStorage) {
    h1.innerHTML = localStorage.getItem("Nome");
  }
  const timeFromStorage = sessionStorage.getItem("Tempo");

  if (timeFromStorage) {
    time = timeFromStorage;
  }
}); */
