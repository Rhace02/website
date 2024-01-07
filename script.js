let currentSlide = 1;

    function changeSlide(offset) {
      const slides = document.querySelectorAll('.slider-image');

      currentSlide += offset;

      if (currentSlide > slides.length) {
        currentSlide = 1;
      } else if (currentSlide < 1) {
        currentSlide = slides.length;
      }

      showSlide(currentSlide);
    }

    function showSlide(slideNumber) {
      const slides = document.querySelectorAll('.slider-image');

      slides.forEach((slide, index) => {
        if (index + 1 === slideNumber) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    }

    window.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        changeSlide(-1);
      } else if (event.key === "ArrowRight") {
        changeSlide(1);
      }
    });
