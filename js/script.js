$(document).ready(function(){

$( "button").on('click', function() {
	event.preventDefault();

	validate({
		first: $('#first').val(),
		last: $('#last').val(),
		phone: $('#phone').val(),
		street: $('#street').val(),
		city: $('#city').val(),
		state: $('#state').val()
	});


 });

var contactList = [];
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
	contactList.push(contact);

	$('ul').empty();

 	$('#contact-header').text(contact.first + " " + contact.last);

  	$('#contact-display').append('<li>' + "First Name: " + contact.first + '</li>');
 	$('#contact-display').append('<li>'+"Last Name: " + contact.last + '</li>');
	$('#contact-display').append('<li>' + "Phone Number: " + contact.phone + '</li>');

 	$('#contact-display').append('<li>' + "Address: " + '<br>' + contact.street + contact.city + contact.state + '</li>');	

 	console.log(contact);
 	console.log(contact.length);

 	for(var i = 0; i < contactList.length; i++){
		
		$('#contactLink').append('<li><a>' + contactList[i].first + '</a></li>');
			
			console.log(contactList[i]);

	}

}



















// var contactsList = [];

// var contactInfo = {};//

// // function contactInfo(first, last, phone, street,city,state) {
// //     this.first = first;
// //     this.last = last;
// //     this.phone = phone;
// //     this.street = street;
// //     this.city = city;
// //     this.state = state;
// // }



//  function addInfo(){

// 		contactInfo.first = $('#first').val(),
// 		contactInfo.last = $('#last').val(),
// 		contactInfo.phoneNumber = $('#phone').val(),
// 		contactInfo.street = $('#street').val(),
// 		contactInfo.city = $('#city').val(),
// 		contactInfo.state = $('#state').val()

//  	return contactInfo;
//  }

// function dispaly(){

// 	$('ul').empty();

// 	$('#contact-header').text(contactInfo.first + " " + contactInfo.last)

// 	$('#contact-display').append('<li>' + "First Name: " + contactInfo.first + '</li>');
// 	$('#contact-display').append('<li>'+"Last Name: " + contactInfo.last + '</li>');
// 	$('#contact-display').append('<li>' + "Phone Number: " + contactInfo.phoneNumber + '</li>');

// 	$('#contact-display').append('<li>' + "Address: " + '<br>' + contactInfo.street + contactInfo.city + contactInfo.state + '</li>');
	
// 	//this displays the list of contacts in the array
// 	for(var i = 0; i < contactsList.length; i++){
// console.log(i);
// 		$('#contactLink').append('<li><a>' + contactsList[i].first + '</a></li>');
// 			console.log(contactsList[i]);

// 	}

// }

});