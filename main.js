const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const url = require('url');

// init window
let mainWindow;

// Run create window func
app.on('ready', function() {
	// Create new window
	mainWindow = new BrowserWindow({icon: path.join(__dirname, 'mainWindow.html')});
	// Load html into window
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'mainWindow.html'),
		protocol: 'file:',
		slashes: true
	}));

	// Build menu from mainMenuTemplate
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	// Insert Menu
	//Menu.setApplicationMenu(mainMenu);
});

// Quit when all windows closed
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});

// Create menu template
const mainMenuTemplate = [
	{
		label: 'File'
	}
];
/*
var http = require('http');

var option = {
    hostname : "localhost" ,
    port : 8000 ,
    method : "POST",
    path : "/"
}

var request = http.request(option, function(resp) {
	resp.on("data", function(chunck){
    	console.log(chunck.toString());
    });
});
request.end();
*/