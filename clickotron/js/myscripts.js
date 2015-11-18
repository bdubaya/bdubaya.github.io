var watchOn = false;
this.myWatch = new Stopwatch(updatedisplay, 50);
$(document).ready(function(){
	/*
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
	*/
});

(function(){
	var app = angular.module('app', []);
	var gems = [{ name: 'Intern', price: 1.00, quantity: 1, value: 1},
		{name: 'Entry-Level', price: 20.00, quantity: 0, value: 15}];
	var money = 0;
	
	app.controller('StoreController', function($scope){
		
		this.products = gems;
		this.cash = money;
		
		//function increment(){
		$scope.increment = function(item){
			item.quantity++;
		};
		
		$scope.getMoney = function(store) {
			$scope.$apply(function(){
				if (watchOn){
					gems.forEach(function(gem){
						var value = gem.value * gem.quantity;
						store.cash += value;
					});
				}
			});
			
		};
	
		$scope.startClick = function(){
			myWatch.start();
			$('#start').toggle();
			$('#stop').show();
			watchOn = true;
		};
		
		$scope.stopClick = function(){
			myWatch.stop();
			$('#stop').toggle();
			$('#start').show();
			watchOn = false;
		};
		
		$scope.resetClick = function(store){
			myWatch.reset();
			myWatch.onTick();
		};
		setInterval( function() {$scope.getMoney($scope.store)}, 1000);
	
	});
	
	
})(); 

function updatedisplay(watch) {
	document.getElementById('watchDisplay').innerHTML = watch.toString() + "." + parseInt(watch.getElapsed().milliseconds/100);
}



/*
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
		this.cash = noombro.toFixed(2);
	}
}
*/