
app.controller('indexctrl',[
	'token',
	'$state',
	'$mdDialog',
	'$timeout',
	'$stateParams',
	'$rootScope',
	function(token,$state,$mdDialog,$timeout,$stateParams,$rootScope)
	{
			var itself=this;	
			$rootScope.title='logout';
			itself.title=$rootScope.title;
		    itself.showConfirm = function(ev){
			// Appending dialog to document.body to cover sidenav in docs app
		    var confirm = $mdDialog.confirm()
		          .title('Logout')
		          .textContent('Are you sure to logout')
		          .ariaLabel('Logout')
		          .targetEvent(ev)
		          .ok('logout')
		          .cancel('Cancel');
		    $mdDialog.show(confirm).then(function() {
		      token.destroy();
		      $rootScope.title='login';
		      $timeout(location.reload(),1000)
		    }, function() {
		    });
		  };
		}
	]);

