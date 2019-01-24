// window.bears = {}

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     // window.bears[request.url] = request.count
// })

chrome.browserAction.onClicked.addListener(function(tab) {
    // chrome.tabs.create({
    //     url: 'popup.html'
    // })
    // alert("should enable remover")
    chrome.tabs.executeScript(tab.id, {
        file: 'inject.js'
    });
})

// chrome.runtime.onInstalled.addListener(function() {
//     console.log("am I here now?");
// })