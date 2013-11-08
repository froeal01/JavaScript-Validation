$(document).ready(function() {
 	var testPassing = true
 	$("#validate_sign_in").submit(function(event){
 		event.preventDefault();
 		var email = $("#email_sign_up").val();
 		validateEmail(email);
 		var password = $("#password_sign_up").val();
 		validatePassword(password);
 		if (testPassing == true)
 		{
 		$.post('/sign_up',{email: email, password: password});
 		{
 	
			}
 		}
		});
	});


function validateEmail(emailaddress){  
   var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;  
   if(!emailReg.test(emailaddress)) {  
        $("#email_errors").text("Please enter valid email id");
        testpassing = false
   }       
}


function validatePassword(password){
	var passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
	if(!passReg.test(password)) {
		$("#password_errors").text("Password is invalid");
			testpassing = false
	}
}