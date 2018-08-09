import Vue from 'vue'
import Router from 'vue-router'

// Default Containers
import DefaultContainer from '@/container/DefaultContainer'

// Added new views
import Home from '@/views/Home'
import Add from '@/views/Add'

Vue.use(Router)

const routes = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: DefaultContainer,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
          meta: {
            required: true,
            title: 'Home page'
          }
        },
        {
          path: 'add',
          name: 'Add',
          component: Add,
          meta: {
            required: true
          },
          beforeEnter: (to, from, next) => {
            if (to.params.id != null || to.params.id != undefined) {
              next();
            } else {
              next({ name: 'Home' })
            }
          }
        }
      ]
    }
  ],
  mode: 'history'
});

routes.beforeEach((to, from, next) => {

  // dynamic title
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  document.title = 'vue-crud ' + (nearestWithTitle != undefined ? document.title = nearestWithTitle.meta.title : '');
  
  if (to.matched.some(record => record.meta.required)) {
    if (true) { //check auth here
      next();
    } else {
      next();
    }
  } else {
    next();
  }
});

export default routes;




// export default new Router({
//   mode: 'history', 
//   linkActiveClass: 'open active',
//   scrollBehavior: () => ({ y: 0 }),
//   routes: [
//     {
//       path: '/',
//       redirect: '/home',
//       name: 'Home',
//       component: DefaultContainer,
//       children: [
//         {
//           path: 'home',
//           name: 'Home',
//           component: Home
//         },
//         {
//           path: 'add',
//           name: 'Add',
//           component: Add,
//           beforeEnter: (to, from, next) => {
//             if(to.params.id != null || to.params.id != undefined){
//               next();
//             }else{
//               next({name:'Home'})
//             }
//           }
//         }
//       ]
//     }
//   ]
// })
