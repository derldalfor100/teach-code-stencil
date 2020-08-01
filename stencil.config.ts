import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

let globalScript: string = 'src/global/app.ts';

let baseUrl: string = '/teach-code-stencil';

let indexHtml:string = '/teach-code-stencil';

const dev: boolean = process.argv && process.argv.indexOf('--dev') > -1;

const local: boolean = process.argv && process.argv.indexOf('--local') > -1;

if (dev) {
  globalScript = 'src/global/app-dev.ts';

  baseUrl = '/';

  indexHtml = null;
}

if(local) {

  baseUrl = '/';

  indexHtml = null;
}

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  globalScript: globalScript,
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: baseUrl,
      indexHtml: indexHtml
    }
  ],
  rollupPlugins: {
    before: [

    ],
    after: [

    ]
  },
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/variables.scss',
        'node_modules/bootstrap/scss/bootstrap.scss'
      ]
    })
  ]
};
