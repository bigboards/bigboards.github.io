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
    }
})();