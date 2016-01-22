function signIn()
{
var request = createCORSRequest( "post", "http://socialworker.tekticks.co.in" );
if(request)
	{
		
var mobileNo = document.getElementById('mobileNo').value;
var mobileNoValidate = validatePhone(mobileNo);
		if(mobileNoValidate)
		{
			$("#mobileError").hide();
		}
		else
		{
			$("#mobileError").fadeIn();
		}
var password = document.getElementById('password').value;
var passwordValidate = validatePassword(password);
		if(passwordValidate)
		{
			$("#passwordError").hide();
		}
		else
		{
			$("#passwordError").fadeIn();
		}
		if(mobileNoValidate && passwordValidate)
		{
		var data = {"signIn":[{"mobileNo":mobileNo,"password":password}]};
			var sendData = function(data)
			{   
				$.ajax
				({
				url: 'http://socialworker.tekticks.co.in/json/signInJson.php',
				type: 'POST',
				contentType: 'application/json',
				data: JSON.stringify(data),
				dataType: 'json',
				success: function(response)
					{
						if(JSON.stringify(response.status)==200)
						{
							$("#mobileError").hide();
						
							$("#visitorId").val(JSON.stringify(response.visitor.visitorId).replace(/"/g,""));
							/* $("#otp").text(JSON.stringify(response.visitor.OTP).replace(/"/g,"")); */
							/* alert(JSON.stringify(response.statusMessage).replace(/"/g,""));  */
							redirect("");
							
						}
						else if(JSON.stringify(response.status)==202)
						{
							$("#mobileError").text(JSON.stringify(response.statusMessage).replace(/"/g,""));
							$("#mobileError").fadeIn();
							console.log(JSON.stringify(response.statusMessage));
						}
						/* else if(JSON.stringify(response.status)==203)
						{
							$("#emailError").text(JSON.stringify(response.statusMessage).replace(/"/g,""));
							$("#emailError").fadeIn();
							console.log(JSON.stringify(response.statusMessage));
						} */
			
					},
					error: function(xhr, textStatus, error)
					{
						console.log(xhr.statusText);
						console.log(textStatus);
						console.log(error);
					}
				});
			};
			sendData(data);
		}
	}
		}
		
 function redirect(link) {
               window.location.href='sw_index.html';
            }	
 
	







	