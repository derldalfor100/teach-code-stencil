import { Component, ComponentInterface, Host, h, Element, Prop } from '@stencil/core';
import Tunnel from '../../tunnels/theme/theme-context';

@Component({
  tag: 'theme-button',
  styleUrl: 'theme-button.scss',
  shadow: false
})
export class ThemeButton implements ComponentInterface {

  @Element() el: ThemeButton;

  @Prop() themeName: string;

  @Prop() toggleTheme: () => void;

  render() {

    return (
      <Host>
        <div class="container">
            <h1>Title</h1>
            <section>
                <h3>Subtitle</h3>
                <duet-button
                    variation="primary"
                    onClick={() => this.toggleTheme()}
                >
                    {this.themeName}
                </duet-button>
            </section>
        </div>
      </Host>
    );
  }

}

Tunnel.injectProps(ThemeButton, ['themeName', 'toggleTheme']);