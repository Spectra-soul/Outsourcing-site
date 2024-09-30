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
    const sections = document.querySelectorAll('.section'); 
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('visible'); 
      }, index * 200);
    });
  });
