import { LWrapper } from 'cloud-ui.vusion';
export default {
    path: 'editors',
    component: LWrapper,
    meta: {
        title: '编辑器',
        crumb: '编辑器',
    },
    children: [
        { path: '', redirect: 'code' },
        {
            path: 'code',
            component: () => import(/* webpackChunkName: 'demo' */ './views/code.vue'),
            meta: {
                title: '代码编辑器',
                crumb: '代码编辑器',
            },
            children: [
                {
                    path: '',
                    redirect: 'monaco',
                },
                {
                    path: 'brace',
                    component: () => import(/* webpackChunkName: 'demo' */ './views/code-brace.vue'),
                    meta: {
                        title: '代码编辑器(Brace)',
                        crumb: '代码编辑器(Brace)',
                    },
                },
                {
                    path: 'monaco',
                    component: () => import(/* webpackChunkName: 'demo' */ './views/code-monaco.vue'),
                    meta: {
                        title: '代码编辑器(Monaco)',
                        crumb: '代码编辑器(Monaco)',
                    },
                },
            ],
        },
        {
            path: 'markdown',
            component: () => import(/* webpackChunkName: 'demo' */ './views/markdown.vue'),
            meta: {
                title: 'Markdown 编辑器',
                crumb: 'Markdown 编辑器',
            },
        },
        {
            path: 'rich-editor',
            component: () => import(/* webpackChunkName: 'demo' */ './views/rich-editor.vue'),
            meta: {
                title: '富文本编辑器',
                crumb: '富文本编辑器',
            },
        },
    ],
};
