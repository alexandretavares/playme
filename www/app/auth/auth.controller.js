(function() {
    'use strict';

    angular.module("playme.auth").controller("AuthController", AuthController);
    AuthController.$inject = ['$scope', '$window', '$state', 'STATE'];

    function AuthController($scope, $window, $state, STATE) {
        var mv = this;

        mv.goSignupForm = function() {
            mv.signupFormVisible = true;
            $state.go(STATE.AUTH.SIGNUP);
        };

        mv.goLoginForm = function() {
            mv.signupFormVisible = false;
            $state.go(STATE.AUTH.LOGIN);
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
            mv.visibleKeyboard = false;
            mv.signupFormVisible = false;
        })();

    }

})();
