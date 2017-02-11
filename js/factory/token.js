app.factory('token',function($http,$timeout){
	var token={
		url:'http://www.hamrokitchen.com/',
		request:function(callback){
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
			}).then(function(response){
				callback(response)
			},function(error){
				callback(error);
			});
		},
		isLogin:function(){
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
		count:0

	}
	return token;
});