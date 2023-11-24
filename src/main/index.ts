import { app, BrowserWindow } from "electron";
import { createWindow } from "./window";
// import {platform} from 'node:process';
import { optimizer, platform } from "@electron-toolkit/utils";

if (require("electron-squirrel-startup")) {
  app.quit();
}

// app.on("ready", createWindow);

app.whenReady().then(() => {
  console.log("whenReady");
  createWindow();

  // electronApp.setAppUserModelId("com.electron");
  // optimizer.registerFramelessWindowIpc();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  app.on("browser-window-created", (_, window) => {
    console.log("browser-window-created");
    optimizer.watchWindowShortcuts(window);
  });
});

app.on("window-all-closed", () => {
  // if (platform !== 'darwin') {
  if (!platform.isMacOS) {
    app.quit();
  }
});
