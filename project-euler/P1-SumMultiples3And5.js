sum = 0;

for(var x = 1; x < 1000; x++)
{
	if((x % 3 === 0) || (x % 5 === 0))
	{
		sum+= x;
	}
}

console.log("Sum of all multiples of 3 and 5 below 1000 is " + sum);
