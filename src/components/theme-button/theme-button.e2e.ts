import { newE2EPage } from '@stencil/core/testing';

describe('theme-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<theme-button></theme-button>');

    const element = await page.find('theme-button');
    expect(element).toHaveClass('hydrated');
  });
});
