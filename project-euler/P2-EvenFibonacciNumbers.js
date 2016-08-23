var previous1 = 1;
var previous2 = 1;
var sum = 0;
var current = 0;

while(current < 4000000)
{
	current = previous1 + previous2;
	if(current % 2 === 0)
	{
		sum += current;
	}
	previous2 = previous1;
	previous1 = current;
}

console.log("Sum of even numbers of fibonacci until 4000000 is " + sum);
