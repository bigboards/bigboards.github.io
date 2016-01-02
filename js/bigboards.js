(function () {
    "use strict";

    angular
        .module('bigboards', [
            'ngAnimate',
            'ngAria',
            'ngMaterial'
        ])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('indigo')
                .accentPalette('grey')
                .warnPalette('red');
        })
        .controller('bigboardsController', ['$scope', function ($scope) {
            $scope.currentYear = new Date().getFullYear();

            $scope.openSideMenu = function openSideMenu() {
                // do nothing
            };
        }]);

})();