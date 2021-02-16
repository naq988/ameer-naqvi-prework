const firstName = prompt("Please enter your first name");
const charLim = 4;
if (firstName.length > charLim) {
  alert("Your name is greater than 4 characters long");
} 
else if (firstName.length < charLim)
{
  alert("Your name is less than 4 characters long");
} 
else {
  alert("Your name is exactly 4 characters long");
}