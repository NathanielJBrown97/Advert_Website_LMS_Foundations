const hacker1 = "Nathaniel"; 
const hacker2 = "Someone";

document.getElementById("myNameOutput").textContent = "My name is " + hacker1;
document.getElementById("partnerNameOutput").textContent = "My partner's name is " + hacker2;

// If h1 > h2, post h1 is longest name. Otherwise, if h2 is > h1 post h2 longest. Otherwise equal.
let longestNameOutput;
if (hacker1.length > hacker2.length) {
  longestNameOutput = "I have the longest name, it has " + hacker1.length + " characters!";
} else if (hacker2.length > hacker1.length) {
  longestNameOutput = "It seems that my partner has the longest name, it has " + hacker2.length + " characters!";
} else {
  longestNameOutput = "Wow, we both have equally long names, " + hacker1.length + " characters!";
}
document.getElementById("longestNameOutput").textContent = longestNameOutput;

// Output each character in h1 in uppercase with spacing.
let formattedName = "";
for (let i = 0; i < hacker1.length; i++) {
  formattedName += hacker1[i].toUpperCase() + " ";
}
document.getElementById("formattedNameOutput").textContent = formattedName.trim();

// take h2 name length -1, decrement down and post each character. 
let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}
document.getElementById("reverseNameOutput").textContent = reverseName;
