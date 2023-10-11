/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const elemArticle = document.createElement("article");
    const elemH3 = document.createElement("h3");
    elemH3.innerText = temple.templeName;
    const elemImg = document.createElement("img");
    elemImg.setAttribute("src", temple.imageUrl);
    elemImg.setAttribute("alt", temple.location);
    elemArticle.appendChild(elemH3);
    elemArticle.appendChild(elemImg);
    templesElement.appendChild(elemArticle);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const url =
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
  const response = await fetch(url).then((res) => res.json());
  console.log("response:", response);
  templeList = response;
};

/* reset Function */
const reset = () => {
  templesElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = (temples) => {
  reset();
  const filter = document.getElementById("sortBy").value;
  switch (filter) {
    case "utah":
      displayTemples(
        templeList.filter((temple) =>
          temple.location.toLowerCase().includes("utah")
        )
      );
      break;
    case "notutah":
      displayTemples(
        templeList.filter(
          (temple) => !temple.location.toLowerCase().includes("utah")
        )
      );
      break;
    case "older":
      displayTemples(
        templeList.filter(
          (temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)
        )
      );
      break;
    case "all":
      displayTemples(templeList);
      break;
  }
};

getTemples();

/* Event Listener */

document.getElementById("sortBy").addEventListener("change", (templeList) => {
  sortBy(templeList);
});
