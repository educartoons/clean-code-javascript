function draw(element, config) {
  config.width = config.width || 200;
  config.height = config.height || 200;
  config.margin = config.margin || 28;
  config.padding = config.padding || 14;
  console.log(config);
}

draw(null, { margin: 0, padding: 0 });
