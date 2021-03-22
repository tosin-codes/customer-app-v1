import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0b371798 = () => interopDefault(import('..\\pages\\active-loans\\index.vue' /* webpackChunkName: "pages/active-loans/index" */))
const _24775c82 = () => interopDefault(import('..\\pages\\create-loan\\index.vue' /* webpackChunkName: "pages/create-loan/index" */))
const _319b01ec = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _10bba5ab = () => interopDefault(import('..\\pages\\kyc\\index.vue' /* webpackChunkName: "pages/kyc/index" */))
const _497370f5 = () => interopDefault(import('..\\pages\\sign-up\\index.vue' /* webpackChunkName: "pages/sign-up/index" */))
const _38980a14 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0b371798,
    name: "active-loans"
  }, {
    path: "/create-loan",
    component: _24775c82,
    name: "create-loan"
  }, {
    path: "/dashboard",
    component: _319b01ec,
    name: "dashboard"
  }, {
    path: "/kyc",
    component: _10bba5ab,
    name: "kyc"
  }, {
    path: "/sign-up",
    component: _497370f5,
    name: "sign-up"
  }, {
    path: "/",
    component: _38980a14,
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
