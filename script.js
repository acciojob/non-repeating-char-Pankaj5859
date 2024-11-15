function firstNonRepeatedChar(str) {
 // Write your code here
	if(!str)
    {
        return null;
    }

let frObj={}


for (let i=0; i<str.length-1;i++)
{
    
   if (! frObj[str.charAt(i)])
   {
    frObj[str.charAt(i)]=1;
   }

   else
   {
    frObj[str.charAt(i)]= frObj[str.charAt(i)]+1;
   }


}
	for (let item in frObj)
{
    if(frObj[item]==1)
    {
        return item;
    }
	else
	{return null}
     
}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
