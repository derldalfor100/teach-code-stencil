import { Component, h } from '@stencil/core';
import example from '../../assets/json/example.json';
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true
})
export class AppHome {

  componentWillLoad() {

    sessionStorage.setItem('path:', 'home');

    console.log('Component is about to be rendered', example);
  }

  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button class="btn btn-primary">
            Profile page
          </button>
        </stencil-route-link>

        <p>{ example.data }</p>
      </div>
    );
  }
}
