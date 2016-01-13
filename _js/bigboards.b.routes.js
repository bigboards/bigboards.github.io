(function () {
    'use strict';

    angular
        .module('bigboards')
        .config(routes);

    routes.$inject = ['$routeProvider'];

    function routes($routeProvider) {
        $routeProvider
            .when('/blog', {
                templateUrl: '/blog/index.html'
            })
            .when('/contact', {
                templateUrl: '/contact.html'
            })
            .when('/orderprototype', {
                templateUrl: '/orderprototype.html'
            })
            .otherwise({
                templateUrl: '/home.html'
            });

        var handlingRouteChangeError = false;

        function handleRoutingErrors() {
            /**
             * Route cancellation:
             * On routing error, go to the dashboard.
             * Provide an exit clause if it tries to do it twice.
             */
            $rootScope.$on('$routeChangeError',
                function(event, current, previous, rejection) {
                    if (handlingRouteChangeError) { return; }
                    handlingRouteChangeError = true;
                    var destination = (current && (current.title ||
                        current.name || current.loadedTemplateUrl)) ||
                        'unknown target';
                    var msg = 'Error routing to ' + destination + '. ' +
                        (rejection.msg || '');

                    /**
                     * Optionally log using a custom service or $log.
                     * (Don't forget to inject custom service)
                     */
                    logger.warning(msg, [current]);

                    /**
                     * On routing error, go to another route/state.
                     */
                    $location.path('/');

                }
            );
        }
    }
})();