
// Our LH app.
var app = angular.module('lighthouse', ['ui.select2']);


// Our hack up paths because of the generator issue to work around.
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

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
    when('/work-list', {
      templateUrl: 'partials/worklist.html',
      controller: WorkOrderCtrl
    }).
    otherwise({
      redirectTo: '/work'
    });
});


function WorkOrderCtrl ($scope, $routeParams, $location) {
  $scope.topForm = 'partials/body.html'
  $scope.selectTemp = '';

  $scope.list = [];

  $scope.data = {
    title: '',
    url: '',
    desc: ''
  };

  $scope.saveData = function() {
    $scope.list.push($scope.data);
    $location.path('/work-list');
    console.log($scope.data);
  }

  $scope.templates = [
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
