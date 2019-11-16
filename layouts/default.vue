<template>
  <v-app>
    <Navigation v-if="!$device.isMobile"/>
    <MobileAppBar v-if="$device.isMobile" />
    <Appbar v-else />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer v-if="$device.isMobile" />
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation.vue";
import MobileAppBar from "@/components/Mobile/Appbar.vue"
import Appbar from "@/components/Desktop/Appbar.vue";
import Footer from "@/components/Mobile/Footer.vue"

export default {
  components: {
    Navigation, MobileAppBar, Appbar, Footer
  },
};
</script>