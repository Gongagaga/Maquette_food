//  // NAVBAR
  
//  function navbar() {
//     var navbar = document.querySelectorAll(".navbar");
  
//     for (var i = 0; i < navbar.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = navbar[i].getBoundingClientRect().top;
//       var elementVisible = 100;
  
//       if (elementTop < windowHeight - elementVisible) {
//         navbar[i].classList.add("active");
//         console.log(elementTop, windowHeight-elementVisible);
//       } else {
//         navbar[i].classList.remove("active");
//       }
//     }
//   }
  
  
//   // ANIMATION 
  
//   window.addEventListener("scroll",navbar);
