angular.module('starter.controllers', ['firebase'])

/////////////////////////////////////
//    WELCOME SCREEN CONTROLLER    //
/////////////////////////////////////
.controller('WelcomeCtrl', function($scope, $firebase) {

	console.log("Welcome Screen Controller initialized");

	// Fuction for email signup  !!! NOT WORKING !!!
	$scope.signupEmail = function(){  
 
		var ref = new Firebase("https://call-your-reps-b230a.firebaseio.com");
 
		ref.auth().createUserWithEmailAndPassword($scope.newEmail, $scope.newPassword).catch(function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log("Error creating user:", errorMessage);
		});	 
	};

	// Function for email signin  !!! NOT WORKING !!!
	$scope.loginEmail = function(){
 
		var ref = new Firebase("https://call-your-reps-b230a.firebaseio.com");
	 
		ref.authWithPassword({
	    	email    : $scope.userEmail,
	    	password : $scope.userPassword
		}, function(error, authData) {
	    	if (error) {
	    		console.log("Login Failed!", error);
	    	} else {
	    	console.log("Authenticated successfully with payload:", authData);
	    	}
		});
 
	};

})


//////////////////////////////////
//    CALL SCREEN CONTROLLER    //
//////////////////////////////////
.controller('CallCtrl', function($scope) {

	console.log("Call Screen Controller initialized");

})


//////////////////////////////////
//    HOME SCREEN CONTROLLER    //
//////////////////////////////////
.controller('HomeCtrl', function($scope) {
  // Actual implementations when these functions are set up
  // $scope.nextElectionDate = getNextElectionDate().toLocaleDateString('en-US',
//   { month: 'long',
//     day: 'numeric',
//     year: 'numeric' });
  // $scope.pollingPlace = getPollingPlace();

  // Placeholders for now
  $scope.nextElectionDate = new Date(2017, 4, 3).toLocaleDateString('en-US',
    { month: 'long',
      day: 'numeric',
      year: 'numeric' });
  $scope.pollingPlace = "342 Langdon Street (Red Gym)";


  // Settings Modal

  $ionicModal.fromTemplateUrl('settings-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.settingsModal = modal;
  });

  $scope.openSettings = function() {
    $scope.settingsModal.show();
  };
  $scope.closeSettings = function() {
    $scope.settingsModal.hide();
  };
  $scope.saveSettings = function() {
    // TODO: Save text fields to user settings (in db or local storage...)

    $scope.settingsModal.hide();
  };
  // $scope.$on('$destroy', function() {
  //   $scope.modal.remove();
  // });

  	console.log("Home Screen Controller initialized");
})

//////////////////////////////////
//    INFO SCREEN CONTROLLER    //
//////////////////////////////////
.controller('InfoCtrl', function($scope) {

	console.log("Info Screen Controller initialized");

})