const nameInfo = prompt("Enter your name");
const weight = prompt("Enter your weight");
const height = prompt("Enter your height(m)");
const bmr = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
console.log(bmr);
if (bmr < 18.5) {
    console.log(nameInfo, "You are UNDERWEIGHT")
}
else if (bmr > 18.5 && bmr < 24.9) {
    console.log(nameInfo, "You are NORMAL")
}
else if (bmr > 25 && bmr < 29.9) {
    console.log(nameInfo, "You are OVERWEIGHT")
}
else if (bmr > 30 && bmr < 34.9) {
    console.log(nameInfo, "You are OBESE")
}
else {
    console.log(nameInfo, "You are EXTREMELY OBESE")
}