// ==UserScript==
// @name         Redmine style + task icons
// @description  Redmine style + task icons
// @match        https://ticket.yourdomain.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $("<style type='text/css'>" +
        "table.list th { text-transform:uppercase; } " +
        "div.icon_bug { float:right; width:16px; height:16px; background-position:center center; background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC1ElEQVQ4T4WTWUxTURCG/7bUAgqIpEhEQpoisiiy98pSBDRBJWGJiUGfMCHGNx9w550HXEKUByNoDKghgqK44MYSoRDDEhAqYZM1hrUU6G1ve885pjUQUNTzNpOZ75+Z/EeCf7ykt3EMRJLSlN7SoH3GZVNKHzWf+OKyvkWyPkj5FKeuT9UNr+a0LzkGQmtDR5Xnu3fNpIKwG7pT7e5/BRxyKLILjemt1+1FCdWxFkZgCu3bXjetWMme3Sko/PpciipvNl9ahWyYQFvLLTIK588Zbc6JVZyRiMSdEQaIwBGVFodViXhTWYPe/q8XX5V2FtkhGwBJ1ZpkQlm9lEqNbjI3jzNBOdgq2wL93BgetJcjMmgvjnumobClBExkoCKDRPuCM4pUGqnL+rV73ONoKmdyybngkxia7YFZ4GGDM9qm+mFYMiLGNwzjVV1DH2sG9jgmSKjWWBlhckZQ7kSlaT7OPsoM/0QMTndj2WLEDL8MUeGBTNVRzK2s4G7zPWzT22p0T4ay1lbgKmJaQSgHAuRH5KJnqg0rliXMmpZhlbsh2VeDwR89CPQ+gDuNFSA20QSRXdEXDd5euwFXGmVRufkrorx8MbkwijmTCRaZK1L8NPg22QneyiNWlYLid2WgImWMMIn9DmsATUmkKcIn3DXYU4n28Q7wTIGDyv0YWdDDYhWgVoZgxiCgrvs9nGDx6rs1uaA+qypYA8QXxxSabZbLmcHH0DOtB6fch5GFXvCCgADvULzuaMG8cR4gkryBkqHSTX0QXRjeZJhf1F5Nz8eUoR9ThjH47VCD5+V42lINuycYYQKlrOB72ZjDbBt8YE+EXQtpAoU2OUgLJ4kMH7oawJvNkFLkEZEOU8KeM8I8iA0BE5UTw38A7JDQ/MCHoiCeJiKTOVRFphu5Pxa/2b/bFLC+UJ3r30oJ40SBORR/h/wXYG/wz9ltZRTm8cpJj98BPwHtvGDWZCLIewAAAABJRU5ErkJggg=='); background-repeat:no-repeat; } " +
        "div#sidebar { width: 150px; } " +
        "div#content { width:85% } " +

        "th[title='Sort by \"Tracker\"'] {display:none} " +
        "td.tracker{display:none}" +
        "</style>").appendTo("head");

    function padRight(i, element) {
        if ($(element).text().indexOf("BUG:") != -1) {
            $(element).append($('<div class="icon_bug"/>'));
        }
    }

    $('td.subject a').each(padRight);
})();