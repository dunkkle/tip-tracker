angular.module('starter.controllers', [])



//setting up shift controller to add/get shifts
.controller("ShiftController", ["$scope", "ShiftData", function($scope, shiftData) {

	$scope.user = "Guest"; // fix this
	$scope.shifts = shiftData; // get all shifts from ShiftData Factory
	$scope.newShift = {}

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
	$scope.shiftHoursWorked = "";
	$scope.shiftNetTips ="";


	};

}])


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
