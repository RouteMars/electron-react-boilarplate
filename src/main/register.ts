import { BrowserWindow, shell } from "electron";
import { ipcHelper } from "@electron-toolkit/utils";

export const registerIPC = (browserWindow: BrowserWindow): void => {
  // Function
  ipcHelper.handle("open-url", (event, url) => {
    void shell.openExternal(url);
  });
  // ipcMain.handle('open-url', (e, url) => {
  //   void shell.openExternal(url);
  // });

  // Window Control
  ipcHelper.handle("window-close", browserWindow.close);
  ipcHelper.handle("window-minimize", browserWindow.minimize);
  ipcHelper.handle("window-maximize", browserWindow.maximize);
  ipcHelper.handle("window-toggle-maximize", () => {
    if (browserWindow.isMaximized()) {
      browserWindow.unmaximize();
    } else {
      browserWindow.maximize();
    }
  });
  // ipcMain.handle('window-close', browserWindow.close);
  // ipcMain.handle('window-minimize', browserWindow.minimize);
  // ipcMain.handle('window-maximize', browserWindow.maximize);
  // ipcMain.handle('window-toggle-maximize', () => {
  //   if (browserWindow.isMaximized()) {
  //     browserWindow.unmaximize();
  //   } else {
  //     browserWindow.maximize();
  //   }
  // });

  // Web Control
  ipcHelper.handle("web-undo", browserWindow.webContents.undo);
  ipcHelper.handle("web-redo", browserWindow.webContents.redo);
  ipcHelper.handle("web-cut", browserWindow.webContents.cut);
  ipcHelper.handle("web-copy", browserWindow.webContents.copy);
  ipcHelper.handle("web-paste", browserWindow.webContents.paste);
  ipcHelper.handle("web-delete", browserWindow.webContents.delete);
  ipcHelper.handle("web-select-all", browserWindow.webContents.selectAll);
  ipcHelper.handle("web-reload", browserWindow.webContents.reload);
  ipcHelper.handle(
    "web-force-reload",
    browserWindow.webContents.reloadIgnoringCache,
  );
  ipcHelper.handle(
    "web-toggle-devtools",
    browserWindow.webContents.toggleDevTools,
  );
  ipcHelper.handle("web-actual-size", () => {
    browserWindow.webContents.setZoomLevel(0);
  });
  ipcHelper.handle("web-zoom-in", () => {
    browserWindow.webContents.setZoomLevel(
      browserWindow.webContents.zoomLevel + 0.5,
    );
  });
  ipcHelper.handle("web-zoom-out", () => {
    browserWindow.webContents.setZoomLevel(
      browserWindow.webContents.zoomLevel - 0.5,
    );
  });
  ipcHelper.handle("web-toggle-fullscreen", () => {
    browserWindow.setFullScreen(!browserWindow.fullScreen);
  });
  // ipcMain.handle('web-undo', browserWindow.webContents.undo);
  // ipcMain.handle('web-redo', browserWindow.webContents.redo);
  // ipcMain.handle('web-cut', browserWindow.webContents.cut);
  // ipcMain.handle('web-copy', browserWindow.webContents.copy);
  // ipcMain.handle('web-paste', browserWindow.webContents.paste);
  // ipcMain.handle('web-delete', browserWindow.webContents.delete);
  // ipcMain.handle('web-select-all', browserWindow.webContents.selectAll);
  // ipcMain.handle('web-reload', browserWindow.webContents.reload);
  // ipcMain.handle('web-force-reload', browserWindow.webContents.reloadIgnoringCache);
  // ipcMain.handle('web-toggle-devtools', browserWindow.webContents.toggleDevTools);
  // ipcMain.handle('web-actual-size', () => {
  //   browserWindow.webContents.setZoomLevel(0);
  // });
  // ipcMain.handle('web-zoom-in', () => {
  //   browserWindow.webContents.setZoomLevel(browserWindow.webContents.zoomLevel + 0.5);
  // });
  // ipcMain.handle('web-zoom-out', () => {
  //   browserWindow.webContents.setZoomLevel(browserWindow.webContents.zoomLevel - 0.5);
  // });
  // ipcMain.handle('web-toggle-fullscreen', () => {
  //   browserWindow.setFullScreen(!browserWindow.fullScreen);
  // });
};
