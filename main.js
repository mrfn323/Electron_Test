const {BrowserWindow, app} = require('electron');

function createWindow(){

    let win = new BrowserWindow({

        width: 800,
        height: 600,
        webPreferences:{
            nodeintegration : true
        }

    })

    win.loadFile('index.html')
    win.webContents.openDevTools();

    win.on('close', ()=>{

        win = null;

    })

}

app.on('ready', createWindow);
app.on('window-all-closed', ()=>{
    if(process.platform == 'darwin'){
        app.quit();
    }
});
app.on('activate', ()=>{

    if(win == null){
        createWindow();
    }

})
