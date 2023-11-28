import { IpcRendererEvent } from 'electron';

import { CHANNEL_MAIN_TEST, CHANNEL_RENDERER_TEST } from '@util/ipcChannel';

export type RenderListener = (event: IpcRendererEvent, ...args: any[]) => void;

const ipcRenderer = window.electron.ipcRenderer;

const sendTest = (message: string) => {
  ipcRenderer.send(CHANNEL_MAIN_TEST, message);
};

const onTest = (listener: RenderListener) => {
  ipcRenderer.on(CHANNEL_RENDERER_TEST, listener);
};

export { sendTest, onTest };
