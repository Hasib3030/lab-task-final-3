function registration()
{
	//alert("Connected");
	var name = document.getElementById('name').value;
	var email = document.getElementById('mail').value;
	var username = document.getElementById('user').value;
	var pass = document.getElementById('password').value;
	var conPass = document.getElementById('conPass').value;
	var gender = document.getElementById('g').checked;
	var day = document.getElementById('day').value;
	var month = document.getElementById('month').value;
	var year = document.getElementById('year').value;
	var date = day+"/"+month+"/"+year;
	
	
	
	if(name == "")
	{
		alert('Empty Name');
	}
	
	if(email == "")
	{
		alert('Empty Email');
	}
	
	if(username == "")
	{
		alert('Empty Username');
	}
	
	/*//Password 
	
	if(pass == "")
	{
		alert('Empty Password');
	}
	/*
	else
	{
		if(pass.length <=3 )
		{
			alert('password contains at least 3 char');
		}
		if(pass != conPass)
		{
			alert('Pass does not match');
		}
	}
	
	
	///Date 
	if(date == "")
	{
		alert('Enter DOB');
	}
	/*
	else
	{
		if(day > 1 && day <= 31)
		{
			alert('valid Date');
			if(month >= 1 && month <=12)
			{
				alert('Valid Month');
				if(year >= 1900 && year <= 2020)
				{
					alert('Valid Year');
				}
				else
				{
					alert('Invalid Year');
				}
			}
			else
			{
				alert('Invalid Month');
			}
		}
		else
		{
			alert('Invalid Date');
			
		}
		
	}
	*/
	
}