import { Component, Prop, h, getAssetPath } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { FetchJson } from '../../services/fetchJson';
import { FetchXml } from '../../services/fetchXml';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.scss',
  shadow: true
})
export class AppProfile {

  @Prop() history: RouterHistory;

  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  componentWillLoad() {

    sessionStorage.setItem('path:', 'profile/:name');

    sessionStorage.setItem('sub-path', 'true');

    this.fetchExample();

    this.fetchXmlExample();

    console.warn('window history profile', window.history);

    console.log('history profile:', this.history);
  }

  fetchExample() {

    setTimeout(async () => {

      const fetchJSON = new FetchJson<{ id: number, data: string }>();

      const exampleData = await fetchJSON.get(getAssetPath('../assets/json/example.json'));

      console.log('example:', exampleData);

    }, 0);
  }

  fetchXmlExample() {

    setTimeout(async () => {

      const fetchXML = new FetchXml<{ id: number, data: string }>();

      const exampleXMLData = await fetchXML.getXml(getAssetPath('../assets/xml/example.xml'));

      console.log('xml example:', exampleXMLData);

      const exampleData = await fetchXML.get(getAssetPath('../assets/xml/example.xml'));

      console.log('xml object example:', exampleData); // don't know to recognize fields as number type
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
          <img src={getAssetPath('../assets/images/view.jpg')} alt="" />
          <div class="d-flex justify-content-center p-4">
            <duet-button onClick={() => this.history.goBack()} variation="primary">Go Back</duet-button>
          </div>
        </div>
      );
    }
  }
}
