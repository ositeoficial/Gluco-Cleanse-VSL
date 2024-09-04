$(document).ready(function(){

	$(".button, .button h3").mouseover(function() {
		$(".button").css("background", "#1AA511");
		$(".button h3").css("color", "#fff");
	}).mouseout(function() {
		$(".button").css("background", "#fff");
		$(".button h3").css("color", "#c8271c");
	});

	$('.button, .button h3, button .popup-text-order').click(function(e) {
      	window.onbeforeunload = null;
  	});

});

function funkcja_1(){
    var change = document.getElementById('country').options[document.getElementById('country').selectedIndex].id
    document.getElementById('country_phone').value = change;
    //console.log(change);
}

function check() {
	var btn = $('#btn-order');

	var name = $('popup-center-info-img #name').val();
	var tel = $('popup-center-info-img #phone').val();

    name = JSON.stringify(name);

    if(name.length < 5)
	  	alert("Imię i nazwisko powinno składać się z conajmniej 5 znaków");
	else if(tel.length < 9)
		alert("Numer telefonu powinien składać się z conajmniej 9 znaków");
	
}

