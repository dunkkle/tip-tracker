angular.module('starter.controllers', [])



//setting up shift controller to add/get shifts
.controller("ShiftController", ["$scope", "ShiftData", function($scope, shiftData) {

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth()+1;
    if (month < 10) {
      month = "0" + month;
      };
  var day = d.getDate();
  
  var todaysDate = year + "-" + month + "-" + day;


	$scope.user = "Guest"; // fix this
	$scope.shifts = shiftData; // get all shifts from ShiftData Factory
	$scope.newShift = {};
	$scope.shiftType = null;
	$scope.shiftRole = null;
	$scope.shiftDate = todaysDate;

	$scope.addShift = function() {
		$scope.shifts.$add({
			//user: $scope.user, // get userID 
			//shiftId: ,
			//profileID , //Get profile ID for specific Job, includes type, role and wage options
			date: $scope.shiftDate,
			type: $scope.shiftType, // get from User Profile
			role: $scope.shiftRole, // get from User Profile
			hourlyRate: $scope.roleHourlyWage, // get from user Profile
			totalSales: $scope.shiftSales,
			grossTips: $scope.shiftGrossTips,
			payout: $scope.shiftPayout,
			hoursWorked: $scope.shiftHoursWorked,
			grossWages: $scope.shiftGrossWages, //Calculated in DOM
			netTips: $scope.shiftNetTips, //Calculated in DOM
			netTipPercentage: $scope.shiftNetTipPercentage,
			grossTipPercentage: $scope.shiftGrossTipPercentage,
			timeStamp: Firebase.ServerValue.TIMESTAMP,
		});

	// Return Form inputs to Null...
	$scope.shiftType = "";
	$scope.shiftRole ="";
	$scope.shiftDate ="";
	$scope.shiftHoursWorked ="";
	$scope.shiftSales ="";
	$scope.shiftGrossTips ="";
	$scope.shiftPayout ="";
	


	};

}])

// // Controller to add new shift
// .controller('AddShiftController', function($scope, $ionicModal) {
//   $ionicModal.fromTemplateUrl('modal.html', {
//     scope: $scope,
//     animation: 'slide-in-up'
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });
//   $scope.openModal = function() {
//     $scope.modal.show();
//   };
//   $scope.closeModal = function() {
//     $scope.modal.hide();
//   };
//   //Cleanup the modal when we're done with it!
//   $scope.$on('$destroy', function() {
//     $scope.modal.remove();
//   });
// })


.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
