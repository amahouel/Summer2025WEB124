// Author: Abdelhafidh Mahouel
// Date: June 12, 2025

// 1. Set name in p1
var myName = "Abdelhafidh Mahouel";
var para1 = document.getElementById("p1");
para1.textContent = myName;

// 2. Add two numbers and display in p2
var n1 = 10;
var n2 = 7;
var numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

// 3. Multiply the numbers and show in p3
var numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

// 4. Add a number to a string and show in p4
var myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

// 5. Multiply a number with a string and show in p5
var myNameMultNum = myName * n1;
document.getElementById("p5").textContent = myNameMultNum;

// 6. Compare age to numberMult and show in p6
var ageCompare = 23 > numberMult;
document.getElementById("p6").textContent = ageCompare;
