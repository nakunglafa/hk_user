
app.controller('indexctrl',function($state,user,$mdDialog,$timeout){
	var itself=this;
	if(user.isLogin())
	{
		$timeout(function(){
			user.get(function(response){
			if(response.data.error)
			{
				$state.go('login');
			}
			else
			{
				itself.user=response.data;		
			}
		});
		},1000);

	}
	else{
		$state.go('login');
		}
	itself.logout=function(){
			user.remove();
			$state.go('login');
		}
	itself.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
          .title('Would you like to Logout?')
          .textContent('You will be signing out')
          .ariaLabel('logout')
          .targetEvent(ev)
          .ok('ok')
          .cancel('cancel');

    $mdDialog.show(confirm).then(function() {
      itself.logout()
    });
  };
});
