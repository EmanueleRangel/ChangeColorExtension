window.addEventListener(`load`, () => {
    chrome.runtime.onMessage.addListener( (media, sender, sendResponse) => {
        if (media.event === 'get-header') {
            const header = document.getElementsByClassName('header-menu');
            sendResponse({header: header != null && header.length > 0});
        }
    })
});