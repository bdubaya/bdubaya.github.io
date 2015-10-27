$(document).ready( function() {
				$("#head").load("header.html");
});

var main = function(){
	
	$('.flexslider').flexslider({
		smoothHeight: true,
		slideshowSpeed: 5000
	});
	/* $(function() {
		$( "#dialog" ).dialog({
		  autoOpen: false,
		  show: {
			effect: "blind",
			duration: 500
		  },
		  hide: {
			effect: "explode",
			duration: 500
		  }
		});
 
		
	}); */
	var div = document.getElementsByClassName('card')[0];
		div.addEventListener('click', function (event) {
		  $( "#dialog" ).dialog( "open" );
		});
};

$(window).load(main);


  
 