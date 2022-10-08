const bg = ["0.jpg", "1.jpg", "2.jpg"];

document.body.style.backgroundImage = `url(img/${bg[Math.floor(Math.random() * bg.length)]})`;
