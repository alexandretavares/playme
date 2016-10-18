(function() {
    'use strict';

    var app = angular.module('playme');

    app.config(config);
    config.$inject = ['$urlRouterProvider', '$ionicConfigProvider'];

    function config($urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.backButton.text('').previousTitleText(false);
        $urlRouterProvider.otherwise("/splash");
    }

})();
