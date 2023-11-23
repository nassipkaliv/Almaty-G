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

document.addEventListener('DOMContentLoaded', function () {
  var startX;
  var startY;

  document.getElementById('myModal').addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
  });

  document.getElementById('myModal').addEventListener('touchmove', function (e) {
      var currentX = e.touches[0].clientX;
      var currentY = e.touches[0].clientY;

      var diffX = startX - currentX;
      var diffY = startY - currentY;

      if (Math.abs(diffY) > Math.abs(diffX)) {
          if (diffY > 0) {
              $('#myModal').modal('hide');
          }
      }
  });
});



if (window.jQuery) {
  $(document).ready(function () {
  
    var myCarousel = new bootstrap.Carousel(document.getElementById('imageCarousel'), {
      interval: false, 
      wrap: false
    });

    $('#myModal').on('shown.bs.modal', function () {
      loadImages();
    });

    function loadImages() {
      $('#imageCarousel .carousel-item.active .lazyload').each(function () {
        var src = $(this).attr('data-src');
        $(this).attr('src', src);
      });
    }


    $('#imageCarousel').on('slid.bs.carousel', function () {
      loadImages();
    });
  });
} else {
  console.error('jQuery is not loaded!');
}
