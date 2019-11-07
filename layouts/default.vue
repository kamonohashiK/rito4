<template>
  <v-app>
    <Navigation />
    <v-app-bar fixed app dark color="blue darken-1">
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <!-- ログイン時:ユーザーのアバターとマイページへのリンク -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" class="mx-2" fab dark small color="purple">
            <v-icon dark>mdi-android</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in loginDropdown" :key="index">
            <nuxt-link :to="item.to">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </nuxt-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Navigation
  },
  data() {
    return {
      title: 'しまの時刻表',
      loginDropdown: [
        {
          title: "マイページ",
          to: "/users/1"
        },
        {
          title: "ログアウト",
          to: "/logout"
        }
      ]
    };
  },
};
</script>