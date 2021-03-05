import { newSpecPage } from '@stencil/core/testing';
import { ThemeButton } from './theme-button';

describe('theme-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ThemeButton],
      html: `<theme-button></theme-button>`,
    });
    expect(page.root).toEqualHtml(`
      <theme-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </theme-button>
    `);
  });
});
