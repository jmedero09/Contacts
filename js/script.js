$(document).ready(function(){

var contactsList = [];

function contactInfo(first, last, phone, street,city,state) {
    this.first = first;
    this.last = last;
    this.phone = phone;
    this.street = street;
    this.city = city;
    this.state = state;
}

function addInfo(){
	contactInfo.first = $('#first').val();
	contactInfo.last = $('#last').val();
	contactInfo.phoneNumber = $('#phone').val();
	contactInfo.street = $('#street').val();
	contactInfo.city = $('#city').val();
	contactInfo.state = $('#state').val();
}
function dispaly(){

	$('ul').empty();

	$('#contact-header').text(contactInfo.first+" "+contactInfo.last)

	$('#contact-display').append('<li>'+"First Name: "+contactInfo.first+'</li>');
	$('#contact-display').append('<li>'+"Last Name: "+contactInfo.last+'</li>');
	$('#contact-display').append('<li>'+"Phone Number: "+contactInfo.phoneNumber+'</li>');

	$('#contact-display').append('<li>'+"Address: "+'<br>'+contactInfo.street+contactInfo.city+contactInfo.state+'</li>');
}


$( "button").on('click', function() {
	event.preventDefault();

	addInfo();
	$('input[type="text"]').val("");
	dispaly();


 	//validateInput($('input[type="radio"]:checked:first').val());

 	//$('#first').val()


 });




});