const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const background = document.querySelector(".background-cover");

  //Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    var toggleOff = false;
    //Animate links
    navLinks.forEach((link, index) => {
      //adds delay for each link
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
      // console.log(index / 5 + 0.2)
    });
    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

const app = () => {
  // invoke function
  navSlide();
};

app();
