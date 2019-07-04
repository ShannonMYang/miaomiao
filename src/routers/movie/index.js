export default {
    path : '/movie',
    component : () => import('@/views/Movie'),
    // 二级路由
    children : [
        {
            path : 'city',
            // 按需引入，懒加载；
            component : () => import('@/components/City')
        },
        {
            path : 'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path : 'comingSoon',
            component : () => import('@/components/ComingSoon')
        },
        {
            path : 'search',
            component : () => import('@/components/Search')
        },
        {
            path : '/movie',
            // 路由重定向
            redirect : '/movie/nowPlaying'
        }
    ]
}