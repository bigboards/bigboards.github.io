(function () {
    'use strict';

    angular
        .module('bigboards')
        .config(routes);

    routes.$inject = ['$routeProvider'];

    function routes($routeProvider) {
        $routeProvider
            .when('/hive', {
                templateUrl: '/hive.html'
            })
            .when('/hex', {
                templateUrl: '/hex.html'
            })
            .when('/blog', {
                templateUrl: '/blog/index.html'
            })
            .when('/about', {
                templateUrl: '/about.html'
            })
            .when('/contact', {
                templateUrl: '/contact.html'
            })
            .otherwise({
                templateUrl: '/index.html'
            })
    }
})();