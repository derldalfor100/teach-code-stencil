import { Component, Prop, h, getAssetPath } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { FetchJson } from '../../services/fetchJson';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.scss',
  shadow: true
})
export class AppProfile {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  componentWillLoad() {

    this.fetchExample();
  }

  fetchExample() {

    setTimeout(async () => {
      
      const fetchJSON = new FetchJson<{id: number, data: string}>();

      const exampleData = await fetchJSON.get('https://derldalfor100.github.io/teach-code-stencil/assets/json/example.json');
  
      console.log('example:', exampleData);

    }, 0);
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="app-profile">
          <p>
            Hello! My name is {this.normalize(this.match.params.name)}. My name was passed in
            through a route param!
          </p>
          <h1>Stencil App Starter</h1>
          <img src={getAssetPath('../assets/images/view.jpg')} alt=""/>
        </div>
      );
    }
  }
}
