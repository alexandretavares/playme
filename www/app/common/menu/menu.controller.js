(function() {
    'use strict';

    angular.module("playme.common").controller("MenuController", MenuController);
    MenuController.$inject = ['$rootScope', 'STATE', 'APP_EVENT'];

    function MenuController($rootScope, STATE, APP_EVENT) {
        var mv = this;

        mv.logout = function() {
            $rootScope.$emit(APP_EVENT.LOGOUT);
        };

        (function() {
            mv.STATE = STATE;
        })();
    }

})();
