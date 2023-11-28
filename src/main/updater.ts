import { app, autoUpdater, dialog } from 'electron';

import { platform } from '@electron-toolkit/utils';
import Common from '@util/common';
// import log from 'electron-log/main';

const init = () => {
  ////////////////////////////////////////
  // Init
  const server = 'https://your-deployment-url.com';
  const url = `${server}/update/${process.platform}/${app.getVersion()}`;
  autoUpdater.setFeedURL({ url, serverType: 'json' });

  ////////////////////////////////////////
  // Event
  // autoUpdater.on('download-progress', (progress) => {
  //   let log_message = '다운로드 속도: ' + progress.bytesPerSecond;
  //   log_message = log_message + ' - 현재 ' + progress.percent + '%';
  //   log_message =
  //   log_message + ' (' + progress.transferred + '/' + progress.total + ')';
  //   log.info(log_message);
  // });
  autoUpdater.on('checking-for-update', () => {
    Common.debug('checking-for-update');
    // log.info('업데이트 확인 중...');
  });
  autoUpdater.on('update-available', () => {
    Common.debug('update-available');
    // log.info('업데이트가 가능합니다.');
  });
  autoUpdater.on('update-not-available', () => {
    Common.debug('update-not-available');
    // log.info('현재 최신버전입니다.');
  });
  autoUpdater.on('before-quit-for-update', () => {
    // for quitAndInstall()
    Common.debug('before-quit-for-update');
  });
  autoUpdater.on('error', (error: Error) => {
    Common.debug('error');
    Common.debug(error);
    // log.info('에러가 발생하였습니다. 에러내용 : ' + err);
  });
  autoUpdater.on(
    'update-downloaded',
    (
      event: Event,
      releaseNotes: string,
      releaseName: string,
      releaseDate: Date,
      updateURL: string,
    ) => {
      Common.debug('update-downloaded');
      Common.debug(event, releaseNotes, releaseName, releaseDate);
      Common.debug(updateURL);
      // log.info('업데이트가 완료되었습니다.');
      dialog
        .showMessageBox({
          type: 'info',
          buttons: ['Restart', 'Later'],
          title: 'Application Update',
          message: platform.isWindows ? releaseNotes : releaseName,
          detail:
            '새 버전이 다운로드되었습니다. 업데이트를 적용하려면 애플리케이션을 다시 시작하세요.',
        })
        .then((returnValue) => {
          if (returnValue.response === 0) autoUpdater.quitAndInstall();
        });
    },
  );
};

const checkInterval = () => {
  // setInterval(() => {
  Common.debug(autoUpdater.getFeedURL());
  autoUpdater.checkForUpdates();
  // }, 60 * 1000);
};

export { init, checkInterval };
