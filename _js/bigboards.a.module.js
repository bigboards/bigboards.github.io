(function () {
    'use strict';

    angular
        .module('bigboards', [
            'ngAnimate',
            'ngAria',
            'ngMaterial',
            'ngRoute'
        ])
        .config(theme);

    theme.$inject = ['$mdThemingProvider'];

    function theme($mdThemingProvider) {
        var bbPrimary = $mdThemingProvider.extendPalette('teal', {
            '500': '00aaaa'
        });
        $mdThemingProvider.definePalette('bbPrimary', bbPrimary);

        $mdThemingProvider.theme('default')
            .primaryPalette('bbPrimary')
            .accentPalette('teal')
            .warnPalette('deep-orange')
        ;
    }
})();