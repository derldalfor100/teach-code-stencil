import { Component, h } from '@stencil/core';
import { EnvironmentConfigService } from '../../config/enviroment-config.service';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  private url: string;

  componentWillLoad() {
    
    this.url = EnvironmentConfigService.getInstance().get('ROOT_URL');
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
          <h2>{ this.url }</h2>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
