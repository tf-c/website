(function () {
  var track = document.getElementById("album-track");
  var prevBtn = document.getElementById("album-prev");
  var nextBtn = document.getElementById("album-next");
  var counter = document.getElementById("album-counter");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (!track || !prevBtn || !nextBtn || !counter) return;

  var slides = track.querySelectorAll(".album__slide");
  var total = slides.length;
  var current = 0;

  function show(index) {
    current = ((index % total) + total) % total;
    slides.forEach(function (slide, i) {
      slide.classList.toggle("is-active", i === current);
    });
    counter.textContent = current + 1 + " / " + total;
  }

  prevBtn.addEventListener("click", function () {
    show(current - 1);
  });

  nextBtn.addEventListener("click", function () {
    show(current + 1);
  });

  var album = track.closest(".album");
  if (album) {
    album.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        show(current - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        show(current + 1);
      }
    });
  }

  show(0);
})();
