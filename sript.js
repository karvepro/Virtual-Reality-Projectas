const buttonOne = document.querySelector("#button1");
const buttonTwo = document.querySelector("#button2");
const buttonThree = document.querySelector("#button3");
const buttonFour = document.querySelector("#button4");
const sectionOne = document.querySelector("#section1");
const sectionTwo = document.querySelector("#section2");
const sectionThree = document.querySelector("#section3");
const sectionFour = document.querySelector("#section4");
const sectionAll = document.querySelectorAll("section");

//paslepti visas sekcijas
for (let section of sectionAll) {
  section.style.display = "none";
}
//rodyti tik pirma funkcija
sectionOne.style.display = "flex";

//1 sekcijos aktivacija
buttonOne.addEventListener("click", function () {
  for (let section of sectionAll) {
    section.style.display = "none";
  }
  sectionOne.style.display = "flex";
});

//2 sekcijos aktivacija
buttonTwo.addEventListener("click", function () {
  for (let section of sectionAll) {
    section.style.display = "none";
  }
  sectionTwo.style.display = "flex";
});

//3 sekcijos aktivacija
buttonThree.addEventListener("click", function () {
  for (let section of sectionAll) {
    section.style.display = "none";
  }
  sectionThree.style.display = "flex";
});
//4 sekcijos aktivacija
buttonFour.addEventListener("click", function () {
  for (let section of sectionAll) {
    section.style.display = "none";
  }
  sectionFour.style.display = "flex";
});
