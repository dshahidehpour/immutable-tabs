chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function(tab) {
    if (tab.pinned) {
      alert("This tab is pinnned!");
    }
});
});
