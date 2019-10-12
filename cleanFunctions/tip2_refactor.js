function draw(element, config) {
  element.style.width = config.width;
  element.style.height = config.height;
  element.style.backgroundColor = config.backgroundColor;
  element.style.color = config.color;
  // Do something else to draw the shape
  // ...
  // ...
  // ...
  return Element;
}

draw(document.getElementById("id"), {
  width: 240,
  height: 300,
  backgroundColor: "peru",
  color: "green",
  margin: 14
});
