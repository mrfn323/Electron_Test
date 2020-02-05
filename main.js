const {BrowserWindow, app} = require('electron');

try{
function createWindow(){

    let win = new BrowserWindow({

        width: 800,
        height: 600,
        webPreferences:{
            nodeintegration : true
        }

    })

    win.loadFile('index.html')

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
}catch(e){

    console.log("Uh oh, big sucky sucky bad. Error catch haha funny");
    app.exit();

}

