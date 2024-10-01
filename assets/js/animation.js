// Wrap every letter in a span
var textWrapper = document.querySelector('.animated-title');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.animated-title .letter',
    translateY: [-100,0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: '.animated-title',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: false,
  });
