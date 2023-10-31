document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll("img:not([loading])");
  
  images.forEach(function(image) {
      image.setAttribute("loading", "lazy");
  });
});

$('#myCarousel').on('slide.bs.carousel', function (e) {
  var items = e.relatedTarget.getElementsByClassName("img-thumbnail");
  for (var i = 0; i < items.length; i++) {
      items[i].style.opacity = "0.5";
  }
  items[1].style.opacity = "1";
});