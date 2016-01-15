(function () {
    'use strict';

    angular
        .module('bigboards', [
            'ngAnimate',
            'ngAria',
            'ngMaterial',
            'ngRoute'
        ])
        .config(config);

    config.$inject = ['$mdThemingProvider', '$locationProvider'];

    function config($mdThemingProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        var bbPrimary = $mdThemingProvider.extendPalette('teal', {
            '500': '00aaaa'
//            'A200': '00aaaa'
        });
        $mdThemingProvider.definePalette('bbPrimary', bbPrimary);

        $mdThemingProvider.theme('default')
            .primaryPalette('bbPrimary')
            .accentPalette('teal')
            .warnPalette('deep-orange')
        ;
    }
})();