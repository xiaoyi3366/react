import Home from '../components/Home';
import User from '../components/User';
    import Main from '../components/User/Main';
    import Info from '../components/User/Info';
import Shop from '../components/Shop';
let routes = [
    {
      path: '/',
      component: Home,
      exact: true
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/user',
      component: User,
      routes:[ //嵌套路由地址
          {
            path: '/user/',
            component: Info,
            exact: true  
          },
          {
            path: '/user/main',
            component: Main,
            exact: true  
          }
      ]
    }
  ]
  export default routes;