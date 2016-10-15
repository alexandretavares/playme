(function() {
    'use strict';

    angular.module("playme.album", ['playme.common']).config(config);
    config.$inject = ['$stateProvider', 'STATE'];

    function config($stateProvider, STATE) {
        $stateProvider
            .state(STATE.ALBUM.LIST, {
                url: "/album-list",
                views: {
                    'menu-content': {
                        templateUrl: "app/album/list/album-list.html",
                        controller: "AlbumListController",
                        controllerAs: "mv"
                    }
                }
            })
            .state(STATE.ALBUM.DETAIL, {
                url: "/album/detail",
                params: {
                    album: null
                },
                views: {
                    'menu-content': {
                        templateUrl: "app/album/detail/album-detail.html",
                        controller: "AlbumDetailController",
                        controllerAs: "mv"
                    }
                }
            })
            .state(STATE.ALBUM.FAVORITE, {
                url: "/album-favorite",
                views: {
                    'menu-content': {
                        templateUrl: "app/album/favorite/album-favorite.html",
                        controller: "AlbumFavoriteController",
                        controllerAs: "mv"
                    }
                }
            });
    }

})();