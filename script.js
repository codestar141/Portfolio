const articles = document.querySelectorAll(".main4 article");

articles.forEach((article) => {
  const button = article.querySelector("button");
  const content = article.querySelector(".content2");

  button.addEventListener("click", () => {
    content.classList.toggle("active");
  });
});

// Testimonial
const testimonialArticles = document.querySelectorAll(".main10 article");
const prevBtn = document.querySelector("button#prev");
const nextBtn = document.querySelector("button#next");

let index = 0;

function showArticle() {
  testimonialArticles.forEach((article, idx) => {
    if (index == idx) {
      article.classList.add("active");
    } else {
      article.classList.remove("active");
    }
  });
  // for button opacity change
  if (index === 0) {
    prevBtn.style.opacity = "0.2";
  } else {
    prevBtn.style.opacity = "1";
  }

  if (index === testimonialArticles.length - 1) {
    nextBtn.style.opacity = "0.2";
  } else {
    nextBtn.style.opacity = "1";
  }
}
console.log(showArticle);

// Call the showArticle function to display the initial testimonial article
showArticle();

// Add event listener to the next button to show the next testimonial article
nextBtn.addEventListener("click", () => {
  if (index === testimonialArticles.length - 1) {
    return;
  } else {
    index++;
  }

  showArticle();
});

// Add event listener to the previous button to show the previous testimonial article
prevBtn.addEventListener("click", () => {
  if (index === 0) {
    return;
  } else {
    index--;
  }

  showArticle();
});

// MODAL
const letsTalk = document.querySelector("#letsTalk");
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const modalCont = document.querySelector(".container");
const conversation =  document.querySelector(".conversation");

openBtn.addEventListener("click", () => {
  modalCont.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  modalCont.classList.remove("open");
});

letsTalk.addEventListener("click", () => {
  modalCont.classList.add("open");
});

conversation.addEventListener("click", () => {
  modalCont.classList.add("open");
});

