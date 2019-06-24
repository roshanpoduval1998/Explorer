function getid(id_value) {return document.getElementById(id_value);}

function openNav() {
	getid("side_nav").style.color = "transparent";
	getid("mySidenav").style.width = "500px";
	getid("video").pause();
	getid("main_frame").style.pointerEvents = "none";
	document.body.style.overflow = 'hidden';
}

function init() {
    var input = document.getElementById('search_places');
    var autocomplete = new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', init);

function google_search(search_value) {
	window.location.href = 'http://google.com/search?q='+search_value;
}

function closeNav() {
	getid("side_nav").style.color = "white";
	getid("mySidenav").style.width = "0";
	getid("video").play();
	getid("main_frame").style.pointerEvents = "unset";
	document.body.style.overflow = 'auto';
}

function login_function() {
	getid("side_nav").style.display = "none";
	getid("login_page").style.display = "block";
	getid("mySidenav").style.width = "0";
	getid("main_frame").style.opacity = "0.8";
	getid("video").pause();
	getid("main_frame").style.pointerEvents = "none";
	document.body.style.overflow = 'hidden';
}

function login_function2() {
	getid("side_nav").style.display = "none";
	getid("login_page").style.display = "block";
	getid("mySidenav").style.width = "0";
	getid("main_frame").style.opacity = "0.8";
	getid("video").pause();
	getid("main_frame").style.pointerEvents = "none";
	document.body.style.overflow = 'hidden';
}

function closelogin() {
	getid("side_nav").style.display = "block";
	getid("login_page").style.display = "none";
	getid("main_frame").style.opacity = "1";
	getid("video").play();
	getid("login_email").value = "";
	getid("login_password").value = "";
	getid("side_nav").style.color = "white";
	getid("main_frame").style.pointerEvents = "unset";
	document.body.style.overflow = 'auto';
}
