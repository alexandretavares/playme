(function() {
    'use strict';

    angular.module("playme.auth", ['playme.common']).config(config);
    config.$inject = ['$stateProvider', 'STATE'];

    function config($stateProvider, STATE) {
        $stateProvider
            .state(STATE.AUTH.BASE, {
                url: "/auth",
                abstract: true,
                templateUrl: "app/auth/auth-base.html",
                controller: "AuthController",
                controllerAs: "mv"
            })
            .state(STATE.AUTH.LOGIN, {
                url: "/login",
                views: {
                    'auth-form': {
                        templateUrl: "app/auth/login-form.html"
                    }
                }
            })
            .state(STATE.AUTH.SIGNUP, {
                url: "/signup",
                views: {
                    'auth-form': {
                        templateUrl: "app/auth/signup-form.html"
                    }
                }
            });
    }

})();
