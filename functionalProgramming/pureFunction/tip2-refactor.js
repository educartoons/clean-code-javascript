let readings = {
  coreTemp: 74,
  additionalTemp: 80,
  readingA: 178,
  readingB: 120,
  readingC: -190
};

function adjustingReadings(readings) {
  readings.readingA -= 20;
  readings.readingB += readings.coreTemp / 2;
  return readings;
}

function testReadingA(readingA) {
  return readingA >= 170;
}

console.log("Readings before: ", readings);
let newReadings = adjustingReadings({ ...readings });
console.log(testReadingA(readings.readingA));
console.log("Readings after: ", readings);
console.log("New readings", newReadings);
