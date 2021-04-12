new hoverEffect({
  parent: document.querySelector(".distortion"),
  intensity: 0.2,
  image1: "./img1.jpg",
  image2: "./img2.jpg",
  angle: Math.PI / 5,
  displacementImage: "./dis.png",
  speedIn: 2,
  speedOut: 4,
  easing: Expo.easeOut,
});
