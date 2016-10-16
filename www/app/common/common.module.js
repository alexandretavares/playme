(function() {
    'use strict';

    angular.module("playme.common", []).config(config);
    config.$inject = ['$stateProvider', 'STATE'];

    function config($stateProvider, STATE) {
        $stateProvider
            .state(STATE.BASE, {
                url: '/app',
                abstract: true,
                templateUrl: 'app/common/menu/menu.html',
                controller: 'MenuController',
                controllerAs: 'mv'
            })
            .state(STATE.SPLASH, {
                url: '/splash',
                templateUrl: 'app/common/splash/splash.html',
                controller: 'SplashController',
                controllerAs: 'mv'
            })
    }

})();