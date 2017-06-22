// ==UserScript==
// @name       Redmine username shorten
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// @match      https://ticket.yourdomain.com/*
// ==/UserScript==

(function() {
    $.each($('.list a.user'), function(key, user) {
        var name = $(user).text().split(' ');
        if (name.length > 1) {
//       $(user).text(name[0] + ' ' + name[1].substr(0, 1) + '.');
            $(user).text(name[0]);
            $(user).attr('title', name[0] + ' ' + name[1]);
        }
    });
})();
