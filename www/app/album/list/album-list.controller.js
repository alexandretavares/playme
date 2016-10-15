(function() {
    'use strict';

    angular.module("playme.album").controller("AlbumListController", AlbumListController);
    AlbumListController.$inject = ['$scope', '$state', 'albumService', 'STATE'];

    function AlbumListController($scope, $state, albumService, STATE) {
        var mv = this;

        mv.goDetail = function(album) {
            $state.go(STATE.ALBUM.DETAIL, { album: album });
        };

        mv.refreshList = function() {
            albumService.list()
                .then(function(albums) {
                    mv.albums = albums;
                })
                .catch(function(error) {
                    mv.albums = [];
                    console.error(error);
                });
        };

        $scope.$on("$ionicView.loaded", function(event, data) {
            mv.refreshList();
        });

        (function() {
            mv.albums = [];
        })();
    }

})();