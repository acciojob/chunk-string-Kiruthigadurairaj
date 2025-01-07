function stringChop(str, size) {
  // If the string is null or size is not a positive integer, return an empty array
  if (!str || size <= 0) {
    return [];
  }

  // Initialize an array to store the chunks
  const chunks = [];

  // Loop through the string, slicing it into chunks of the specified size
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String:");
const size = parseInt(prompt("Enter Chunk Size:"), 10);
alert(stringChop(str, size));

