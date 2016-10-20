(function() {
    'use strict';

    angular.module("playme.auth").controller("AuthController", AuthController);
    AuthController.$inject = ['$rootScope', '$scope', '$window', '$state', '$ionicHistory', 'STATE', 'APP_EVENT'];

    function AuthController($rootScope, $scope, $window, $state, $ionicHistory, STATE, APP_EVENT) {
        var mv = this;

        mv.showSignupForm = function() {
            mv.loginMode = false;
        };

        mv.showLoginForm = function() {
            mv.loginMode = true;
        };

        mv.doLogin = function() {
            $state.go(STATE.ALBUM.FAVORITE);
        };

        $scope.$on("$ionicView.loaded", function(event, data) {
            $window.addEventListener('native.keyboardshow', function() {
                $scope.$apply(function() {
                    mv.visibleKeyboard = true;
                });
            });

            $window.addEventListener('native.keyboardhide', function() {
                $scope.$apply(function() {
                    mv.visibleKeyboard = false;
                });
            });
        });

        $rootScope.$on(APP_EVENT.LOGOUT, function() {
            $ionicHistory.nextViewOptions({
                historyRoot: true,
                disableBack: true,
                disableAnimate: true
            });
    
            $state.go(STATE.AUTH.LOGIN).then(function() {
                $ionicHistory.clearHistory();
            });
        });

        (function() {
            mv.loginMode = true;
            mv.visibleKeyboard = false;
        })();

    }

})();
