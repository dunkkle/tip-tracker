angular.module('starter.services', [])

// setting up firebase shiftData reference for $scope
.factory("ShiftData", ["$firebase", function($firebase) {
  
  var userShifts = new Firebase("https://tiptracker.firebaseio.com/user/shifts");
  
  return $firebase(userShifts);

}])

//This factory provides the current date, used as the default in "Add Shift" form
.factory("TodaysDate", function() {

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth()+1;
    if (month < 10) {
      month = "0" + month;
      };
  var day = d.getDate();
  
  var todaysDate = year + "-" + month + "-" + day;

  


})


// This filter should reverse items from Firebase in ng-repeat
// Usage: <li ng-repeat="message in messages | orderByPriority | reverse">{{message.text}}</li>
// From: http://stackoverflow.com/questions/20933561/angularfire-add-in-reverse-order
// ************************************************************************************ //

   .filter('reverse', function() {
      function toArray(list) {
         var k, out = [];
         if( list ) {
            if( angular.isArray(list) ) {
               out = list;
            }
            else if( typeof(list) === 'object' ) {
               for (k in list) {
                  if (list.hasOwnProperty(k)) { out.push(list[k]); }
               }
            }
         }
         return out;
      }
      return function(items) {
         return toArray(items).slice().reverse();
      };
   })

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
