(function() {
    'use strict';

    angular.module("playme.auth").controller("AuthController", AuthController);
    AuthController.$inject = ['$scope', '$window', '$state', 'STATE'];

    function AuthController($scope, $window, $state, STATE) {
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

        (function() {
            mv.loginMode = true;
            mv.visibleKeyboard = false;
        })();

    }

})();
