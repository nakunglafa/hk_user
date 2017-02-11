app.controller('contentctrl',[
	'user',
	'$state',
	'$mdDialog',
	'$timeout',
	'$stateParams',
	'$rootScope',
	function(user,$state,$mdDialog,$timeout,$stateParams,$rootScope)
		{
		var itself=this;
			if(user.isLogin())
			{
				$('.loading').css({display:'block'});
				$timeout(function(){
					user.get(function(response){
						console.log(response);
					itself.user=response;
					$('.loading').css({display:'none'});
					});	
				},400)
			}
		}
	]);
app.controller('toolbarctrl',function(){

});