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
  for (let i = 0; i < items.length; i++) {
    items[i].id = 1 + 1;
  }

  let boughtItems = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].bought) {
      boughtItems.push(items[i]);
    }
  }

  let totalCost = 0;
  for (let i = 0; i < boughtItems.length; i++) {
    totalCost += boughtItems[i].price;
  }

  console.log(`Total Cost: ${totalCost}`);
}

prepareData();
