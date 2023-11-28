import { BrowserWindow, shell } from 'electron';

import { ipcHelper } from '@electron-toolkit/utils';
import Common from '@util/common';
import { CHANNEL_MAIN_TEST, CHANNEL_RENDERER_TEST } from '@util/ipcChannel';

const customIPC = () => {
  ipcHelper.on(CHANNEL_MAIN_TEST, (event, res) => {
    // Common.debug(event);
    Common.debug(res);
    event.sender.send(CHANNEL_RENDERER_TEST, 'test hello');
  });
};

const registerIPC = (browserWindow: BrowserWindow) => {
  ipcHelper.handle('open-url', (event, url) => {
    void shell.openExternal(url);
  });

  // Window Control
  ipcHelper.handle('window-close', browserWindow.close);
  ipcHelper.handle('window-minimize', browserWindow.minimize);
  ipcHelper.handle('window-maximize', browserWindow.maximize);
  ipcHelper.handle('window-toggle-maximize', () => {
    if (browserWindow.isMaximized()) {
      browserWindow.unmaximize();
    } else {
      browserWindow.maximize();
    }
  });

  // Web Control
  ipcHelper.handle('web-undo', browserWindow.webContents.undo);
  ipcHelper.handle('web-redo', browserWindow.webContents.redo);
  ipcHelper.handle('web-cut', browserWindow.webContents.cut);
  ipcHelper.handle('web-copy', browserWindow.webContents.copy);
  ipcHelper.handle('web-paste', browserWindow.webContents.paste);
  ipcHelper.handle('web-delete', browserWindow.webContents.delete);
  ipcHelper.handle('web-select-all', browserWindow.webContents.selectAll);
  ipcHelper.handle('web-reload', browserWindow.webContents.reload);
  ipcHelper.handle(
    'web-force-reload',
    browserWindow.webContents.reloadIgnoringCache,
  );
  ipcHelper.handle(
    'web-toggle-devtools',
    browserWindow.webContents.toggleDevTools,
  );
  ipcHelper.handle('web-actual-size', () => {
    browserWindow.webContents.setZoomLevel(0);
  });
  ipcHelper.handle('web-zoom-in', () => {
    browserWindow.webContents.setZoomLevel(
      browserWindow.webContents.zoomLevel + 0.5,
    );
  });
  ipcHelper.handle('web-zoom-out', () => {
    browserWindow.webContents.setZoomLevel(
      browserWindow.webContents.zoomLevel - 0.5,
    );
  });
  ipcHelper.handle('web-toggle-fullscreen', () => {
    browserWindow.setFullScreen(!browserWindow.fullScreen);
  });

  customIPC();
};

export { registerIPC };
