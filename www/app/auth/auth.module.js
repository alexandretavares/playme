(function() {
    'use strict';

    angular.module("playme.auth", ['playme.common']).config(config);
    config.$inject = ['$stateProvider', 'STATE'];

    function config($stateProvider, STATE) {
        $stateProvider
            .state(STATE.AUTH.BASE, {
                url: "/auth",
                abstract: true,
                templateUrl: "app/auth/auth.html",
                controller: "AuthController",
                controllerAs: "mv"
            })
            .state(STATE.AUTH.LOGIN, {
                url: "/login",
                views: {
                    'login-form': {
                        templateUrl: "app/auth/login-form.html"
                    },
                    'signup-form': {
                        templateUrl: "app/auth/signup-form.html"
                    }
                }
            });
    }

})();
