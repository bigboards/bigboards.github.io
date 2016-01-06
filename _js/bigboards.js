(function () {
    "use strict";

    angular
        .module('bigboards', [
            'ngAnimate',
            'ngAria',
            'ngMaterial'
        ])
        .config(function ($mdThemingProvider) {

            $mdThemingProvider.definePalette('bigboards',
                $mdThemingProvider.extendPalette('blue-grey', {
                    '50': '008888'
                })
            );

            $mdThemingProvider.theme('default')
                .primaryPalette('blue-grey')
                .accentPalette('teal')
                .warnPalette('deep-orange')
            ;
        })
        .controller('bigboardsController', ['$scope', function ($scope) {
            $scope.currentYear = new Date().getFullYear();

            $scope.openSideMenu = function openSideMenu() {
                // do nothing
            };
        }]);

})();