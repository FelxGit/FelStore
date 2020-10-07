import NotFound from './404.vue'

const pageCodesRoutes = [
    {
        /*
        will match anything starting with `/user-`
        path: '/user-*'
    
        will match everything
        path: '*'
        */ 
        path: 'sample123',
        name: 'not-found',
        component: NotFound,
    },
];

export { pageCodesRoutes }
