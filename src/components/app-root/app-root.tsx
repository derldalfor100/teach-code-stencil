import { Component, h } from '@stencil/core';
import { EnvironmentConfigService } from '../../config/enviroment-config.service';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true
})
export class AppRoot {

  private url: string;

  private mode: string;

  componentWillLoad() {

    console.warn('env:', EnvironmentConfigService.getInstance());

    this.url = EnvironmentConfigService.getInstance().get('ROOT_URL');

    this.mode = EnvironmentConfigService.getInstance().get('NAME');

    console.warn('window history', window.history);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
          <h2>{this.url}</h2>
          <h3>{this.mode}</h3>
        </header>

        <main>
          <stencil-router historyType={ 'hash' }>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url={'/home'} component='app-home' exact={true} />
              <stencil-route url={ '/profile/:name' } component='app-profile' />
              {
                !sessionStorage.getItem('sub-path') || 
                window.location.hash.substring(0, window.location.hash.length - 1).indexOf('profile/') < 0 ? 
                <stencil-router-redirect url={'/home'} /> : ''
              }
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
