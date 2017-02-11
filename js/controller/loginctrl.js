app.controller('loginctrl',

	[
		'$state',
		'token',
		'$timeout',
		'$rootScope',
		function($state,token,$timeout,$rootScope){
		var itself=this;
		$rootScope.title='login';
		itself.title=$rootScope.title;
		itself.username='nakunglafa@gmail.com';
		itself.password='hello12345';
		itself.login=function()
			{
				$('.loading').css({
					display:'block'
				});
				token.request(itself.username,itself.password,function(response){
					if(response.data.error)
					{
						$state.go('login');
						$('.loading').css('display','none');
					}else
					{
						var tokenValue=response.data;
						token.set(tokenValue.access_token,tokenValue.expires_in,tokenValue.refresh_token);	
										 $timeout(function(){
				 		$('.loading').css({
						display:'none'
						});
						$state.go('home',{
							data:{
									loggedin:true
								}
							});
				 		},3000);				
					}

				});
				

			//$timeout(location.reload(),1000)
			}

// template jquery------------------------------------------------------------------
			$('.message a').click(function(){
			$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
			});		
		}
	]);




app.controller('registerctrl',function(){

})