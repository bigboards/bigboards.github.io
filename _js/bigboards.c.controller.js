(function () {
    'use strict';

    angular
        .module('bigboards')
        .controller('BigboardsController', BigBoardsController);

    function BigBoardsController() {
        var vm = this;
        vm.currentYear = new Date().getFullYear();
    }
})();