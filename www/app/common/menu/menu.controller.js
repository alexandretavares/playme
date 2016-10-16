(function() {
    'use strict';

    angular.module("playme.common").controller("MenuController", MenuController);
    MenuController.$inject = ['$state', '$ionicHistory', 'STATE'];

    function MenuController($state, $ionicHistory, STATE) {
        var mv = this;

        mv.logout = function() {
            $ionicHistory.clearHistory();

            $ionicHistory.nextViewOptions({
                historyRoot: true,
                disableBack: true
            });

            $ionicHistory.clearCache().then(function() {
                $state.go(STATE.AUTH.LOGIN);
            });
        };

        (function() {
            mv.STATE = STATE;
        })();
    }

})();
