(function () {
    'use strict';

    const frontendPath = new URL('.', document.currentScript.src).pathname;
    const backendPath = frontendPath === '/lavalustui/' ? '../api/' : '../lavalust/api/';
    const backendApi = new URL(backendPath, document.currentScript.src).href.replace(/\/$/, '');
    window.LAVALUST_API_BASE_URL = 'http://127.0.0.1:3000/api';
}());
