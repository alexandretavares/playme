(function() {
    'use strict';

    angular.module('playme',
        [
            'ionic',
            'ngAnimate',
            'ionic-ratings',
            'playme.common',
            'playme.auth',
            'playme.album'
        ]
    ).run(run);

    run.$inject = ['$rootScope', '$ionicPlatform', '$ionicHistory', '$ionicPopup', 'STATE', 'APP_EVENT'];

    function run($rootScope, $ionicPlatform, $ionicHistory, $ionicPopup, STATE, APP_EVENT) {
        var exitApp = function() {
            $ionicPopup.confirm({
                title: 'System warning',
                template: 'are you sure you want to exit?',
                okType: 'button-royal'
            }).then(function (res) {
                if (res) {
                    navigator.app.exitApp();
                }
            });
        };

        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
              cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
              cordova.plugins.Keyboard.disableScroll(true);
            }

            if (window.StatusBar) {
                StatusBar.styleDefault();
            }

            $ionicPlatform.registerBackButtonAction(function(event) {
                var currentState = $ionicHistory.currentStateName();

                if ((currentState == STATE.SPLASH) || (currentState == STATE.AUTH.LOGIN)) {
                    exitApp();
                } else {
                    var backView = $ionicHistory.backView();

                    if (backView) {
                        var previousState = backView.stateName;

                        if (previousState == STATE.AUTH.LOGIN) {
                            $rootScope.$emit(APP_EVENT.LOGOUT);
                        } else {
                            $ionicHistory.goBack();
                        }
                    } else {
                        $rootScope.$emit(APP_EVENT.LOGOUT);
                    }
                }
            }, 100);

        });
    }

})();
