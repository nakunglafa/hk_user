app.controller('todoctrl',[
'token',
'todo',
function(token,todo)
{
	var itself=this;
	var data=itself.todo;
	token.request(function(response){
		
		var t=response.data;
		token.set(t.access_token,t.expires_in,t.refresh_token);
	});
	itself.submit=function(){
		todo.submit(data);
	}
}]);
