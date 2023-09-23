console.clear();

const currentYearElement = document.querySelector('[data-js="year"]');
const seeMoreButton = document.querySelector('[data-js="see-more"]');
const hiddenProjectCards = document.querySelectorAll(
  '[data-js="hidden-element"]'
);

const bodyElement = document.querySelector("body");

//Get Present Year for Footer
const currentYear = new Date().getFullYear();
currentYearElement.innerText = currentYear;

//Show all projects
seeMoreButton.addEventListener("click", () => {
  if (seeMoreButton.innerText === "Show More") {
    Array.from(hiddenProjectCards).map((projectCard) =>
      projectCard.classList.remove("hidden")
    );
    seeMoreButton.innerText = "Show Less";
  } else if (seeMoreButton.innerText === "Show Less") {
    Array.from(hiddenProjectCards).map((projectCard) =>
      projectCard.classList.add("hidden")
    );
    seeMoreButton.innerText = "Show More";
  }
});

//Getting data to the Excel Sheet
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzn418HyXmqNNmO4kLkPp7kVxzWyRoca-OtXxeMrvPbomzRtgc75ANLEPYAS2ZwVBuU/exec";
const form = document.querySelector("form");
const nameElement = document.querySelector("#name");
const submitButton = document.querySelector('[data-js="submit-form"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitButton.classList.add("button--loading", "button__text");
  try {
    fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(() => {
      submitButton.classList.remove("button--loading", "button__text");
      form.reset();
      nameElement.focus();
    });
  } catch (error) {
    console.error("Error!", error.message);
  }
});

//for responsiveness

const closeMenu = document.querySelector('[data-js="close"]');
const openMenu = document.querySelector('[data-js="open"]');
const navBar = document.querySelector('[data-js="nav-bar"]');

openMenu.addEventListener("click", () => {
  navBar.style.right = "0";
  openMenu.style.visibility = "hidden";
});

closeMenu.addEventListener("click", () => {
  navBar.style.right = "-200px";
  openMenu.style.visibility = "visible";
});
