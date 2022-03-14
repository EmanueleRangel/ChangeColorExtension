// window.addEventListener(`load`, () => {
//     browser.runtime.onMessage.addListener( (media, sender, sendResponse) => {
//         if (media.event === 'get-header') {
//             const header = document.getElementsByClassName('header-menu');
//             sendResponse({header: header != null && header.length > 0});
//         }
//     })
// });

document.addEventListener("click", function(e) {
    if (!e.target.classList.contains("main")) {
      return;
    }
  
    var chosenColor = e.target.textContent;
  
    chrome.tabs.executeScript(null, {
      file: "/static/js/main.js"
    });
  
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {main: chosenColor});
    });
  
  });