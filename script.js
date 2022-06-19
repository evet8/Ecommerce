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
		// check if user input matches username and password of a current index of the objPeople array
		if(username == userCredentials[i].username && password == userCredentials[i].password) {
			alert(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
	alert("incorrect username or password")
}