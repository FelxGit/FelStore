// var environment = 'felstore';
// var storage =  'https://storage.felstore.com/'+environment+'/';

const appConfig = {

    development_mode: true,

    /* urls (servers, domain and site) */
    // SERVER_URL: 'https://api-dev.' + environment + '.com',
    // SITE_URL: 'https://dev.' + environment + '.com',
    
    // SERVER_NAKED_DOMAIN: 'api-dev.' + environment + '.com',
    // SITE_NAKED_DOMAIN: 'dev.' + environment + '.com',

    /* files of storage */
    // logo: { url: storage + 'logo-top.png',    width: 156  },
}

if(appConfig.development_mode) {
    appConfig.SERVER_URL = 'http://127.0.0.1:3232',
    appConfig.SERVER_NAKED_DOMAIN = '127.0.0.1'
}

export default appConfig