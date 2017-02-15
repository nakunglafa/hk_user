app.controller('loginctrl',

		function($state,token,$timeout,$rootScope,user){
		var itself=this;
		if(user.isLogin()){
			$state.go('index');
		}
		else{
			itself.username='nakunglafa@gmail.com';
			itself.password='hello12345';
			itself.login=function()
				{
					token.request(itself.username,itself.password,function(response){
						var t=response.data;
						token.set(t.access_token,t.expires_in,t.refresh_token);
						$state.go('index');
						
					});
				}

		}

// template jquery------------------------------------------------------------------
			$('.message a').click(function(){
			$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
			});		
		}
	);




app.controller('registerctrl',function(){

})