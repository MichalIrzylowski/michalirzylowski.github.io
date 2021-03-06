const typer = document.querySelector(".typer");
const title = document.querySelector("h1");
const logosContainer = document.querySelector(".technologies");
const logos = document.querySelectorAll(".logo");

// === NEON STYLE HEADER === //
{
  const mappedTitle = title.innerText.split("").map((letter, i) => {
    const span = document.createElement("span");
    span.innerText = letter;
    span.classList.add(`letter`);
    span.id = `letter-${i}`;
    return span;
  });
  title.innerText = "";
  for (let i = 0; i < mappedTitle.length; i++) {
    title.appendChild(mappedTitle[i]);
  }

  let randomLetter = Math.floor(Math.random() * mappedTitle.length);
  let times = Math.floor(Math.random() * (100 - 10) + 10);
  if (times % 2 !== 0) {
    times++;
  }
  let iterated = 0;

  const flick = () => {
    setTimeout(() => {
      mappedTitle[randomLetter].classList.toggle("off");
      iterated++;
      if (iterated === times) {
        randomLetter = Math.floor(Math.random() * mappedTitle.length);
        times = Math.floor(Math.random() * (100 - 10) + 10);
        if (times % 2 !== 0) {
          times++;
        }
        iterated = 0;
        return;
      }
      flick();
    }, 10);
  };

  const flickerLight = setInterval(flick, 2000);
}

// === TYPER === //
const texts = [
  "jestem front-end deweloperem!",
  "jestem back-end deweloperem!",
  "jestem full-stack deweloperem!",
  "jestem profesjonalny!",
  "posługuję się wieloma technologiami!",
  "tworzę progresywne aplikacje webowe!",
  "tworzę magię!",
  "życzę Ci miłego dnia!"
];

const mappedTexts = texts.map(text => {
  return text.split("").map((letter, i) => {
    let span = document.createElement("span");
    span.classList.add(`letter-${i}`);
    span.innerText = letter;
    return span;
  });
});

let letterNumber = 0;
let wordNumber = 0;

const erase = () => {
  setTimeout(() => {
    typer.removeChild(mappedTexts[wordNumber][letterNumber - 1]);
    letterNumber--;
    if (letterNumber === 0) {
      wordNumber++;

      setTimeout(() => {
        type();
      }, 1000);

      if (wordNumber === mappedTexts.length) {
        wordNumber = 0;
      }
      return;
    }
    erase();
  }, 50);
};

const type = () => {
  setTimeout(() => {
    typer.appendChild(mappedTexts[wordNumber][letterNumber]);

    letterNumber++;

    if (letterNumber === mappedTexts[wordNumber].length) {
      setTimeout(() => {
        erase();
      }, 2000);
      return;
    }

    type();
  }, 100);
};

const addLetters = setTimeout(type, 1000);
