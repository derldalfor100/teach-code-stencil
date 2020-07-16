export interface EnvironmentConfig {
    ROOT_URL: string;
}

export function setupConfig(config: EnvironmentConfig) {

    if (!window) {
        return;
    }

    const win = window as any;

    const enviroment = win.enviroment;

    if (enviroment && enviroment.config && enviroment.config.constructor.name !== 'Object') {
        
        console.error('Deckenviroment config was already initialized');
        
        return;
    }

    win.enviroment = win.enviroment || {};

    win.enviroment.config = {
        ...win.enviroment.config,
        ...config
    };

    return win.enviroment.config;
}