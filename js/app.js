document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll("img:not([loading])");
  
  images.forEach(function(image) {
      image.setAttribute("loading", "lazy");
  });
});

const toggleButtons = document.querySelectorAll('.service-more');

toggleButtons.forEach((button) => {
  const targetId = button.getAttribute('data-bs-target');
  const toggleText = button.querySelector('.toggle-text');
  const additionalServices = document.querySelector(targetId);

  additionalServices.addEventListener('show.bs.collapse', function () {
    toggleText.textContent = 'Скрыть';
  });

  additionalServices.addEventListener('hide.bs.collapse', function () {
    toggleText.textContent = 'еще 4 услуги';
  });
});

function changeActive(index) {
  const smallImages = document.querySelectorAll('.img-thumbnail');
  smallImages.forEach((image, i) => {
      if (i === index) {
          image.classList.add('active');
          image.setAttribute('aria-selected', 'true');
      } else {
          image.classList.remove('active');
          image.setAttribute('aria-selected', 'false');
      }
  });
}

$(document).ready(function () {
  var startY;
  var endY;
  var threshold = 50; 

  $('#imageCarousel').on('touchstart', function (e) {
    
    startY = e.originalEvent.touches[0].pageY;
  });

  $('#imageCarousel').on('touchmove', function (e) {
    endY = e.originalEvent.touches[0].pageY;
  });

  $('#imageCarousel').on('touchend', function () {
    
    if (startY - endY > threshold) {
      
      $('#myModal').modal('hide');
    } else if (endY - startY > threshold) {
      
      $('#myModal').modal('hide');
    }
  });
});


const carouselItems = document.querySelectorAll('.carousel-item');
    const svgOverlay = document.createElement('div');
    svgOverlay.classList.add('svg-overlay');
    svgOverlay.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
      <path d="M30.9026 29.2571C30.5121 28.8666 29.8789 28.8666 29.4884 29.2571C29.0979 29.6476 29.0978 30.2808 29.4884 30.6713L30.9026 29.2571ZM36.3644 37.5474C36.7549 37.938 37.3881 37.938 37.7786 37.5475C38.1691 37.1569 38.1691 36.5238 37.7786 36.1332L36.3644 37.5474ZM11.5809 15.5066C11.0286 15.5066 10.5809 15.9543 10.5809 16.5066C10.5809 17.0589 11.0286 17.5066 11.5809 17.5066V15.5066ZM21.8952 17.5066C22.4475 17.5066 22.8952 17.0589 22.8952 16.5066C22.8952 15.9543 22.4475 15.5066 21.8952 15.5066V17.5066ZM15.738 21.6637C15.738 22.216 16.1857 22.6637 16.738 22.6637C17.2903 22.6637 17.738 22.216 17.738 21.6637H15.738ZM17.738 11.3494C17.738 10.7972 17.2903 10.3494 16.738 10.3494C16.1857 10.3494 15.738 10.7972 15.738 11.3494H17.738ZM29.4884 30.6713L36.3644 37.5474L37.7786 36.1332L30.9026 29.2571L29.4884 30.6713ZM11.5809 17.5066H21.8952V15.5066H11.5809V17.5066ZM17.738 21.6637V11.3494H15.738V21.6637H17.738ZM16.738 30.978C8.74568 30.978 2.2666 24.4989 2.2666 16.5066H0.266602C0.266602 25.6035 7.64111 32.978 16.738 32.978V30.978ZM31.2095 16.5066C31.2095 24.4989 24.7304 30.978 16.738 30.978V32.978C25.8349 32.978 33.2095 25.6035 33.2095 16.5066H31.2095ZM16.738 2.03516C24.7304 2.03516 31.2095 8.51424 31.2095 16.5066H33.2095C33.2095 7.40967 25.8349 0.0351562 16.738 0.0351562V2.03516ZM16.738 0.0351562C7.64111 0.0351562 0.266602 7.40967 0.266602 16.5066H2.2666C2.2666 8.51424 8.74568 2.03516 16.738 2.03516V0.0351562Z" fill="white"/>
    </svg>
    `;

    carouselItems.forEach((item, index) => {
      if (index === 0) {
        item.appendChild(svgOverlay);

        item.addEventListener('mouseover', () => {
          svgOverlay.style.display = 'block';
        });

        item.addEventListener('mouseout', () => {
          svgOverlay.style.display = 'none';
        });
      }
    });