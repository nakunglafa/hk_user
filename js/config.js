app.config(function($stateProvider){

	$stateProvider
		.state('index',{
			url:'/',
			templateUrl:'template/home.html',
			controller:'homectrl as home'
		});
})