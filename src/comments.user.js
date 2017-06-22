// ==UserScript==
// @name         Redmine better comments
// @description  Improve redmine comments UI/UX
// @match      *://ticket.yourdomain.com/**
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	
	var _style = '<style>' +
		'#history .journal {' +
		    'margin: 20px 0;' +
		    'padding: 20px;' +
		    'border-bottom: 1px dotted #ccc;' +
    	    'background-color: #efefef;' +
		'}' +
		'#history .journal h4 {' +
		    'border-bottom: none;' +
    		'margin-bottom: 30px;' +
		'}' +
		'#history .journal.has-details {' +
		    'background-color: #ffffff;' +
		
		'}' +
		'#history .journal.has-notes {' +
		    'background-color: #efefef;' +
		    'border-bottom: 1px dotted #ccc;' +
		'}' +
		'#history .journal.private-notes {' +
		    'background-color: #f3e3e8;' +
		    'border-bottom: none;' +
		'}' +
		'#history .journal p {' +
    		'line-height: 22px;' +
	    	'margin: 1.2em 0;' +
		'}' +
		'#history .journal li {' +
    		'line-height: 22px;' +
		'}' +
		'#history .journal.has-notes ul.details {' +
		'    color: #959595;' +
		'    margin-bottom: 1.5em;' +
		'    background: #efefef;' +
		'    padding-top: 10px;' +
		'    padding-bottom: 10px;' +
		'    border: 1px dotted #ccc;' +
		'}' +
		
		'td {' +
		'    padding: 6px 5px !important;' +
		'    vertical-align: middle !important;' +
		'}' +
		
		'ul.details i {' +
    		'background-color: #aeafaa;' +
		    'padding: 2px 4px;' +
		    'color: #fff;' +
	    	'border-radius: 2px;' +
		    'font-size: 11px' +
		'}' +
		'a[href*="/attachments/download/"]:not(.icon-attachment) {' +
		'	background: #70A7CE;' +
		'	color: #fff !important;' +
		'	padding: 2px 4px;' +
		'   border-radius: 2px;' +
		'}' +
		'</style>'
		;

    $('head').append(_style);
})();