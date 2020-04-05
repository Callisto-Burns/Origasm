global.__basedir = __dirname

const electron = require('electron')
const url = require('url')
const path = require('path')

const {app, BrowserWindow} = electron

let mainWindow

app.on('ready', ()=> {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false
    })
})
 