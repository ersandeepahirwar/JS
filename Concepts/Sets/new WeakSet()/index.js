const fruits = new WeakSet();

const apple = { name: "Apple", price: 70 };
fruits.add(apple);

console.log(fruits.has(apple));
