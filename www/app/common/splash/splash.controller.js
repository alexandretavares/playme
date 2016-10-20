(function() {
    'use strict';

    angular.module("playme.common").controller("SplashController", SplashController);
    SplashController.$inject = ['$scope', '$timeout', '$state', '$ionicHistory', 'STATE'];

    function SplashController($scope, $timeout, $state, $ionicHistory, STATE) {
        $scope.$on("$ionicView.loaded", function(event, data) {
            $ionicHistory.nextViewOptions({
                historyRoot: true,
                disableBack: true,
                disableAnimate: true
            });

            $timeout(function() {
                $state.go(STATE.AUTH.LOGIN).then(function() {
                    $ionicHistory.clearHistory();
                });
            }, 4000);
        });
    }

})();
