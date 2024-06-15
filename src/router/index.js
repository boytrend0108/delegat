import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/StartApplication.vue';
import HomePageNew from '@/views/HomePageNew.vue';
import store from '@/store';

const routes = [
  // #region base
  {
    path: '/start-application',
    name: 'start-application',
    meta: {
      layout: 'customer-layout',
      auth: true,
    },
    component: HomePage,
  },
  {
    path: '/',
    name: 'home-new',
    meta: { layout: 'home-layout' },
    component: HomePageNew,
  },
  {
    path: '/customer/new-application',
    name: 'customer-new-application',
    meta: { layout: 'main-layout' },
    component: () => import('@/views/Customer/CustomerNewApplication.vue'),
  },
  {
    path: '/documentation',
    name: 'documentation-page',
    meta: { layout: 'documentation-layout' },
    component: () => import('@/views/DocumentationPage.vue'),
  },
  {
    path: '/search_product/',
    name: 'search-product',
    meta: { layout: 'main-layout' },
    component: () => import('@/views/SearchProduct.vue'),
  },

  {
    path: '/cost-calculation',
    name: 'cost-calculation',
    meta: { layout: 'main-layout' },
    component: () => import('@/views/CostCalculation.vue'),
  },

  {
    path: '/reset-password',
    name: 'reset-password',
    meta: { layout: 'start-layout' },
    component: () => import('@/views/ResetPassword.vue'),
  },

  {
    path: '/customer-agreement',
    name: 'customer-agreement',
    meta: { layout: 'home-layout' },
    component: () => import('@/views/CustomerAgreement.vue'),
  },

  {
    path: '/oferta-page',
    name: 'oferta-page',
    meta: { layout: 'home-layout' },
    component: () => import('@/views/OfertaPage.vue'),
  },

  {
    path: '/unsubscribe',
    name: 'unsubscribe-page',
    meta: { layout: 'start-layout' },
    component: () => import('@/views/UnsubscribePage.vue'),
  },

  // #endregion

  // #region CUSTOMER
  {
    path: '/customer/signin',
    name: 'customer-signin',
    meta: { layout: 'start-layout' },
    component: () => import('@/views/Customer/CustomerSignin.vue'),
    beforeEnter: () => {
      store.commit('SET_RESET_FORM_STATUS');
      store.commit('SET_SEND_SECOND_EMAIL', false);
    },
  },

  {
    path: '/customer/signup',
    name: 'register',
    meta: { layout: 'start-layout' },
    component: () => import('@/views/Customer/CustomerSignup.vue'),
  },

  {
    path: '/customer',
    name: 'customer-page',
    meta: {
      layout: 'customer-layout',
      auth: true,
    },
    component: () => import('@/views/Customer/P-Customer/P-Customer.vue'),
  },

  {
    path: '/customer/my_applications',
    name: 'customer-applications',
    meta: {
      layout: 'customer-layout',
      auth: true,
    },
    component: () => import('@/views/Customer/CustomerApplicationsPage.vue'),
  },

  {
    path: '/customer/profile',
    name: 'customer-profile',
    meta: {
      layout: 'customer-layout',
      auth: true,
    },
    component: () => import('@/views/Customer/CustomerProfile.vue'),
  },

  {
    path: '/customer/order/:id',
    name: 'customer-order',
    meta: {
      layout: 'customer-layout',
      auth: true,
    },
    component: () => import('@/views/Customer/CustomerOrder.vue'),
  },
  {
    path: '/customer/support/:id',
    name: 'customer-support',
    meta: {
      layout: 'customer-layout',
      auth: true,
    },
    component: () => import('@/views/Customer/CustomerSupport.vue'),
  },
  {
    path: '/customer/bills/:id',
    name: 'customer-bills',
    meta: {
      layout: 'customer-layout',
      auth: true,
    },
    component: () => import('@/views/Customer/CustomerBills.vue'),
  },
  {
    path: '/customer/contracts/:id',
    name: 'customer-contracts',
    meta: { layout: 'customer-layout', auth: true },
    component: () => import('@/views/Customer/CustomerContracts.vue'),
  },
  {
    path: '/customer/chat/:id',
    name: 'customer-chat',
    meta: {
      layout: 'customer-layout',
      auth: true,
    },
    component: () => import('@/views/Customer/CustomerChat.vue'),
    props: true,
  },

  {
    path: '/customer/chats/:id',
    name: 'customer-chats',
    meta: {
      layout: 'customer-layout',
      auth: true,
    },
    component: () => import('@/views/Customer/CustomerChats.vue'),
    props: true,
  },

  {
    path: '/customer/services/',
    name: 'customer-services',
    meta: {
      layout: 'customer-layout',
      auth: true,
    },
    component: () => import('@/views/Customer/CustomerServices.vue'),
  },

  // #endregion

  // #region PROVIDER
  {
    path: '/provider/signin',
    name: 'provider-signin',
    meta: { layout: 'start-layout' },
    component: () => import('@/views/Provider/ProviderSignin.vue'),
    beforeEnter: () => {
      store.commit('SET_RESET_FORM_STATUS');
      store.commit('SET_SEND_SECOND_EMAIL', false);
    },
  },

  {
    path: '/provider/signup',
    name: 'provider-signup',
    meta: { layout: 'start-layout' },
    component: () => import('@/views/Provider/ProviderSignup.vue'),
  },

  {
    path: '/provider/thanks',
    name: 'provider-thanks',
    meta: { layout: 'start-layout' },
    component: () => import('@/views/Provider/ProviderThanks.vue'),
  },
  {
    path: '/provider/sorry',
    name: 'provider-sorry',
    meta: { layout: 'start-layout' },
    component: () => import('@/views/Provider/ProviderSorry.vue'),
  },

  {
    path: '/greeting_spec',
    name: 'provider-greeting',
    meta: { layout: 'provider-layout', auth: true },
    component: () => import('@/views/Provider/ProviderGreeting.vue'),
  },

  {
    path: '/provider/search/',
    name: 'provider-search',
    meta: { layout: 'provider-layout', auth: true },
    component: () => import('@/views/Provider/ProviderSearch.vue'),
  },

  {
    path: '/provider/chats/',
    name: 'provider-chats',
    meta: { layout: 'provider-layout', auth: true },
    component: () => import('@/views/Provider/ProviderChats.vue'),
  },
  {
    path: '/provider/chat/:id',
    name: 'provider-chat',
    meta: { layout: 'provider-layout', auth: true },
    component: () => import('@/views/Provider/ProviderChat.vue'),
  },

  {
    path: '/provider/profile',
    name: 'provider-profile',
    meta: { layout: 'provider-layout', auth: true },
    component: () => import('@/views/Provider/ProviderProfile.vue'),
  },

  {
    path: '/provider/support',
    name: 'provider-support',
    meta: { layout: 'provider-layout', auth: true },
    component: () => import('@/views/Provider/SupportProvider.vue'),
  },

  {
    path: '/provider/application/:id',
    name: 'provider-application',
    meta: { layout: 'provider-layout', auth: true },
    component: () => import('@/views/Provider/ProviderApplication.vue'),
    props: true,
  },

  {
    path: '/provider/contracts/:id',
    name: 'provider-contracts',
    meta: { layout: 'provider-layout', auth: true },
    component: () => import('@/views/Provider/ProviderContracts.vue'),
  },

  {
    path: '/provider/bills/:id',
    name: 'privider-bills',
    meta: { layout: 'provider-layout', auth: true },
    component: () => import('@/views/Provider/ProviderBills.vue'),
  },

  {
    path: '/provider/feedbacks/',
    name: 'privider-feedbacks',
    meta: { layout: 'provider-layout', auth: true },
    component: () => import('@/views/Provider/ProviderFeedbacks.vue'),
  },

  // #endregion
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('accessToken');
  const requireAuth = Object.hasOwn(to.meta, 'auth'); // провераяем есть ли ключ auth в route
  if (!token && requireAuth) {
    next('/customer/signin');
  } else next();
});

export default router;
