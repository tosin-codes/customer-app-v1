import Vue from 'vue'

const components = {
  ActiveLoanSchedule: () => import('../..\\components\\ActiveLoanSchedule.vue' /* webpackChunkName: "components/active-loan-schedule" */).then(c => c.default || c),
  AppHeader: () => import('../..\\components\\AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => c.default || c),
  DashboardCards: () => import('../..\\components\\DashboardCards.vue' /* webpackChunkName: "components/dashboard-cards" */).then(c => c.default || c),
  DashboardFixed: () => import('../..\\components\\DashboardFixed.vue' /* webpackChunkName: "components/dashboard-fixed" */).then(c => c.default || c),
  DashboardNav: () => import('../..\\components\\DashboardNav.vue' /* webpackChunkName: "components/dashboard-nav" */).then(c => c.default || c),
  MobileNav: () => import('../..\\components\\MobileNav.vue' /* webpackChunkName: "components/mobile-nav" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
