window.addEventListener(`load`, async () => {
    const  [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.tabs.sendMessage(tab.id, {event: "get-header"}, (response) => {
        if (!response || !response.header) {
            const container = document.getElementById('container');
            container.innerHTML = '<h6 class="text-center">Essa extensão apenas está habilitada para o site https://www.boticario.com.br</h6>';
        }
    })
});

(() => {
    window.onload = async () => {
        document.querySelector(`input`).oninput = async (event) => {
            const  [tab] = await chrome.tabs.query({active: true, currentWindow: true});
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                function: setBackgroundHeaderColor,
                args: [document.querySelector(`input`).value]
            });

        }
    }
})()

function setBackgroundHeaderColor(color) {
    const header = document.getElementsByClassName('header-menu');
    if (header && header.length > 0) {
        header[0].style.backgroundColor = color;
    }
}