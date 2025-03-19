document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector(".input input");
  const btn = document.querySelector("button");
  const text = document.querySelector(".result");

  btn.addEventListener("click", (ev) => {
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
      console.log(lottoNumbers);
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
});
