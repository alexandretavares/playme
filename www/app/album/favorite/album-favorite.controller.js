(function() {
    'use strict';

    angular.module("playme.album").controller("AlbumFavoriteController", AlbumFavoriteController);
    AlbumFavoriteController.$inject = ['$scope', '$state', 'albumService', 'STATE'];

    function AlbumFavoriteController($scope, $state, albumService, STATE) {
        var mv = this;

        mv.goDetail = function(album) {
            $state.go(STATE.ALBUM.DETAIL, { album: album });
        };

        $scope.$on("$ionicView.loaded", function (event, data) {
            albumService.favorites()
                .then(function(albums) {
                    mv.favorites = albums;
                })
                .catch(function(error) {
                    mv.favorites = [];
                    console.error(error);
                });
        });

        (function() {
            mv.favorites = [];
        })();
    }

})();
