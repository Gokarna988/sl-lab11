
		function backspace(calc) {
			size = calc.display.value.length;
			calc.display.value = calc.display.value.substring(0, size-1);
		}


		function calculate(calc)
		{
			if(calc.display.value.includes("!"))
			{
				size = calc.display.value.length;
				n = Number(calc.display.value.substring(0, size-1));
				f = 1;
				for(i = 2; i <= n; i++)
				{
					f = f*i;
				}
				calc.display.value = f;
			}
			else if(calc.display.value.includes("^"))
			{
				var pos = calc.display.value.indexOf("^");
				var n1 = Number(calc.display.value.substring(0,pos));
				var n2 = Number(calc.display.value.substring(pos+1));
				var ans = Math.pow(n1,n2);
				calc.display.value = ans.toString();
			}
			else
			{
				calc.display.value = eval(calc.display.value);
			}
		}
		function test_prime(calc)
		{
			var k = 1;
			var n = Number(calc.display.value);
			if (n===1)
		  {
		   	k = 0;
		  }
		  else if(n === 2)
		  {
		   	k = 1;
		  }
		  else
		  {
		   	for(var x = 2; x < n; x++)
		   	{
		     	if(n % x === 0)
		   		{
		     		k = 0;
		     		break;
		   		}
		   	}
		  }
		  if(k===1)
			{
				calc.display.value = 'PRIME';
		  }
		  else
			{
		   	calc.display.value = 'NON PRIME';
		  }
		}
