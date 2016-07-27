$(document).ready(function(){

$( "button").on('click', function(event) {
	event.preventDefault();

	//Grabs the input from the text fields then calls on the validate function to validate the input
	validate({
		first: $('#first').val(),

		last: $('#last').val(),

		phone: $('#phone').val(),

		street: $('#street').val(),

		city: $('#city').val(),

		state: $('#state').val()

	});
	//This clears out the textfileds onece the user has clicked on the submit button
$( "input[type='text']" ).val("");

 });

//Empty contacts list that will have objects pushed to it 
var contactList = [];

//simply just checking to see if the user input anything into the textfield if they did then call the save function which will push the 
//input into the array if not all the data in the field will be cleared and an alert will pop up
function validate(contact){
	//if valid save else error 
	if(contact.first.length > 0 && contact.last.length > 0 && contact.phone.length > 9 && contact.street.length > 0 && contact.city.length > 0 && contact.state.length > 0){
		
		save(contact);

		console.log(contactList);

	} else{

		alert("try again");
	}
}

function save(contact){	

	//this pushes the contact info into the array 
	contactList.push(contact);

	//This display the first name of the contact we entered as a link and using only the users first name
 	$('#contactLink').append('<li><a>' + contact.first + '</a></li>');

 	//Click function that will fire off when the user clicks on a link
 	$('#contactLink').on('click','a',function(event){
 		event.preventDefault();
 		 
 		 //Loops through the length of all the objects of the array 
 		 for(var i = 0; i < contactList.length; i++){
		
			//if the link that we click on has the same name as the object in the contacts list array then display that information 
			if(contactList[i].first == $(this).text()){
				
				console.log(contactList[i]);
				console.log(contactList[i].first);
				console.log($(this).text());

				$('#contact-display').empty();

			 	$('#contact-header').text(contactList[i].first + " " + contactList[i].last);

			  	$('#contact-display').append('<li>' + "First Name: " + contactList[i].first + '</li>');

			 	$('#contact-display').append('<li>'+"Last Name: " + contactList[i].last + '</li>');

				$('#contact-display').append('<li>' + "Phone Number: " + contactList[i].phone + '</li>');

			 	$('#contact-display').append('<li>' + "Address: " + '<br>' + contactList[i].street +" "+ contactList[i].city +" "+ contactList[i].state + '</li>');
			}
		}

 	});
}


});