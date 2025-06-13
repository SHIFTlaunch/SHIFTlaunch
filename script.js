// Scroll Animations
const fadeUps = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
}
});
}, { threshold: 0.3 });

fadeUps.forEach(el => observer.observe(el));

// Lazy Load Embeds
document.addEventListener("DOMContentLoaded", function () {
const iframes = document.querySelectorAll('iframe');
iframes.forEach(iframe => {
if (iframe.dataset.src) {
iframe.src = iframe.dataset.src;
}
});
});

// SVG Path Animation
const path = document.querySelector('path');
const circle = document.getElementById('progress-circle');
if (path && circle) {
const length = path.getTotalLength();
let drawn = 0;
function animatePath() {
if (drawn < length) {
drawn += 5;
const point = path.getPointAtLength(drawn);
circle.setAttribute('cx', point.x);
circle.setAttribute('cy', point.y);
requestAnimationFrame(animatePath);
}
}
requestAnimationFrame(animatePath);
}
