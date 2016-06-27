angular.module("todoListApp", [])

  .controller('mainCtrl', function($scope) {
    $scope.helloWorld = function() {
      console.log('Hello there.');
    };
  })

    .controller('coolCtrl', function($scope) {
      $scope.whoAmI = function() {
        console.log("Hey, this is the cool controller function");
      };
      $scope.helloWorld = function() {
        console.log("Hey, this the hello world funtion in the cool controlelr.");

      };
    })
    .controller('imASibling', function($scope) {
      $scope.foobar = 1234;
    });
