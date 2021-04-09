import Vue from 'vue'

const components = {
  ActiveLoan: () => import('../..\\components\\ActiveLoan.vue' /* webpackChunkName: "components/active-loan" */).then(c => c.default || c),
  ActiveLoanSchedule: () => import('../..\\components\\ActiveLoanSchedule.vue' /* webpackChunkName: "components/active-loan-schedule" */).then(c => c.default || c),
  CreateLoan2: () => import('../..\\components\\CreateLoan2.vue' /* webpackChunkName: "components/create-loan-2" */).then(c => c.default || c),
  DashboardCards: () => import('../..\\components\\DashboardCards.vue' /* webpackChunkName: "components/dashboard-cards" */).then(c => c.default || c),
  DashboardNav: () => import('../..\\components\\DashboardNav.vue' /* webpackChunkName: "components/dashboard-nav" */).then(c => c.default || c),
  GeneralNavbarComponent: () => import('../..\\components\\GeneralNavbarComponent.vue' /* webpackChunkName: "components/general-navbar-component" */).then(c => c.default || c),
  ModalChild: () => import('../..\\components\\ModalChild.vue' /* webpackChunkName: "components/modal-child" */).then(c => c.default || c),
  Spinner: () => import('../..\\components\\Spinner.vue' /* webpackChunkName: "components/spinner" */).then(c => c.default || c),
  FormComponentsCheckboxComponent: () => import('../..\\components\\FormComponents\\CheckboxComponent.vue' /* webpackChunkName: "components/form-components-checkbox-component" */).then(c => c.default || c),
  FormComponentsRadioComponent: () => import('../..\\components\\FormComponents\\RadioComponent.vue' /* webpackChunkName: "components/form-components-radio-component" */).then(c => c.default || c),
  Kyc1: () => import('../..\\components\\kyc\\Kyc1.vue' /* webpackChunkName: "components/kyc-1" */).then(c => c.default || c),
  Kyc2: () => import('../..\\components\\kyc\\Kyc2.vue' /* webpackChunkName: "components/kyc-2" */).then(c => c.default || c),
  Kyc3: () => import('../..\\components\\kyc\\Kyc3.vue' /* webpackChunkName: "components/kyc-3" */).then(c => c.default || c),
  Kyc4: () => import('../..\\components\\kyc\\Kyc4.vue' /* webpackChunkName: "components/kyc-4" */).then(c => c.default || c),
  KycNumbers: () => import('../..\\components\\kyc\\KycNumbers.vue' /* webpackChunkName: "components/kyc-numbers" */).then(c => c.default || c),
  KycUpload: () => import('../..\\components\\kyc\\Upload.vue' /* webpackChunkName: "components/kyc-upload" */).then(c => c.default || c),
  MasterHeaderNav: () => import('../..\\components\\master\\HeaderNav.vue' /* webpackChunkName: "components/master-header-nav" */).then(c => c.default || c),
  MasterMobileNav: () => import('../..\\components\\master\\MobileNav.vue' /* webpackChunkName: "components/master-mobile-nav" */).then(c => c.default || c),
  MasterSidebarNav: () => import('../..\\components\\master\\SidebarNav.vue' /* webpackChunkName: "components/master-sidebar-nav" */).then(c => c.default || c),
  MessagesAwaitingVerificationMessage: () => import('../..\\components\\messages\\AwaitingVerificationMessage.vue' /* webpackChunkName: "components/messages-awaiting-verification-message" */).then(c => c.default || c),
  FormComponentsBigTextsTextRounded: () => import('../..\\components\\FormComponents\\BigTexts\\TextRounded.vue' /* webpackChunkName: "components/form-components-big-texts-text-rounded" */).then(c => c.default || c),
  FormComponentsBigTextsTextSquare: () => import('../..\\components\\FormComponents\\BigTexts\\TextSquare.vue' /* webpackChunkName: "components/form-components-big-texts-text-square" */).then(c => c.default || c),
  FormComponentsDropdownsSelectRounded: () => import('../..\\components\\FormComponents\\Dropdowns\\SelectRounded.vue' /* webpackChunkName: "components/form-components-dropdowns-select-rounded" */).then(c => c.default || c),
  FormComponentsDropdownsSelectSquare: () => import('../..\\components\\FormComponents\\Dropdowns\\SelectSquare.vue' /* webpackChunkName: "components/form-components-dropdowns-select-square" */).then(c => c.default || c),
  FormComponentsTextsTextInputClassic: () => import('../..\\components\\FormComponents\\Texts\\TextInputClassic.vue' /* webpackChunkName: "components/form-components-texts-text-input-classic" */).then(c => c.default || c),
  FormComponentsTextsTextInputRounded: () => import('../..\\components\\FormComponents\\Texts\\TextInputRounded.vue' /* webpackChunkName: "components/form-components-texts-text-input-rounded" */).then(c => c.default || c),
  FormComponentsTextsTextInputSquare: () => import('../..\\components\\FormComponents\\Texts\\TextInputSquare.vue' /* webpackChunkName: "components/form-components-texts-text-input-square" */).then(c => c.default || c),
  FormComponentsButtonsDefaultButtonRounded: () => import('../..\\components\\FormComponents\\Buttons\\Default\\ButtonRounded.vue' /* webpackChunkName: "components/form-components-buttons-default-button-rounded" */).then(c => c.default || c),
  FormComponentsButtonsDefaultButtonSquare: () => import('../..\\components\\FormComponents\\Buttons\\Default\\ButtonSquare.vue' /* webpackChunkName: "components/form-components-buttons-default-button-square" */).then(c => c.default || c),
  FormComponentsButtonsPrimaryButtonRounded: () => import('../..\\components\\FormComponents\\Buttons\\Primary\\ButtonRounded.vue' /* webpackChunkName: "components/form-components-buttons-primary-button-rounded" */).then(c => c.default || c),
  FormComponentsButtonsPrimaryButtonSquare: () => import('../..\\components\\FormComponents\\Buttons\\Primary\\ButtonSquare.vue' /* webpackChunkName: "components/form-components-buttons-primary-button-square" */).then(c => c.default || c),
  FormComponentsButtonsSecondaryButtonRounded: () => import('../..\\components\\FormComponents\\Buttons\\Secondary\\ButtonRounded.vue' /* webpackChunkName: "components/form-components-buttons-secondary-button-rounded" */).then(c => c.default || c),
  FormComponentsButtonsSecondaryButtonSquare: () => import('../..\\components\\FormComponents\\Buttons\\Secondary\\ButtonSquare.vue' /* webpackChunkName: "components/form-components-buttons-secondary-button-square" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
