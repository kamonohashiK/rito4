<template>
  <v-app>
    <Navigation />
    <Appbar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation.vue";
import Appbar from "@/components/Appbar.vue";

export default {
  components: {
    Navigation, Appbar
  },
};
</script>