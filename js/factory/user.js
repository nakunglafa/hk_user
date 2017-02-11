app.factory('user',[
	'$http',
	'token',
	'$timeout',
	function($http,token,$timeout){
		var user ={
			get:function(callback){
				if(token.isLogin())
					{
						$timeout(function(){
							$http({
							url:token.url+'api/user',
							method:'GET',
							header:{
								Authorization:'Bearer '+token.get()
							}
								}).then(function(response){
									callback(response.data);
								},function(){
									token.count+=1;
									if(token.count>5){
										
										token.count=0;
										return 'error';
									}
									else{
										user.get();
									}
								});	
						},50)			
					}
				},
			isLogin:function(){
					if(token.isLogin()){
						return true;
					}else{
						return false;
					}

				}
			};
			return user;
		}]);