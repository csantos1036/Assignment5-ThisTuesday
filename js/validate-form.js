function validate() {

	// Validate First Name length
	if (document.myForm.FirstName.value.length <= 1) 
	{
		alert( "First Name does not meet minimum character requirement!" );
		document.myForm.FirstName.focus() ;
		return false;
	}

	// Validate Last Name length
	if (document.myForm.LastName.value.length <= 1) 
	{
		alert( "Last Name does not meet minimum character requirement!" );
		document.myForm.LastName.focus() ;
		return false;
	}

	// Validate Address length
	if(document.myForm.Address.value.length <= 1) 
	{
		alert( "Address does not meet minimum character requirement!" );
		document.myForm.Address.focus() ;
		return false;
	}

	// Validate City length
	if(document.myForm.City.value.length <= 1) 
	{
		alert( "City does not meet minimum character requirement!" );
		document.myForm.City.focus() ;
		return false;
	}

	// Validate State length
	if( document.myForm.State.value == "-1" ) 
	{
		alert( "Please provide your State!" );
		document.myForm.State.focus() ;
		return false;
	}

	// Validate Zipcode is 5 digits
	if( document.myForm.ZipCode.value == "" || 
		isNaN( document.myForm.ZipCode.value ) ||
		document.myForm.ZipCode.value.length != 5 ) {
		alert( "Please provide a zip in the format #####." );
		document.myForm.ZipCode.focus() ;
		return false;
	}

	// Validate Phone Number is 10 digits
	if( document.myForm.PhoneNumber.value == "" || 
		isNaN( document.myForm.PhoneNumber.value ) ||
		document.myForm.PhoneNumber.value.length != 10 ) {
		alert( "Please provide a 10 digit phone number ##########" );
		document.myForm.PhoneNumber.focus() ;
		return false;
	}

	// Validate either Personal or Business is selected
	if( document.myForm.NumberType.value != "Personal" && 
		document.myForm.NumberType.value != "Business" ) {
		alert( "Please select phone number type!" );
		document.myForm.NumberType.focus() ;
		return false;
	} 
		
	// Validate Email length
	if( document.myForm.Email.value.length <= 1 ) 
	{
		alert( "Email does not meet minimum character requirement!" );
		document.myForm.Email.focus() ;
		return false;
	}			  	  
		return( true );
}
	
// Validate Email is the correct format
function validateEmail() 
{
	var emailID = document.myForm.Email.value;
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");

	if (atpos < 1 || ( dotpos - atpos < 2 )) 
	{
		alert("Please enter correct email ID")
		document.myForm.Email.focus() ;
		return false;
	}

	return( true );
}		  
