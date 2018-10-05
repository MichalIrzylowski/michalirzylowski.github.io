const pic = document.getElementsByClassName("pic");
const figure = document.getElementsByClassName("figure-wrapper");
const burger = document.querySelector(".burger");
const mainMenu = document.querySelector(".main-menu");
const contactForm = document.querySelector(".contactform");
const menuChoise = document.getElementsByClassName("menu-choise");
const trigerContactForm = document.querySelector(".trigerContactForm");
const logo = document.querySelector(".logo");
const quitForm = document.getElementById("quitForm");
const thanksMessage = document.querySelector(".message");

const movePoints = [
  document.getElementsByClassName("hero")[0],
  document.getElementsByClassName("projects")[0],
  document.querySelector("footer")
];

let minusFactors = Array(figure.length);

const setTranslate = (x = 0, y, element) => {
  element.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
};

// === LISTENERS ARE HERE === //

if (window.innerWidth > 768) {
  document.addEventListener("scroll", paralaxElements);
}

document.addEventListener("scroll", () => {
  if (
    trigerContactForm.getBoundingClientRect().top + 300 <
    window.innerHeight
  ) {
    trigerContactForm.style.opacity = 1;
  }
});

trigerContactForm.addEventListener("click", function(e) {
  e.preventDefault();
  contactForm.classList.toggle("active");
  logo.classList.toggle("active");
});

contactForm.addEventListener("submit", async function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value,
    email = document.getElementById("email").value,
    message = document.getElementById("message").value;
  const messageFields = { name, email, message };

  let answer = await axios.post(
    "https://portfolio-mirzylowski-server.herokuapp.com/api/message",
    messageFields
  );
  console.log(answer);
  if (answer.status === 200) {
    thanksMessage.classList.toggle("active");
    setTimeout(() => {
      thanksMessage.classList.toggle("active");
    }, 2000);
  }
  contactForm.classList.toggle("active");
  logo.classList.toggle("active");
});

quitForm.addEventListener("click", () => {
  contactForm.classList.toggle("active");
  logo.classList.toggle("active");
});

burger.addEventListener("click", function() {
  this.classList.toggle("active");
  mainMenu.classList.toggle("active");
  logo.classList.toggle("active");
});

for (let i = 0; i < menuChoise.length; i++) {
  menuChoise[i].addEventListener("click", () => {
    movePoints[i].scrollIntoView({ behavior: "smooth", block: "start" });
    burger.classList.toggle("active");
    mainMenu.classList.toggle("active");
    logo.classList.toggle("active");
  });
}

function paralaxElements() {
  for (let i = 0; i < pic.length; i++) {
    if (
      figure[i].getBoundingClientRect().top < window.innerHeight &&
      figure[i].getBoundingClientRect().bottom > 0
    ) {
      if (!minusFactors[i]) {
        minusFactors[i] = Math.round((window.scrollY * 0.1) / 10) * 10;
      }

      setTranslate(0, -(window.scrollY * 0.1 - minusFactors[i]), figure[i]);
      setTranslate(0, -(window.scrollY * 0.1 - minusFactors[i]) / 4, pic[i]);
    }
  }
}
