document.addEventListener("DOMContentLoaded", function () {
  new Splide("#news-slider", {
    type: "loop",
    perPage: 3,
    autoplay: true,
    interval: 3000,
    gap: "1rem",
    breakpoints: {
      768: {
        perPage: 1,
      },
      1024: {
        perPage: 2,
      },
    },
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#new-slider", {
    type: "loop",
    perPage: 3,
    autoplay: true,
    interval: 3000,
    gap: "1rem",
    breakpoints: {
      768: {
        perPage: 1,
      },
      1024: {
        perPage: 2,
      },
    },
  }).mount();
});
