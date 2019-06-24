function getid(id_value) {return document.getElementById(id_value);}

function openNav() {
	getid("main_frame").style.opacity = "0.9";
	getid("mySidenav").style.width = "500px";
	getid("side_nav").style.color = "transparent";
}

function closeNav() {
	getid("main_frame").style.opacity = "1";
	getid("mySidenav").style.width = "0";
	getid("side_nav").style.color = "black";
}

function load_login() {
	getid("sign_page").style.display = "none";
	getid("login_page").style.display = "block";
	document.title = "Login";
}

function signup() {
	getid("sign_page").style.display = "block";
	getid("login_page").style.display = "none";
	document.title = "Sign Up";
}