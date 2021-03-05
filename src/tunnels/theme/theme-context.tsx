import { h } from "@stencil/core";
import { createProviderConsumer } from "@stencil/state-tunnel";
import themes from "./themes";

export interface IThemeContextOptions {
    themeName: string,
    toggleTheme: () => void,
    el: HTMLElement
}

export const defaultThemeContext = {
    themeName: "light",
    toggleTheme: function() {

            if(this.themeName === 'light') {

                this.themeName = 'dark';

            } else {

                this.themeName = 'light';
            }

            setCSSVariables(themes[this.themeName], this.el);

            setClass(this.themeName, this.el);
        },
    el: null
};

const setCSSVariables = (themeObject: { [k: string]: string }, el: HTMLElement) => {

    for (const key in themeObject) {

        el.style.setProperty(key, themeObject[key]);
    }
};

const setClass = (themeName: string, el: HTMLElement) => {

    // remove old theme
    for (const themesKey in themes) {

        el.classList.remove(`${themesKey}-theme`);
    }

    // alias element with theme name
    el.classList.add(`${themeName}-theme`);
};

export default createProviderConsumer<IThemeContextOptions>(
    defaultThemeContext, 
    (subscribe, child) => {
        <context-consumer ref={el => defaultThemeContext.el = el as HTMLElement} subscribe={subscribe} renderer={child}  />
    }
);