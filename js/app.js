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
  var threshold = 50; // Adjust this value based on your preference for swipe distance to close the modal

  $('#imageCarousel').on('touchstart', function (e) {
    startY = e.originalEvent.touches[0].pageY;
  });

  $('#imageCarousel').on('touchmove', function (e) {
    endY = e.originalEvent.touches[0].pageY;
  });

  $('#imageCarousel').on('touchend', function () {
    var deltaY = endY - startY;

    if (Math.abs(deltaY) > threshold) {
      // Swipe up or down detected
      $('#myModal').modal('hide');
    }
  });
});