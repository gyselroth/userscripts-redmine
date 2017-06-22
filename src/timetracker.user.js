// ==UserScript==
// @name         Redmine timetracker
// @description  Redmine timetracker
// @match        https://ticket.yourdomain.com/time_entries/new
// @match        https://ticket.yourdomain.com/time_entries/*/edit
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var $date     = $('#time_entry_spent_on');
    var $date_row = $date.parent();
    // var $pane     = $date_row.parent();
    var $cal_row = $('<div>')
        .css('padding-left', '180px')
        .insertAfter($date_row);

    var $cal_style = $('<style>')
        .attr('type', 'text/css')
        .text(
            '.ui-datepicker-current-day .ui-state-active,'
            + '.ui-widget-content .ui-datepicker-current-day .ui-state-active,'
            + '.ui-widget-header .ui-datepicker-current-day .ui-state-active'
            + '{ background-color: green; background-image: none; color: white; }'
        ).insertBefore($cal_row);

    var cur_date = $date.val();

    $cal_row.datepicker({
        altField        : "#time_entry_spent_on",
        altFormat       : 'yy-mm-dd',
        dateFormat      : "yy-mm-dd",
        numberOfMonths  : 3,
        showCurrentAtPos: 1,
        onSelect        : function(dateText, datePicker) {
            datePicker.drawMonth += $cal_row.datepicker("option", "showCurrentAtPos");
        }
    });
    $cal_row.datepicker('setDate', cur_date);


    // Insert textarea into comment field
    $('#time_entry_comments').each(function(i, el) {
        var attrs = {'rows': 5};
        var value = $(el).val();

        $.each(el.attributes, function(j, attr) {
            attrs[attr.nodeName] = attr.nodeValue;
        });

        $('<textarea>', attrs).insertAfter(el).val(value);
        $(el).remove();
    });
})();