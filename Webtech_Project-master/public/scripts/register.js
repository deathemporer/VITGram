function formValidation(){
	var fname=document.getElementsByName("fname")[0];
	var lname=document.getElementsByName("lname")[0];
	var uid=document.getElementsByName("username")[0];
	var pswd=document.getElementsByName("pass1")[0];
	var cpswd=document.getElementsByName("cpass")[0];
	if(fnameValid(fname)){
		if (lnameValid(lname)){
			if (uidValid(uid)){
				if(pswdValid(pswd)){
					if(cpswdValid(cpswd)){
						return true;
					}
				}
			}
		}
	}
	return false;
}

function fnameValid(fname){
	var letters = /^[A-Za-z]+$/;
	if(fname.value.match(letters))
	{
		return true;
	}
	else {
		alert('Name must have alphabet characters only');
		fname.focus();
		return false; 
	}
}

function lnameValid(lname){
	var letters = /^[A-Za-z]+$/;
	if(lname.value.match(letters))
	{
		return true;
	}
	else {
		alert('Name must have alphabet characters only');
		lname.focus();
		return false; 
	}
}

function uidValid(uid){
	var user=/^[A-Za-z0-9_-/.@]+$/;
	if(uid.value.match(user))
	{
		return true;
	}
	else{
		alert('Username can contain only uppercase, lowercase letters, numbers and symbols('_','.','-','@').');
		uid.focus();
		return false;
	}
}

function pswdValid(pswd){
	var pswd_len = pswd.value.length;
	if (passid_len == 0 ||passid_len >= 16 || passid_len < 10)
	{
		alert("Password should not be empty / length be between 10 to 15 characters long.");
		passid.focus();
		return false;
	}
	return true;
}

function cpswdValid(cpswd){
	if(cpswd.value===pswd.value){
		return true;
	}
	else{
		alert("Confirm passowrd does not match password.")
	}
}