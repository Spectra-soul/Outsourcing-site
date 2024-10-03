// Hr Line transition
document.addEventListener('DOMContentLoaded', function() {
    const hrElement1 = document.getElementById('short');
    const hrElement2 = document.getElementById('shorts');
    setTimeout(() => {
        hrElement1.classList.add('open');
        hrElement2.classList.add('open');
    }, 100); 
});


 // Function to apply visibility on scroll
 function observeElements() {
    const elementsToObserve = document.querySelectorAll('.banner-content, .global-banner-content');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); 
        } else {
          entry.target.classList.remove('visible'); 
        }
      });
    }, {
      threshold: 0.5 
    });
  
    elementsToObserve.forEach(element => {
      observer.observe(element);
    });
  }
  document.addEventListener('DOMContentLoaded', observeElements);



  // Function to add the 'visible' class to all sections after the page has loaded
  window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.sections'); 
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('visible'); 
      }, index * 200);
    });
  });



  // Global section  transitions
  const sec = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); 
          }
      });
      }, {
      threshold: 0.5 
      });

      sec.forEach(sections => {
      observer.observe(sections);
  });

  const smallsec = document.querySelectorAll('.small-section');
  const observe = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); 
          }
      });
      }, {
      threshold: 0.5 
      });

      smallsec.forEach(smallsections => {
      observe.observe(smallsections);
  });



  // Scroll to top
  const moveToTopBtn = document.getElementById("scroll-top");
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            moveToTopBtn.style.display = "block";
        } else {
            moveToTopBtn.style.display = "none";
        }
    };
    moveToTopBtn.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };