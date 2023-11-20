const { app, BrowserWindow } = require("electron")
const path = require("path")

app.on('ready', () => {
	let window = new BrowserWindow({width:800, height:600});
	window.loadURL(path.join("file://", __dirname, "/index.htm"));
});

app.on('close', () => {
	window = null;
});
