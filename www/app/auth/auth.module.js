(function() {
    'use strict';

    angular.module("playme.auth", ['playme.common']).config(config);
    config.$inject = ['$stateProvider', 'STATE'];

    function config($stateProvider, STATE) {
        $stateProvider.state(STATE.AUTH, {
            url: "/auth",
            templateUrl: "app/auth/partials/auth-base.html",
            controller: "AuthController",
            controllerAs: "mv"
        });
    }

})();
