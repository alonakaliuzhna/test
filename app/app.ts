class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(this.name + " moved " + distanceInMeters + " m.");
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom = new Horse("Tommy the Palomino");

console.log(sam.move());
console.log(tom.move(3));

// let giveFruit = (fruit: { name: string }) =>
//   console.log("Give to me " + fruit.name);

// let myFruits = { name: "Banana", sweetness: 7, bones: false };
// console.log(giveFruit(myFruits));

// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }

// function getCounter(): Counter {
//   let counter = function (start: number) {} as Counter;
//   counter.interval = 123;
//   counter.reset = function () {};
//   return counter;
// }

// let c = getCounter();
// console.log(c(10));
// console.log(c.reset());
// console.log((c.interval = 5.0));
