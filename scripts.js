TweenLite.defaultEase = Linear.easeNone;

var header = document.querySelector("#app-header");
var bgBack = document.querySelector("#background-back");
var bgFront = document.querySelector("#background-front");
var toolbar = document.querySelector("#small-toolbar");
var largeTitle = document.querySelector("#large-title");
var smallTitle = document.querySelector("#small-title");

var deltaHeight = header.offsetHeight - toolbar.offsetHeight;

var rect1 = smallTitle.getBoundingClientRect();
var rect2 = largeTitle.getBoundingClientRect();

var scale = rect1.height / rect2.height;
var x = rect1.left - rect2.left;
var y = rect1.top - rect2.top;

var headerAnimation = new TimelineLite({ paused: true })
  .to(largeTitle, 1, { scale: scale, x: x, y: deltaHeight + y }, 0)
  .to(header, 1, { y: -deltaHeight }, 0)
  .to(toolbar, 1, { y: deltaHeight }, 0)
  .to(bgBack, 1, { y: deltaHeight / 2 }, 0)
  .to(bgFront, 1, { y: deltaHeight / 2 }, 0);

var progress = 0;
function update() {
  var scroll = window.pageYOffset;
  if (scroll < deltaHeight) {
    progress = scroll / deltaHeight;
  } else {
    progress = 1;
  }
  headerAnimation.progress(progress);
}

window.addEventListener("scroll", update);

// Set up timeline for shrinking the header
const header = document.querySelector("#app-header");
const toolbarSmall = document.querySelector("#small-toolbar");
const toolbarLarge = document.querySelector("#large-toolbar");
const largeTitle = document.querySelector("#large-title");
const deltaHeight = toolbarLarge.offsetHeight - toolbarSmall.offsetHeight;

const shrinkHeaderAnimation = new TimelineLite({ paused: true })
  .to(largeTitle, 1, { scale: 0.5, y: -deltaHeight / 2 }, 0)
  .to(toolbarLarge, 1, { y: -deltaHeight }, 0)
  .to(header, 1, { height: toolbarSmall.offsetHeight }, 0);

// Handle scrolling event
function updateHeaderOnScroll() {
  const scrollY = window.scrollY || window.pageYOffset;
  const progress = Math.min(scrollY / deltaHeight, 1); // Limit progress to [0, 1]
  shrinkHeaderAnimation.progress(progress);
}

// Attach scroll listener
window.addEventListener("scroll", updateHeaderOnScroll);

