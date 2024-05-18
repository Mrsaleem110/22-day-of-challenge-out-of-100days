// *Question 65:* Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.

// *Explain & TIP:* The % (modulus) operator finds what's left after one number is divided by another. It's handy for figuring out if numbers are even, odd, and more.

// This function finds the leftover of dividing two numbers
function remainder(num1: number, num2: number): number {
    // Gives back the leftover of num1 divided by num2
    return num1 % num2;
}

// when we divide 8 with 5 then remain will be 3 , bcz 5 * 1 = 5 ,remain 3
console.log(remainder(8, 5));