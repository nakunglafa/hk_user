app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
	$stateProvider
	.state('index',{
		url:'/index',
		templateUrl:'template/index.html'
	})
	.state('login',{
		url:'/login',
		templateUrl:'template/login.html',
		controller:'loginctrl as login'
	})
	.state('todo',{
		url:'/todo',
		templateUrl:'template/todo.html',
		controller:'todoctrl as todo'
	});
	$urlRouterProvider.otherwise('/login');
});

app.run(['$http','token','user','$state', function ($http,token,user,$state) {

   if(user.isLogin()){
     $http.defaults.headers.common['Authorization'] = 'Bearer '+token.get();
    $http.defaults.headers.common['Accept'] = 'application/json';  	
   }
   else{
   	$state.go('login');
   }
}]);