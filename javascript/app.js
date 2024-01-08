document.getElementById("navbar").addEventListener("click", navfunction);

function navfunction() {
  document.getElementById("line1").classList.toggle("cross");
  document.getElementById("line2").classList.toggle("cross");
  document.getElementById("line3").classList.toggle("cross");
  document.getElementById("nav-link").classList.toggle("cross");
  document.getElementById("menubar").classList.toggle("cross");
}

//shuttle space icon

function scrollfunc() {
  var scrollvalue = window.scrollY;
  //   console.log(window.scrollY);
  if (scrollvalue >= 40) {
    document.getElementById("navbar").classList.add("nav-scroll");
  } else {
    document.getElementById("navbar").classList.remove("nav-scroll");
  }

  if (scrollvalue >= 130) {
    document.getElementById("rocket-icon").classList.add("rocket-icon");
    document.getElementById("rocket-icon").classList.remove("rk-icon");
  } else {
    document.getElementById("rocket-icon").classList.add("rk-icon");
  }
}

window.addEventListener("scroll", scrollfunc);

document.addEventListener("DOMContentLoaded", function () {
  var rk_icon = document.getElementById("rocket-icon");
  var shuttlespace = document.getElementById("shuttle-space");

  rk_icon.addEventListener("mouseenter", function (e) {
    shuttlespace.classList.add("fa-shake");
  });
  rk_icon.addEventListener("mouseleave", function () {
    shuttlespace.classList.remove("fa-shake");
  });
});

// link-active
function navcolor() {
  let firstpg = document.getElementById("firstpg");
  let secondpg = document.getElementById("secondpg");
  let thirdpg = document.getElementById("thirdpg");
  let fourthpg = document.getElementById("fourthpg");
  let fifthpg = document.getElementById("fifthpg");
  let scrollval = window.scrollY;
  // console.log(scrollval);

  if (scrollval < 156) {
    firstpg.classList.add("link-color");
    secondpg.classList.remove("link-color");
    thirdpg.classList.remove("link-color");
    fourthpg.classList.remove("link-color");
  } else if (scrollval >= 156 && scrollval <= 1094) {
    secondpg.classList.add("link-color");
    firstpg.classList.remove("link-color");
    thirdpg.classList.remove("link-color");
    fourthpg.classList.remove("link-color");
    fifthpg.classList.remove("link-color");
  } else if (scrollval > 1094 && scrollval <= 1900) {
    thirdpg.classList.add("link-color");
    secondpg.classList.remove("link-color");
    fourthpg.classList.remove("link-color");
    fifthpg.classList.remove("link-color");
    firstpg.classList.remove("link-color");
  } else if (scrollval > 1900 && scrollval <= 2766) {
    thirdpg.classList.remove("link-color");
    secondpg.classList.remove("link-color");
    fourthpg.classList.add("link-color");
    fifthpg.classList.remove("link-color");
    firstpg.classList.remove("link-color");
  } else {
    fifthpg.classList.add("link-color");
    fourthpg.classList.remove("link-color");
    thirdpg.classList.remove("link-color");
    secondpg.classList.remove("link-color");
    firstpg.classList.remove("link-color");
  }
}

window.addEventListener("scroll", navcolor);

//slideshow

let slideIndex = 1;

showsSlides(slideIndex);

function plusSlides(n) {
  showsSlides((slideIndex += n));
}

function currentSlide(n) {
  showsSlides((slideIndex = n));
}

function showsSlides(n) {
  let slides = document.querySelectorAll(".mySlides");
  let slideArr = Array.from(slides);

  let thumbImg = document.querySelectorAll(".thumbImg");
  let thumbArr = Array.from(thumbImg);

  let indexNum = document.querySelectorAll(".indexNum");
  let indexNumArr = Array.from(indexNum);

  let dots = document.querySelectorAll(".dots");
  let dotsArr = Array.from(dots);

  let caption = document.querySelector("#caption");

  if (n < 1) {
    slideIndex = slideArr.length;
  }
  if (n > slideArr.length) {
    slideIndex = 1;
  }

  slideArr.map((slideitems) => {
    slideitems.style.display = "none";
  });

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("slide-anim");

  thumbArr.map((thumbItems) => {
    thumbItems.className = thumbItems.className.replace(" active", "");
  });
  thumbArr[slideIndex - 1].className += " active";

  caption.innerHTML = thumbArr[slideIndex - 1].alt;

  indexNumArr.map((indexnumItems) => {
    indexnumItems.textContent = slideIndex;
  });

  dotsArr.map((dotItems) => {
    dotItems.className = dotItems.className.replace(" active", "");
  });
  dotsArr[slideIndex - 1].className += " active";
}

document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    plusSlides(1);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    plusSlides(-1);
  }
});

setInterval(() => {
  plusSlides(1);
}, 2500);
