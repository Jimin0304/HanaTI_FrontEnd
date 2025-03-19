document.addEventListener("DOMContentLoaded", function () {
  const logoImg = document.querySelector("#logo");
  const myselfTab = document.querySelector("li.myself");
  const techniqueTab = document.querySelector("li.technique");
  const techMenuTab = document.querySelector("ul.tech-menu");
  const frontTab = document.querySelector("li.front");
  const backTab = document.querySelector("li.back");
  const careerTab = document.querySelector("li.career");
  const blogTab = document.querySelector("li.blog");

  const homeSection = document.querySelector("div.home");
  const myselfSection = document.querySelector("div.myself");
  const frontSection = document.querySelector("div.front");
  const backSection = document.querySelector("div.back");
  const careerSection = document.querySelector("div.career");
  const blogSection = document.querySelector("div.blog");

  logoImg.addEventListener("click", function () {
    homeSection.style.display = "block";
    myselfSection.style.display = "none";
    frontSection.style.display = "none";
    backSection.style.display = "none";
    careerSection.style.display = "none";
    blogSection.style.display = "none";

    myselfTab.style.backgroundColor = "rgb(142, 191, 231)";
    techniqueTab.style.backgroundColor = "rgb(142, 191, 231)";
    frontTab.style.backgroundColor = "rgb(142, 191, 231)";
    backTab.style.backgroundColor = "rgb(142, 191, 231)";
    careerTab.style.backgroundColor = "rgb(142, 191, 231)";
    blogTab.style.backgroundColor = "rgb(142, 191, 231)";

    techMenuTab.classList.remove("active");
  });

  myselfTab.addEventListener("click", function () {
    myselfSection.style.display = "flex";
    homeSection.style.display = "none";
    frontSection.style.display = "none";
    backSection.style.display = "none";
    careerSection.style.display = "none";
    blogSection.style.display = "none";

    myselfTab.style.backgroundColor = "rgb(80, 147, 202)";
    techniqueTab.style.backgroundColor = "rgb(142, 191, 231)";
    frontTab.style.backgroundColor = "rgb(142, 191, 231)";
    backTab.style.backgroundColor = "rgb(142, 191, 231)";
    careerTab.style.backgroundColor = "rgb(142, 191, 231)";
    blogTab.style.backgroundColor = "rgb(142, 191, 231)";

    techMenuTab.classList.remove("active");
  });

  techniqueTab.addEventListener("click", function () {
    myselfTab.style.backgroundColor = "rgb(142, 191, 231)";
    techniqueTab.style.backgroundColor = "rgb(80, 147, 202)";
    careerTab.style.backgroundColor = "rgb(142, 191, 231)";

    techMenuTab.classList.toggle("active");
  });

  frontTab.addEventListener("click", function () {
    frontSection.style.display = "block";
    myselfSection.style.display = "none";
    homeSection.style.display = "none";
    backSection.style.display = "none";
    careerSection.style.display = "none";
    blogSection.style.display = "none";

    myselfTab.style.backgroundColor = "rgb(142, 191, 231)";
    techniqueTab.style.backgroundColor = "rgb(80, 147, 202)";
    frontTab.style.backgroundColor = "rgb(80, 147, 202)";
    backTab.style.backgroundColor = "rgb(142, 191, 231)";
    careerTab.style.backgroundColor = "rgb(142, 191, 231)";
    blogTab.style.backgroundColor = "rgb(142, 191, 231)";

    techMenuTab.classList.toggle("active");
  });

  backTab.addEventListener("click", function () {
    backSection.style.display = "block";
    myselfSection.style.display = "none";
    homeSection.style.display = "none";
    frontSection.style.display = "none";
    careerSection.style.display = "none";
    blogSection.style.display = "none";

    myselfTab.style.backgroundColor = "rgb(142, 191, 231)";
    techniqueTab.style.backgroundColor = "rgb(80, 147, 202)";
    backTab.style.backgroundColor = "rgb(80, 147, 202)";
    frontTab.style.backgroundColor = "rgb(142, 191, 231)";
    careerTab.style.backgroundColor = "rgb(142, 191, 231)";
    blogTab.style.backgroundColor = "rgb(142, 191, 231)";

    techMenuTab.classList.toggle("active");
  });

  careerTab.addEventListener("click", function () {
    careerSection.style.display = "block";
    myselfSection.style.display = "none";
    homeSection.style.display = "none";
    frontSection.style.display = "none";
    backSection.style.display = "none";
    blogSection.style.display = "none";

    careerTab.style.backgroundColor = "rgb(80, 147, 202)";
    myselfTab.style.backgroundColor = "rgb(142, 191, 231)";
    techniqueTab.style.backgroundColor = "rgb(142, 191, 231)";
    backTab.style.backgroundColor = "rgb(142, 191, 231)";
    frontTab.style.backgroundColor = "rgb(142, 191, 231)";
    blogTab.style.backgroundColor = "rgb(142, 191, 231)";

    techMenuTab.classList.remove("active");
  });

  blogTab.addEventListener("click", function () {
    blogSection.style.display = "block";
    myselfSection.style.display = "none";
    homeSection.style.display = "none";
    frontSection.style.display = "none";
    backSection.style.display = "none";
    careerSection.style.display = "none";

    blogTab.style.backgroundColor = "rgb(80, 147, 202)";
    myselfTab.style.backgroundColor = "rgb(142, 191, 231)";
    techniqueTab.style.backgroundColor = "rgb(142, 191, 231)";
    backTab.style.backgroundColor = "rgb(142, 191, 231)";
    frontTab.style.backgroundColor = "rgb(142, 191, 231)";
    careerTab.style.backgroundColor = "rgb(142, 191, 231)";

    techMenuTab.classList.remove("active");
  });

  const jsonUrl = "https://jwonchi.github.io/kopoclass/JSON/news.json";
  const newsList = document.querySelector("#news");

  fetch(jsonUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.news.forEach((item, index) => {
        const title = document.getElementById("title" + (index + 1));
        title.textContent = item.title;
      });
    })
    .catch((error) => {
      console.error("JSON 파일을 가져오는 데 실패했습니다.", error);
    });
});
