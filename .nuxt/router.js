import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2881b1b6 = () => interopDefault(import('..\\pages\\active-loans\\index.vue' /* webpackChunkName: "pages/active-loans/index" */))
const _8748dc66 = () => interopDefault(import('..\\pages\\kyc\\index.vue' /* webpackChunkName: "pages/kyc/index" */))
const _60d63966 = () => interopDefault(import('..\\pages\\sign-in\\index.vue' /* webpackChunkName: "pages/sign-in/index" */))
const _0d1c7c17 = () => interopDefault(import('..\\pages\\sign-up\\index.vue' /* webpackChunkName: "pages/sign-up/index" */))
const _c6ccde9c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/active-loans",
    component: _2881b1b6,
    name: "active-loans"
  }, {
    path: "/kyc",
    component: _8748dc66,
    name: "kyc"
  }, {
    path: "/sign-in",
    component: _60d63966,
    name: "sign-in"
  }, {
    path: "/sign-up",
    component: _0d1c7c17,
    name: "sign-up"
  }, {
    path: "/",
    component: _c6ccde9c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
