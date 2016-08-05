/**
 * Created by lcx on 2016/7/27.
 */
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/

const components = [
    'button',
    'icon',
    'layout'
];

/** Map relative paths to URLs. */
const map: any = {
    '@angular2-ant-design/core': 'core',
};
components.forEach(name => map[`@angular2-ant-design/${name}`] = `components/${name}`);

/** User packages configuration. */
const packages: any = {
    '@angular2-ant-design/core': {
        format: 'cjs',
        defaultExtension: 'js'
    },
    // Set the default extension for the root package, because otherwise the demo-app can't
    // be built within the production mode. Due to missing file extensions.
    '.': {
        defaultExtension: 'js'
    }
};
components.forEach(name => {
    packages[`@angular2-ant-design/${name}`] = {
        format: 'cjs',
        defaultExtension: 'js'
    };
});


////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/forms',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',

    // Thirdparty barrels.
    'rxjs',
    'classnames',

    // App specific barrels.
    'demo-app',
    ...components
    /** @cli-barrel */
];

const _cliSystemConfig = {};
barrels.forEach((barrelName: string) => {
    (<any> _cliSystemConfig)[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js',
        'classnames': 'vendor/classnames'
    },
    packages: _cliSystemConfig
});

// Apply the user's configuration.
System.config({ map, packages });


