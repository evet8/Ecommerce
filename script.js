var userCredentials = [
	{ 
		username: "Ernest",
		password: "Password1"
	},
	{ 
		username: "Mark",
		password: "Password2"
	},
	{ 
		username: "Gaibrielle",
		password: "Password3"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < userCredentials.length; i++) {
		// check if user input matches username and password of userCredentials array
		if(username == userCredentials[i].username && password == userCredentials[i].password) {
			alert(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
	alert("incorrect username or password")
}


const startingMinutes = 60;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');
setInterval(updateCountdown, 1000);
function updateCountdown() {
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	countdownEl.innerHTML = minutes + ':' + seconds;
	time--;
	time = time < 0 ? 0 : time; 
}