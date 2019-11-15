<template>
  <v-bottom-navigation color="blue darken-1">
    <v-btn>
      <span>{{mapState.focusedIsland}}</span>
      <v-icon>mdi-island</v-icon>
    </v-btn>

    <v-btn disabled>
      <span>投稿</span>
      <v-icon>mdi-pencil</v-icon>
    </v-btn>

    <v-btn disabled>
      <span>写真</span>
      <v-icon>mdi-panorama</v-icon>
    </v-btn>

    <v-btn>
      <span>時刻表</span>
      <v-icon>mdi-clock</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      activeBtn: 1,
      showNav: true
    };
  },
  computed: {
    ...mapState(["mapState"])
  },
};
</script>
