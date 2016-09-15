$(document).ready(function() {

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

let contactList = [];

//simply just checking to see if the user input anything into the textfield if they did then call the save function which will push the 
//input into the array if not all the data in the field will be cleared and an alert will pop up

function validate(contact) {

    for(let prop in contact) {

        if(!contact[prop].length || contact['phone'].length > 10) {
            
            return alert('fail');
        } 
    }
    
    save(contact);
}

function save(contact) {	

	//this pushes the contact info into the array

	contactList.push(contact);

	//This display the first name of the contact we entered as a link and using only the users first name

 	$('#contactLink').append('<li><a>' + contact.first + '</a></li>');

 	//Click function that will fire off when the user clicks on a link

 	$('#contactLink').on('click', 'a', function(event) {

 		event.preventDefault();
 		 
 		 //Loops through the length of all the objects of the array 

 		 for(var i = 0; i < contactList.length; i++){

			let contact = contactList[i];
			console.log(contact);

			//if the link that we click on has the same name as the object in the contacts list array then display that information 
			//this will loop through the array of objects everytime that link is cliked and if the link that was clicked is equal to
			//the first name value key at that particular index then it will display all the information 

			if(contact.first == $(this).text()) {
				
				$('#contact-display').empty();

			 	$('#contact-header').text(contact.first + " " + contact.last);

			  	$('#contact-display').append('<li>' + "First Name: " + contact.first);

			 	$('#contact-display').append('<li>' + "Last Name: " + contact.last);

				$('#contact-display').append('<li>' + "Phone Number: " + contact.phone);

			 	$('#contact-display').append('<li>' + "Address: " + '<br>' + contact.street + " " + contact.city + " " + contact.state);

			}
		}

 	});
}


});