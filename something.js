let newOutputDiv = document.getElementById("newOutput")
let i = 1,
    n = 5;

//while loop from i=1 to 5 
while (i <= n) {
    newOutputDiv.innerHTML = newOutputDiv.innerHTML + i;
    i = i + 1; //i==;
    i += 1;
}