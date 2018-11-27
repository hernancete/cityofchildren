<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" class="hidden-md-and-up" app>
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dense class="primary">
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>City Of Children</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      menuItems: [
        {
          title: 'Donantes',
          icon: 'credit_card',
          link: '/donors'
        },
        {
          title: 'Contactos',
          icon: 'contacts',
          link: '/contacts'
        },
        {
          title: 'Programas',
          icon: 'table_chart',
          link: '/programs'
        },
        {
          title: 'Aportes',
          icon: 'event_note',
          link: '/contributions'
        },
        {
          title: 'Cobros',
          icon: 'attach_money',
          link: '/collections'
        },
        {
          title: 'Listados',
          icon: 'list',
          link: '/lists'
        }
      ]
    }
  },
  name: 'App'
}
</script>
