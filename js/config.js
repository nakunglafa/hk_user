app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('index',{
		url:'/',
		templateUrl:'template/index.html'
	})
	.state('login',{
		url:'/login',
		templateUrl:'template/login.html'
	})
	.state('todo',{
		url:'/todo',
		templateUrl:'template/todo.html',
		controller:'todoctrl as todo'
	})
});