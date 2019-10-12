function getSensorAData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        min: 8,
        max: 118
      });
    }, 2000);
  });
}

function getSensorBData(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        temp: 78,
        value: 26
      });
    }, 500);
  });
}

function getSensorCData(cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        min: 14,
        max: 82,
        temp: 64,
        value: 12
      });
    }, 2000);
  });
}

// It's called  callback hell
function combineSensorData() {
  Promise.all(getSensorAData(), getSensorBData(), getSensorCData()).then(
    results => {
      let sensorAData = results[0];
      let sensorBData = results[1];
      let sensorCData = results[2];
    }
  );
}
