function stringChop(str, size) {
  // your code here
	const charCount = {};

	
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

 
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  
  return null;

}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
