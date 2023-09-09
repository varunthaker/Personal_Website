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

const toggleButton = document.querySelector('[data-js="toggle-switch"]');
const toggleIcon = document.getElementById("theme");

toggleButton.addEventListener("click", () => {
  if (toggleIcon.classList[2] === "fa-moon") {
    toggleIcon.classList.remove("fa-moon");
    toggleIcon.classList.add("fa-sun");
    bodyElement.classList.add("light-mode");
  } else if (toggleIcon.classList[2] === "fa-sun") {
    toggleIcon.classList.remove("fa-sun");
    toggleIcon.classList.add("fa-moon");
    bodyElement.classList.remove("light-mode");
  } else {
    return null;
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
