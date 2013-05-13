
// Our LH app.
var app = angular.module('lighthouse', ['ui.select2', 'ngGrid']);

app.factory('orders', function() {

  var list = [];

  return {
    add: function(val) {
      list.push(val);
    },
    get: function() {
      return list;
    },
  }
});

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
      controller: WorkOrderListCtrl
    }).
    otherwise({
      redirectTo: '/work'
    });
});

function WorkOrderListCtrl($scope, orders, $rootScope) {
  $scope.myData = orders.get();
  $scope.myOptions = { data: 'myData' };
}


function WorkOrderCtrl ($scope, $routeParams, $location, orders, $rootScope) {
  $rootScope.list = [];
  $scope.topForm = 'partials/body.html'
  $scope.selectTemp = '';

  $scope.list = [];

  $scope.data = {
  };

  $scope.saveData = function() {
    $location.path('/work-list');
    $scope.data.date = new Date();
    $scope.status = 'New';
    orders.add($scope.data);
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

function TopLevelCtrl($scope) {

}

$(document).ready(function() {
  Modernizr.load({
    test: Modernizr.inputtypes.datetime,
    nope: ['/components/datetime-polyfill/datetime-polyfill.min.js', '/components/datetime-polyfill/datetime-polyfill.css']
  });
});
