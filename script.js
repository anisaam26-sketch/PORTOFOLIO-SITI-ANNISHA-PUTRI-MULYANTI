alert("Hi! Welcome to my page 👋");
document.addEventListener("DOMContentLoaded", () => {


  const stack = document.getElementById("photoStack");
  if (stack) {
    stack.addEventListener("click", () => {
      const cards = stack.querySelectorAll(".card");
      stack.appendChild(cards[0]);
    });
  }

  const hero = document.querySelector(".hero");
  const picker = document.getElementById("colorPicker");
  const wrapper = document.querySelector(".color-picker-wrapper");

  if (picker && hero) {
    picker.addEventListener("input", (e) => {
      hero.style.background = e.target.value;
    });
  }

  if (wrapper && hero) {
    const observer = new IntersectionObserver(
      ([entry]) => wrapper.classList.toggle("show", entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(hero);
  }

  /* Typing About Me */
  const typingTarget = document.getElementById("typingAbout");
  const aboutText = "I am a first year Informatics Engineering student passionate in Front End Development. I enjoy creating clean and interactive websites and I am open to opportunities to grow.";

  if (typingTarget) {
    let i = 0;
    const type = () => {
      if (i < aboutText.length) {
        typingTarget.textContent += aboutText.charAt(i);
        i++;
        setTimeout(type, 35);
      }
    };
    type();
  }
});


document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(s => s.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
