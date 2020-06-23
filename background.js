var toggle = false;
chrome.browserAction.onClicked.addListener(function (tab) {
	toggle = !toggle;
    	chrome.tabs.sendMessage(tab.id, {
        	identificador: toggle
    	});
  	if(toggle){
  		chrome.browserAction.setIcon({path: "icon_active.png", tabId:tab.id});
    } else {
    	chrome.browserAction.setIcon({path: "icon.png", tabId:tab.id});
    }
});

