const electron = require('electron');
const path = require('path');
const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function () {
  // Create new window
  mainWindow = new BrowserWindow({
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  // Load html in window
  mainWindow.loadFile(path.join(__dirname + '/render/views/login.html'))

  ipcMain.on('close-window', () => { mainWindow.close(); })
  ipcMain.on('minimize', () => { mainWindow.hide(); });

  // Quit app when closed
  mainWindow.on('closed', function () {
    app.quit();
  });

});