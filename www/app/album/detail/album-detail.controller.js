(function() {
    'use strict';

    angular.module("playme.album").controller("AlbumDetailController", AlbumDetailController);
    AlbumDetailController.$inject = ['$scope', '$state', 'albumService', 'STATE'];

    function AlbumDetailController($scope, $state, albumService, STATE) {
        var mv = this;

        $scope.$on("$ionicView.loaded", function (event, data) {
            if (data.stateParams) {
                mv.album = data.stateParams.album;
            }
        });

        (function() {
            mv.album = {};
        })();
    }

})();
