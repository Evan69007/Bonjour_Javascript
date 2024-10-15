let firstname = prompt("Entrez un Prénom")
let hour = 4

function sayHello(firstname, hour) {
	let message 
	if (hour < 18) {
		message = "Bonjour " + firstname + " !"
	}
	else {
		message = "Bonsoir " + firstname + " !"
	}
	document.querySelector('h1').innerText = message
}

sayHello(firstname, 4)
