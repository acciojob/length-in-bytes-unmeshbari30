const byteSize = (str) => {
	var encoder = new TextEncoder();
	var encodedString = encoder.encode(str);
	// console.log(encodedString)
	return encodedString.length
	
  // write your code here
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
