// ==UserScript==
// @name       Redmine status highlighter
// @description  Highlight issue status etc. in redmine issue list and details
//
// Change "mydomain" or path "/redmine/" if needed:
// @match      *://ticket.yourdomain.com/*
// @match      *://ticket.yourdomain.com/issues*
// @match      *://ticket.yourdomain.com/projects/*
//
// @require    https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// ==/UserScript==

// Prevent jQuery version conflicts (with page)
this.$ = this.jQuery = jQuery.noConflict(true);

(function() {
    // Config
    var ENABLE_PRIORITY   = true; // highlight priority
    var ENABLE_STATUS     = true; // highlight status (and custom fields)
    var ENABLE_IN_LIST    = true; // highlight in issue list
    var ENABLE_IN_DETAILS = true; // highlight in issue detail view
    var DEV_TODO_ONLY     = true; // just highlight things that could be dev to-do's
    var MY_NAME           = "Kay Stenschke"; // for 'assigned to' highlighting

    // Which screen are we in
    var screen = (/\/issues\//.test(window.location.pathname))
        ? 2 // Detail screen
        : 1; // List screen

    // Not enabled for current screen?
    if ((screen == 1 && !ENABLE_IN_LIST) || (screen == 2 && !ENABLE_IN_DETAILS)) {
        return;
    }

    // -- PRIORITY ----------------------------------------------------------------
    if (ENABLE_PRIORITY) {
        var priorityList = $('.priority');
        jQuery.each(priorityList, function(i, elem) {
            text = $(elem).text().trim();
            if (text.indexOf("Immediate") !== -1) {
                // red
                $(elem).css({"background-color": "rgb(236, 101, 91)", 'color': '#fff'});
            } else if (text.indexOf("Urgent") !== -1) {
                // orange
                $(elem).css("background-color", "#FCA");
            } else if (text.indexOf("High") !== -1) {
                // gold
                $(elem).css("background-color", "#FE8");
            } /* else if (text == "Normal") {
                 // light blue
                 $(elem).css("background-color", "#DFF7FF");
            } else if (text == "Low") {
                 // light mint
                 $(elem).css("background-color", "#DFE");
            }*/
        });
    }

    // -- STATUS ------------------------------------------------------------------
    if (ENABLE_STATUS) {
        var statusList = $('.status');
        jQuery.each(statusList, function(i, elem) {
            text = $(elem).text().trim();
            // Change status and colors here

            // New: orange
            if (text.indexOf("New") !== -1) $(elem).css("background-color", "#ffa500");

            // In progress: green
            if (text === "In Progress") $(elem).css("background-color", "#90ef89");

            // Feedback: white on red
            if (text === "Feedback") $(elem).css({"background-color": "#910003", "color": "#fff"});

            // Yellow
            //if (text.indexOf("New") !== -1) $(elem).css("background-color", "#f2f9b3");

            // Resolved: pink
            if (text.indexOf("Resolved") !== -1 || text.indexOf("Closed") !== -1) $(elem).parent('tr').css("opacity", "0.3");

            /*if (!DEV_TODO_ONLY) { // ignore the following (not critical for devs)
             if(text == "Resolved")      $(elem).css("background-color", "#DFE"); // light mint
             if(text == "Closed")        $(elem).css("background-color", "#DDD"); // grey
             if(text == "Rejected")      $(elem).css("background-color", "#FB9"); // red/orange
             }*/
        });
    }

    // Assigned To
    var assignedTo = $('.assigned_to');
    jQuery.each(assignedTo, function(i, elem) {
        text = $(elem).text().trim();
        if (text.indexOf(MY_NAME) !== -1) $(elem).css("background-color", "#f2f9b3"); // gold
        if (text.indexOf('Laura') !== -1) $(elem).css("background-color", "#d6e9f0"); // light blue
        if (text.indexOf('Etienne') !== -1) $(elem).css("background-color", "#d6e9f0");
    });
})();