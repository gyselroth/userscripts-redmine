// ==UserScript==
// @name         Redmine pre-select activity "Development"
// @description  Pre-select activity: "" when there's only one option
// @match        https://ticket.yourdomain.com/issues/*/time_entries/new**
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('#time_entry_activity_id option[value="9"]').prop("selected", true);
})();