const nomeUtente = document.getElementById("inputName");
const saveButton = document.getElementById("saveButton");
const clearButton = document.getElementById("clearButton");
const userForm = document.getElementById("userForm");

let names = [];

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nomeUtenteInserito = nomeUtente.value;
  console.log(nomeUtenteInserito);
  names.push(nomeUtenteInserito);
  localStorage.setItem("nomeUtentiSalvati", JSON.stringify(names));
  nomeUtente.value = "";
});

clearButton.addEventListener("click", () => {
  localStorage.clear();
});

window.addEventListener("DOMContentLoaded", () => {
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
});

/* console.log(Date.now()); */
const timestart = Date.now();
function Tempo() {
  sessionStorage.setItem("Time", JSON.stringify(timestart));
  const millis = Date.now() - timestart;
  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  setTimeout(Tempo, 1000);
}
Tempo();
