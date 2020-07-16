import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

let globalScript: string = 'src/global/app.ts';

const dev: boolean = process.argv && process.argv.indexOf('--dev') > -1;

if (dev) {
  globalScript = 'src/global/app-dev.ts';
}

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: globalScript,
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://derldalfor100.github.io/teach-code-vue/'
    }
  ]
};
