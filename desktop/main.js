const { app, BrowserWindow } = require('electron');
const path = require('path');

// deixa o áudio tocar sem esperar clique
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

function criar() {
  const w = new BrowserWindow({
    width: 1280, height: 720,
    backgroundColor: '#0a0305',
    title: 'DETG Maker',
    webPreferences: { backgroundThrottling: false }
  });
  w.setMenu(null);
  w.loadFile(path.join(__dirname, 'index.html'));
  // F11 = tela cheia
  w.webContents.on('before-input-event', (e, i) => {
    if (i.type === 'keyDown' && i.key === 'F11') w.setFullScreen(!w.isFullScreen());
  });
}

app.whenReady().then(criar);
app.on('window-all-closed', () => app.quit());
