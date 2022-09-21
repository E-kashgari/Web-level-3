const carsArray = [
    "toyota",
    "volovo",
    "bmw"
];
for (let i = 0; i < carsArray.length; i++) {
    document.getElementById("arrayDiv").innerHTML += carsArray[i];

}
document.getElementById("arrayDiv").innerHTML += "<br> third item in the array is: " + carsArray[2];
let numArray = [1, 2, 3, 4];
for (let i = 0; i < numArray.length; i++) {
    document.getElementById("arrayDiv").innerHTML += numArray[i];

}
printArray(numArray);
numArra