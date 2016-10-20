(function() {
    'use strict';

    angular.module("playme.album").service("albumService", AlbumService);
    AlbumService.$inject = ['$q', '$filter', 'albumList'];

    function AlbumService($q, $filter, albumList) {

        this.list = function() {
            return $q.resolve(angular.copy(albumList));
        };

        this.favorites = function() {
            return $q.resolve($filter('limitTo')(albumList, 7));
        };
        
    }

})();
