const testimonialCard = document.querySelectorAll(".testimonial__card");
const colorPalette = [
  "--Moderateviolet",
  "--Verydarkgrayishblue",
  "--White",
  "--Verydarkblackishblue",
  "--White",
];
testimonialCard.forEach((card, index) => {
  card.style.backgroundColor = `var(${colorPalette[index]})`;
});
