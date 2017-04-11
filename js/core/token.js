var auth=angular.module('auth',[]);
/* ------------------------------------------------------------------------token -----------------------------------------*/
auth.factory('token',function($http,$timeout){
	var token={
		url:'http://www.hamrokitchen.com/',
		request:function(username,password,callback){
			var data={
				client_id:2,
				client_secret:'uWTPV7D27mfE3EculAs1cBpoh30ObJzljiBROPcR',
				grant_type:'password',
				username:'nakunglafa@gmail.com',
				password:'hello12345'				
			}
			$http({
				method:'POST',
				url:this.url+'oauth/token',
				data:data
			}).then(function(response)
			{
				callback(response);
			},
			function(error){
				callback(error);
			});
		},
		isSet:function(){
			var access_token=localStorage.getItem('token');
			return access_token?true:false;
		},
		get:function(){
			var access_token=localStorage.getItem('token');
			var expiration=localStorage.getItem('expiration');
			if( ! access_token || ! expiration)
			{
				return null;
			}
			if(Date.now()>parseInt(expiration))
			{
				
				this.destroy();	
			}
			else{
				return access_token;
			}
		},
		destroy:function(){
			localStorage.removeItem('token');
			localStorage.removeItem('expiration');
			localStorage.removeItem('refreshToken');		
		},
		set:function(token,expiration,refreshToken){
			var date=Date.now()+expiration;
			localStorage.setItem('token',token);
			localStorage.setItem('expiration',date);
			localStorage.setItem('refreshToken',refreshToken);
		},
		refresh:function(){
			var date=Date.now()+expiration;
			localStorage.setItem('expiration',date);
		}

	}
	return token;
});
auth.factory('user',[
	'token',
	'$http',
	function(token,$http){
			var user= {
				itself:this,
				get:function(callback)
				{
					if(token.isSet())
						{
							var t=token.get();
							$http({
								url:'http://www.hamrokitchen.com/api/user',
								params:{},
								method:'GET'
							}).then(function(response)
							{
								callback(response);
							},function(response)
							{
								callback(response);
							});
						}
				},
				isLogin:function(){
					return token.isSet()?true:false;
				},
				remove:function(){
					token.destroy();
				},
				register:function(user,callback){
					console.log(URL);
					var data={
						user:user.name,
						email:user.email,
						password:user.password
					}
					$http({
						method:'POST',
						url:URL+'register',
						data:data
					}).then(function(response){
						callback(response);
					},function(response){
						callback(response);
					});
				}
			}
			return user;
		}
	]);