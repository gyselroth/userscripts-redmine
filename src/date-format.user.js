// ==UserScript==
// @name       Redmine date format
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// @match      https://ticket.yourdomain.com/*
// ==/UserScript==

(function(){
    function replaceAll(k, from, to) {
        var i = 0;
        var j = from.length;
        var l = to.length;

        while (i <= k.length) {
            if (k.substring(i, i + j) == from) {
                    k = k.substring(0, i) + k.substring(i).replace(from, to);
                    i += l;
            } else {
                i++;
            }
        }

        return k;
    }

    function reformatDate(i, elem){
        newDate  = replaceAll($(elem).text(), "/", ".");
        fullYear = new Date().getFullYear().toString();
        newDate  = newDate.replace(fullYear, fullYear.substr(2,2));
        newDate  = newDate.substr(3,2) + "." + newDate.substr(0,2) + "." + newDate.substr(6,2);
        $(elem).text(newDate);
    }
    $('.updated_on').each(reformatDate);
})();