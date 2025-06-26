// Author: Abdelhafidh Mahouel | Date: June 26, 2025

// 1. Full name
let fullName = "Abdelhafidh Mahouel";
console.log(fullName);
document.getElementById("fullName").textContent = fullName;

// 2. Desired annual salary
let desiredSalary = 95000;
console.log(desiredSalary);
document.getElementById("salary").textContent = "$" + desiredSalary;

// 3. Veteran status
let isVeteran = false;
console.log(isVeteran);
document.getElementById("veteranStatus").textContent = isVeteran ? "Veteran" : "Not a Veteran";

// 4. Names of 3 friends
let friends = ["Said", "Nabil", "Myriem"];
console.log(friends);
document.getElementById("friends").textContent = friends.join(", ");

// 5. Desired salaries for 3 friends
let friendSalaries = [75000, 80000, 85000];
console.log(friendSalaries);
document.getElementById("friendSalaries").textContent = "$" + friendSalaries.join(", $");

// 6. Object with friend info
let anotherFriend = {
  firstName: "Aghilas",
  lastName: "Bellache",
  desiredSalary: 84000
};
console.log(anotherFriend);
document.getElementById("friendObject").textContent =
  `${anotherFriend.firstName} ${anotherFriend.lastName}, $${anotherFriend.desiredSalary}`;
