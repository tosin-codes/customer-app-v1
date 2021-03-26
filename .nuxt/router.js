import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fc2824b2 = () => interopDefault(import('..\\pages\\account\\index.vue' /* webpackChunkName: "pages/account/index" */))
const _153618a4 = () => interopDefault(import('..\\pages\\active-loans\\index.vue' /* webpackChunkName: "pages/active-loans/index" */))
const _02ca019a = () => interopDefault(import('..\\pages\\create-loan\\index.vue' /* webpackChunkName: "pages/create-loan/index" */))
const _f1330740 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _ccfdf1c2 = () => interopDefault(import('..\\pages\\kyc\\index.vue' /* webpackChunkName: "pages/kyc/index" */))
const _55b216d0 = () => interopDefault(import('..\\pages\\offer\\index.vue' /* webpackChunkName: "pages/offer/index" */))
const _43b7a8ab = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _4502f869 = () => interopDefault(import('..\\pages\\sign-up\\index.vue' /* webpackChunkName: "pages/sign-up/index" */))
const _3cb09020 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _fc2824b2,
    name: "account"
  }, {
    path: "/active-loans",
    component: _153618a4,
    name: "active-loans"
  }, {
    path: "/create-loan",
    component: _02ca019a,
    name: "create-loan"
  }, {
    path: "/dashboard",
    component: _f1330740,
    name: "dashboard"
  }, {
    path: "/kyc",
    component: _ccfdf1c2,
    name: "kyc"
  }, {
    path: "/offer",
    component: _55b216d0,
    name: "offer"
  }, {
    path: "/profile",
    component: _43b7a8ab,
    name: "profile"
  }, {
    path: "/sign-up",
    component: _4502f869,
    name: "sign-up"
  }, {
    path: "/",
    component: _3cb09020,
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
