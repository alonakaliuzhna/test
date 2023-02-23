// function add(a: number, b: number) {
//   return a - b;
// }
// let result = add(2, 2);
// console.log(result);
// определение функции
// let add = (a: number, b: number): void => {
//   let result = a + b;
//   console.log(result);
// };
// // вызов функции
// add(20, 30); // 50
// add(10, 15); //25
// let add1 = (a: number, b: number) => {
//   let result = a + b;
//   console.log(result);
// };
// // вызов функции
// add1(20, 30); // 50
// add1(10, 15); //25
// let koef: number = 1.5;
// let add2 = (a: number): void => {
//   let result = a * koef;
//   console.log(result);
// };
// add2(20); // 30
// add2(10); //15
// class User {
//   name: string;
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(this.name);
//   }
// }
// // Использование:
// let user = new User("Иван");
// user.sayHi();
var User = /** @class */ (function () {
    function User(thename) {
        // вызывает сеттер
        this.name = thename;
    }
    Object.defineProperty(User.prototype, "thename", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value.length < 4) {
                alert("Имя слишком короткое.");
                return;
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User("Иван");
console.log(user.name); // Иван
user = new User(""); // Имя слишком короткое.
