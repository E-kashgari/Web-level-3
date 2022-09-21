let resultDiv = document.getElementById("outputResult");

let n = 10,
    sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
    if (i < n) {
        resultDiv.innerHTML += i + " + ";
    } else {
        resultDiv.innerHTML += i;
    }
}

resultDiv.innerHTML += " = " + sum;