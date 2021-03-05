/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory, } from "@stencil/router";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "history": RouterHistory;
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface ThemeButton {
        "themeName": string;
        "toggleTheme": () => void;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLThemeButtonElement extends Components.ThemeButton, HTMLStencilElement {
    }
    var HTMLThemeButtonElement: {
        prototype: HTMLThemeButtonElement;
        new (): HTMLThemeButtonElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "theme-button": HTMLThemeButtonElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "history"?: RouterHistory;
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface ThemeButton {
        "themeName"?: string;
        "toggleTheme"?: () => void;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "theme-button": ThemeButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "theme-button": LocalJSX.ThemeButton & JSXBase.HTMLAttributes<HTMLThemeButtonElement>;
        }
    }
}
