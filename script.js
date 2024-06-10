document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();

  // Sidenav
  var sidenavs = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(sidenavs, {
    draggable: true,
  });

  // Hide Cart when Menu Icon is clicked
  var menuIcon = document.querySelector('.menu-img');
  var cartIcon = document.querySelector('.cart-icon');

  menuIcon.addEventListener('click', function() {
    cartIcon.style.display = 'none';
  });

  // Show Cart when clicking outside of sidenav overlay
  document.addEventListener('click', function(event) {
    var sidenavOverlay = document.querySelector('.sidenav-overlay');
    if (event.target === sidenavOverlay) {
      cartIcon.style.display = 'block';
    }
  });

  // Navbar Color Change
  var nav = document.querySelector(".nav-wrapper");

  document.addEventListener("scroll", function() {
    nav.classList.toggle('scrolled', window.scrollY > nav.offsetHeight);
  });

  // Slider
  var fullScreenElems = document.querySelectorAll('.carousel.carousel-slider');
  var instances = M.Carousel.init(fullScreenElems, {
    fullWidth: true,
    indicators: true,
    duration: 800,
  });

  // Auto-start Slider
  var intervalId = setInterval(function() {
    var instance = M.Carousel.getInstance(fullScreenElems[0]);
    instance.next();
  }, 5000); 

  // Pause auto-start when the user interacts with the slider
  fullScreenElems[0].addEventListener('mousedown', function() {
    clearInterval(intervalId);
  });

  // Resume auto-start when the user stops interacting with the slider
  fullScreenElems[0].addEventListener('mouseup', function() {
    intervalId = setInterval(function() {
      var instance = M.Carousel.getInstance(fullScreenElems[0]);
      instance.next();
    }, 5000); 
  });

  // Products Carousel
  var carouselElems = document.querySelectorAll('.carousel.prod-carousel');
  var instances = M.Carousel.init(carouselElems, {
    duration: 400,
    shift: 30,
  });

  // Products Carousel Buttons
  document.getElementById('prevBtn').addEventListener('click', function() {
    var instance = M.Carousel.getInstance(carouselElems[0]);
    instance.prev();
  });

  document.getElementById('nextBtn').addEventListener('click', function() {
    var instance = M.Carousel.getInstance(carouselElems[0]);
    instance.next();
  });

  // Floating Button
  const fixedActionBtn = document.querySelector('.fixed-action-btn');
  if (fixedActionBtn) {
    fixedActionBtn.addEventListener('click', function(event) {
      // Handle the floating action button click
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Transition Products - Center-nav
  var productsLink = document.querySelector('.center-nav li:nth-child(1) a');
  productsLink.addEventListener('click', function(event) {
    event.preventDefault();
    var productSection = document.getElementById('products');
    productSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Transition Products - Order Now Button
  var orderButton = document.getElementById('orderBtn');
  orderButton.addEventListener('click', function(event) {
    event.preventDefault();
    var productSection = document.getElementById('products');
    productSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Transition Hours & Contact
  var hoursContactLink = document.querySelector('.center-nav li:nth-child(4) a');
  hoursContactLink.addEventListener('click', function(event) {
    event.preventDefault();
    var footer = document.getElementById('hours&contact');
    footer.scrollIntoView({ behavior: 'smooth' });
  });
});