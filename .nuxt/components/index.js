export { default as ActiveLoanSchedule } from '../..\\components\\ActiveLoanSchedule.vue'
export { default as AppHeader } from '../..\\components\\AppHeader.vue'
export { default as DashboardCards } from '../..\\components\\DashboardCards.vue'
export { default as DashboardFixed } from '../..\\components\\DashboardFixed.vue'
export { default as DashboardNav } from '../..\\components\\DashboardNav.vue'
export { default as MobileNav } from '../..\\components\\MobileNav.vue'

export const LazyActiveLoanSchedule = import('../..\\components\\ActiveLoanSchedule.vue' /* webpackChunkName: "components/active-loan-schedule" */).then(c => c.default || c)
export const LazyAppHeader = import('../..\\components\\AppHeader.vue' /* webpackChunkName: "components/app-header" */).then(c => c.default || c)
export const LazyDashboardCards = import('../..\\components\\DashboardCards.vue' /* webpackChunkName: "components/dashboard-cards" */).then(c => c.default || c)
export const LazyDashboardFixed = import('../..\\components\\DashboardFixed.vue' /* webpackChunkName: "components/dashboard-fixed" */).then(c => c.default || c)
export const LazyDashboardNav = import('../..\\components\\DashboardNav.vue' /* webpackChunkName: "components/dashboard-nav" */).then(c => c.default || c)
export const LazyMobileNav = import('../..\\components\\MobileNav.vue' /* webpackChunkName: "components/mobile-nav" */).then(c => c.default || c)
