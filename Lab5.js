// 1. Нова реалізація послідовності функцій
function seq(...steps) {
  return function (start) {
    let current = start;

    for (let i = 0; i < steps.length; i++) {
      current = steps[i](current);
    }

    return current;
  };
}

// Приклади:
console.log(
  seq(x => x - 3, x => x * 5)(4)
); // 5

console.log(
  seq(x => x ** 2, x => x + 10)(3)
); // 19

console.log(
  seq(
    x => x / 2,
    x => x + 8,
    x => x * 3,
    x => x - 6
  )(10)
); // 27