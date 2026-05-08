//your JS code here. If required.
   const circles = document.querySelectorAll(".circle");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const progress = document.getElementById("progress");

    let current = 1;

    next.addEventListener("click", () => {
      current++;
      if (current > circles.length) current = circles.length;
      update();
    });

    prev.addEventListener("click", () => {
      current--;
      if (current < 1) current = 1;
      update();
    });

    function update() {
      circles.forEach((circle, index) => {
        if (index < current) {
          circle.classList.add("active");
        } else {
          circle.classList.remove("active");
        }
      });

      progress.style.width = ((current - 1) / (circles.length - 1)) * 100 + "%";

      prev.disabled = current === 1;
      next.disabled = current === circles.length;
    }