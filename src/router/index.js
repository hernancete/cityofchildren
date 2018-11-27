import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Donors from '@/components/Donors'
import Contacts from '@/components/Contacts'
import Programs from '@/components/Programs'
import Contributions from '@/components/Contributions'
import Collections from '@/components/Collections'
import Lists from '@/components/Lists'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/donors',
      name: 'Donors',
      component: Donors
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/programs',
      name: 'Programs',
      component: Programs
    },
    {
      path: '/contributions',
      name: 'Contributions',
      component: Contributions
    },
    {
      path: '/collections',
      name: 'Collections',
      component: Collections
    },
    {
      path: '/lists',
      name: 'Lists',
      component: Lists
    }
  ]
})
