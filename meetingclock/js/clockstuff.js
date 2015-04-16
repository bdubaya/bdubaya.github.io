var watchOn = false;
$(document).ready(function(){
	var myWatch = new Stopwatch(updatedisplay, 50);
	
	
	$('#add').click(function(){
		var name = $('#nameField').val();
		var id = name.replace(/\s/g, '');
		var sal = $('#salaryField').val();
		
		var toAdd='<tr class="meeter" id=' + id + '><td>' + name + '</td>' +
									'<td class="sal">' + sal + '</td>' + 
									'<td><button class=\'remove\'>Remove</button></td></tr>';
		
		$('#wasters > tbody:last').append(toAdd);
		
		$('#nameField').val('');
		$('#salaryField').val('');
	});
	
	
	$(document).on('click', '.remove', function(){
		var tr = $(this).closest('tr');
		tr.remove();
	});
	
	
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
		/*
		var currTime = myWatch.getElapsed();
		var time = currTime - prevTime; //fuck, this is always going to be 1000. BENNIE YOU IDIOT
		*/
		var interval = 1000;
		var currMoney = 0;
		var amt = 0;
		
		/*for (var i = 0; i < table.rows.length; i++){
			cellVal = table.rows[i][1].innerHTML;
			//value += cellVal *
			amt = cellVal / 52 / 40 / 60 / 60;
		}*/
		$('.sal').each(function(){
			cellVal = $(this).value;
			console.log(cellVal);
			amt += cellVal / 52 / 40 / 60 / 60;
			
		});
		amt = amt.toFixed(2);
		//$('#moneyDisplay').value += amt;
		//document.getElementById('moneyDisplay').value = amt;
		var noombro = parseInt($('#moneyDisplay').text()) + amt;
		//alert(amt);
		document.getElementById('moneyDisplay').innerHTML = noombro;
	}
}