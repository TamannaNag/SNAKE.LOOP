

const input = require("readline-sync");
let n = input.questionInt("Enter the number: ");
let c = "" ;


for (let i = 1; i <= n; i++) {
    let b = "";
    for (let j = 0; j < n; j++) {
        if (i % 2 !== 0) {
            b += (i - 1) * n + j + 1 + "";
        } else {
            b += (i - 1) * n + n - j + "";
        }
    }
    c += b + "\n";
}


console.log(c);
