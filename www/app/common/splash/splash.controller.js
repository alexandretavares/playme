(function() {
    'use strict';

    angular.module("playme.common").controller("SplashController", SplashController);
    SplashController.$inject = ['$scope', '$timeout', '$state', 'STATE'];

    function SplashController($scope, $timeout, $state, STATE) {
        var mv = this;

        $scope.$on("$ionicView.loaded", function(event, data) {
            $timeout(function () {
                $state.go(STATE.AUTH.LOGIN);
            }, 3000);
        });
    }

})();
