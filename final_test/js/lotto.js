document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector(".input input");
  const startBtn = document.querySelector(".go");
  const text = document.querySelector(".result");
  const backBtn = document.querySelector(".back");

  startBtn.addEventListener("click", (ev) => {
    let gameCount = parseInt(input.value);
    if (isNaN(gameCount) || gameCount < 1 || gameCount > 5) {
      alert("1~5 사이의 숫자를 입력하세요.");
      input.value = "";
      return;
    }

    text.innerHTML = "";

    for (let i = 0; i < gameCount; i++) {
      const lottoNumbers = generateLottoNumbers();
      const lottoText = document.createElement("p");
      lottoText.textContent = `${i + 1}:  ${lottoNumbers.join(", ")}`;
      text.appendChild(lottoText);
    }
  });

  function generateLottoNumbers() {
    let lotto = new Set();
    while (lotto.size < 6) {
      lotto.add(Math.floor(Math.random() * 45) + 1);
    }

    return [...lotto].sort((a, b) => a - b);
  }

  backBtn.addEventListener("click", function () {
    history.back();
  });
});
