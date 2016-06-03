var watchOn = false;
this.myWatch = new Stopwatch(updatedisplay, 50);


(function(){
	var app = angular.module('app', []);
	var gems = [{ name: 'Spoole', price: 1.00, quantity: 0, value: 1, pic: 'images/spoole.png'},
		{name: 'Adam', price: 20.00, quantity: 0, value: 15, pic: 'images/adam.png'},
		{name: 'James', price: 100, quantity: 0, value: 75, pic: 'images/james.png'},
		{name: 'Bruce', price: 100, quantity: 0, value: 75, pic: 'images/bruce.png'},
		{name: 'Lawrence', price: 100, quantity: 0, value: 75, pic: 'images/lawrence.png'},
		{name: 'Benson', price: 100, quantity: 0, value: 75, pic: 'images/benson.png'},
		{name: 'Tyrone', price: 100, quantity: 0, value: 75, pic: 'images/tyrone.png'}];
	var money = 0;
	
	app.controller('StoreController', function($scope){
		
		this.products = gems;
		this.cash = money;
		
		$scope.increment = function(item){
			if (item.price <= $scope.store.cash){
				item.quantity++;
				$scope.store.cash -= item.price;
				item.price++;
			}else {
				//do some cool jquery shit on the price. BRAAAAP: "not enough money"
				//$('#' + item.name + '-price').animate({color: "white"}, 500);
				$('#' + item.name + '-price').animate({color: "red"}, 100 )
											.effect("shake",{distance:.01}, "fast")
											.animate({color: "white"}, 100)
											.dequeue();
			}
		};
		
		
		$scope.getMoney = function() {
			$scope.$apply(function(){
				if (watchOn){
					gems.forEach(function(gem){
						var value = gem.value * gem.quantity;
						$scope.store.cash += value;
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
		
		$scope.resetClick = function(){
			myWatch.reset();
			myWatch.onTick();
		};
		
		$scope.buttPress = function(){
			console.log('buttPress');
			$scope.store.cash++;
		}
		
		setInterval( function() {$scope.getMoney($scope.store)}, 1000);
	
	});
	
	
})(); 

function updatedisplay(watch) {
	document.getElementById('watchDisplay').innerHTML = watch.toString() + "." + parseInt(watch.getElapsed().milliseconds/100);
}


