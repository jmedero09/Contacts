/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	$(document).ready(function () {
	
		$("button").on('click', function (event) {
	
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
	
			$("input[type='text']").val("");
		});
	
		//Empty contacts list that will have objects pushed to it 
	
		var contactList = [];
	
		//simply just checking to see if the user input anything into the textfield if they did then call the save function which will push the 
		//input into the array if not all the data in the field will be cleared and an alert will pop up
	
		function validate(contact) {
	
			for (var prop in contact) {
	
				if (!contact[prop].length || contact['phone'].length > 10) {
	
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
	
			$('#contactLink').on('click', 'a', function (event) {
	
				event.preventDefault();
	
				//Loops through the length of all the objects of the array 
	
				for (var i = 0; i < contactList.length; i++) {
	
					var _contact = contactList[i];
					console.log(_contact);
	
					//if the link that we click on has the same name as the object in the contacts list array then display that information 
					//this will loop through the array of objects everytime that link is cliked and if the link that was clicked is equal to
					//the first name value key at that particular index then it will display all the information 
	
					if (_contact.first == $(this).text()) {
	
						$('#contact-display').empty();
	
						$('#contact-header').text(_contact.first + " " + _contact.last);
	
						$('#contact-display').append('<li>' + "First Name: " + _contact.first);
	
						$('#contact-display').append('<li>' + "Last Name: " + _contact.last);
	
						$('#contact-display').append('<li>' + "Phone Number: " + _contact.phone);
	
						$('#contact-display').append('<li>' + "Address: " + '<br>' + _contact.street + " " + _contact.city + " " + _contact.state);
					}
				}
			});
		}
	});

/***/ }
/******/ ]);
//# sourceMappingURL=contacts.1.0.0.js.map