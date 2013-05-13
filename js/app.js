
// Our LH app.
var app = angular.module('lighthouse', ['ui.select2']);


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
  $scope.topForm = 'partials/body.html'
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

$(document).ready(function() {
  Modernizr.load({
    test: Modernizr.inputtypes.datetime,
    nope: ['/components/datetime-polyfill/datetime-polyfill.min.js', '/components/datetime-polyfill/datetime-polyfill.css']
  });
});