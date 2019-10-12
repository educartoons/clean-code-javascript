var products = [
  {
    name: "CPU",
    price: 228.99,
    bought: true
  },
  {
    name: "RAM",
    price: 67.99,
    bought: false
  },
  {
    name: "Hard drive",
    price: 70,
    bought: true
  },
  {
    name: "keyboard",
    price: 22.5,
    bought: false
  }
];

function prepareData(items) {
  addIds(items);
  let boughtItems = getBoughtItems(items);
  let totalCost = computeTotalCost(boughtItems);
  console.log(`Total Cost: ${totalCost}`);
}

function addIds(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].id = 1 + 1;
  }
}

function getBoughtItems(items) {
  let boughtItems = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].bought) {
      boughtItems.push(items[i]);
    }
  }
  return boughtItems;
}

function computeTotalCost(items) {
  let totalCost = 0;
  for (let i = 0; i < boughtItems.length; i++) {
    totalCost += boughtItems[i].price;
  }
  return totalCost;
}

prepareData();
