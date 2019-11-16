<template>
  <v-footer height="auto" color="blue darken-1" fixed>
    <v-row justify="center" no-gutters>
      <v-btn icon class="mx-6">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn icon class="mx-6">
        <v-icon>mdi-panorama</v-icon>
      </v-btn>

      <v-btn icon class="mx-6">
        <v-icon>mdi-clock</v-icon>
      </v-btn>
    </v-row>
  </v-footer>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      activeBtn: 1,
      showNav: true,
      icons: ["mdi-island", "mdi-pencil", "mdi-panorama", "mdi-clock"]
    };
  },
  computed: {
    ...mapState(["mapState"])
  }
};
</script>
