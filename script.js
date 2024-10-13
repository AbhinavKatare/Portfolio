document.addEventListener("DOMContentLoaded", () => {
    // Implement smooth scrolling
    const links = document.querySelectorAll(".navbar ul li a");
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    
        document.querySelectorAll('.nav-menu li a').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    });
    
  
    // Animate light blue square when scrolling
    const skillSection = document.querySelector(".skills");
    const square = document.createElement("div");
    square.style.width = "50px";
    square.style.height = "50px";
    square.style.position = "absolute";
    square.style.background = "#057FEC";
    square.style.opacity = "0";
    document.body.appendChild(square);
  
    window.addEventListener("scroll", () => {
      const sectionTop = skillSection.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight) {
        square.style.opacity = "1";
        square.style.transform = `translate(${sectionTop / 5}px, ${sectionTop / 5}px)`;
      }
    });
  });
  
