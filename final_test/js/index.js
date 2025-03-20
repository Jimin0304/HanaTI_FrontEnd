document.addEventListener("DOMContentLoaded", function () {
  // nav tab
  const logoTab = document.querySelector("#logo");
  const myselfTab = document.querySelector("li.myself");
  const techniqueTab = document.querySelector("li.technique");
  const feTab = document.querySelector("li.fe");
  const beTab = document.querySelector("li.be");
  const careerTab = document.querySelector("li.career");
  const blogTab = document.querySelector("li.blog");
  const guestbookTab = document.querySelector("li.guestbook");

  // section
  const homeSection = document.querySelector("section.home");
  const myselfSection = document.querySelector("section.myself");
  const feSection = document.querySelector("section.fe");
  const beSection = document.querySelector("section.be");
  const careerSection = document.querySelector("section.career");
  const blogSection = document.querySelector("section.blog");
  const guestbookSection = document.querySelector("section.guestbook");

  //   tech-menu
  const techMenuTab = document.querySelector("ul.tech-menu");

  const jsonUrl = "https://prof-jwchi.github.io/frontEnd/test/blog.json";

  fetch(jsonUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.blogs.forEach((item, index) => {
        const title = document.getElementById("title" + (index + 1));
        title.textContent = item.title;
      });
    })
    .catch((error) => {
      console.error("JSON 파일을 가져오는 데 실패했습니다.", error);
    });

  function initial() {
    homeSection.style.display = "none";
    myselfSection.style.display = "none";
    feSection.style.display = "none";
    beSection.style.display = "none";
    careerSection.style.display = "none";
    blogSection.style.display = "none";
    guestbookSection.style.display = "none";

    myselfTab.style.backgroundColor = "rgb(168, 214, 253)";
    techniqueTab.style.backgroundColor = "rgb(168, 214, 253)";
    feTab.style.backgroundColor = "rgb(248, 236, 168)";
    beTab.style.backgroundColor = "rgb(248, 236, 168)";
    careerTab.style.backgroundColor = "rgb(168, 214, 253)";
    blogTab.style.backgroundColor = "rgb(168, 214, 253)";
    guestbookTab.style.backgroundColor = "rgb(168, 214, 253)";
  }

  logoTab.addEventListener("click", function () {
    initial();
    homeSection.style.display = "block";

    techMenuTab.classList.remove("active");
  });

  myselfTab.addEventListener("click", function () {
    initial();
    myselfSection.style.display = "flex";
    myselfTab.style.backgroundColor = "rgb(90, 172, 245)";

    techMenuTab.classList.remove("active");
  });

  techniqueTab.addEventListener("click", function () {
    myselfTab.style.backgroundColor = "rgb(168, 214, 253)";
    techniqueTab.style.backgroundColor = "rgb(90, 172, 245)";
    careerTab.style.backgroundColor = "rgb(168, 214, 253)";
    blogTab.style.backgroundColor = "rgb(168, 214, 253)";
    guestbookTab.style.backgroundColor = "rgb(168, 214, 253)";

    techMenuTab.classList.add("active");
  });

  feTab.addEventListener("click", function () {
    initial();
    feSection.style.display = "block";
    feTab.style.backgroundColor = "rgb(243, 190, 44)";

    techMenuTab.classList.add("active");
  });

  beTab.addEventListener("click", function () {
    initial();
    beSection.style.display = "block";
    beTab.style.backgroundColor = "rgb(243, 190, 44)";

    techMenuTab.classList.add("active");
  });

  careerTab.addEventListener("click", function () {
    initial();
    careerSection.style.display = "block";
    careerTab.style.backgroundColor = "rgb(90, 172, 245)";

    techMenuTab.classList.remove("active");
  });

  blogTab.addEventListener("click", function () {
    initial();
    blogSection.style.display = "block";
    blogTab.style.backgroundColor = "rgb(90, 172, 245)";

    techMenuTab.classList.remove("active");
  });

  guestbookTab.addEventListener("click", function () {
    initial();
    guestbookSection.style.display = "flex";
    guestbookTab.style.backgroundColor = "rgb(90, 172, 245)";

    techMenuTab.classList.remove("active");
  });

  // 방명록 작성
  const uploadBtn = document.querySelector(".textInput button");
  const uploadText = document.querySelector("#content");
  const nickname = document.querySelector("#nickname");
  const body = document.querySelector("#gb-body");

  uploadBtn.addEventListener("click", (ev) => {
    if (uploadText.value.length === 0) {
      alert("내용을 입력해주세요!");
      return;
    }
    if (nickname.value.length === 0) {
      alert("닉네임을 입력해주세요!");
      return;
    }

    let today = new Date();

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜

    const td1 = document.createElement("td");
    td1.style.width = "20%";
    td1.innerHTML = nickname.value;
    const td2 = document.createElement("td");
    td2.style.width = "50%";
    td2.innerHTML = uploadText.value;
    const td3 = document.createElement("td");
    td3.style.width = "30%";
    let dateStr = year + "/" + month + "/" + date;
    td3.innerHTML = dateStr;

    const trtag = document.createElement("tr");
    trtag.appendChild(td1);
    trtag.appendChild(td2);
    trtag.appendChild(td3);
    body.append(trtag);

    localStorage.setItem(
      storageKey++,
      JSON.stringify({
        nickname: nickname.value,
        content: uploadText.value,
        date: dateStr,
      })
    );

    nickname.value = "";
    uploadText.value = "반가워요!";
  });

  let storageKey = 0;
  const previousGuestBook = document.querySelector(".reload-gb");
  previousGuestBook.addEventListener("click", function () {
    for (let i = 0; i < localStorage.length; i++) {
      let item = localStorage.getItem(i);
      if (item !== null) {
        const td1 = document.createElement("td");
        td1.style.width = "20%";
        td1.innerHTML = JSON.parse(item).nickname;
        const td2 = document.createElement("td");
        td2.style.width = "50%";
        td2.innerHTML = JSON.parse(item).content;
        const td3 = document.createElement("td");
        td3.style.width = "30%";
        td3.innerHTML = JSON.parse(item).date;
        const trtag = document.createElement("tr");
        trtag.appendChild(td1);
        trtag.appendChild(td2);
        trtag.appendChild(td3);
        body.append(trtag);
      }
    }
  });
});
