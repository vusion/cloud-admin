export default {
    path: 'message',
    component: require('@/global/layouts/l-wrapper.vue').default,
    meta: {
        title: '系统通知',
        crumb: {
            label: '系统通知',
        },
    },
    children: [
        {
            path: '',
            name: 'message.list',
            component: () => import(/* webpackChunkName: 'demo' */ './views/message.vue'),
        },
        {
            path: 'detail',
            name: 'message.detail',
            component: () => import(/* webpackChunkName: 'demo' */ './views/message.detail.vue'),
            meta: {
                crumb: {
                    label: '通知详情',
                },
            },
        },
    ],
};
