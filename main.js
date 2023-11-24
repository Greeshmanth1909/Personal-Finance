var path = require("path")
const { app, BrowserWindow} = require("electron");
const { isDataView } = require("util/types");

const isMac = process.platform === "darwin";
const isDev = process.env.NODE_ENV  !== 'production';

// Instantiate a new browser window

function CreateBrowserWindow() {
    const mainWindow = new BrowserWindow({
        title: "Personal Finance",
        height: 600,
        width: 900
    })
    // open dev toold if in dev env
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}


app.whenReady().then(() => {
    CreateBrowserWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) CreateBrowserWindow()
      })
})

app.on("window-all-closed", () => {
    if (!isMac) {
        app.quit();
    }
})