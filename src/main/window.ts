import { app, BrowserWindow } from 'electron';
import { is } from '@electron-toolkit/utils';
import { registerIPC } from './register';
import Common from '@util/common';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

export const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // devTools: is.dev,
      nodeIntegration: true,
      // contextIsolation: true,
      // nodeIntegrationInWorker: false,
      // nodeIntegrationInSubFrames: false,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.on('ready-to-show', mainWindow.show);
  mainWindow.on('close', app.quit);
  registerIPC(mainWindow);

  if (is.dev) {
    mainWindow.webContents.openDevTools();
  }

  // mainWindow.webContents.setWindowOpenHandler((details) => {
  //   void shell.openExternal(details.url);
  //   return { action: "deny" };
  // });

  // load - index.html
  if (is.dev) {
    mainWindow
      .loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
      .then(() => {
        Common.debug(MAIN_WINDOW_WEBPACK_ENTRY);
      })
      .catch((reason) => {
        Common.debug(reason);
      });
  } else {
    void mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  }
};
