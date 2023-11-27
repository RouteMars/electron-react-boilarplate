import { app, BrowserWindow } from 'electron';

import { optimizer, platform } from '@electron-toolkit/utils';
// import {platform} from 'node:process';
import Common from '@util/common';

import { createWindow } from './window';

if (require('electron-squirrel-startup')) {
  app.quit();
}

app.whenReady().then(() => {
  Common.debug('whenReady');
  createWindow();

  // electronApp.setAppUserModelId("com.electron");
  // optimizer.registerFramelessWindowIpc();

  app.on('activate', () => {
    Common.debug('activate');
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  app.on('browser-window-created', (_, window) => {
    Common.debug('browser-window-created');
    optimizer.watchWindowShortcuts(window);
  });
});

app.on('window-all-closed', () => {
  Common.debug('window-all-closed');
  // if (platform !== 'darwin') {
  if (!platform.isMacOS) {
    app.quit();
  }
});
