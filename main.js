var path = require("path")
const { app, BrowserWindow} = require("electron");

// Instantiate a new browser window

function CreateBrowserWindow() {
    const mainWindow = new BrowserWindow({
        title: "Personal Finance",
        height: 600,
        width: 900
    })
    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}


app.whenReady().then(() => {
    CreateBrowserWindow();
})