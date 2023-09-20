/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Roque Alberto Pulido";
const currentYear = "2023";
const profilePicture = "images/photo.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector(
  'img[src="images/placeholder.png"]'
);

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */

const arrayFavoriteFood = [
  "Tacos",
  "Mole",
  "Carnitas",
  "Tuna the fruit no the fish",
];

foodElement.textContent = arrayFavoriteFood;
const singleFavoriteFood = "Lasaña";
arrayFavoriteFood.push(singleFavoriteFood);
foodElement.innerHTML += `<br>${arrayFavoriteFood}`;
arrayFavoriteFood.shift();
foodElement.innerHTML += `<br>${arrayFavoriteFood}`;
arrayFavoriteFood.pop();
foodElement.innerHTML += `<br>${arrayFavoriteFood}`;
