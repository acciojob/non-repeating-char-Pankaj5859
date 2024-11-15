function firstNonRepeatedChar(str) {
 // Write your code here
	let freqObj = {}

	for(let i = 0; i < str.length; i++)
		{
			if(!freqObj[str.charAt(i)])
			{
				freqObj[str.charAt(i)] = 1
			}
			else
			{
				freqObj[str.charAt(i)] = freqObj[str.charAt(i)] + 1
			}
		}

		for(let char of str){
		if (freqObj[char] === 1) {
			return char;
		}
	}
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input));