var config = chrome.extension.getURL('mathjax_config.js');
var mathjax = chrome.extension.getURL('MathJax/MathJax.js');
var jquery = chrome.extension.getURL('jquery-min-1.7.2.js');
var show_math = chrome.extension.getURL('show_math.js');
var hide_math = chrome.extension.getURL('hide_math.js');
var first = true;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	$.include([config, jquery], function() {
    	$.include([mathjax], function() {
			if (first){
				$.getScript(show_math);
				first = false;
			} else {
				if (request.identificador){
					$.getScript(show_math);
				} else {
					$.getScript(hide_math);
				}
			}
		});
    });
});

