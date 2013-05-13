
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
  $scope.selectTemp = '';

  $scope.templates =
    [
    { name: 'Problem', url: 'partials/problem.html'},
    { name: 'Outage', url: 'partials/outage.html'},
    { name: 'Request', url: 'partials/request.html'}
  ];

  $scope.template = $scope.templates[0];
};

function WorkOrderDetailCtrl($scope, $routeParams) {

}
