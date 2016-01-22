function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function validatePhone(phone)  
{  
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if(phone == "")
	{
		$("#mobileError").text("Please enter a Mobile Number");
        return false;
	}
	else if(phone.match(phoneno))  
     {  
		return true;
     }  
   else  
     {  
       $("#mobileError").text("Please enter a valid Mobile Number");
       return false;  
     }  
 }

function validatePassword(password)  
{  
	if(password == "")
	{
		$("#passwordError").text("Please enter a Password");
        return false;
	}
   else  
     {  
       return true;  
     }  
 }