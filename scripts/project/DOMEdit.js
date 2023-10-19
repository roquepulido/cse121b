const templatesArray = [];
const letters = ["A", "B", "C", "D"];

function initTemplates() {
  setTemplate("capital", "capitalQuestion");
  setTemplate("button", "buttonOption");
  setTemplate("flag", "flagQuestion");
  setTemplate("win", "win");
  setTemplate("welcome", "welcome");
}

function setTemplate(name, id) {
  const template = document.getElementById(id);
  templatesArray[name] = template;
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function printFlagQTemplate(arrayPaises, nodo) {
  
  const correctPosition = getRandomNumber(4);
  const correctFlag = arrayPaises[correctPosition].flagSvg;
  const nodoPregunta = document.importNode(templatesArray.flag.content, true);
  const nodoOptions = nodoPregunta.getElementById("options");

  nodoPregunta.getElementById("flagIMG").src = correctFlag;

  for (let i = 0; i < 4; i++) {
    const nodoButton = document.importNode(templatesArray.button.content, true);
    const nodoButtonSpans = nodoButton.querySelectorAll("span");
    nodoButtonSpans[0].innerHTML = letters[i];
    nodoButtonSpans[1].innerHTML = arrayPaises[i].countryName;
    nodoOptions.appendChild(nodoButton);
  }
  const buttons = nodoOptions.querySelectorAll("button");
  buttons.forEach((button, i) => {
    button.setAttribute("value", i);
  });
  nodo.appendChild(nodoPregunta);

  return correctPosition;
}

function printCapitalQTemplate(arrayPaises, nodo) {
  const correctPosition = getRandomNumber(4);
  const correctCapital = arrayPaises[correctPosition].capital;
  const nodoPregunta = document.importNode(templatesArray.capital.content, true);
  const nodoOptions = nodoPregunta.getElementById("options");

  nodoPregunta.getElementById(
    "question"
  ).innerHTML = `"${correctCapital}" is the capital of`;

  for (let i = 0; i < 4; i++) {
    const nodoButton = document.importNode(templatesArray.button.content, true);
    const nodoButtonSpans = nodoButton.querySelectorAll("span");
    nodoButtonSpans[0].innerHTML = letters[i];
    nodoButtonSpans[1].innerHTML = arrayPaises[i].countryName;
    nodoOptions.appendChild(nodoButton);
  }
  const buttons = nodoOptions.querySelectorAll("button");
  buttons.forEach((button, i) => {
    button.setAttribute("value", i);
  });

  nodo.appendChild(nodoPregunta);

  return correctPosition;
}

function printWin(nodo, puntos) {
  const nodoWin = document.importNode(templatesArray.win.content, true);
  const spanPoints = nodoWin.getElementById("totalPoints");

  spanPoints.innerHTML = puntos;
  nodo.appendChild(nodoWin);
}

function getTemplates() {
  return templatesArray;
}

export default {
  printCapitalQTemplate,
  getTemplates,
  setTemplate,
  initTemplates,
  printFlagQTemplate,
  printWin,
};
