
// Our LH app.
var app = angular.module('lighthouse', []);


// Our hack up paths because of the generator issue to work around.
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/work', {
      templateUrl: 'partials/workorder.html',
      controller: WorkOrderCtrl
    }).
    when('/request/new', {
      templateUrl: 'partials/request.html',
      controller: WorkOrderCtrl
    }).
    when('/outage/new', {
      templateUrl: 'partials/outage.html',
      controller: WorkOrderCtrl
    }).
    when('/problem/new', {
      templateUrl: 'partials/problem.html',
      controller: WorkOrderCtrl
    }).
    otherwise({redirectTo: '/work'});
}]);

function WorkOrderCtrl ($scope, $routeParams) {
  console.log($scope);
};

function WorkOrderDetailCtrl($scope, $routeParams) {

}
