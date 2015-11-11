var watchOn = false;
$(document).ready(function(){
	var myWatch = new Stopwatch(updatedisplay, 50);
	
	
	
	$('#start').click(function(){
		myWatch.start();
		$(this).toggle();
		$('#stop').show();
		watchOn = true;
	});
	$('#stop').click(function(){
		myWatch.stop();
		$(this).toggle();
		$('#start').show();
		watchOn = false;
	});
	$('#reset').click(function(){
		myWatch.reset();
		myWatch.onTick();
		$('#moneyDisplay').text("0.00");
	});
	var prevTime = 0;
	setInterval(getMoney, 1000);
});

function updatedisplay(watch) {
	document.getElementById('watchDisplay').innerHTML = watch.toString() + "." + parseInt(watch.getElapsed().milliseconds/100);
}

function getMoney(){ //used to have prevTime as an argument, but then I'm a FUCKING CLOD
	if (watchOn){
		var table = $('#wasters');
		
		var interval = 1000;
		var currMoney = 0;
		var amt = 0;
		
		
		$('.sal').each(function(){
			cellVal = parseInt($(this).text());
			amt += cellVal / 52 / 40 / 60 / 60;
		});
		var noombro = parseFloat($('#moneyDisplay').text()) + amt;
		document.getElementById('moneyDisplay').innerHTML = noombro.toFixed(2);
	}
}