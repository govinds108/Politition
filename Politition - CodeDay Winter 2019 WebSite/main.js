firebase.initializeApp({
    apiKey: "AIzaSyCy1dW0zUnQeF5htnOdAV_YSA1ZPek1wOA",
    authDomain: "politition-petition.firebaseapp.com",
    databaseURL: "https://politition-petition.firebaseio.com",
    projectId: "politition-petition",
    storageBucket: "politition-petition.appspot.com",
    messagingSenderId: "104845302047"
});

var db = firebase.firestore();
var petitionData = db.collection('petitions')

var form = document.getElementById("form");
form.addEventListener("submit", pushMessage, false);

function pushMessage(e) {
	e.preventDefault()

	var firstName = document.getElementById("fname").value;
	var lastName = document.getElementById("lname").value;
	var type = document.getElementById("type").value;
	var numberSig = document.getElementById("numSig").value;
	var subject = document.getElementById("subject").value;

	petitionData.add({ 
		firstName: firstName, 
		lastName: lastName, 
		type: type, 
		numberSig: numberSig, 
		subject: subject 
	})
		.then((asd) => {
			console.log('asd')
		})


			

	// petitionData.on("child_added", showMessage);

	// function showMessage(pet) {
	// 	var petition = pet.val();
	// 	var petfname = petition.firstName;
	// 	var petlname = petition.lastName;
	// 	var petType = petition.type;
	// 	var petNumSig = petition.numberSig;
	// 	var petSubject = petition.subject;

	// 	var petitionEl = $("<div/>").addClass("petition");
	// 	var senderfname = $("<span/>").text(petfname);
	// 	var senderlname = $("<span/>").text(petlname);
	// 	var sendertype = $("<span/>").text(petType);
	// 	var senderNumSig = $("<span/>").text(petNumSig);
	// 	var senderSubject = $("<span/>").text(petSubject);

	// 	petitionEl.append(senderfname);
	// 	petitionEl.append(senderlname);
	// 	petitionEl.append(sendertype);
	// 	petitionEl.append(senderNumSig);
	// 	petitionEl.append(senderSubject);
	// 	$('#petitions').append(petitionEl);
	// }
}

