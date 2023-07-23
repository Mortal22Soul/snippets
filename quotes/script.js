// let a = prompt("Enter document colour");
// document.body.style.background = a;

const quotes = [
  '"The purpose of our lives is to be happy." — Dalai Lama',
  '"Life is what happens when you\'re busy making other plans." — John Lennon',
  '"Get busy living or get busy dying." — Stephen King',
  '"You only live once, but if you do it right, once is enough." — Mae West',
  '"Many of life\'s failures are people who did not realize how close they were to success when they gave up."- Thomas A. Edison',
];

let id = document.getElementById("quotes");

function func() {
  let x = Math.floor(Math.random() * 4 + 0);
  id.innerHTML = quotes[x];
}
