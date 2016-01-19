var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {

    $scope.projects = [
        {title: "Project 2", github: 'https://github.com/ritarafaeli/p2', live: 'http://www.p2.ritarafaeli.me'},
        {title: "Project 3", github: 'https://github.com/ritarafaeli/p3', live: 'http://www.p3.ritarafaeli.me'},
        {title: "Project 4", github: 'https://github.com/ritarafaeli/p4', live: 'http://www.p4.ritarafaeli.me'}  
    ];
}]);
