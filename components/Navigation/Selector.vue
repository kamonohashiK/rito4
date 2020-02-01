<template>
  <v-layout xs12 row justify-center>
    <nuxt-link to="/access">
      <v-btn text :disabled="isAccessPage()">
        <v-icon>mdi-text</v-icon>
      </v-btn>
    </nuxt-link>

    <nuxt-link to="/">
      <v-btn text :disabled="isSearching()">
        <v-icon>mdi-clock</v-icon>
      </v-btn>
    </nuxt-link>

    <nuxt-link to="/picture">
      <v-btn text :disabled="isPicturePage()">
        <v-icon>mdi-panorama</v-icon>
      </v-btn>
    </nuxt-link>
  </v-layout>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["mode"])
  },
  methods: {
    isAccessPage() {
      return $nuxt.$route.path === "/access" ? false : true;
    },
    isSearching() {
      return this.mode !== "default" && $nuxt.$route.path === "/"
        ? false
        : true;
    },
    isPicturePage() {
      return $nuxt.$route.path === "/picture" ? false : true;
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}

a:visited {
  color: white;
}
</style>
