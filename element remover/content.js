// alert('Grr')
// chrome.runtime.onMessage.addListener((req, sender, sendResponse) => { // anytime a message is sent
//     const re = new RegExp('bear', 'gi')
//     const matches = document.documentElement.innerHTML.match(re)
//     sendResponse({count: matches.length})
//     console.log("matches.count", matches.length)
//     alert("number of bears: " + matches.length)
// })

const re = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.match(re)

chrome.runtime.sendMessage({
    url: window.location.href,
    count: matches.length
})