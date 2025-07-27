// Dom Elements
const $coin = document.getElementById("coin-img");
const $button = document.getElementById("random-btn");
const $result = document.getElementById("result");

const flipCoin = () => {
  $coin.classList.add("flipping");

  setTimeout(() => {
    const isHeads = Math.random() < 0.5;
    $coin.src = isHeads ? "./resources/heads.svg" : "./resources/tails.svg";
    $coin.alt = isHeads ? "Heads" : "Tails";
    $result.innerText = isHeads ? "Heads" : "Tails";
    $coin.classList.remove("flipping");
  }, 600);
};
