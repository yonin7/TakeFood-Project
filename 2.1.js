const sumOfLowestNumbers = (arr) => {
  let sum = 0;
  let num1 = 100000000;
  let indexOfMin = null;
  let num2 = 100000000;
  for (let i = 0; i != arr.length; i++) {
    if (arr[i] < num1) {
      num1 = arr[i];
      indexOfMin = i;
    }
  }
  for (let i = 0; i != arr.length; i++) {
    if (arr[i] < num2 && i != indexOfMin) num2 = arr[i];
  }
  sum = num1 + num2;
  return sum;
};

array = [19, 5, 42, 2, 77];
console.log(sumOfLowestNumbers(array));
