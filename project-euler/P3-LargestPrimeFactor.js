var MaxMultPrime = function(value)
{
	for(var x=2; x < value; x++)
	{
		if(value % x === 0)
		{
			console.log(value + " is multiple of " + x)
			return MaxMultPrime(value / x);
		}
	}
	console.log(value + " is prime.");
	return value;
}

console.log("Project Euler 3 solution: " + MaxMultPrime(600851475143));

