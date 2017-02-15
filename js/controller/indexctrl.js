
app.controller('indexctrl',function($state,user,$mdDialog){
	var itself=this;
	if(user.isLogin())
	{
		user.get(function(response){
			console.log(response);
			itself.user=response.data;
		});

	}
	else{
		$state.go('login');
	}
	itself.logout=function(){
		console.log('itsok');
			user.remove();
			$state.go('login');
		}
	itself.showConfirm = function(ev) {
		console.log('its ');
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
