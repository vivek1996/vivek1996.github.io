<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      absolute
      temporary
      app
      dark
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon class="pink--text" v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class=" pink--text font-weight-bold" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
       <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>

    <v-footer app>
       <v-flex
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
      With <v-icon class="pink--text" v-html="icons.favorite"></v-icon>
        from Vivek M <v-icon class="pink--text" v-html="icons.face"></v-icon>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: false,
      items: [{
        icon: 'home',
        title: 'Home',
        link: '/'
      },
      {
        icon: 'book',
        title: 'Projects',
        link: '/projects'
      },
      {
        icon: 'account_circle',
        title: 'About',
        link: '/about'
      }
      ],
      miniVariant: false,
      //  right: true,
      // rightDrawer: false,
      title: 'Vivek',
      clipped: true,
      icons: {
        favorite: "favorite",
        face: "mood"
      }
    }
  }
}
</script>

<style lang="scss">
.application {
  font-family: 'Montserrat', sans-serif !important;
}
.v-list__tile--active .v-list__tile__action i {
  color: white;
}
.v-list__tile--active {
  background-color: rgb(223, 223, 223);
}
</style>
