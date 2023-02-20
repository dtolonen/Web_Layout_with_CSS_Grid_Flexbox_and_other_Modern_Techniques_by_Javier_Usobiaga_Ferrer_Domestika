document.querySelectorAll(".explorer_card").forEach(function(element) {
  element.addEventListener("click", function() {
    this.classList.toggle("discover");
  });
});


/*FOR TRANSPARENT NAV, WHICH I COULDN'T GET TO WORK*/
var header = basicScroll.create({
  elem: document.querySelector(".header"),
  from: "top-top",
  to: "bottom-top",
  props: {
    "--opacity-nav": {
      from: 0,
      to: 1,
    },
    "--header-pos": {
      from: "0",
      to: "60vh",
    },
  },
});




var blockquote = basicScroll.create({
  elem: document.querySelector('.blockquote'),
  from: 'top-bottom',
  to: 'bottom-left',
  props: {
    '--blockquote': {
      from: '50%',
      to: '0'
    },
    '--blockquote-opacity': {
      from: 0,
      to: 1
    }
  }
});


var scrolling_image = basicScroll.create({
  elem: document.querySelector('.scrolling_image'),
  from: 'top-bottom',
  to: 'bottom-top',
  props: {
    '--scrolling_image': {
      from: '0',
      to: '-50%'
    }
  }
});


blockquote.start();
header.start();
scrolling_image.start();