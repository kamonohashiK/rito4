<template>
  <v-app>
    <Navigation v-if="!$device.isMobile"/>
    <MobileNav v-if="$device.isMobile"/>
    <MobileAppBar v-if="$device.isMobile" />
    <Appbar v-else />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation.vue";
import MobileAppBar from "@/components/Mobile/Appbar.vue"
import Appbar from "@/components/Appbar.vue";
import MobileNav from "@/components/Mobile/Navigation.vue";

export default {
  components: {
    Navigation, MobileAppBar, Appbar, MobileNav
  },
};
</script>