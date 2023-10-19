import request from "./request.js";
import CoreData from "./CoreData.js";
import DOMEdit from "./DOMEdit.js";

const coreGame = {
  conf: {
    numberQuestions: 10,
  },
  points: 0,
  correctOption: 0,
  actualQuestion: 1,
  idContainerGame: "gameFrame",
  gameContainer: "",
};

const dataInit = async () => {
  const countries = await request.getCountries();
  CoreData.initGameCore(countries);
  coreGame.gameContainer = document.getElementById(coreGame.idContainerGame)
};

const nextQuestion = () => {
  coreGame.actualQuestion = coreGame.actualQuestion + 1;
  gameFlow();
};

const gameReset = () => {
  coreGame.actualQuestion = 0;
  coreGame.points = 0;
  gameFlow();
};

const checkAnswer = (e) => {
  e.preventDefault();
  const nextButton = document.getElementById("next");
  const buttons = document.getElementById("options").querySelectorAll("button");
  const position = e.submitter.value;

  if (position == coreGame.correctOption) {
    coreGame.points = coreGame.points + 1;
    e.submitter.classList.add("correct");
    e.submitter.querySelector(".check").classList.remove("visually-hidden");
  } else {
    e.submitter.classList.add("wrong");
    e.submitter.querySelector(".cancel").classList.remove("visually-hidden");

    buttons.forEach((button, i) => {
      if (i == coreGame.correctOption) {
        button.classList.add("correct");
        button.querySelector(".check").classList.remove("visually-hidden");
      }
    });
    nextButton.classList.remove("visually-hidden");
  }

  buttons.forEach((button, i) => {
    button.classList.add("disabled");
  });
  nextButton.classList.remove("visually-hidden");
  nextButton.addEventListener("click", nextQuestion);
};

function gameFlow() {
  coreGame.gameContainer.innerHTML = "";
  if (coreGame.actualQuestion <= coreGame.conf.numberQuestions) {
    coreGame.correctOption = renderQuestion(coreGame.idContainerGame);

    document.addEventListener("submit", checkAnswer);
  } else {
    gameEnd(coreGame.idContainerGame);
    document.getElementById("try-again").addEventListener("click", gameReset);
  }
}

function gameEnd(id) {
  let node = document.getElementById(id);
  DOMEdit.printWin(node, coreGame.points);
}

function renderQuestion(idNode) {
  const questions = CoreData.getQuestionsData();
  console.log("question", questions);

  if (questions.isCapitalQuestion) {
    return DOMEdit.printCapitalQTemplate(
      questions.questions,
      document.getElementById(idNode)
    );
  }
  return DOMEdit.printFlagQTemplate(
    questions.questions,
    document.getElementById(idNode)
  );
}

await dataInit();
DOMEdit.initTemplates();
gameFlow();
