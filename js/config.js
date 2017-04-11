app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
	$stateProvider
	.state('index',{
		url:'/',
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
});
var a=1;
app.run(['$http','token','user','$state','$rootScope', function ($http,token,user,$state,$rootScope) {
$rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams){
		   if(user.isLogin()){
		    $http.defaults.headers.common['Authorization'] = 'Bearer '+token.get();
		    $http.defaults.headers.common['Accept'] = 'application/json';  	
		   }
        });
}]);

