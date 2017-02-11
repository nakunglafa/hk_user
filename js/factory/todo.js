app.factory('todo',[
	'$http',
	'token',
	function($http,token){
		return{
			submit:function(todo,callback)
			{
				console.log(token.get());
				var data={
					todo:"todo"
				};
				$http({
					method:'POST',
					url:'http://www.hamrokitchen.com/api/todo',
					data:data,
					header:{
						Authorization:'Bearer '+token.get()
					}
				}).then(function(){
					callback(true);
				},function(){
					callback(false)
				});
			}
		}
	}
]);