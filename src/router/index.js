import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        // routes에는 name, path, component가 들어간다.
        // layout 메서드에서는 Layout디렉토리의 Index로 Component를 쪼개고
        // route 메서드에서는 layout/view.vue에서 사용할 component를 쪼갠다.
        layout('', [
            route('Home', null, '/home'),
            route('Test', null, '/test'),
        ])
    ]
})

function layout(layout, children, path = '') {
    return {
        children,
        component: () => import(
        /* webpackChunkName: "layout-[request]" */
        `@/layouts/Index`
        ),
        path,
    }
}

function route(name, component, path ='') {
    component = Object(component) === component
    ? component
    : { default: name.replace(' ', '') }

    const components = {}

    for (const [key, value] of Object.entries(component)) {
        components[key] = () => import(
            `@/views/${value}`
        )
    }

  return {
    name,
    components,
    path,
  }
}