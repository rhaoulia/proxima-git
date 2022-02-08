const { BrowserWindow,remote,ipcRenderer } = require('electron')
const closeBtn = document.getElementById('close-btn')
const minBtn = document.getElementById("min-btn")
const maxBtn = document.getElementById("max-btn")

closeBtn.addEventListener('click', function () {
       ipcRenderer.send('close-window');
})

minBtn.addEventListener("click", function () {
       ipcRenderer.send(mainWindow.close());
});

maxBtn.addEventListener("click", function () { 
       ipcRenderer.send('maximize');
});
