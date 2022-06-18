var objPeople = [
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

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			window.alert(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
	window.alert("incorrect username or password")
}