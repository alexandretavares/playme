(function() {
    'use strict';

    angular.module("playme.common").constant("STATE", {
        BASE: "app",
        SPLASH: "splash",
        AUTH: {
            BASE: "auth",
            LOGIN: "auth.login"
        },
        ALBUM: {
            LIST: "app.album-list",
            DETAIL: "app.album-detail",
            FAVORITE: "app.album-favorite"
        }
    });

})();