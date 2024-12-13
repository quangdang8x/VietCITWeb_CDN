(function () {
  // Hiệu ứng tuyết rơi
  function snowEffect() {
    const numFlakes = 50;
    const snowFlakes = [];

    const createSnowFlake = () => {
      const snowFlake = document.createElement("div");
      snowFlake.innerText = "❄";
      snowFlake.style.position = "fixed";
      snowFlake.style.top = Math.random() * window.innerHeight + "px";
      snowFlake.style.left = Math.random() * window.innerWidth + "px";
      snowFlake.style.fontSize = Math.random() * 20 + 10 + "px";
      snowFlake.style.color = "white";
      snowFlake.style.opacity = Math.random();
      snowFlake.style.zIndex = "9999";
      snowFlake.style.pointerEvents = "none";
      document.body.appendChild(snowFlake);

      snowFlakes.push({
        el: snowFlake,
        speed: Math.random() * 2 + 1,
        rotation: Math.random() * 2 - 1,
      });
    };

    const animateSnowFlakes = () => {
      snowFlakes.forEach(flake => {
        const rect = flake.el.getBoundingClientRect();
        if (rect.top >= window.innerHeight || rect.left >= window.innerWidth) {
          flake.el.style.top = -10 + "px";
          flake.el.style.left = Math.random() * window.innerWidth + "px";
        } else {
          flake.el.style.top = rect.top + flake.speed + "px";
          flake.el.style.left = rect.left + flake.rotation + "px";
        }
      });
      requestAnimationFrame(animateSnowFlakes);
    };

    for (let i = 0; i < numFlakes; i++) {
      createSnowFlake();
    }
    animateSnowFlakes();
  }

  // Hiệu ứng ông già Noel cưỡi tuần lộc
  function santaEffect() {
    const santa = document.createElement("img");
    santa.id = "santa";
    santa.src = "https://quangdang8x.github.io/VietCITWeb_CDN/img/ogianoel.png";
    santa.alt = "Santa Claus";
    santa.style.position = "fixed";
    santa.style.top = "30%";
    santa.style.left = "-300px";
    santa.style.width = "300px";
    santa.style.zIndex = "1000";
    santa.style.transition = "transform 0.5s ease-in-out";
    santa.style.animation = "moveSleigh 10s linear infinite";
    document.body.appendChild(santa);

    const style = document.createElement("style");
    style.textContent = `
      @keyframes moveSleigh {
        0% { left: -300px; transform: translateX(0) scale(1); }
        50% { top: 20%; transform: translateX(50vw) scale(1.1); }
        100% { left: 100vw; transform: translateX(0) scale(1); }
      }
    `;
    document.head.appendChild(style);

    santa.addEventListener("animationiteration", () => {
      santa.style.animationDuration = `${Math.random() * 5 + 7}s`;
    });
  }

  // Khởi động các hiệu ứng
  window.startPWAEffects = function (options = {}) {
    if (options.snow) snowEffect();
    if (options.santa) santaEffect();
  };
})();
