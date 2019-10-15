"use strict";

const config = {
  fbApiKey: "asdajdajdjajdaj",
  googleApiKey: "asdhds09d8f7shdashdjflwudnx",
  linkedInApiKey: "ofjqueyfnzmbfprunabfkeo"
};

Object.freeze(config);

console.log(config);

config.googleApiKey = "";

console.log(config);
