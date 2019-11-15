<template>
  <v-app>
    <Navigation v-if="!isMobile"/>
    <MobileAppBar v-if="isMobile" />
    <Appbar v-else />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <BottomNav v-if="isMobile" />
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation.vue";
import MobileAppBar from "@/components/Mobile/Appbar.vue"
import Appbar from "@/components/Appbar.vue";
import BottomNav from "@/components/Mobile/BottomNav.vue";

export default {
  data() {
    return {
      isMobile: true
    }
  },
  components: {
    Navigation, MobileAppBar, Appbar, BottomNav
  },
};
</script>