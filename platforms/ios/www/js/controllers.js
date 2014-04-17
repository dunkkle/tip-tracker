angular.module('starter.controllers', [])

// setting up firebase shiftData reference for $scope
.factory("ShiftData", ["$firebase", function($firebase) {
	var userShifts = new Firebase("https://tiptracker.firebaseio.com/user/shifts");
	return $firebase(userShifts);
}])

//setting up shift controller to add/get shifts

.controller("ShiftController", ["$scope", "ShiftData", function($scope, shiftData) {

	$scope.user = "Guest"; // fix this
	$scope.shifts = shiftData; // get all shifts from ShiftData Factory

	$scope.addShift = function() {
		$scope.shifts.$add({
			user: $scope.user,
			hoursWorked: $scope.hoursWorked,
			netTips: $scope.netTips,
		});

	$scope.shift = "";
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
