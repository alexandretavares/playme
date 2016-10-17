(function() {
    'use strict';

    angular.module("playme.auth").controller("AuthController", AuthController);
    AuthController.$inject = ['$scope', '$window', '$state', '$timeout', 'STATE'];

    function AuthController($scope, $window, $state, $timeout, STATE) {
        var mv = this;

        mv.showSignupForm = function() {
            mv.loginMode = false;
            mv.signupFormVisible = true;

            $timeout(function() {
                mv.signupMode = true;
            }, 1100);
        };

        mv.showLoginForm = function() {
            mv.signupMode = false;
            mv.signupFormVisible = false;

            $timeout(function() {
                mv.loginMode = true;
            }, 1100);
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

        (function() {
            mv.signupMode = false;
            mv.loginMode = true;
            mv.visibleKeyboard = false;
            mv.signupFormVisible = false;
        })();

    }

})();
