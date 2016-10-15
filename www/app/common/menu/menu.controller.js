(function() {
    'use strict';

    angular.module("playme.common").controller("MenuController", MenuController);
    MenuController.$inject = ['$rootScope', '$ionicSideMenuDelegate', 'STATE'];

    function MenuController($rootScope, $ionicSideMenuDelegate, STATE) {
        var mv = this;

        (function() {
            mv.STATE = STATE;

            // $rootScope.$on('$ionicView.enter',
            //     function(event, toState, toParams, fromState, fromParams) {
            //         if ($ionicSideMenuDelegate.isOpenLeft()) {
            //             $ionicSideMenuDelegate.toggleLeft(false);
            //         }
            //     }
            // );
        })();
    }

})();
