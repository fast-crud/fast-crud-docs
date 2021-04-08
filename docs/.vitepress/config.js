module.exports = {
    title: 'FastCrud',
    description: '面向配置的CRUD编程.',
    head: [
        [
            'meta',
            {
                name: 'viewport',
                content:
                    'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
            },
        ],
        ['meta', {name: 'keywords', content: 'vite vui'}],
        ['link', {rel: 'icon', href: '/favicon.ico'}],
    ],
    themeConfig: {
        // search: true,
        sidebar: {
            '/guide': [
                {
                    text: '指南',
                    children: [
                        {text: '介绍', link: '/guide/'},
                        {text: '启动示例', link: '/guide/start/demo'},
                        {text: '第一个CRUD', link: '/guide/start/first'},
                        {text: '集成到你的项目', link: '/guide/start/integration'}
                    ],
                },
                {
                    text: '进阶',
                    children: [
                        {text: '基于配置', link: '/guide/advance/options'},
                        {text: '组件配置', link: '/guide/advance/component'},
                        {text: '数据字典', link: '/guide/advance/dict'},
                        {text: '动态计算', link: '/guide/advance/compute'},
                        {text: '字段类型', link: '/guide/advance/types'},
                        {text: '插槽', link: '/guide/advance/slots'},
                        {text: '多级数据', link: '/guide/advance/nest-data'},
                    ],
                },
                {
                    text: '其他',
                    children: [
                        {text: '升级', link: '/guide/upgrade'},
                        {text: '常见问题', link: '/guide/questions'},
                        {text: '联系作者', link: '/guide/contact'},
                        {text: '捐赠', link: '/guide/donate'},
                    ],
                },
            ],
            '/api': [
                {
                    text: 'options',
                    children: [
                        {text: 'root', link: '/api/options/root'},
                        {text: 'columns', link: '/api/quickstart'},
                        {text: 'form', link: '/api/quickstart'},
                        {text: 'columns', link: '/api/quickstart'},
                        {text: 'columns', link: '/api/quickstart'},
                        {text: 'columns', link: '/api/quickstart'},
                        {text: 'formWrapper', link: '/api/quickstart'},
                    ],
                },
                {
                    text: '组件',
                    children: [
                        {text: 'crud组件', link: '/api/component/crud'},
                        {text: '基础组件', link: '/api/component/basic'},
                        {text: '扩展组件', link: '/api/component/extends'},
                    ],
                }
            ]
        },
        author: 'Greper',
        nav: [
            {text: '首页', link: '/'},
            {text: 'github', link: 'https://github.com/fast-crud/fast-crud'},
            {text: 'gitee', link: 'https://gitee.com/fast-crud/fast-crud'},
        ],
    },
}
7
