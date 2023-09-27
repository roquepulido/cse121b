/* LESSON 3 - Programming Tasks */

/* Profile Object  */

const myProfile = {};

/* Populate Profile Object with placesLive objects */
myProfile.name = "Roque Pulido";
myProfile.photo = "images/photo.jpg";
myProfile.favoriteFoods = [
  "Tacos",
  "Mole",
  "Carnitas",
  "Tuna the fruit no the fish",
];
myProfile.hobbies = ["Read", "Play music", "Learn new things"];
myProfile.placesLived = [];
myProfile.placesLived.push({
  place: "Guadalajara, Jalisco, México",
  length: "5 years",
});
myProfile.placesLived.push({
  place: "León, Guanajuato, México",
  length: "10 years",
});
myProfile.placesLived.push({
  place: "CDMX, México, México",
  length: "5 years",
});
myProfile.placesLived.push({
  place: "Monterrey, Nuevo León, México",
  length: "1 year",
});

myProfile.placesLived.push({
  place: "Cancún, Quintana Roo, México",
  length: "11 years",
});

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").setAttribute("src", myProfile.photo);
document.getElementById("photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach((food) => {
  let liTag = document.createElement("li");
  liTag.textContent = food;
  document.getElementById("favorite-foods").appendChild(liTag);
});
/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
    let liTag = document.createElement("li");
    liTag.textContent = hobby;
    document.getElementById("hobbies").appendChild(liTag);
  });
/* Places Lived DataList */
myProfile.placesLived.forEach(place=>{
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd)
});

console.log(myProfile);
