// exercise 1
function capitalize(str) {
    return str.split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");
}

console.log(capitalize("the quick brown fox"));

// exercise 2
function max(a, b, c) {
    return Math.max(a, b, c);
}

console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));

// exercise 3
function right(str) {
    if (str.length < 3) return str;
    return str.slice(-3) + str.slice(0, str.length - 3);
}

console.log(right("Python"));     // honPyt
console.log(right("JavaScript")); // iptJavaScr
console.log(right("Hi"));         // Hi 

// exercise 4
function angle_Type(angle) {
    if (angle < 90) return "Acute angle";
    if (angle === 90) return "Right angle";
    if (angle < 180) return "Obtuse angle";
    if (angle === 180) return "Straight angle";
}

console.log(angle_Type(47));   // acute
console.log(angle_Type(90));   // right
console.log(angle_Type(145));  // obtuse
console.log(angle_Type(180));  // straight
  
  
// exercise 5
function max_sum(arr, k) {
    let max = 0;
    for (let i = 0; i <= arr.length - k; i++) {
      let sum = 0;
      for (let j = 0; j < k; j++) {
        sum += arr[i + j];
      }
      if (sum > max) max = sum;
    }
    return max;
}

console.log(max_sum([1, 2, 3, 14, 5], 2)); // 19
console.log(max_sum([2, 3, 5, 1, 6], 3));  // 12
console.log(max_sum([9, 3, 5, 1, 7], 2));  // 12